<?php
// Website form handler: emails each enquiry to the ITA inbox through SMTP.
// SMTP details live in mail-config.php next to this file on the server (never in the repo);
// see mail-config.example.php in the project root. GET ?ping=1 checks PHP and the config are in place.

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply(int $code, array $data): void {
  http_response_code($code);
  echo json_encode($data);
  exit;
}

$configFile = __DIR__ . '/mail-config.php';
$cfg = is_file($configFile) ? require $configFile : null;

if (($_GET['ping'] ?? '') === '1') {
  reply(200, ['ok' => true, 'php' => PHP_VERSION, 'config' => is_array($cfg), 'tls' => extension_loaded('openssl')]);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, ['ok' => false, 'error' => 'POST only']);
if (!is_array($cfg)) reply(500, ['ok' => false, 'error' => 'Mail is not configured']);

// Bots fill the hidden "website" field; people never see it.
if (trim($_POST['website'] ?? '') !== '') reply(200, ['ok' => true]);

// At most 5 messages per visitor every 10 minutes.
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$stamp = sys_get_temp_dir() . '/ita-form-' . md5($ip);
$recent = array_filter(is_file($stamp) ? (json_decode((string) file_get_contents($stamp), true) ?: []) : [], fn($t) => $t > time() - 600);
if (count($recent) >= 5) reply(429, ['ok' => false, 'error' => 'Too many messages. Please try again in a few minutes.']);
$recent[] = time();
@file_put_contents($stamp, json_encode(array_values($recent)));

// Only known form subjects are accepted, so the endpoint can't be used to send arbitrary mail.
$subjects = ['Website enquiry', 'Partnership enquiry', 'Verify a result', 'Venue staff application'];
$subject = trim((string) ($_POST['subject'] ?? ''));
if (!in_array($subject, $subjects, true)) reply(400, ['ok' => false, 'error' => 'Unknown form']);

$fields = json_decode((string) ($_POST['fields'] ?? '[]'), true);
if (!is_array($fields) || !$fields || count($fields) > 20) reply(400, ['ok' => false, 'error' => 'Missing details']);
$lines = [];
foreach ($fields as $f) {
  if (!is_array($f) || count($f) !== 2) reply(400, ['ok' => false, 'error' => 'Bad details']);
  $label = mb_substr(trim((string) $f[0]), 0, 80);
  $value = mb_substr(trim((string) $f[1]), 0, 5000);
  $lines[] = $label . ': ' . $value;
}

$replyTo = trim((string) ($_POST['email'] ?? ''));
if ($replyTo !== '' && !filter_var($replyTo, FILTER_VALIDATE_EMAIL)) reply(400, ['ok' => false, 'error' => 'Please enter a valid email address']);

// Optional CV: PDF or Word, up to 5 MB.
$attachment = null;
if (!empty($_FILES['cv']) && ($_FILES['cv']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
  $file = $_FILES['cv'];
  if ($file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) reply(400, ['ok' => false, 'error' => 'The CV could not be uploaded']);
  if ($file['size'] > 5 * 1024 * 1024) reply(400, ['ok' => false, 'error' => 'The CV must be 5 MB or smaller']);
  $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
  $types = ['pdf' => 'application/pdf', 'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!isset($types[$ext])) reply(400, ['ok' => false, 'error' => 'The CV must be a PDF or Word file']);
  $name = preg_replace('/[^A-Za-z0-9._-]+/', '-', basename($file['name'])) ?: "cv.$ext";
  $attachment = ['name' => $name, 'type' => $types[$ext], 'data' => (string) file_get_contents($file['tmp_name'])];
}

$body = "New $subject from the website\r\n\r\n" . implode("\r\n", $lines)
  . "\r\n\r\nSent " . gmdate('j M Y, H:i') . " UTC from " . ($_SERVER['HTTP_REFERER'] ?? 'the website');

try {
  smtp_send($cfg, $subject, $body, $replyTo, $attachment);
} catch (Throwable $e) {
  error_log('ITA form: ' . $e->getMessage());
  reply(502, ['ok' => false, 'error' => 'The message could not be sent']);
}
reply(200, ['ok' => true]);

// ---- minimal SMTP client (STARTTLS on 587 or SSL on 465, AUTH LOGIN) ----

function smtp_send(array $cfg, string $subject, string $body, string $replyTo, ?array $attachment): void {
  $host = $cfg['host']; $port = (int) $cfg['port']; $secure = $cfg['secure'] ?? 'tls';
  $fp = @stream_socket_client(($secure === 'ssl' ? 'ssl://' : 'tcp://') . "$host:$port", $errno, $errstr, 20);
  if (!$fp) throw new RuntimeException("connect: $errstr");
  stream_set_timeout($fp, 20);
  $read = function () use ($fp): string {
    $data = '';
    while (($line = fgets($fp, 515)) !== false) { $data .= $line; if (strlen($line) < 4 || $line[3] === ' ') break; }
    return $data;
  };
  $cmd = function (?string $line, array $ok) use ($fp, $read): string {
    if ($line !== null) fwrite($fp, $line . "\r\n");
    $res = $read();
    if (!in_array((int) substr($res, 0, 3), $ok, true)) throw new RuntimeException('SMTP: ' . trim($res));
    return $res;
  };
  $me = preg_replace('/[^A-Za-z0-9.-]/', '', $_SERVER['SERVER_NAME'] ?? 'localhost') ?: 'localhost';
  $cmd(null, [220]);
  $cmd("EHLO $me", [250]);
  if ($secure === 'tls') {
    $cmd('STARTTLS', [220]);
    if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT)) throw new RuntimeException('TLS failed');
    $cmd("EHLO $me", [250]);
  }
  $cmd('AUTH LOGIN', [334]);
  $cmd(base64_encode($cfg['user']), [334]);
  $cmd(base64_encode($cfg['pass']), [235]);
  $from = $cfg['from'] ?? $cfg['user'];
  $cmd("MAIL FROM:<$from>", [250]);
  foreach ((array) $cfg['to'] as $to) $cmd("RCPT TO:<$to>", [250, 251]);
  $cmd('DATA', [354]);

  $headers = [
    'Date: ' . date('r'),
    'From: ' . enc($cfg['fromName'] ?? 'ITA Website') . " <$from>",
    'To: ' . implode(', ', (array) $cfg['to']),
    'Subject: ' . enc("$subject | ITA website"),
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . substr(strrchr($from, '@'), 1) . '>',
    'MIME-Version: 1.0',
  ];
  if ($replyTo !== '') $headers[] = "Reply-To: <$replyTo>";
  $text = "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($body));
  if ($attachment) {
    $b = 'b' . bin2hex(random_bytes(8));
    $headers[] = "Content-Type: multipart/mixed; boundary=\"$b\"";
    $msg = "--$b\r\n$text--$b\r\n"
      . "Content-Type: {$attachment['type']}; name=\"{$attachment['name']}\"\r\nContent-Transfer-Encoding: base64\r\n"
      . "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n\r\n" . chunk_split(base64_encode($attachment['data'])) . "--$b--\r\n";
  } else {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';
    $msg = chunk_split(base64_encode($body));
  }
  $data = implode("\r\n", $headers) . "\r\n\r\n" . $msg;
  $data = preg_replace('/^\./m', '..', $data); // SMTP dot-stuffing
  $cmd($data . "\r\n.", [250]);
  fwrite($fp, "QUIT\r\n");
  fclose($fp);
}

function enc(string $s): string {
  return '=?UTF-8?B?' . base64_encode($s) . '?=';
}
