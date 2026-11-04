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
        ['entrance', '1. The entrance. Walk-through screening before anyone reaches the hall.', 'Entrance'],
        ['verify', '2. The check-in desk. Photo ID and QR checked against the candidate list.', 'Registration'],
        ['signage', '3. Storage. Phones, bags and notes stay in a supervised area.', 'Storage'],
        ['board', '4. The session board. Exam name, start and end times where everyone can see them.', 'Exam room'],
        ['row', '5. The desk. Numbered rows at the right spacing, with the code of conduct on display.', 'Seating'],
      ],
    } },
    { type: 'lists', props: {
      kicker: 'Venue standard',
      title: 'What every venue has',
      tint: true,
      image: 'n_cctv', alt: 'A CCTV camera mounted on the wall of an ITA exam venue',
      columns: [['', [
        'Controlled access. One managed entrance and an identity check for every candidate.',
        'CCTV oversight. Cameras across the exam zones.',
        'Secure storage. Papers are locked away before and after the session, and only authorised staff can reach them.',
        'Chain of custody. Every handover of papers and materials is recorded.',
        'The same set-up everywhere. Seating, signs and rules follow one standard in every city.',
      ]]],
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
    faq([
      ['How are papers kept secure at the venue?', 'They stay in locked storage until the session, only authorised staff can reach them and every handover is recorded.'],
      ['Can exams run on our own premises?', 'Yes. Our team runs the sitting on your premises with the same checks and records.'],
      ['Do you run computer-based exams?', 'Yes. We run paper and computer-based exams.'],
      ['Which cities do you work in?', 'Karachi, Hyderabad, Lahore, Islamabad, Rawalpindi, Gujranwala, Multan, Faisalabad and Gilgit, plus other locations through partner premises or external venues.'],
    ]),
    related('/exam-venues/'),
    band('Tell us where your candidates are.', 'The city, the date and how many candidates. We’ll come back with a venue plan.', 'Request a venue', '/contact/'),
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
        'When the sitting ends, the full record is waiting for you there.',
      ],
      image: 'portal', alt: 'The ITA partner portal', contain: true,
    } },
    { type: 'model', props: {
      kicker: 'Candidate portal',
      title: 'Simpler for candidates',
      intro: 'Less admin for candidates means fewer calls and emails for you.',
      steps: [
        ['Sign up', 'Create an account and sign in securely.'],
        ['Register and pay', 'Register for the exam and pay online.'],
        ['Download the SOE', 'Download the Statement of Entry and bring it on the day.'],
      ],
      highlight: 2,
      quote: '',
      tint: true,
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
      note: 'Our policies cover safeguarding, code of conduct and confidentiality, exam security, incident reporting and staff performance evaluation.',
    } },
    { type: 'split', props: {
      kicker: 'People behind the tools',
      title: 'None of this replaces people.',
      image: 'invigilators', alt: 'ITA invigilators in vests at a check-in desk',
      paragraphs: ['Trained invigilators use these tools in every room. The technology simply makes sure their work can be checked afterwards.'],
      link: { label: 'Meet our invigilators', href: '/professional-invigilation/' },
    } },
    faq([
      ['How do you verify candidates?', 'Every candidate goes through screening, a photo ID check and a QR check before entering the exam room.'],
      ['Can we see what happened in the room?', 'Yes. Attendance, incident logs and evidence come back in one record and are available in your partner portal.'],
      ['How can an employer check a certificate?', 'They enter the number printed under the QR code in Verify a result. We match it against the awarding body’s record.'],
      ['Do you run computer-based tests?', 'Yes. We run paper and computer-based exams with the same checks and records.'],
    ]),
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
    { type: 'model', props: {
      kicker: 'Why independence matters',
      title: 'Who is checking whom?',
      intro: 'When the people who teach a candidate also supervise the exam, it’s hard to call the result impartial. Our invigilators have no connection to the candidates and no stake in how they score. Your results stand up to scrutiny because the person watching the room has nothing to gain.',
      dark: true,
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
    { type: 'split', props: {
      kicker: 'Already supervising for',
      title: 'Four awarding bodies trust our invigilators.',
      paragraphs: ['Every sitting runs to the awarding body’s own rules, with the same team standard behind it.'],
      chips: partners,
    } },
    faq([
      ['What is exam invigilation?', 'It means supervising an exam so it is fair and secure. The invigilator checks candidates in, watches the room, handles problems and records what happened.'],
      ['Are your invigilators connected to the candidates?', 'No. They have no link to the candidates and no stake in the results.'],
      ['What happens if a candidate breaks the rules?', 'The invigilator deals with it on the spot, following your protocols. The incident is logged with the time and included in your session report.'],
      ['Do you provide invigilation in the UAE?', 'Yes. We have an office in Dubai and work across the UAE.'],
    ]),
    related('/professional-invigilation/'),
    band('Need invigilators for your next exam?', 'Tell us the date, the city and how many candidates. We’ll take it from there.', 'Request invigilators', '/contact/'),
  ],

  'university-of-greenwich-uk': [
    { type: 'pageHeader', props: {
      kicker: 'University of Greenwich UK',
      title: 'University of Greenwich UK exams in Pakistan',
      intro: 'One standard across every campus, from registration to the final record.',
      image: 'em_campus', alt: 'Students outside a university campus building', light: true,
      buttons: [{ label: 'Register for your exam', href: portal }, bringAndGuide],
    } },
    { type: 'feature', props: {
      kicker: 'What we do for Greenwich',
      title: 'The university sets and marks the papers. We take care of the rest.',
      intro: 'We deliver University of Greenwich UK exams in Pakistan across several campuses and locations, so a student in one city sits their exam exactly the way a student in another city does.',
      image: 'about_campus', alt: 'Students walking out of a University of Greenwich building',
      items: [
        ['Paper and computer-based exams', 'Delivered to the university’s own procedures.'],
        ['Registration and payment', 'Students register and pay online through the ITA portal.'],
        ['Statement of Entry', 'Each student downloads it before exam day.'],
        ['Live attendance', 'The university’s team sees who has arrived as the session runs, followed by a prompt report.'],
      ],
    } },
    { type: 'steps', props: {
      kicker: 'Sitting a Greenwich exam?',
      title: 'If you’re sitting a Greenwich exam',
      dark: true,
      image: 'hero_cand', alt: 'A candidate sitting an exam at an ITA centre',
      items: [
        ['Register and pay', 'Sign in to the ITA portal, choose your exam and pay online.'],
        ['Download your Statement of Entry', 'You’ll need it with your original CNIC or passport to enter the hall.'],
        ['Read the exam day guidelines', 'They tell you what to bring and when to arrive.'],
      ],
      link: { label: 'Go to the portal', href: portal },
    } },
    { type: 'split', props: {
      kicker: 'On the day',
      title: 'What your exam morning looks like',
      image: 'verify', alt: 'A candidate’s ID being checked at the desk',
      paragraphs: [
        'You’ll go through screening at the entrance and then a photo ID and QR check at the desk.',
        'An invigilator will show you to your numbered seat and explain the rules before the papers are opened. If anything feels wrong during the exam, raise your hand and tell them straight away.',
      ],
    } },
    { type: 'strip', props: {
      title: 'For the university’s partner campuses',
      text: 'Whether candidates sit at one campus or several, the checks, the venue standards and the reporting are the same. Your team gets one record for every sitting.',
      links: [{ label: 'How we run exam management', href: '/exam-management/' }],
    } },
    faq([
      ['How do I register for my Greenwich exam?', 'Register and pay through the ITA portal, then download your Statement of Entry.'],
      ['What do I bring on the day?', 'Your original CNIC or passport and your Statement of Entry.'],
      ['Does ITA mark my exam?', 'No. We run the sitting. Marking and results come from the University of Greenwich.'],
      ['Are the exams on paper or on computer?', 'We run both. Your university will tell you which applies to your exam.'],
    ]),
    band('Running Greenwich programmes at your campus?', 'Tell us where your students sit and when. We’ll come back with a plan.', 'Discuss a partnership', '/become-a-partner/', 'campus_arch'),
  ],

  'city-and-guilds': [
    { type: 'pageHeader', props: {
      kicker: 'City & Guilds',
      title: 'City & Guilds exams in Pakistan',
      intro: 'City & Guilds writes the rules. We follow them to the letter, in every room.',
      image: 'hall', alt: 'An ITA exam hall set for a sitting', cover: true,
      buttons: [{ label: 'Book your exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    { type: 'feature', props: {
      left: true,
      kicker: 'What we do for City & Guilds',
      title: 'City & Guilds sets, marks and issues. We deliver.',
      intro: 'We run City & Guilds sessions in Pakistan to its standardised protocols, then send a complete report as soon as each sitting ends.',
      image: 'exam_sitting', alt: 'A supervised sitting at an ITA centre',
      items: [
        ['Protocol-led delivery', 'Every session follows City & Guilds’ own procedures.'],
        ['Trained invigilators', 'Impartial staff supervise from the first paper to the last.'],
        ['Reporting straight after the sitting', 'Attendance, incidents and evidence in one record.'],
      ],
    } },
    { type: 'steps', props: {
      kicker: 'For candidates',
      title: 'If you’re sitting a City & Guilds exam',
      items: [
        ['Book your exam', 'Register through the ITA portal or through your centre, as your course tells you.'],
        ['Keep your Statement of Entry', 'Bring it with your original CNIC or passport.'],
        ['Read the exam day guidelines', 'They tell you what to bring and when to arrive.'],
      ],
      link: { label: 'Book an exam', href: '/book-an-exam/' },
    } },
    { type: 'mosaic', props: {
      kicker: 'On the day',
      title: 'Knowing the morning takes the worry out of it.',
      text: 'Arrive by the reporting time on your Statement of Entry. After screening and an ID check, you’ll leave your phone and bag in storage and take your numbered seat. The invigilator will brief the room before the papers are opened.',
      images: [
        ['briefing', 'The briefing before the papers are opened'],
        ['verify', 'ID check at the desk'],
        ['exam', 'Your numbered seat'],
      ],
    } },
    { type: 'strip', props: {
      title: 'For City & Guilds centres',
      text: 'We work as an independent delivery partner. We don’t teach or grade your candidates, so our only job is to apply City & Guilds’ rules the same way every time and give you a clear record of each sitting.',
      links: [{ label: 'See our services', href: '/services/' }],
    } },
    faq([
      ['How do I book a City & Guilds exam or resit?', 'Through the ITA portal or your centre, as your course tells you.'],
      ['What do I bring on the day?', 'Your original CNIC or passport and your Statement of Entry.'],
      ['Does ITA mark my exam?', 'No. City & Guilds marks the exam and issues the results.'],
    ]),
    band('Need City & Guilds sessions run in your city?', 'Tell us the city, the date and how many candidates. We’ll come back with a plan.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'ncc-education': [
    { type: 'pageHeader', props: {
      kicker: 'NCC Education',
      title: 'NCC Education exams, with a record you can verify',
      intro: 'Your college, your candidates, our independent record of exactly what happened.',
      image: 'n_ncc', alt: 'The ITA team marking the NCC Education partnership',
      buttons: [{ label: 'Book your exam', href: '/book-an-exam/' }, bringAndGuide],
    } },
    { type: 'cards', props: {
      kicker: 'What we do for NCC Education',
      title: 'On your premises or ours, with the same record.',
      intro: 'NCC Education candidates often sit at the college where they study. We bring our team and our procedures to those premises, or host the sitting at one of our venues, and keep an independent record of every session either way.',
      dark: true,
      items: [
        { title: 'On your premises or ours', text: 'Candidates sit where it suits them best.', image: 'centre_room', alt: 'An exam room set with numbered desks' },
        { title: 'Impartial supervision', text: 'Our invigilators have no stake in the candidates’ results.', image: 'svc_inv', alt: 'ITA invigilators supervising a hall' },
        { title: 'A record for every sitting', text: 'Attendance, incidents and evidence, kept independently.', image: 'portal', alt: 'The ITA partner portal' },
      ],
    } },
    { type: 'steps', props: {
      kicker: 'For candidates',
      title: 'If you’re sitting an NCC Education exam',
      image: 'invigilators', alt: 'ITA staff at a check-in desk',
      items: [
        ['Book your sitting', 'Through your college or by contacting our team.'],
        ['Confirm your venue', 'It may be your college or an ITA venue.'],
        ['Read the exam day guidelines', 'They tell you what to bring and when to arrive.'],
      ],
      link: { label: 'Contact our team', href: '/contact/' },
    } },
    { type: 'band', props: {
      kicker: 'On the day',
      title: 'Even at your own college, the room will feel different.',
      text: 'Our staff will check your ID at the door, store your phone and bag and seat you by number. It’s the same routine at every venue, which is what makes the result fair.',
      buttons: [bringAndGuide],
      image: 'verify',
    } },
    { type: 'strip', props: {
      title: 'For NCC Education partner colleges',
      text: 'We handle exam day so your teaching staff can focus on teaching. You receive an independent record of every sitting, which supports the integrity of your results.',
      links: [{ label: 'Become a partner', href: '/become-a-partner/' }],
    } },
    faq([
      ['How do I book an NCC Education exam with ITA?', 'Through your college or by contacting our team.'],
      ['Can the exam take place at my college?', 'Yes. We run sittings on partner premises with the same checks and records as our own venues.'],
      ['Does ITA mark my exam?', 'No. NCC Education marks the exam and issues the results.'],
    ]),
    band('Running NCC Education programmes?', 'Tell us where your candidates sit and when. We’ll come back with a plan.', 'Discuss a partnership', '/become-a-partner/'),
  ],

  'gems-pathways': [
    { type: 'pageHeader', props: {
      kicker: 'GEMS Pathways',
      title: 'GEMS Pathways exams in Pakistan',
      intro: 'From the first plan to the last sealed script, we run the exam process for GEMS Pathways in Pakistan.',
      image: 'centre_gems', alt: 'An ITA hall set for the GEMS scholarship programme', cover: true,
      buttons: [{ label: 'Contact our team', href: '/contact/' }, bringAndGuide],
    } },
    { type: 'cards', props: {
      kicker: 'What we do for GEMS Pathways',
      title: 'The whole journey, end to end',
      items: [
        { title: 'Planning', text: 'We agree sessions, venues and schedules with the GEMS Pathways team.', image: 's_meet4', alt: 'ITA planning a sitting with a partner' },
        { title: 'Candidate coordination', text: 'We keep candidates informed about when and where they sit and what to bring.', image: 'qr_phone', alt: 'A candidate holding their Statement of Entry QR code on a phone' },
        { title: 'Invigilation', text: 'Trained and impartial invigilators supervise every session.', image: 'svc_inv', alt: 'Invigilators supervising a GEMS sitting' },
        { title: 'Secure delivery', text: 'Papers stay sealed and logged from arrival to collection, in line with international assessment standards.', image: 'board', alt: 'A session board in an ITA exam room' },
      ],
    } },
    { type: 'strip', props: {
      title: 'If you’re sitting a GEMS Pathways exam',
      text: 'Your school or our team will confirm your exam date, venue and reporting time. Read the exam day guidelines before you come so you know what to bring and when to arrive.',
      links: [bringAndGuide, { label: 'Contact our team', href: '/contact/' }],
    } },
    { type: 'split', props: {
      kicker: 'On the day',
      title: 'A clear picture of the morning.',
      image: 'briefing', alt: 'Candidates being briefed before a sitting',
      paragraphs: [
        'You’ll be checked in at the door, asked to leave your phone and bag in storage and shown to your numbered seat.',
        'The invigilator will explain the rules before the papers are opened. If anything worries you during the exam, raise your hand.',
      ],
    } },
    faq([
      ['Who runs GEMS Pathways exams in Pakistan?', 'ITA manages the examination operations, from planning and candidate coordination to invigilation and secure delivery.'],
      ['Does ITA mark my exam?', 'No. We run the sitting. Marking and results stay with the awarding body.'],
      ['What do I bring on the day?', 'Your original CNIC or passport and any entry document you’ve been given.'],
    ]),
    band('Want your exams run end to end?', 'Tell us what you run, where and when. We’ll come back with a plan.', 'Discuss a partnership', '/become-a-partner/'),
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
        { title: 'University of Greenwich UK', text: 'Register and pay through the ITA portal.', image: 'em_campus', href: '/university-of-greenwich-uk/', cta: 'Greenwich exams' },
        { title: 'City & Guilds', text: 'Through the ITA portal or your centre.', image: 'hall', href: '/city-and-guilds/', cta: 'City & Guilds exams' },
        { title: 'NCC Education', text: 'Through your college or by contacting our team.', image: 'centre_room', href: '/ncc-education/', cta: 'NCC Education exams' },
        { title: 'GEMS Pathways', text: 'Your school or our team will confirm your sitting.', image: 'centre_gems', href: '/gems-pathways/', cta: 'GEMS Pathways exams' },
      ],
    } },
    { type: 'strip', props: {
      title: 'Before you come',
      text: 'Read the exam day guidelines so you know what to bring, when to arrive and what happens in the room.',
      links: [bringAndGuide],
    } },
    faq([
      ['How do I register for a resit?', 'The same way as a first sitting: through the ITA portal, unless your college or school books it for you.'],
      ['Where do I find my Statement of Entry?', 'In your portal account once your registration and payment are complete.'],
      ['What do I bring on the day?', 'Your original CNIC or passport and your Statement of Entry.'],
      ['What if I arrive late?', 'Arrive by the reporting time on your Statement of Entry. Latecomers may not be let in once the exam has started.'],
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
      ['Can I bring my phone?', 'You can bring it to the venue, but it goes into storage before you enter the room.'],
      ['What if I forget my SOE?', 'You can show it on your phone at the desk before your phone goes into storage. Your original ID is still required.'],
      ['Can I leave early?', 'Not in the first hour. After that, only with the invigilator’s approval.'],
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
      items: p.controls.map((c, n) => ({ ...c, image: (['verify', 'row', 'exam_sitting', 'portal'] as ImageKey[])[n] })),
      outro: 'We act as a neutral layer between the institution and the awarding body, with an auditable record for every sitting.',
    } },
    { type: 'lists', props: {
      kicker: 'Our policies',
      title: 'Written in-house, reviewed after every sitting',
      intro: 'We write our operating policies and forms in-house and update them after reviewing each sitting. Public versions to download are on the way.',
      tint: true,
      columns: [['', ['Safeguarding', 'Code of conduct and confidentiality', 'Exam security', 'Incident reporting', 'Staff performance evaluation']]],
    } },
    { type: 'split', props: {
      kicker: 'The people we put in the room',
      title: 'Security depends on people as much as procedures.',
      image: 'briefing', alt: 'A staff briefing before a session',
      paragraphs: [
        'Every member of venue staff goes through role checks and induction and signs our safeguarding and confidentiality commitments.',
        'After each session, the venue supervisor reviews readiness, conduct, communication, security and safety.',
      ],
    } },
    { type: 'strip', props: {
      title: 'Confidentiality',
      text: 'Candidate records and exam materials are seen only by the staff who need them for the sitting. Partners and candidates use secure sign-in to reach their portal accounts.',
    } },
    { type: 'cards', props: {
      kicker: 'Registered and recognised',
      title: 'Formal recognition behind the controls',
      numbered: false,
      contain: true,
      items: [
        { tag: 'IBCC registration', title: `Ref. ${site.ibccRef}`, text: 'Registered with the Inter Boards Coordination Commission.', image: 'ibcc_registered', alt: 'Officially registered with IBCC', href: '/licensing-and-approvals/', cta: 'Licensing and approvals' },
        { tag: 'Pakistan Bar Council', title: 'Approved agency listing', text: 'Lists ITS, our parent company, among approved agencies for foreign law examinations (September 2026).', image: 'n_pbc', alt: 'Pakistan Bar Council building', href: '/licensing-and-approvals/', cta: 'Licensing and approvals' },
      ],
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
    { type: 'split', props: {
      kicker: 'Who we already work with',
      title: 'Real partners, real sittings.',
      paragraphs: ['Every one of them sees the same standard: their rules, our team and a full record afterwards.'],
      chips: partners,
      image: 'partner_talk', alt: 'A partner meeting with the ITA team',
    } },
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
      ['Can exams run on our own premises in the UAE?', 'Yes. We run sittings on partner premises with the same checks and records as our own venues.'],
      ['Is the process the same as in Pakistan?', 'Yes. The same procedures, identity checks and session reports apply wherever we work.'],
    ]),
    band('Running exams in the UAE?', 'Tell us the city, the date and how many candidates. Our Dubai team will come back with a plan.', 'Talk to our Dubai team', '/contact/'),
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
    { type: 'milestones', props: { kicker: 'Our progress', title: 'How we got here' } },
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
  'university-of-greenwich-uk': { title: 'University of Greenwich Exams in Pakistan | ITA', description: 'Sitting a University of Greenwich UK exam in Pakistan? ITA runs paper and computer-based exams across several campuses. Register, pay and get your Statement of Entry online.' },
  'city-and-guilds': { title: 'City & Guilds Exam Center in Pakistan | ITA', description: 'Take your City & Guilds exam in Pakistan with ITA. Sessions run to City & Guilds protocols, with trained invigilators and a full report after every sitting.' },
  'ncc-education': { title: 'NCC Education Exams in Pakistan | ITA', description: 'ITA runs NCC Education exams in Pakistan, at our venues or on your college’s premises, with an independent record of every sitting.' },
  'gems-pathways': { title: 'GEMS Pathways Exams in Pakistan | ITA', description: 'ITA manages GEMS Pathways examinations in Pakistan, from planning and candidate coordination to invigilation and secure exam delivery.' },
  'book-an-exam': { title: 'Book an Exam and Resit Registration | ITA Portal', description: 'Book your exam or resit with ITA. Register, pay online and download your Statement of Entry from the ITA portal in a few minutes.' },
  'exam-day-guidelines': { title: 'Exam Day Guidelines for Candidates | ITA', description: 'What to bring, when to arrive and what happens in the room. Read ITA’s exam day guidelines for written and speaking exams before your sitting.' },
  'compliance-security': { title: 'Compliance and Security | Secure Exam Delivery | ITA', description: 'How ITA keeps exams secure: three-step identity checks, a recorded chain of custody, impartial supervision and a full audit trail for every sitting.' },
  'become-a-partner': { title: 'Become an Exam Centre Partner | ITA Pakistan and UAE', description: 'Partner with ITA for independent exam delivery. A dedicated coordinator, a partner portal and only the services you need, across Pakistan and the UAE.' },
  uae: { title: 'Exam Centre and Invigilation in Dubai and the UAE | ITA', description: 'Independent exam delivery and invigilation in the UAE, run from our Dubai Marina office. The same checks and records as every ITA sitting.' },
  'licensing-and-approvals': { title: 'Licensing and Approvals | IBCC Registered | ITA', description: 'ITA’s registrations and approvals, including IBCC registration and the Pakistan Bar Council listing of our parent company ITS for foreign law examinations.' },
};
