import type { SectionConfig } from '@/components/sections';
import { news } from './news';

// Homepage order, same as the approved prototype. Reorder, remove or add entries here.
export const home: SectionConfig[] = [
  { type: 'hero' },
  { type: 'actions' },
  { type: 'counters' },
  { type: 'intro' },
  { type: 'services' },
  { type: 'model' },
  { type: 'film' },
  { type: 'hall' },
  { type: 'day' },
  { type: 'gallery' },
  { type: 'operate' },
  { type: 'news' },
  { type: 'contact' },
];

const header = (title: string, intro?: string, kicker?: string): SectionConfig => ({ type: 'pageHeader', props: { title, intro, kicker } });
const prose = (props: Record<string, unknown>): SectionConfig => ({ type: 'prose', props });

// Inner pages, keyed by path. News articles are added below from data/news.ts.
// TODO: services detail pages, policy PDFs, FAQ answers, Arabic copy.
export const pages: Record<string, SectionConfig[]> = {
  about: [
    header('About ITA', 'An independent examination services organisation, supported by International Testing Services.', 'About'),
    prose({
      title: 'Purpose, vision and mission',
      paragraphs: [
        'Purpose: to advance fair, secure and accessible assessment by enabling learners to take part in trusted examinations, wherever they are.',
        'Vision: to be a globally trusted examination services partner, setting the standard for secure, independent and technology-enabled assessment delivery across international markets.',
        'Mission: to protect the integrity of every examination through independent delivery, rigorous standards, trained professionals and technology.',
      ],
      image: 's_meet4',
    }),
    prose({
      tint: true,
      title: 'Corporate structure',
      paragraphs: [
        'International Testing Services (ITS) is the parent company and holds the group registrations and approvals. International Testing Alliance (ITA) is the operating subsidiary, delivering examinations in nine cities across Pakistan and in Dubai.',
      ],
    }),
    { type: 'model' },
    { type: 'contact' },
  ],
  services: [
    header('Services', 'Choose individual services or entrust ITA with end-to-end examination delivery.', 'Our services'),
    { type: 'services' },
    { type: 'day' },
    { type: 'contact' },
  ],
  'awarding-bodies': [
    header('Awarding bodies', 'What partners get when ITA runs their sittings.', 'Awarding bodies'),
    prose({
      title: 'One partner, one portal',
      paragraphs: ['Partners see registrations, candidate numbers, schedules and attendance in a dedicated portal, and receive one consolidated record after each session.'],
      points: [
        'Partner portal with real-time visibility',
        'Flexible, value-led delivery: choose the services you need',
        'Priority partner service from planning to reporting',
        'Nationwide reach, including Quetta, Peshawar and Gilgit',
      ],
      image: 'portal',
    }),
    { type: 'model' },
    { type: 'contact' },
  ],
  candidates: [
    header('Candidates', 'Register, pay and sit your examination close to home.', 'Candidates'),
    prose({
      title: 'Before and on exam day',
      paragraphs: ['Register, pay securely and download your Statement of Entry (SOE) online. On the day, a three-step identity check, including QR verification, confirms every candidate before the exam begins.'],
      points: ['Register and pay online', 'Download your Statement of Entry', 'Bring valid photo ID', 'Arrive early for check-in'],
      image: 'n_qr',
    }),
    { type: 'day' },
    { type: 'contact' },
  ],
  centres: [
    header('Centres', 'Standardised venues in nine Pakistani cities, plus Dubai.', 'Our centres'),
    { type: 'gallery' },
    { type: 'operate' },
  ],
  governance: [
    header('Governance and policies', 'Registrations, approvals and the controls behind every sitting.', 'Governance'),
    prose({
      title: 'Registrations and controls',
      paragraphs: [
        'IBCC registration reference IBCC/RC-1/Impl-2/2025/758. The Pakistan Bar Council listed ITS as an approved foreign exam agency in its September 2026 directive.',
        'Controls include documented SOPs, chain of custody for materials, incident reporting and quality assurance checks. Policy documents will be published here.',
      ],
      image: 'n_ibccr',
    }),
  ],
  news: [header('News', 'Updates from ITA.', 'News and announcements'), { type: 'news', props: { limit: 99 } }],
  contact: [header('Contact us', 'Send an email query. Offices in Karachi and Dubai.', 'Contact'), { type: 'contact' }],
  ...Object.fromEntries(
    news.map((n) => [
      `news/${n.slug}`,
      [header(n.title, undefined, n.date), prose({ title: 'Details', paragraphs: n.body, image: n.image })],
    ]),
  ),
};
