import { site } from '@/data/site';

// TODO: a static export has no server. Replace with a form endpoint once the client chooses one.
export function openMail(subject: string, lines: [label: string, value: FormDataEntryValue | null][]) {
  const body = lines.map(([k, v]) => `${k}: ${v ?? ''}`).join('\n');
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
