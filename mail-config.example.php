<?php
// Copy to the server as /api/mail-config.php (next to send.php) and fill in the password.
// Keep this real file off GitHub; it is listed in .gitignore.
return [
  'host' => 'smtp.gmail.com',
  'port' => 587,
  'secure' => 'tls',                              // 'tls' for 587, 'ssl' for 465
  'user' => 'no-reply@intltestingalliance.com',
  'pass' => 'PASTE_THE_APP_PASSWORD_HERE',
  'from' => 'no-reply@intltestingalliance.com',
  'fromName' => 'ITA Website',
  'to' => ['info@intltestingalliance.com'],       // inbox that receives the enquiries
];
