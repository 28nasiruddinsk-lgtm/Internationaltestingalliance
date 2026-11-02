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
      image: 'svc_partners', alt: 'Two people reviewing an exam plan together', cover: true,
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
      dark: true,
    } },
    { type: 'points', props: {
      kicker: 'Working with ITA',
      title: 'What working with us is like',
      image: 'svc_training', alt: 'A candidate writing an answer sheet at a desk',
      items: [
        ['One person to call', 'A dedicated coordinator and priority handling from planning to the final report.'],
        ['Pay for what you use', 'Choose only the services you need and plan your exam budget with confidence.'],
        ['Your own partner portal', 'See registrations, candidate numbers, schedules and attendance in real time.'],
        ['Less admin for your candidates', 'They register, pay online and download their Statement of Entry themselves.'],
        ['Reach beyond the big cities', 'Nine cities today, plus partner premises or external venues in places like Quetta and Peshawar.'],
        ['We help spread the word', 'We promote your exams on our website and social channels so more candidates hear about them.'],
      ],
    } },
    { type: 'counters' },
    cards({
      kicker: 'Our partners',
      title: 'Who we work with',
      numbered: false,
      items: [
        { title: 'Awarding bodies', text: 'Your papers and your protocols, delivered by a team with no stake in the result.', image: 'em_professional', alt: 'A candidate writing an exam paper on a clipboard desk' },
        { title: 'Universities', text: 'One standard across every campus, for paper and computer-based exams.', image: 'about_campus', alt: 'Students walking out of a University of Greenwich building' },
        { title: 'Training providers', text: 'An independent record of every sitting, including sessions on your own premises.', image: 'em_row', alt: 'A row of learners writing at a long desk' },
      ],
      names: { label: 'We deliver for', list: ['NCC Education', 'City & Guilds', 'University of Greenwich UK', 'GEMS Pathways'] },
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
  'exam-management': [
    { type: 'pageHeader', props: {
      kicker: 'Exam management',
      title: 'Exam management, from the first call to the final report',
      intro: 'You set the rules. We take care of everything that has to happen so a few hours in an exam room can be trusted.',
      image: 'em_candidate', alt: 'A candidate writing an exam while an invigilator supervises', cover: true, flip: true,
      buttons: [{ label: 'Plan a sitting', href: '/contact/' }, { label: 'See an exam day', href: '#day' }],
    } },
    { type: 'model', props: {
      kicker: 'How we work',
      title: 'One team, five steps',
      steps: [
        ['Plan', 'We agree your requirements and protocols with your team.'],
        ['Prepare', 'We set the venue, schedule, seating plan and staff.'],
        ['Verify', 'Every candidate goes through a three-step identity check and every paper is checked against the log.'],
        ['Deliver', 'Our team supervises impartially from the first paper to the last.'],
        ['Report', 'Attendance, incidents and records come back to you in one place.'],
      ],
      highlight: 4,
      arrows: true,
      quote: 'Your protocols stay the reference point at every step.',
    } },
    { type: 'day', props: {
      kicker: 'A sitting, hour by hour',
      title: 'An exam day, hour by hour',
      intro: 'A three-hour paper at one of our centres. Timings are typical and change with each awarding body.',
      items: [
        ['07:30', 'Venue opened and checked', 'The hall is inspected, desks are numbered at the right spacing and the rules go up at the entrance.', 'hall'],
        ['08:15', 'Candidates arrive', 'Walk-through screening, then a photo ID and QR check at registration.', 'verify'],
        ['08:45', 'Briefing and seating', 'Phones and bags go into storage. Candidates hear the rules and take their numbered seats.', 'briefing'],
        ['09:00', 'Papers opened', 'Sealed papers are opened in front of the candidates.', 'board'],
        ['09:05', 'Live invigilation', 'Invigilators walk the room and log anything unusual with the time it happened.', 'exam_sitting'],
        ['12:10', 'Papers sealed', 'Scripts are counted, sealed and logged against the attendance register.', 'row'],
        ['Same day', 'Report sent', 'Attendance, incident logs and evidence go to the awarding body in one record.', 'portal'],
      ],
    } },
    prose({
      kicker: 'After the session',
      title: 'What you see afterwards',
      paragraphs: [
        'You never have to ask what happened in the room. Attendance registers, incident reports and session logs come back as one consolidated record.',
        'You can also follow registrations, schedules and attendance in your partner portal as the sitting runs.',
      ],
      image: 'portal', alt: 'The ITA partner portal showing a sitting', contain: true,
    }),
    { type: 'strip', props: {
      title: 'Independent by design',
      text: 'We don’t teach or grade your candidates, so we gain nothing from any result. The same procedures run in every room and every city.',
      links: [{ label: 'Why independence matters', href: '/about-us/' }],
    } },
    { type: 'band', props: {
      kicker: 'Already running for Greenwich',
      title: 'University of Greenwich UK',
      text: 'We run computer and paper-based exams across several campuses. That includes candidate registration, payment collection and live attendance in the portal.',
      buttons: [{ label: 'See our work with the University of Greenwich', href: '/university-of-greenwich/' }],
      image: 'em_campus',
    } },
    { type: 'faq', props: {
      kicker: 'FAQ',
      title: 'Questions we often hear',
      items: [
        ['What is exam management?', 'It’s everything around the exam itself: planning, venues, staff, candidate checks, paper custody and reporting. You focus on the exam and we handle the rest.'],
        ['Can you run exams in more than one city?', 'Yes. We work in nine cities across Pakistan and set up elsewhere through partner premises or external venues. The procedures are the same everywhere, so results are comparable.'],
        ['Do you follow our rules or yours?', 'Yours. Your awarding body’s or institution’s protocols are the reference at every step.'],
        ['What do we receive after a session?', 'One record with attendance, incident logs and supporting evidence.'],
      ],
    } },
    { type: 'services', props: { kicker: 'Keep exploring', title: 'Related services', exclude: '/exam-management/' } },
    { type: 'band', props: {
      title: 'Tell us about your next sitting.',
      text: 'What you’re running, where and when. We’ll come back with a plan for people, venues and reporting.',
      buttons: [{ label: 'Plan a sitting', href: '/contact/' }],
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
export const published = ['about-us', 'services', 'exam-management', 'contact'];

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
  'exam-management': {
    title: 'Exam Management Services in Pakistan and the UAE | ITA',
    description: 'ITA plans and runs your exams from the first call to the final report. Exam management for universities and awarding bodies in Pakistan and the UAE.',
  },
  contact: {
    title: 'Contact International Testing Alliance | Karachi and Dubai',
    description: 'Get in touch with ITA about exam delivery, invigilation or venues. Offices in Karachi and Dubai. A real person reads every message.',
  },
};
