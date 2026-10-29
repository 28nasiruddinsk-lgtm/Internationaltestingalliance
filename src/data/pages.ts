import type { SectionConfig } from '@/components/sections';
import { news } from './news';
import * as p from './profile';

// Homepage section order
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

// Inner pages by path; news articles are added at the bottom
// TODO: policy PDFs, FAQ, Arabic
export const pages: Record<string, SectionConfig[]> = {
  'about-us': [
    { type: 'pageHeader', props: {
      kicker: 'About ITA',
      title: 'About International Testing Alliance',
      headline: 'We run the exam. We have nothing riding on the result.',
      intro: 'International Testing Alliance plans, runs and reports on examinations for awarding bodies, universities and training providers. We never teach and we never mark.',
      image: 'hall_rows', alt: 'Rows of numbered desks set out in an ITA exam hall',
    } },
    prose({
      kicker: 'An exam morning',
      title: 'The quiet hour before the doors open',
      paragraphs: [
        'On a typical exam day our venue supervisor is in the hall before 07:30. The desks are numbered, the rules go up at the door and the sealed papers are checked against the log. By the time the first candidate walks in, the room is ready and everyone in it knows their job.',
        'That quiet hour before the doors open is most of what we do. When it goes right, nobody notices. That’s the idea.',
      ],
      image: 'row', alt: 'ITA team setting out desks and row markers in an exam hall',
    }),
    { type: 'split', props: {
      kicker: 'Who we are',
      title: 'An independent examination services company',
      tint: true,
      paragraphs: [
        'ITA is an independent examination services company and part of the International Testing Services (ITS) group. We were set up in April 2025 to do one thing well: deliver exams for other organisations. That covers everything from onboarding a new partner and checking candidates in to supervising the session and sending back a full record.',
        'We work across nine markets: Pakistan, the UAE, Saudi Arabia, Iraq, Egypt, Bahrain, Malaysia, Uzbekistan and the UK.',
      ],
    } },
    { type: 'model', props: {
      kicker: 'Independence',
      title: 'Why we stay out of teaching and marking',
      intro: 'When the same organisation teaches, registers and supervises its own candidates, it’s hard for anyone to call the result fully impartial. So we keep to the middle of the room. The institution sets the rules. The awarding body sets and marks the paper. We run everything in between and write down exactly what happened.',
    } },
    cards({
      kicker: 'The people in the room',
      title: 'Three roles run every hall',
      items: p.aboutRoles,
      tint: true,
      outro: 'Every member of our venue staff is checked for their role, goes through induction and signs our safeguarding and confidentiality commitments. After each session the supervisor reviews how it went: readiness, conduct, communication, security and safety.',
    }),
    { type: 'split', props: {
      kicker: 'Where we work',
      title: 'Nine cities, from Karachi to Gilgit.',
      paragraphs: [
        'Karachi, Hyderabad, Lahore, Islamabad, Rawalpindi, Gujranwala, Multan, Faisalabad and Gilgit. Candidates sit close to home in rooms run to the same standard. When a partner needs us somewhere new, such as Quetta, Peshawar or a hard-to-reach area, we set up in partner premises or an external venue.',
        'Our offices are in Karachi and Dubai.',
      ],
    } },
    { type: 'operate' },
    { type: 'milestones', props: { kicker: 'Our progress', title: 'How we got here' } },
    cards({ kicker: 'What we’re here for', title: 'Purpose, vision and mission', items: p.pillars, tint: true, numbered: false }),
    { type: 'split', props: {
      kicker: 'Our parent company',
      title: 'ITS is our parent company',
      paragraphs: ['ITS holds the group’s registrations, recognitions and long track record in examination and assessment services. Where a registration or approval belongs to ITS, we say so on this website.'],
      link: { label: 'Meet our board and management', href: '/our-board-and-management/' },
    } },
    { type: 'band', props: {
      title: 'Want to see how we’d run your exam?',
      text: 'Tell us about your candidates and where they sit. Our partnerships team replies within one working day.',
      buttons: [{ label: 'Discuss a partnership', href: '/become-a-partner/' }, { label: 'Find a centre', href: '/centres/' }],
    } },
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
      contain: true,
    }),
    cards({ kicker: 'In-house governance', title: 'ITA develops its operating policies and forms in-house', intro: 'Policy areas: safeguarding, code of conduct and confidentiality, exam security, incident reporting, and staff performance evaluation.', items: p.governanceSteps, tint: true }),
    { type: 'milestones' },
  ],
  news: [header('News', 'Updates from ITA.', 'News and announcements'), { type: 'news', props: { limit: 99 } }],
  contact: [
    { type: 'pageHeader', props: { title: 'Contact us', intro: 'A real person reads every message. Tell us what you need and we’ll get back to you.', light: true } },
    { type: 'contactForm' },
    { type: 'offices' },
    { type: 'strip', props: {
      title: 'Sitting an exam?',
      text: 'Most candidate questions are answered on these pages. If yours isn’t, send us a message and choose “A candidate” in the form.',
      links: [{ label: 'Book an exam', href: '/book-an-exam/' }, { label: 'Exam day guidelines', href: '/exam-day-guidelines/' }],
    } },
  ],
  ...Object.fromEntries(
    news.map((n) => [
      `news/${n.slug}`,
      [header(n.title, undefined, n.date), prose({ title: 'Details', paragraphs: n.body, image: n.image })],
    ]),
  ),
};

// Pages that go live. Everything else 404s; add a key of `pages` here to publish it.
export const published = ['about-us', 'contact'];

// Title tag and meta description per published page (SEO brief). The home page is set in app/layout.tsx.
export const meta: Record<string, { title: string; description: string }> = {
  'about-us': {
    title: 'About International Testing Alliance | ITA Exams Pakistan',
    description: 'International Testing Alliance runs independent and secure exams for universities and awarding bodies across Pakistan, the UAE and seven more markets.',
  },
  contact: {
    title: 'Contact International Testing Alliance | Karachi and Dubai',
    description: 'Get in touch with ITA about exam delivery, invigilation or venues. Offices in Karachi and Dubai. A real person reads every message.',
  },
};
