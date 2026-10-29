import { site } from '@/data/site';

// TODO: swap for a form endpoint when one is chosen
export function openMail(subject: string, lines: [label: string, value: FormDataEntryValue | null][]) {
  const body = lines.map(([k, v]) => `${k}: ${v ?? ''}`).join('\n');
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
