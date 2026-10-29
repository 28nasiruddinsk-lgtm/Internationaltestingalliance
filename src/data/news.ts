import type { ImageKey } from './images';

export type NewsItem = { slug: string; date: string; title: string; image: ImageKey; body: string[]; graphic?: boolean };

// newest first
export const news: NewsItem[] = [
  {
    slug: 'ncc-education-partnership', date: 'October 2026', image: 'n_ncc',
    title: 'ITA and NCC Education strengthen partnership ahead of November examination sessions in Pakistan',
    body: [
      "The meeting centred on strengthening the partnership, with a focus on preparations to conduct NCC Education's examination sessions in Pakistan from mid-November.",
      'It marks a milestone in a shared commitment to professionally managed assessments and rigorous examination standards.',
      "Discussions also explored broader collaboration on forthcoming projects and Pakistan's evolving education reform agenda.",
    ],
  },
  {
    slug: 'pakistan-bar-council-approval', date: 'September 2026', image: 'n_pbc', graphic: true,
    title: 'Pakistan Bar Council lists ITS among approved agencies for foreign law examinations',
    body: ['The Pakistan Bar Council listed International Testing Services (ITS) as an approved foreign exam agency in its September 2026 directive.'],
  },
  {
    slug: 'ibcc-notification', date: 'July 2025', image: 'n_ibccr', graphic: true,
    title: 'IBCC issues formal notification for examination delivery',
    body: ['The Inter Boards Coordination Commission issued a formal notification covering examination delivery.'],
  },
  {
    slug: 'ibcc-registration', date: 'June 2025', image: 'n_ibccb', graphic: true,
    title: 'Registered with the Inter Boards Coordination Commission',
    body: ['ITA is registered with the Inter Boards Coordination Commission under reference IBCC/RC-1/Impl-2/2025/758.'],
  },
];
