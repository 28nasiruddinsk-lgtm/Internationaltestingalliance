export type NewsItem = { slug: string; date: string; title: string; image: string; body: string[] };

// Newest first.
export const news: NewsItem[] = [
  {
    slug: 'ncc-education-partnership',
    date: 'Oct 2026',
    title: 'ITA and NCC Education strengthen partnership ahead of November examination sessions in Pakistan',
    image: '/images/centre-gems.webp', // TODO: replace with ncc-partnership photo
    body: [
      "The meeting centred on strengthening the partnership, with a focus on preparations to conduct NCC Education's examination sessions in Pakistan from mid-November.",
      'It marks a milestone in a shared commitment to professionally managed assessments and rigorous examination standards.',
      "Discussions also explored broader collaboration on forthcoming projects and Pakistan's evolving education reform agenda.",
    ],
  },
  {
    slug: 'pakistan-bar-council-approval',
    date: 'Sep 2026',
    title: 'Pakistan Bar Council lists ITS among approved agencies for foreign law examinations',
    image: '/images/hall-rows.webp', // TODO: replace with pbc photo
    body: ['The Pakistan Bar Council listed International Testing Services (ITS) as an approved foreign exam agency in its September 2026 directive.'],
  },
  {
    slug: 'ibcc-notification',
    date: 'Jul 2025',
    title: 'IBCC issues formal notification for examination delivery',
    image: '/images/ibcc-registered.png',
    body: ['The Inter Boards Coordination Commission issued a formal notification covering examination delivery.'],
  },
  {
    slug: 'ibcc-registration',
    date: 'Jun 2025',
    title: 'Registered with the Inter Boards Coordination Commission',
    image: '/images/ibcc-registered.png', // TODO: replace with ibcc-building photo
    body: ['ITA is registered with the Inter Boards Coordination Commission under reference IBCC/RC-1/Impl-2/2025/758.'],
  },
];
