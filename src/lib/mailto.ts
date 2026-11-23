import { basePath } from '@/data/images';
import { site } from '@/data/site';

type Lines = [label: string, value: FormDataEntryValue | null][];
export type SendResult = 'sent' | 'mail-app' | { error: string };

export function openMail(subject: string, lines: Lines) {
  const body = lines.map(([k, v]) => `${k}: ${v ?? ''}`).join('\n');
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Posts a form to the PHP mail handler (public/api/send.php). Where that isn't available
// (e.g. the GitHub Pages preview) it falls back to the visitor's mail app.
export async function sendForm(form: HTMLFormElement, subject: string, lines: Lines): Promise<SendResult> {
  const d = new FormData(form);
  const body = new FormData();
  body.set('subject', subject);
  body.set('fields', JSON.stringify(lines.map(([k, v]) => [k, typeof v === 'string' ? v : ''])));
  body.set('email', String(d.get('email') ?? ''));
  body.set('website', String(d.get('website') ?? ''));
  const cv = d.get('cv');
  if (cv instanceof File && cv.size) body.set('cv', cv);
  try {
    const res = await fetch(`${basePath}/api/send.php`, { method: 'POST', body });
    const json = await res.json().catch(() => null);
    if (json?.ok) return 'sent';
    if (json?.error && res.status < 500) return { error: json.error };
  } catch {
    // network error or no PHP on this host: fall back below
  }
  openMail(subject, lines);
  return 'mail-app';
}
