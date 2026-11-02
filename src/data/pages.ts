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
      image: 'about_campus', alt: 'Students walking out of a University of Greenwich building', cover: true,
    } },
    prose({
      kicker: 'An exam morning',
      title: 'The quiet hour before the doors open',
      paragraphs: [
        'On a typical exam day our venue supervisor is in the hall before 07:30. The desks are numbered, the rules go up at the door and the sealed papers are checked against the log. By the time the first candidate walks in, the room is ready and everyone in it knows their job.',
        'That quiet hour before the doors open is most of what we do. When it goes right, nobody notices. That’s the idea.',
      ],
      image: 'about_library', alt: 'A student reading quietly in a university library',
    }),
    { type: 'split', props: {
      kicker: 'Who we are',
      title: 'An independent examination services company',
      tint: true,
      image: 'about_team', alt: 'Students working together around a laptop',
      facts: p.aboutFacts,
      paragraphs: [
        'ITA is an independent examination services company and part of the International Testing Services (ITS) group. We were set up in April 2025 to do one thing well: deliver exams for other organisations. That covers everything from onboarding a new partner and checking candidates in to supervising the session and sending back a full record.',
      ],
    } },
    { type: 'mosaic', props: {
      kicker: 'Who we serve',
      title: 'Universities, awarding bodies and the candidates who sit with us.',
      text: 'Behind every sitting is a student working towards a qualification. Our job is to make the exam day fair, calm and the same for every one of them.',
      images: [
        ['about_group', 'Students from our university partners'],
        ['about_lawn', 'Candidates working towards UK qualifications'],
        ['exam_sitting', 'A supervised sitting in an ITA centre'],
      ],
    } },
    { type: 'model', props: {
      kicker: 'Independence',
      title: 'Why we stay out of teaching and marking',
      dark: true,
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
        'Candidates sit close to home in rooms run to the same standard. When a partner needs us somewhere new, such as Quetta, Peshawar or a hard-to-reach area, we set up in partner premises or an external venue.',
        'Our offices are in Karachi and Dubai.',
      ],
      chips: ['Karachi', 'Hyderabad', 'Lahore', 'Islamabad', 'Rawalpindi', 'Gujranwala', 'Multan', 'Faisalabad', 'Gilgit'],
    } },
    { type: 'operate' },
    { type: 'milestones', props: { kicker: 'Our progress', title: 'How we got here' } },
    cards({ kicker: 'What we’re here for', title: 'Purpose, vision and mission', items: p.pillars, dark: true, numbered: false }),
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
    { type: 'pageHeader', props: {
      kicker: 'Our services',
      title: 'Testing solutions for universities and exam boards',
      intro: 'Take one service or hand us the whole sitting. Either way, your rules come first and you get a full record afterwards.',
      image: 'hall_rows', alt: 'Rows of numbered desks set out in an ITA exam hall',
    } },
    { type: 'services', props: { kicker: 'What we do', title: 'Our four services', detailed: true } },
    { type: 'model', props: {
      kicker: 'How a session runs',
      title: 'From the first call to the final report.',
      steps: [
        ['We agree the plan', 'We sit down with your team and settle requirements, venues and schedules.'],
        ['We check everything on site', 'Before the session starts we check candidates, materials and rooms.'],
        ['We run the session', 'Our team supervises from start to end, calmly and impartially.'],
        ['You see what happened', 'Attendance, incident logs and evidence come back to you in one record, also visible in your partner portal.'],
      ],
      highlight: 3,
      quote: '',
    } },
    { type: 'points', props: {
      kicker: 'Working with ITA',
      title: 'What working with us is like',
      tint: true,
      items: [
        ['One person to call', 'A dedicated coordinator and priority handling from planning to the final report.'],
        ['Pay for what you use', 'Choose only the services you need and plan your exam budget with confidence.'],
        ['Your own partner portal', 'See registrations, candidate numbers, schedules and attendance in real time.'],
        ['Less admin for your candidates', 'They register, pay online and download their Statement of Entry themselves.'],
        ['Reach beyond the big cities', 'Nine cities today, plus partner premises or external venues in places like Quetta and Peshawar.'],
        ['We help spread the word', 'We promote your exams on our website and social channels so more candidates hear about them.'],
      ],
    } },
    cards({
      kicker: 'Our partners',
      title: 'Who we work with',
      numbered: false,
      items: [
        { title: 'Awarding bodies', text: 'Your papers and your protocols, delivered by a team with no stake in the result.', image: 'svc_partners', alt: 'Two people reviewing a report together' },
        { title: 'Universities', text: 'One standard across every campus, for paper and computer-based exams.', image: 'about_campus', alt: 'Students walking out of a University of Greenwich building' },
        { title: 'Training providers', text: 'An independent record of every sitting, including sessions on your own premises.', image: 'svc_training', alt: 'A candidate writing an answer sheet at a desk' },
      ],
      outro: 'We deliver for NCC Education, City & Guilds, University of Greenwich UK and GEMS Pathways.',
    }),
    { type: 'strip', props: {
      title: 'Sitting an exam with us?',
      text: 'Book your exam or read what to expect on the day.',
      links: [{ label: 'Book an exam', href: '/candidates/' }, { label: 'Exam day guidelines', href: '/#day' }],
    } },
    { type: 'faq', props: {
      kicker: 'FAQ',
      title: 'Questions we often hear',
      items: [
        ['Can we use just one service?', 'Yes. Choose the services you need and we’ll fit around the rest of your process.'],
        ['Do you follow our exam rules?', 'Yes. Your awarding body’s or institution’s protocols are the reference at every step.'],
        ['Do you mark or grade exams?', 'No. We run the sitting. Marking and results stay with the awarding body.'],
      ],
    } },
    { type: 'band', props: {
      title: 'Not sure what you need?',
      text: 'Tell us what you’re running, where and when. We’ll suggest the simplest way to run it.',
      buttons: [{ label: 'Discuss a partnership', href: '/become-a-partner/' }],
    } },
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
export const published = ['about-us', 'services', 'contact'];

// Title tag and meta description per published page (SEO brief). The home page is set in app/layout.tsx.
export const meta: Record<string, { title: string; description: string }> = {
  'about-us': {
    title: 'About International Testing Alliance | ITA Exams Pakistan',
    description: 'International Testing Alliance runs independent and secure exams for universities and awarding bodies across Pakistan, the UAE and seven more markets.',
  },
  services: {
    title: 'Testing Solutions for Universities and Exam Boards | ITA',
    description: 'Exam management, secure venues, technology and invigilation for universities and awarding bodies in Pakistan and the UAE. Take one service or hand us the whole sitting.',
  },
  contact: {
    title: 'Contact International Testing Alliance | Karachi and Dubai',
    description: 'Get in touch with ITA about exam delivery, invigilation or venues. Offices in Karachi and Dubai. A real person reads every message.',
  },
};
