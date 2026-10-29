// Copy from the ITA Company Profile 2026
export type Card = { title: string; text: string; tag?: string };

export const offers: Card[] = [
  { title: 'Partner portal', text: 'Real-time visibility of registrations, candidate numbers, schedules, attendance and examination activity, from registration to final reporting.' },
  { title: 'Value-led delivery', text: 'A flexible model: choose the services you need and plan examination budgets with confidence.' },
  { title: 'Priority partner service', text: 'Dedicated coordination, responsive support and priority handling from initial planning to post-session reporting.' },
  { title: 'Candidate self-service', text: 'Candidates register, pay securely and download their Statement of Entry (SOE) without manual intervention.' },
  { title: 'Equal access, nationwide reach', text: 'Delivery across Pakistan on partner premises or external venues, including Quetta, Peshawar, Gilgit and hard-to-reach areas.' },
  { title: 'Marketing that supports growth', text: 'We promote your examination body or university across our website and social media channels.' },
];

export const controls: Card[] = [
  { title: 'Candidate access', text: 'Three-step identity verification and check-in confirm every candidate before the assessment begins.' },
  { title: 'Materials security', text: 'Secure handling and a documented chain of custody protect confidential materials at every stage.' },
  { title: 'Session oversight', text: 'Trained, impartial venue staff apply procedures consistently and escalate issues promptly.' },
  { title: 'Verifiable evidence', text: 'Attendance registers, incident reports and session logs give a clear audit trail.' },
];

export const process: Card[] = [
  { title: 'Secure onboarding', text: 'We agree the operational plan, requirements, venues and schedules directly with your team.' },
  { title: 'On-site verification', text: 'Before the session begins, we check candidates, materials and testing rooms.' },
  { title: 'Invigilation', text: 'We run the session end to end, supervising vigilantly and impartially.' },
  { title: 'Transparency dashboard', text: 'Attendance data, incident logs and supporting evidence come back to you in one consolidated record.' },
];

export const deliveryModel: Card[] = [
  { title: 'Plan', text: 'Requirements and protocols' },
  { title: 'Prepare', text: 'Venue, schedule and resources' },
  { title: 'Verify', text: 'Candidates and materials' },
  { title: 'Deliver', text: 'Impartial live supervision' },
  { title: 'Report', text: 'Attendance, incidents and records' },
];

export const portal: Card[] = [
  { tag: 'For institutions', title: 'Partner portal', text: 'Manage candidate registrations, access candidate numbers, review schedules and monitor exam activity.' },
  { tag: 'For candidates', title: 'Self-service', text: 'Create an account, sign in securely, pay online and access examination information.' },
];

export const partners: Card[] = [
  { tag: 'NCC Education', title: 'Partner-premises flexibility', text: 'Independent record-keeping for each sitting, including sessions hosted on partner premises.' },
  { tag: 'City & Guilds', title: 'Protocol-led delivery', text: 'Standardised session reporting aligned with formal examination protocols.' },
  { tag: 'University of Greenwich, UK', title: 'Multi-campus operations', text: 'Computer and paper-based delivery with candidate registration, payment collection and real-time attendance.' },
  { tag: 'GEMS Pathway', title: 'International standards', text: 'We manage the examination process for GEMS Pathway in Pakistan: planning, candidate coordination, invigilation and secure delivery.' },
];

export const governanceSteps: Card[] = [
  { title: 'Set the requirements', text: 'Awarding-body protocols, local operating needs and safeguarding duties.' },
  { title: 'Write ITA procedures', text: 'Clear roles, conduct standards, reporting routes and control steps.' },
  { title: 'Equip the teams', text: 'Practical forms, staff briefings, acknowledgements and evaluation tools.' },
  { title: 'Review delivery', text: 'Session feedback, incident records and operational reviews inform updates.' },
];

export const venueStaff: Card[] = [
  { title: 'Venue supervisor', text: 'Coordinates readiness, staff briefings, session oversight and escalation.' },
  { title: 'Invigilators', text: 'Manage check-in, candidate instructions, room monitoring, permitted assistance and incident reporting.' },
  { title: 'Materials and records', text: 'Control exam materials, attendance, break logs, incident notes and session handover.' },
  { title: 'Staff standards', text: 'Role-appropriate checks, induction, safeguarding and confidentiality commitments, and session evaluation.' },
];

export const growth: Card[] = [
  { tag: 'Partner relationships', title: 'Partner expansion', text: 'Onboard new awarding bodies and universities that need neutral, protocol-led exam delivery.' },
  { tag: 'Local coverage', title: 'Network depth', text: 'Extend coverage through partner venues and more local invigilation capacity.' },
  { tag: 'Portal workflows', title: 'Digital adoption', text: 'Move partner and candidate workflows onto the portal and remove manual coordination.' },
  { tag: 'Quality at scale', title: 'Service quality', text: 'Structured training, audit trails and session reporting keep delivery consistent as volume grows.' },
];

export const milestones = [
  { date: 'April 2025', title: 'ITA established', text: 'ITA is established as part of the ITS Group, a dedicated platform for examination and assessment delivery.' },
  { date: 'June 2025', title: 'IBCC registration', text: 'Registered with the Inter Boards Coordination Commission as an approved examination delivery partner.' },
  { date: 'July 2025', title: 'IBCC notification', text: 'IBCC issues a formal notification confirming ITA’s recognition for examination delivery.' },
  { date: 'September 2026', title: 'Pakistan Bar Council recognition', text: 'Recognised among the approved agencies for foreign law examination delivery.' },
  { date: '2026', title: 'Expanding assessment delivery', text: 'Continuing to build partnerships with universities, awarding bodies and professional institutions globally.' },
];

export const pillars: Card[] = [
  { title: 'Our purpose', text: 'To advance fair, secure and accessible assessment by enabling learners to take part in trusted examinations, wherever they are.' },
  { title: 'Our vision', text: 'To be a globally trusted examination services partner, setting the standard for secure, independent and technology-enabled assessment delivery across international markets.' },
  { title: 'Our mission', text: 'To protect the integrity of every examination through independent delivery, rigorous standards, trained professionals and technology, giving institutions and awarding bodies confidence, transparency and reliable outcomes.' },
];

export const aboutFacts = [
  { value: 'April 2025', label: 'ITA established as part of the ITS Group' },
  { value: '9 cities', label: 'Examination delivery across Pakistan' },
  { value: '9 markets', label: 'Pakistan, UAE, Saudi Arabia, Iraq, Egypt, Bahrain, Malaysia, Uzbekistan, UK' },
  { value: 'IBCC', label: 'Registered, ref. IBCC/RC-1/Impl-2/2025/758' },
];

export const structure = [
  {
    role: 'Parent company',
    name: 'International Testing Services (ITS)',
    points: ['Holds the group registrations, recognitions and track record', 'Recognised exam delivery partner for international institutions', 'Listed by the Pakistan Bar Council as an approved foreign exam agency (September 2026)'],
  },
  {
    role: 'Operating subsidiary',
    name: 'International Testing Alliance (ITA)',
    points: ['IBCC-registered exam delivery across Pakistan', 'Independent invigilation with no stake in grading or teaching candidates', 'Uses the ITS group accreditations to deliver conflict-free exam administration in nine cities'],
  },
];
