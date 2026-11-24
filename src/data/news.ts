import type { ImageKey } from './images';

// body: paragraphs; "## " starts a subheading, "- " a list item, **text** is bold (see sections/Article.tsx)
export type NewsItem = { slug: string; date: string; title: string; image: ImageKey; alt?: string; body: string[]; graphic?: boolean };

// newest first
export const news: NewsItem[] = [
  {
    slug: 'ibcc-visits-ita', date: '14 November 2026', image: 'n_ibcc_visit',
    alt: 'Dr Ghulam Ali Mallah of IBCC with the ITA team at the Karachi office',
    title: 'IBCC visits ITA: making international examinations more affordable and accessible',
    body: [
      'Dr Ghulam Ali Mallah, Executive Director of the Inter Boards Coordination Commission (IBCC), visited the Karachi office of International Testing Alliance (ITA) on 14 November 2026.',
      'During the visit, ITA presented an overview of its international examination operations across Pakistan. Dr Mallah met with the team, reviewed examination procedures, and learned about the support and facilities provided to candidates. He also toured the secure examination storage and handling area, where confidential examination materials are safeguarded ahead of each examination session.',
      '## Making examinations more affordable and accessible',
      'A key focus of the discussion was reducing examination costs and improving accessibility for students across Pakistan. Dr Mallah shared his perspective on how healthy competition among examination delivery partners can contribute to more affordable fees while maintaining high service standards.',
      'He also highlighted the challenges faced by students who must travel to other cities to sit their examinations. Expanding the network of examination centres across the country, he noted, could significantly reduce travel distances and associated expenses, making international qualifications more accessible to students.',
      'Dr Mallah appreciated ITA’s cost-effective examination delivery model and its contribution towards reducing the financial burden on students.',
      '## Maintaining international standards without compromise',
      'The discussion also emphasised that affordability must never come at the expense of examination quality, security or integrity. Dr Mallah stressed the importance of maintaining confidentiality, robust examination procedures and internationally recognised standards across all examination centres.',
      'ITA shares this commitment. Currently operating across nine cities in Pakistan, from Karachi to Gilgit, ITA aims to bring examination opportunities closer to students while ensuring consistent operational standards, security protocols and quality assurance at every centre.',
      'We believe that every student deserves access to international qualifications through an examination system that is affordable, fair, secure and reliable.',
      '## Strengthening collaboration for better opportunities',
      'ITA sincerely thanks Dr Ghulam Ali Mallah for visiting our Karachi office and engaging in a productive discussion on the future of international examination delivery in Pakistan.',
      'We look forward to continued engagement and collaboration with IBCC to support more affordable, accessible and high-quality international examination opportunities for students across the country.',
    ],
  },
  {
    slug: 'ita-waen-collaboration', date: 'November 2026', image: 'n_waen',
    alt: 'ITA with WAEN Pakistan and education representatives at the Western Australian Curriculum launch in Karachi',
    title: 'ITA and WAEN explore collaboration in international assessment',
    body: [
      'The Western Australian Education Network (WAEN) Pakistan recently launched the Western Australian Curriculum in Karachi, catering to students from Kindergarten to Year 12. The launch was organised in collaboration with the Government of Western Australia and SCSA International, with International Testing Alliance (ITA) invited to attend.',
      '## Connecting with key education stakeholders',
      'The event provided an opportunity for ITA to connect with key representatives from Pakistan’s and Australia’s education sectors, including:',
      '- **Zahoor Elahi** – CEO, WAEN Pakistan',
      '- **M. Saleem Shaheen** – Managing Director, WAEN',
      '- **Gulsana Mansha** – Head of Academics, WAEN',
      '- **Fahad A.** – Regional Manager International, Murdoch University',
      '- **Ange Smith** – Representing the Australian Government’s education sector',
      '- **Muhammad Ejaz Ahsan** – Director General, Inter Boards Coordination Commission (IBCC)',
      '## Exploring opportunities in assessment and examination delivery',
      'The introduction of an international curriculum creates a growing need for reliable, secure and professionally managed assessment and examination services. This is where ITA’s expertise and operational capabilities can play an important role.',
      'ITA provides comprehensive examination management services, including examination administration, invigilation, secure handling of confidential examination materials, quality assurance and on-site supervision. These processes ensure that every stage of examination delivery is conducted in accordance with established procedures and quality standards.',
      'During the event, ITA also engaged in discussions with the WAEN team to explore potential areas of collaboration in assessment and examination delivery. Both parties expressed interest in continuing discussions and exploring opportunities for future cooperation. While no formal agreement has been finalised, the initial discussions provided a positive foundation for potential collaboration.',
      '## Looking ahead',
      'ITA appreciates the invitation from WAEN Pakistan and the opportunity to engage with representatives from the international education community.',
      'We look forward to continuing these discussions and exploring ways to contribute to the delivery of reliable, secure and high-quality assessment services in support of international education in Pakistan.',
    ],
  },
  {
    slug: 'ncc-education-partnership', date: 'October 2026', image: 'n_ncc',
    title: 'ITA and NCC Education strengthen partnership for examination sessions in Pakistan',
    body: [
      "The meeting centred on strengthening the partnership, with a focus on preparations to conduct NCC Education's examination sessions in Pakistan from mid-November 2026.",
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
