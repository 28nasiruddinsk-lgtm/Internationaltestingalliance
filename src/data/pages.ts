import type { SectionConfig } from '@/components/sections';
import { news } from './news';
import * as p from './profile';

// Homepage order: the approved prototype plus two sections from the 2026 company profile
// ("cards" with what ITA offers, and "milestones"). Reorder, remove or add entries here.
export const home: SectionConfig[] = [
  { type: 'hero' },
  { type: 'actions' },
  { type: 'counters' },
  { type: 'intro' },
  { type: 'services' },
  { type: 'cards', props: { kicker: 'What ITA offers', title: 'One partner. One portal. Every candidate, everywhere.', items: p.offers, tint: true } },
  { type: 'model' },
  { type: 'film' },
  { type: 'hall' },
  { type: 'day' },
  { type: 'gallery' },
  { type: 'operate' },
  { type: 'milestones' },
  { type: 'news' },
  { type: 'contact' },
];

const header = (title: string, intro?: string, kicker?: string): SectionConfig => ({ type: 'pageHeader', props: { title, intro, kicker } });
const prose = (props: Record<string, unknown>): SectionConfig => ({ type: 'prose', props });
const cards = (props: Record<string, unknown>): SectionConfig => ({ type: 'cards', props });

// Inner pages, keyed by path. News articles are added below from data/news.ts.
// TODO: policy PDFs, FAQ answers, Arabic copy.
export const pages: Record<string, SectionConfig[]> = {
  about: [
    header('About ITA', 'An independent examination services organisation, supported by International Testing Services.', 'About'),
    prose({
      title: 'Purpose, vision and mission',
      paragraphs: [
        'Purpose: to advance fair, secure and accessible assessment by enabling learners to take part in trusted examinations, wherever they are.',
        'Vision: to be a globally trusted examination services partner, setting the standard for secure, independent and technology-enabled assessment delivery across international markets.',
        'Mission: to protect the integrity of every examination through independent delivery, rigorous standards, trained professionals and technology, giving institutions and awarding bodies confidence, transparency and reliable outcomes.',
      ],
      image: 'centre_room',
    }),
    prose({
      tint: true,
      kicker: 'Corporate structure',
      title: 'A new name built on an established foundation',
      paragraphs: [
        'International Testing Services (ITS) is the parent company. It holds the group registrations, recognitions and track record, and is a recognised exam delivery partner for international institutions.',
        'International Testing Alliance (ITA) is the operating subsidiary: IBCC-registered exam delivery across Pakistan, with independent invigilation and no stake in grading or teaching candidates. ITA uses the ITS group accreditations to deliver conflict-free exam administration in nine cities across Pakistan.',
      ],
    }),
    { type: 'model' },
    { type: 'milestones' },
    cards({ kicker: 'Growth', title: 'A repeatable delivery model creates room to expand', items: p.growth, tint: true }),
  ],
  services: [
    header('Services', 'Choose individual services or entrust ITA with end-to-end examination delivery.', 'Our services'),
    { type: 'services' },
    cards({ kicker: 'How a session runs', title: 'A complete examination session, managed by ITA from start to finish', items: p.process, tint: true }),
    cards({ kicker: 'Delivery model', title: 'One operational team drives the entire examination session', intro: 'A defined workflow links setup, delivery and evidence. Partner protocols remain the reference point at every step.', items: p.deliveryModel }),
    cards({ kicker: 'Venue staff', title: 'People and process protect the exam experience', intro: 'After each session, supervisors evaluate readiness, conduct, communication, security and safety.', items: p.venueStaff, tint: true }),
    { type: 'day' },
    { type: 'contact' },
  ],
  'awarding-bodies': [
    header('Awarding bodies', 'The same delivery standard for every awarding body.', 'Awarding bodies'),
    prose({
      title: 'One portal for oversight and access',
      paragraphs: ['Digital tools reduce manual handoffs and make session activity easier to follow. A shared digital record supports planning, visibility and post-session reporting.'],
      image: 'portal',
    }),
    cards({ kicker: 'Digital experience', title: 'One portal connects partner oversight and candidate access', items: p.portal, tint: true, numbered: false }),
    cards({ kicker: 'Partner experience', title: 'The model serves awarding bodies and universities', intro: 'ITA brings experience delivering international qualifications across multiple campuses and locations.', items: p.partners, numbered: false }),
    cards({ kicker: 'Operating need', title: 'Assessment integrity depends on consistent execution', items: p.controls, tint: true }),
    { type: 'model' },
    { type: 'contact' },
  ],
  candidates: [
    header('Candidates', 'Register, pay and sit your examination close to home.', 'Candidates'),
    prose({
      title: 'Before and on exam day',
      paragraphs: ['Create an account with your personal details, sign in securely, pay online and download your Statement of Entry (SOE). On the day, a three-step identity check, including QR verification, confirms every candidate before the exam begins.'],
      points: ['Register and pay online', 'Download your Statement of Entry', 'Bring valid photo ID', 'Arrive early for check-in'],
      image: 'qr_scan',
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
      title: 'Registrations and approvals',
      paragraphs: [
        'IBCC registration reference IBCC/RC-1/Impl-2/2025/758. Regulatory registrations and approvals are attributed to ITS wherever the source identifies ITS as the holder.',
        'The Pakistan Bar Council listed International Testing Services (ITS) as an approved foreign exam agency in its September 2026 directive.',
        'Controls include documented SOPs, chain of custody for materials, incident reporting and quality assurance checks.',
      ],
      image: 'ibcc_registered',
    }),
    cards({ kicker: 'In-house governance', title: 'ITA develops its operating policies and forms in-house', intro: 'Policy areas: safeguarding, code of conduct and confidentiality, exam security, incident reporting, and staff performance evaluation.', items: p.governanceSteps, tint: true }),
    { type: 'milestones' },
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
