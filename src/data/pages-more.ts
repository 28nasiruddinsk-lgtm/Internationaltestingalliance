import type { SectionConfig } from '@/components/sections';
import type { ImageKey } from './images';
import * as p from './profile';
import { site } from './site';

// Service, awarding body, candidate and company pages (content brief pages 4 to 17)

const faq = (items: string[][]): SectionConfig => ({ type: 'faq', props: { kicker: 'FAQ', title: 'Questions we often hear', items } });
const band = (title: string, text: string, label: string, href: string, image?: ImageKey): SectionConfig =>
  ({ type: 'band', props: { title, text, buttons: [{ label, href }], image } });
const related = (exclude: string): SectionConfig => ({ type: 'services', props: { kicker: 'Keep exploring', title: 'Related services', exclude } });
const partners = ['NCC Education', 'City & Guilds', 'University of Greenwich UK', 'GEMS Pathways'];
const bringAndGuide = { label: 'Exam day guidelines', href: '/exam-day-guidelines/' };
// TODO: point at the live candidate portal address once the client supplies it
const portal = '/contact/';

export const morePages: Record<string, SectionConfig[]> = {
  'exam-venues': [
    { type: 'pageHeader', props: {
      kicker: 'Secure venues',
      title: 'Exam centres you can trust with your papers',
      intro: 'Before a single candidate walks in, the room has already been checked: the entrance, the cameras, the desks and the cabinet where the papers wait.',
      image: 'hall_rows', alt: 'Rows of numbered desks set out in an ITA exam hall', cover: true,
      buttons: [{ label: 'Find a centre', href: '#operate' }, { label: 'Request a venue', href: '/contact/' }],
    } },
    { type: 'gallery', props: {
      kicker: 'From the door to the desk',
      title: 'What a candidate sees on exam day.',
      text: 'Drag or scroll from the entrance to the exam desk.',
      items: [
        ['entrance', '1. The entrance. One managed entry and walk-through screening.', 'Entrance'],
        ['verify', '2. The check-in desk. Photo ID and QR checked against the candidate list.', 'Registration'],
        ['signage', '3. Storage. A supervised area for phones and bags, and a locked cabinet for papers. Every handover is recorded.', 'Storage'],
        ['board', '4. The session board. Exam name, start and end times where everyone can see them.', 'Exam room'],
        ['n_cctv', '5. The hall. CCTV across the exam zones and numbered desks set the same way in every city.', 'Exam hall'],
      ],
    } },
    { type: 'split', props: {
      kicker: 'Close to your candidates',
      title: 'Nine cities, one standard.',
      paragraphs: [
        'Candidates sit close to home, in rooms run to the same standard.',
        'When you need us somewhere else, such as Quetta, Peshawar or a hard-to-reach area, we set up in partner premises or an external venue.',
      ],
      chips: ['Karachi', 'Hyderabad', 'Lahore', 'Islamabad', 'Rawalpindi', 'Gujranwala', 'Multan', 'Faisalabad', 'Gilgit'],
    } },
    { type: 'operate', props: { kicker: 'On the map', title: 'Centres in Pakistan and Dubai.' } },
    { type: 'strip', props: {
      title: 'Paper or computer-based',
      text: 'Our venues run both paper and computer-based exams. Invigilation, identity checks and custody records work the same way for each.',
    } },
    { type: 'band', props: {
      kicker: 'On your own premises',
      title: 'Prefer to use your own campus?',
      text: 'We bring our team, our procedures and our records to your premises, as we do for NCC Education sittings.',
      buttons: [{ label: 'Request a venue', href: '/contact/' }],
      image: 'corridor',
    } },
    related('/exam-venues/'),
    band('Tell us where your candidates are.', 'Share the cities and rough numbers, and we’ll suggest the nearest venues or set up on your premises.', 'Request a venue', '/contact/'),
  ],

  'technology-driven-solutions': [
    { type: 'pageHeader', props: {
      kicker: 'Technology and quality assurance',
      title: 'Technology that protects every sitting',
      intro: 'Every check our team makes leaves a record. That’s what lets you trust a sitting you weren’t in the room for.',
      image: 'qr_scan', alt: 'A QR code being scanned at an ITA registration desk', cover: true,
      buttons: [{ label: 'See how it works', href: '#checks' }, { label: 'Verify a result', href: '#verify' }],
    } },
    { type: 'cards', props: {
      id: 'checks',
      kicker: 'Identity',
      title: 'Three checks before anyone sits down',
      items: [
        { title: 'Screening', text: 'Every candidate walks through screening at the entrance.', image: 'entrance', alt: 'Walk-through screening at an ITA venue entrance' },
        { title: 'Photo ID', text: 'Their identity document is checked against the registration.', image: 'verify', alt: 'Staff checking a candidate’s photo ID' },
        { title: 'QR check', text: 'The code on their Statement of Entry is scanned and matched to the candidate list.', image: 'qr_scan', alt: 'A QR code being scanned at registration' },
      ],
    } },
    { type: 'hall', props: {
      kicker: 'Audit trail',
      title: 'A sitting, logged as it happens',
      intro: 'Every check-in, every incident and every paper count is logged with the time. Watch a 48-candidate paper replayed from the seating plan and session log we keep for every sitting. Illustrative data.',
    } },
    { type: 'prose', props: {
      kicker: 'Your partner portal',
      title: 'One place for everything about your exams',
      paragraphs: [
        'Manage candidate registrations, check candidate numbers, review schedules and follow attendance and exam activity as it happens.',
        'When the sitting ends, the full record is waiting for you there. Candidates have their own portal too.',
      ],
      link: { label: 'Book an exam', href: '/book-an-exam/' },
      image: 'portal', alt: 'The ITA partner portal', contain: true,
    } },
    { type: 'verify' },
    { type: 'model', props: {
      kicker: 'Quality assurance',
      title: 'How we keep quality steady',
      intro: 'We write our own operating policies and forms, and we review them after every sitting. Step four feeds straight back into step one.',
      steps: [
        ['Set the requirements', 'Awarding body protocols, local needs and safeguarding duties.'],
        ['Write our procedures', 'Clear roles, conduct standards, reporting routes and control steps.'],
        ['Equip the teams', 'Practical forms, staff briefings, acknowledgements and evaluation tools.'],
        ['Review every sitting', 'Session feedback, incident records and operational reviews feed the next update.'],
      ],
      highlight: 3,
      arrows: true,
      dark: true,
      quote: '',
      link: { label: 'See our policies', href: '/compliance-security/' },
    } },
    { type: 'split', props: {
      kicker: 'People behind the tools',
      title: 'None of this replaces people.',
      image: 'invigilators', alt: 'ITA invigilators in vests at a check-in desk',
      paragraphs: ['Trained invigilators use these tools in every room. The technology simply makes sure their work can be checked afterwards.'],
      link: { label: 'Meet our invigilators', href: '/professional-invigilation/' },
    } },
    related('/technology-driven-solutions/'),
    band('Ask us how it would work for your exam.', 'Tell us what you’re running and where. We’ll show you how the checks, the portal and the reporting would work for your sessions.', 'Talk to our team', '/contact/'),
  ],

  'professional-invigilation': [
    { type: 'pageHeader', props: {
      kicker: 'Professional invigilation',
      title: 'Professional exam invigilation with no stake in the result',
      intro: 'The person watching the room has nothing to gain from the result. That’s the whole point.',
      image: 'svc_inv', alt: 'ITA invigilators in vests supervising an exam hall', cover: true,
      buttons: [{ label: 'Request invigilators', href: '/contact/' }, { label: 'Talk to our team', href: '/contact/' }],
    } },
    { type: 'cards', props: {
      kicker: 'The invigilator’s side',
      title: 'A sitting from the invigilator’s side',
      items: [
        { tag: 'Before the exam', title: 'Set the room', text: 'Check candidates in, confirm the seating plan, count the papers and brief the room.', image: 'invigilators', alt: 'Invigilators checking candidates in' },
        { tag: 'During the exam', title: 'Watch the room', text: 'Walk the room, give only the help that’s allowed, watch for misconduct and log anything unusual with the time.', image: 'exam_sitting', alt: 'Invigilators supervising a sitting' },
        { tag: 'After the exam', title: 'Close the record', text: 'Collect and count the scripts, seal them under the chain of custody and hand over the session record.', image: 'row', alt: 'Numbered desks after a sitting' },
      ],
    } },
    { type: 'split', props: {
      kicker: 'When something doesn’t go to plan',
      title: 'Calm on the spot, logged with the time.',
      tint: true,
      image: 'inv_walk', alt: 'An invigilator walking between candidates in an exam hall',
      paragraphs: [
        'A candidate feels unwell. A phone buzzes inside a bag. The fire alarm goes off.',
        'Our invigilators deal with it on the spot, following your protocols, and the venue supervisor makes the call when one is needed. Every incident is logged with the time and goes into your session report.',
      ],
    } },
    { type: 'pull', props: {
      kicker: 'Why independence matters',
      text: 'Our invigilators have no connection to the candidates and no stake in how they score. The person watching the room has nothing to gain.',
    } },
    { type: 'split', props: {
      kicker: 'The same standard in every city',
      title: 'The room in Gilgit runs like the room in Karachi.',
      image: 'briefing', alt: 'ITA staff briefing before a session',
      paragraphs: [
        'Every invigilator has been through the same role checks and induction and has signed the same safeguarding and confidentiality commitments.',
        'After each session the venue supervisor reviews readiness, conduct, communication, security and safety. That review shapes the next briefing.',
      ],
    } },
    { type: 'strip', props: {
      title: 'Paper, computer-based or on your premises',
      text: 'We invigilate paper and computer-based exams, at our venues or on your own premises.',
    } },
    faq([
      ['What is exam invigilation?', 'It means supervising an exam so it is fair and secure. The invigilator checks candidates in, watches the room, handles problems and records what happened.'],
    ]),
    related('/professional-invigilation/'),
    band('Need invigilators for your next exam?', 'Tell us the date and how many rooms you need covered. We’ll brief a team for it.', 'Request invigilators', '/contact/'),
  ],

  'awarding-bodies': [
    { type: 'pageHeader', props: {
      kicker: 'Awarding bodies',
      title: 'The awarding bodies we deliver for',
      intro: 'Four awarding bodies trust us with their exams in Pakistan. Each one sets its own rules, and we apply them the same way in every room.',
      image: 'hall_rows', alt: 'Rows of numbered desks in an ITA exam hall', cover: true,
    } },
    { type: 'cards', props: {
      kicker: 'Who we deliver for',
      title: 'Four awarding bodies, one standard',
      numbered: false,
      tint: true,
      items: [
        { logo: 'greenwich', title: 'University of Greenwich UK', text: 'Computer and paper-based exams across several campuses, with registration, payment and live attendance in the portal.', href: '/university-of-greenwich-uk/', cta: 'Greenwich exams' },
        { logo: 'cg', title: 'City & Guilds', text: 'Sessions run to City & Guilds protocols, with a full report straight after each sitting.', href: '/city-and-guilds/', cta: 'City & Guilds exams' },
        { logo: 'ncc', title: 'NCC Education', text: 'An independent record of every sitting, including sessions on partner premises.', href: '/ncc-education/', cta: 'NCC Education exams' },
        { logo: 'gems', title: 'GEMS Pathways', text: 'The whole exam operation, from planning and candidate coordination to invigilation and secure delivery.', href: '/gems-pathways/', cta: 'GEMS Pathways exams' },
      ],
    } },
    { type: 'cards', props: {
      kicker: 'How we deliver',
      title: 'One standard for every awarding body',
      dark: true,
      items: [
        { title: 'Standardised venues', text: 'The same set-up in every city.' },
        { title: 'Trained invigilators', text: 'The same briefing and the same procedures in every room.' },
        { title: 'Candidate checks', text: 'Every candidate verified before the paper is opened.' },
        { title: 'Full session reporting', text: 'One record back to the awarding body after every sitting.' },
      ],
    } },
    { type: 'strip', props: {
      title: 'Sitting an exam?',
      text: 'Choose your awarding body on the booking page, or read what to expect on the day.',
      links: [{ label: 'Book an exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    band('Looking for a delivery partner in Pakistan?', 'Tell us about your qualifications and where your candidates are. We’ll show you how we would run them.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'university-of-greenwich-uk': [
    { type: 'pageHeader', props: {
      kicker: 'Awarding bodies',
      logo: 'greenwich',
      title: 'University of Greenwich UK exams in Pakistan',
      intro: 'One standard across every campus, from the day you register to the final record.',
      image: 'exam_sitting', alt: 'Candidates sitting a supervised exam in an ITA hall', cover: true,
      buttons: [{ label: 'Go to the portal', href: portal }, bringAndGuide],
    } },
    { type: 'split', props: {
      kicker: 'About the University of Greenwich',
      title: 'More than 130 years of teaching',
      paragraphs: [
        'The University of Greenwich has been teaching for more than 130 years, from historic campuses in London and Kent. It holds a Gold award in the UK’s Teaching Excellence Framework, and around a third of its students come from outside the UK.',
        'In Pakistan, its degrees are taught through partner institutions.',
      ],
      links: [{ label: 'Visit the University of Greenwich website', href: 'https://www.gre.ac.uk/' }],
    } },
    { type: 'feature', props: {
      kicker: 'What we do for Greenwich',
      title: 'The university sets and marks the papers. We run everything around them.',
      intro: 'We work across several campuses, so a student in one city sits their exam exactly the way a student in another city does.',
      image: 'about_campus', alt: 'Students walking out of a University of Greenwich building',
      items: [
        ['Paper and computer-based exams', 'Delivered to the university’s own procedures.'],
        ['Registration and payment', 'Online, through the ITA portal.'],
        ['Statement of Entry', 'Downloaded by each student before exam day.'],
        ['Live attendance and prompt reports', 'The university’s team sees who has arrived as the session runs.'],
      ],
    } },
    { type: 'strip', props: {
      title: 'How to book',
      text: 'Greenwich students register and pay through the ITA portal, then download their Statement of Entry.',
      links: [{ label: 'Go to the portal', href: portal }, bringAndGuide],
    } },
    faq([['Are Greenwich exams on paper or on computer?', 'We run both. Your university will tell you which applies to your exam.']]),
    band('Running Greenwich programmes at your campus?', 'Tell us where your students sit and when. We’ll plan the sittings across every campus.', 'Discuss a partnership', '/become-a-partner/', 'campus_arch'),
  ],

  'city-and-guilds': [
    { type: 'pageHeader', props: {
      kicker: 'Awarding bodies',
      logo: 'cg',
      title: 'City & Guilds exams in Pakistan',
      intro: 'City & Guilds writes the rules. We follow them to the letter, in every room.',
      image: 'hall', alt: 'An ITA exam hall set for a sitting', cover: true,
      buttons: [{ label: 'Book your exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    { type: 'split', props: {
      kicker: 'About City & Guilds',
      title: 'Founded in London in 1878',
      paragraphs: [
        'City & Guilds today awards technical and vocational qualifications in more than 40 countries.',
        'It has been authorised by IBCC to operate in Pakistan, where it offers academic and vocational qualifications including the International Foundation Programme.',
      ],
      links: [{ label: 'Visit the City & Guilds website', href: 'https://www.cityandguilds.com/' }],
    } },
    { type: 'feature', props: {
      left: true,
      kicker: 'What we do for City & Guilds',
      title: 'City & Guilds sets, marks and issues. We deliver.',
      intro: 'We run City & Guilds sessions to its standardised protocols and send a complete report as soon as each sitting ends.',
      image: 'exam_sitting', alt: 'A supervised sitting at an ITA centre',
      items: [
        ['Protocol-led delivery', 'Every session follows City & Guilds’ own procedures.'],
        ['Trained invigilators', 'From the first paper opened to the last script sealed.'],
        ['Reporting straight after the sitting', 'Attendance, incidents and evidence in one record.'],
      ],
    } },
    { type: 'cards', props: {
      kicker: 'Related pages',
      title: 'Two related pages',
      numbered: false,
      tint: true,
      items: [
        { logo: 'cg', title: 'International Foundation Programme', text: 'Taking the Foundation Programme? Registration, resits and exam windows have their own page.', href: '/international-foundation-program/', cta: 'Foundation Programme exams' },
        { logo: 'gems', title: 'GEMS Pathways', text: 'GEMS Pathways is City & Guilds’ official representative in Pakistan, and we manage the exam operation for its programmes too.', href: '/gems-pathways/', cta: 'GEMS Pathways exams' },
      ],
    } },
    { type: 'strip', props: {
      title: 'How to book',
      text: 'Book through the ITA portal or through your centre, as your course tells you.',
      links: [{ label: 'Book an exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    faq([['Is City & Guilds recognised in Pakistan?', 'Yes. City & Guilds is authorised by IBCC to operate in Pakistan.']]),
    band('Are you a City & Guilds centre?', 'Tell us your qualifications and sitting dates. We’ll run them to City & Guilds protocols and send you the record.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'international-foundation-program': [
    { type: 'pageHeader', props: {
      kicker: 'City & Guilds',
      logo: 'cg',
      title: 'International Foundation Programme exams',
      intro: 'Your Foundation Programme exams, run calmly and fairly, with everything you need in one portal.',
      image: 'exam', alt: 'Candidates sitting an exam in an ITA hall', cover: true,
      buttons: [{ label: 'Go to the portal', href: portal }, bringAndGuide],
    } },
    { type: 'split', props: {
      kicker: 'About the programme',
      title: 'Awarded by City & Guilds',
      paragraphs: ['The International Foundation Programme is awarded by City & Guilds, which sets and marks the exams. We run the sittings in Pakistan and keep a full record of each one.'],
      link: { label: 'More about City & Guilds exams', href: '/city-and-guilds/' },
    } },
    { type: 'model', props: {
      kicker: 'For candidates',
      title: 'Registering and resits',
      dark: true,
      steps: [
        ['First sitting or resit', 'Register and pay through the ITA portal, then download your Statement of Entry.'],
        ['Exam windows', 'The current dates are always listed in the portal.'],
      ],
      highlight: 0,
      quote: '',
      link: { label: 'Go to the portal', href: portal },
    } },
    band('Offering the Foundation Programme at your school or college?', 'Tell us how many students and where. We’ll plan the sittings with you.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'ncc-education': [
    { type: 'pageHeader', props: {
      kicker: 'Awarding bodies',
      logo: 'ncc',
      title: 'NCC Education exams, with a record you can verify',
      intro: 'Your college, your candidates, and our independent record of exactly what happened.',
      image: 'n_ncc', alt: 'The ITA team marking the NCC Education partnership',
      buttons: [{ label: 'Contact our team', href: '/contact/' }, bringAndGuide],
    } },
    { type: 'split', props: {
      kicker: 'About NCC Education',
      title: 'Founded in 1966, based in Manchester',
      paragraphs: [
        'NCC Education began as part of the UK’s National Computing Centre.',
        'Its IT and business qualifications run from Level 3 to Level 5 and can lead into degree study at UK and international universities.',
      ],
      links: [{ label: 'Visit the NCC Education website', href: 'https://www.nccedu.com/' }],
    } },
    { type: 'cards', props: {
      kicker: 'What we do for NCC Education',
      title: 'On your premises or ours, with the same record.',
      intro: 'NCC Education candidates often sit at the college where they study. We bring our team and our procedures to those premises, or host the sitting at one of our venues, and keep an independent record of every session either way.',
      dark: true,
      items: [
        { title: 'On your premises or ours', text: 'Candidates sit where it suits them best.', image: 'centre_room', alt: 'An exam room set with numbered desks' },
        { title: 'The same checks everywhere', text: 'A college hall runs exactly like an ITA venue on exam day.', image: 'svc_inv', alt: 'ITA invigilators supervising a hall' },
        { title: 'A record for every sitting', text: 'Attendance, incidents and evidence, kept independently.', image: 'portal', alt: 'The ITA partner portal' },
      ],
    } },
    { type: 'strip', props: {
      title: 'How to book',
      text: 'NCC Education candidates book through their college or by contacting our team.',
      links: [{ label: 'Contact our team', href: '/contact/' }, bringAndGuide],
    } },
    band('Running NCC Education programmes?', 'Tell us where your candidates sit, on your premises or ours, and we’ll plan the sittings around your timetable.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'gems-pathways': [
    { type: 'pageHeader', props: {
      kicker: 'Awarding bodies',
      logo: 'gems',
      title: 'GEMS Pathways exams in Pakistan',
      intro: 'From the first plan to the last sealed script, we run the exam process for GEMS Pathways in Pakistan.',
      image: 'centre_gems', alt: 'An ITA hall set for the GEMS scholarship programme', cover: true,
      buttons: [{ label: 'Contact our team', href: '/contact/' }, bringAndGuide],
    } },
    { type: 'split', props: {
      kicker: 'About GEMS Pathways',
      title: 'City & Guilds’ official representative in Pakistan',
      paragraphs: [
        'GEMS Pathways is part of GEMS Middle East in the UAE.',
        'It offers City & Guilds programmes in areas such as business, IT, health and social care, engineering, finance and hospitality, along with teacher training.',
      ],
      links: [{ label: 'Visit the GEMS Pathways website', href: 'https://gemspathway.com.pk/' }, { label: 'City & Guilds exams', href: '/city-and-guilds/' }],
    } },
    { type: 'cards', props: {
      kicker: 'What we do for GEMS Pathways',
      title: 'The whole exam operation, end to end',
      dark: true,
      items: [
        { title: 'Planning', text: 'We agree sessions, venues and schedules with the GEMS Pathways team.', image: 's_meet4', alt: 'ITA planning a sitting with a partner' },
        { title: 'Candidate coordination', text: 'We keep candidates informed about when and where they sit.', image: 'qr_phone', alt: 'A candidate holding their Statement of Entry QR code on a phone' },
        { title: 'Invigilation', text: 'Trained invigilators supervise every session.', image: 'svc_inv', alt: 'Invigilators supervising a GEMS sitting' },
        { title: 'Secure delivery', text: 'Papers stay sealed and logged from arrival to collection, in line with international assessment standards.', image: 'board', alt: 'A session board in an ITA exam room' },
      ],
    } },
    { type: 'strip', props: {
      title: 'For candidates',
      text: 'Your school, your centre or our team will confirm your exam date, venue and reporting time.',
      links: [{ label: 'Contact our team', href: '/contact/' }, bringAndGuide],
    } },
    band('Delivering GEMS Pathways programmes at your centre?', 'Share your sitting dates and we’ll take care of the whole exam operation.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'book-an-exam': [
    { type: 'pageHeader', props: {
      kicker: 'Candidates',
      title: 'Book an exam or resit with ITA',
      intro: 'Register, pay and download your Statement of Entry in a few minutes, from your phone or laptop.',
      light: true,
      image: 'hero_cand', alt: 'A candidate sitting an exam at an ITA centre',
      buttons: [{ label: 'Go to the portal', href: portal }],
    } },
    { type: 'steps', props: {
      kicker: 'How it works',
      title: 'Three steps to exam day',
      image: 'qr_counter', alt: 'A candidate showing their Statement of Entry on a phone at the desk',
      link: { label: 'Go to the portal', href: portal },
      items: [
        ['Create your account', 'Enter your details once, then sign in securely whenever you need to.'],
        ['Choose your exam and pay', 'Pick your awarding body and exam, then pay online.'],
        ['Download your Statement of Entry', 'This is your SOE. Bring it on the day with your original CNIC or passport.'],
      ],
    } },
    { type: 'rows', props: {
      kicker: 'Your awarding body',
      title: 'Choose your awarding body',
      items: [
        { title: 'University of Greenwich UK', text: 'Register and pay through the ITA portal.', logo: 'greenwich', href: '/university-of-greenwich-uk/', cta: 'Greenwich exams' },
        { title: 'City & Guilds', text: 'Through the ITA portal or your centre. Including the International Foundation Programme.', logo: 'cg', href: '/city-and-guilds/', cta: 'City & Guilds exams', extra: { label: 'Foundation Programme exams', href: '/international-foundation-program/' } },
        { title: 'NCC Education', text: 'Through your college or by contacting our team.', logo: 'ncc', href: '/ncc-education/', cta: 'NCC Education exams' },
        { title: 'GEMS Pathways', text: 'Your school or our team will confirm your sitting.', logo: 'gems', href: '/gems-pathways/', cta: 'GEMS Pathways exams' },
      ],
    } },
    { type: 'strip', props: {
      title: 'Before you come',
      text: 'Read the exam day guidelines so you know what to bring, when to arrive and what happens in the room.',
      links: [bringAndGuide],
    } },
    faq([
      ['How do I register for a resit?', 'The same way as a first sitting: through the ITA portal, unless your college or school books it for you.'],
      ['What do I bring on the day?', 'Your original CNIC or passport and your Statement of Entry.'],
      ['Does ITA mark my exam?', 'No. We run the sitting. Marking and results come from your awarding body.'],
    ]),
    { type: 'strip', props: {
      title: 'Need help?',
      text: `Stuck on the portal or not sure which exam to choose? Email us at ${site.email} and a member of our team will help.`,
      links: [{ label: 'Contact us', href: '/contact/' }],
    } },
  ],

  'exam-day-guidelines': [
    { type: 'pageHeader', props: {
      kicker: 'Candidates',
      title: 'Exam day guidelines',
      intro: 'A calm exam day starts the night before. Here’s everything you need to know, so nothing on the day comes as a surprise.',
      light: true,
      image: 'centre_room', alt: 'A calm exam room ready for candidates',
    } },
    { type: 'lists', props: {
      kicker: 'The night before',
      title: 'What to bring, and what to leave',
      tint: true,
      marks: true,
      columns: [
        ['Bring', ['Your original CNIC or passport', 'Your Statement of Entry (SOE), printed or on your phone', 'Your own pens, pencils and eraser', 'Water, if you’d like it']],
        ['Leave at home or in storage', ['Phones and smart watches', 'Calculators, unless your exam allows one', 'Notes, books and bags']],
      ],
    } },
    { type: 'day', props: {
      kicker: 'Your exam morning',
      title: 'What happens, and when',
      intro: 'Knowing the order of the morning is the best cure for nerves.',
      items: [
        ['Step 1', 'Arrive by your reporting time', 'It’s printed on your SOE. Latecomers may not be let in once the exam has started.', 'entrance'],
        ['Step 2', 'Screening and check-in', 'You’ll walk through screening, then show your ID and SOE at the desk.', 'verify'],
        ['Step 3', 'Storage', 'Leave restricted items in the area the staff show you.', 'signage'],
        ['Step 4', 'Briefing and seating', 'Follow the signs to your room. Your candidate number decides your seat.', 'briefing'],
        ['Step 5', 'Papers opened', 'Don’t open your paper until you’re told to. Read the front-page instructions first.', 'board'],
      ],
    } },
    { type: 'lists', props: {
      kicker: 'In the room',
      title: 'A few simple rules',
      image: 'exam_sitting', alt: 'An invigilator walking an exam hall',
      columns: [['', [
        'Your water stays on the floor beside your desk.',
        'Bring your own stationery. Sharing isn’t allowed.',
        'If your name is printed wrongly, tell the invigilator straight away.',
        'Need the toilet? Raise your hand and an invigilator will go with you. No extra time is added.',
        'You’ll get time reminders 10 minutes and 5 minutes before the end.',
        'Copying, cheating or disturbing others is reported straight away.',
      ]]],
    } },
    { type: 'lists', props: {
      kicker: 'Finishing',
      title: 'The last few minutes',
      tint: true,
      columns: [['', [
        'When the invigilator says stop, put your pen down.',
        'Check your candidate details and make sure your multiple-choice answers are on the answer sheet.',
        'Tie any extra sheets to your script.',
        'Stay seated until all papers are collected.',
        'You can’t leave during the first hour. After that, leaving early needs the invigilator’s approval and your script must be handed in.',
        'Take all your belongings with you when you go.',
      ]]],
      note: 'If something goes wrong: feel unwell or hear a loud disturbance? Tell an invigilator straight away. They’re there to help you, and everything is noted and reported to your awarding body.',
    } },
    { type: 'lists', props: {
      kicker: 'Speaking exams',
      title: 'Speaking tests run a little differently',
      image: 'em_professional', alt: 'A candidate preparing for a speaking test',
      columns: [['', [
        'Bring your SOE and original CNIC or passport, and arrive by your reporting time.',
        'Follow the signs to the Speaking Test Area. The supervisor will call you in.',
        'Speaking tests are done in pairs, set by the schedule. If someone is absent, partners may change.',
        'If the numbers are uneven, the last group will be three. Tests can’t be done individually.',
        'Keep your answer sheet clean and hand it to the examiner inside the room.',
      ]]],
    } },
    faq([
      ['What if I forget my SOE?', 'You can show it on your phone at the desk before your phone goes into storage. Your original ID is still required.'],
    ]),
    { type: 'strip', props: {
      title: 'Need help?',
      text: `Not sure about something? Email ${site.email} before your exam day and we’ll help.`,
      links: [{ label: 'Contact us', href: '/contact/' }],
    } },
  ],

  'compliance-security': [
    { type: 'pageHeader', props: {
      kicker: 'Compliance and security',
      title: 'Compliance and security',
      intro: 'A result is only worth something if people trust how the exam was run. Here’s how we earn that trust, from the door to the final record.',
      image: 'signage', alt: 'A restricted-access sign and code of conduct at an ITA venue', cover: true,
    } },
    { type: 'cards', props: {
      kicker: 'Controls',
      title: 'Four controls in every sitting',
      items: p.controls.map((c, n) => ({
        ...c,
        image: (['verify', 'row', 'exam_sitting', 'portal'] as ImageKey[])[n],
        href: ['/technology-driven-solutions/', '/exam-venues/', '/professional-invigilation/', '/technology-driven-solutions/'][n],
        cta: ['Technology and QA', 'Secure venues', 'Professional invigilation', 'Technology and QA'][n],
      })),
      outro: 'We act as a neutral layer between the institution and the awarding body, with an auditable record for every sitting.',
    } },
    { type: 'lists', props: {
      kicker: 'Our policies',
      title: 'Written in-house, reviewed after every sitting',
      intro: 'We write our operating policies and forms in-house and update them after reviewing each sitting. Public versions to download are on the way.',
      tint: true,
      columns: [['', ['Safeguarding', 'Code of conduct and confidentiality', 'Exam security', 'Incident reporting', 'Staff performance evaluation']]],
    } },
    { type: 'strip', props: {
      title: 'Confidentiality',
      text: 'Candidate records and exam materials are seen only by the staff who need them for the sitting. Partners and candidates use secure sign-in to reach their portal accounts.',
    } },
    { type: 'strip', props: {
      title: 'Registered and recognised',
      text: 'IBCC registered. Our parent company ITS is listed by the Pakistan Bar Council for foreign law examinations.',
      links: [{ label: 'Licensing and approvals', href: '/licensing-and-approvals/' }],
    } },
    { type: 'strip', props: {
      title: 'Raising a concern',
      text: `If something worried you during a sitting, tell the invigilator on the day or email us at ${site.email} afterwards. Every concern is logged and passed to the right person.`,
      links: [{ label: 'Contact us', href: '/contact/' }],
    } },
    band('Want to see how this would work for your exam?', 'Tell us what you run and where. We’ll walk you through the controls for your sessions.', 'Talk to our team', '/contact/'),
  ],

  'become-a-partner': [
    { type: 'pageHeader', props: {
      kicker: 'Partnerships',
      title: 'Become an exam partner',
      intro: 'Awarding bodies, universities and international exam boards trust us with the part of the exam they can’t be in the room for.',
      image: 's_meet4', alt: 'The ITA team meeting a partner', cover: true,
      buttons: [{ label: 'Start a conversation', href: '#form' }],
    } },
    { type: 'cards', props: {
      kicker: 'What you get',
      title: 'What you get as a partner',
      dark: true,
      items: [
        { title: 'A partner portal', text: 'Real-time view of registrations, candidate numbers, schedules, attendance and exam activity.' },
        { title: 'Only what you need', text: 'Choose individual services or hand us the whole sitting, and plan your budget with confidence.' },
        { title: 'Priority partner service', text: 'A dedicated coordinator and quick answers from planning to the final report.' },
        { title: 'Self-service for candidates', text: 'They register, pay securely and download their Statement of Entry themselves.' },
        { title: 'Reach across Pakistan', text: 'Nine cities, plus partner premises or external venues in places like Quetta, Peshawar and hard-to-reach areas.' },
        { title: 'Marketing that supports growth', text: 'We promote your exam body or university on our website and social channels.' },
      ],
    } },
    { type: 'steps', props: {
      kicker: 'Getting started',
      title: 'How partnerships start',
      image: 's_team2', alt: 'The ITA team planning a first sitting with a partner',
      link: { label: 'Start a conversation', href: '#form' },
      items: [
        ['You tell us about your exams', 'What you run, where and how many candidates.'],
        ['We talk it through', 'Our team calls you to understand your protocols and needs.'],
        ['We agree the plan', 'Venues, schedules, staffing and reporting, set with your team.'],
        ['We run your first sitting', 'Then send you the full record.'],
      ],
    } },
    { type: 'logos', props: { kicker: 'Who we already work with' } },
    { type: 'contactForm', props: {
      id: 'form',
      kicker: 'Get in touch',
      title: 'Tell us about your institution',
      tint: true,
      direct: false,
      subject: 'Partnership enquiry',
      button: 'Send my details',
      thanks: 'Our partnerships team will contact you within one working day.',
      fields: [['name', 'Your name', 'text'], ['org', 'Organisation', 'text'], ['email', 'Work email', 'email'], ['phone', 'Phone', 'tel'], ['country', 'Country', 'text']],
      choices: [
        ['type', 'Type of organisation', ['Awarding body or exam board', 'University', 'College', 'School', 'Training provider']],
        ['services', 'Which services interest you', ['All of them', 'Exam management', 'Secure venues', 'Technology and quality assurance', 'Professional invigilation']],
        ['size', 'Roughly how many candidates per sitting', ['Under 50', '50 to 200', '200 to 500', 'More than 500']],
      ],
    } },
    faq([
      ['Who can become a partner?', 'Awarding bodies, international exam boards, universities, TNE providers, colleges and training organisations.'],
      ['Do we have to use all four services?', 'No. Choose the services you need. You can start with one and add more whenever you need.'],
      ['Do you work outside Pakistan?', 'Yes. We work across nine markets, including the UAE, where we have an office in Dubai.'],
    ]),
  ],

  uae: [
    { type: 'pageHeader', props: {
      kicker: 'UAE and Dubai',
      title: 'Exams and invigilation in the UAE',
      intro: 'The same independent exam delivery we run in Pakistan, from our office in Dubai Marina.',
      image: 'uae_pair', alt: 'Two colleagues walking through a business district in the UAE', cover: true,
      buttons: [{ label: 'Talk to our Dubai team', href: '/contact/' }, { label: 'Book an exam', href: '/book-an-exam/' }],
    } },
    { type: 'split', props: {
      kicker: 'Our Dubai office',
      title: 'A real team nearby you can meet.',
      image: 'uae_pro', alt: 'A professional outside an office tower in the UAE',
      paragraphs: [
        'Our UAE work is run from Level 21, Al Habtoor Business Tower in Dubai Marina.',
        `It’s where partners in the UAE meet us to plan sittings, and where our team coordinates exams across the Emirates. Phone: ${site.phones.Dubai}.`,
      ],
      link: { label: 'View on Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Al+Habtoor+Business+Tower+Dubai+Marina' },
    } },
    { type: 'services', props: { kicker: 'One standard', title: 'What we run in the UAE' } },
    { type: 'operate', props: { start: 'ARE', kicker: 'One standard across the region', title: 'The UAE is one of nine markets we work in.' } },
    { type: 'strip', props: {
      title: 'Sitting an exam in the UAE?',
      text: 'Book through the ITA portal or your institution, then read the exam day guidelines before you come.',
      links: [{ label: 'Book an exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    faq([
      ['Do you provide exam invigilation in Dubai?', 'Yes. Our Dubai team arranges trained and impartial invigilators for sittings in Dubai and across the UAE.'],
      ['Is the process the same as in Pakistan?', 'Yes. The same procedures, identity checks and session reports apply wherever we work.'],
    ]),
    band('Running exams in the UAE?', 'Meet our team at Dubai Marina to plan your first sitting.', 'Talk to our Dubai team', '/contact/'),
  ],

  'licensing-and-approvals': [
    { type: 'pageHeader', props: {
      kicker: 'Licensing and approvals',
      title: 'Licensing and approvals',
      intro: 'Formally registered, formally recognised. Here is what backs every sitting we run.',
      light: true,
      image: 'campus_arch', alt: 'A stone archway opening onto a university quad',
    } },
    { type: 'cards', props: {
      kicker: 'Registrations and approvals',
      title: 'The documents behind our name',
      numbered: false,
      contain: true,
      items: [
        { tag: 'Inter Boards Coordination Commission', title: 'IBCC Certificate of Registration', text: `Held at ITS group level. Reg No. ${site.ibccRef}.`, image: 'ibcc_registered', alt: 'Officially registered with IBCC', href: '/contact/', cta: 'Request a copy' },
        { tag: 'Directorate of Legal Education', title: 'Pakistan Bar Council', text: 'Lists International Testing Services (ITS) among approved agencies for foreign law examinations, in its September 2026 directive.', image: 'n_pbc', alt: 'Pakistan Bar Council building', href: '/contact/', cta: 'Request a copy' },
      ],
    } },
    { type: 'model', props: {
      kicker: 'Why some approvals name ITS',
      title: 'Parent company and operating company',
      intro: 'Where a document names ITS as the holder, we say so on this page.',
      steps: [
        ['ITS', 'Our parent company. Holds the group’s registrations and recognitions.'],
        ['ITA', 'The operating company. Runs the exams.'],
      ],
      highlight: 0,
      quote: '',
      tint: true,
    } },
    { type: 'strip', props: {
      title: 'Controls behind the paperwork',
      text: 'Registration means little without the controls behind it. Documented procedures, a recorded chain of custody, incident reporting and quality checks run in every sitting.',
      links: [{ label: 'See compliance and security', href: '/compliance-security/' }],
    } },
    band('Need a copy of a document for your records?', 'Tell us which one and why, and our team will send it to you.', 'Contact us', '/contact/'),
  ],
};

export const moreMeta: Record<string, { title: string; description: string }> = {
  'exam-venues': { title: 'Exam Centers and Secure Exam Venues in Pakistan | ITA', description: 'Secure exam centres in nine cities across Pakistan, with controlled entry, CCTV and locked storage for papers. Paper and computer-based exams.' },
  'technology-driven-solutions': { title: 'Technology-Driven Exam Solutions in Pakistan and UAE | ITA', description: 'Digital ID and QR checks, incident reporting, session logs and a partner portal that shows what happened in every exam. Pakistan and the UAE.' },
  'professional-invigilation': { title: 'Professional Invigilation Services in Pakistan | ITA', description: 'Trained and impartial exam invigilators for universities and awarding bodies in Pakistan and the UAE. Paper and computer-based exams, run to your rules.' },
  'awarding-bodies': { title: 'Awarding Bodies We Deliver For | ITA Pakistan', description: 'ITA delivers exams in Pakistan for University of Greenwich UK, City & Guilds, NCC Education and GEMS Pathways, to one standard in every room.' },
  'international-foundation-program': { title: 'International Foundation Program Exams in Pakistan | ITA', description: 'Sitting the City & Guilds International Foundation Programme in Pakistan? Register, book a resit and download your Statement of Entry through the ITA portal.' },
  'university-of-greenwich-uk': { title: 'University of Greenwich Exams in Pakistan | ITA', description: 'Sitting a University of Greenwich UK exam in Pakistan? ITA runs paper and computer-based exams across several campuses. Register, pay and get your Statement of Entry online.' },
  'city-and-guilds': { title: 'City & Guilds Exam Center in Pakistan | ITA', description: 'Take your City & Guilds exam in Pakistan with ITA, including the International Foundation Programme. Sessions run to City & Guilds protocols, with a full report after every sitting.' },
  'ncc-education': { title: 'NCC Education Exams in Pakistan | ITA', description: 'ITA runs NCC Education exams in Pakistan, at our venues or on your college’s premises, with an independent record of every sitting.' },
  'gems-pathways': { title: 'GEMS Pathways Exams in Pakistan | ITA', description: 'ITA manages GEMS Pathways examinations in Pakistan, from planning and candidate coordination to invigilation and secure exam delivery.' },
  'book-an-exam': { title: 'Book an Exam and Resit Registration | ITA Portal', description: 'Book your exam or resit with ITA. Register, pay online and download your Statement of Entry from the ITA portal in a few minutes.' },
  'exam-day-guidelines': { title: 'Exam Day Guidelines for Candidates | ITA', description: 'What to bring, when to arrive and what happens in the room. Read ITA’s exam day guidelines for written and speaking exams before your sitting.' },
  'compliance-security': { title: 'Compliance and Security | Secure Exam Delivery | ITA', description: 'How ITA keeps exams secure: three-step identity checks, a recorded chain of custody, impartial supervision and a full audit trail for every sitting.' },
  'become-a-partner': { title: 'Become an Exam Centre Partner | ITA Pakistan and UAE', description: 'Partner with ITA for independent exam delivery. A dedicated coordinator, a partner portal and only the services you need, across Pakistan and the UAE.' },
  uae: { title: 'Exam Centre and Invigilation in Dubai and the UAE | ITA', description: 'Independent exam delivery and invigilation in the UAE, run from our Dubai Marina office. The same checks and records as every ITA sitting.' },
  'licensing-and-approvals': { title: 'Licensing and Approvals | IBCC Registered | ITA', description: 'ITA’s registrations and approvals, including IBCC registration and the Pakistan Bar Council listing of our parent company ITS for foreign law examinations.' },
};

// Breadcrumb trail per page after Home, ending with the page itself: [name, path]. Pages not listed sit under Home.
const ab: [string, string] = ['Awarding bodies', 'awarding-bodies'];
const cg: [string, string] = ['City & Guilds', 'city-and-guilds'];
export const trails: Record<string, [string, string][]> = {
  'awarding-bodies': [ab],
  'university-of-greenwich-uk': [ab, ['University of Greenwich UK', 'university-of-greenwich-uk']],
  'city-and-guilds': [ab, cg],
  'ncc-education': [ab, ['NCC Education', 'ncc-education']],
  'gems-pathways': [ab, ['GEMS Pathways', 'gems-pathways']],
  'international-foundation-program': [ab, cg, ['International Foundation Programme', 'international-foundation-program']],
};
