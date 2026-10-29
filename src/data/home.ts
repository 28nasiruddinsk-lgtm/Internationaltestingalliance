import type { ImageKey } from './images';

export type AudienceKey = 'bodies' | 'uni' | 'cand';

export const audiences: Record<AudienceKey, {
  tab: string; heading: string; text: string; cta: string; href: string; image: ImageKey; alt: string;
}> = {
  bodies: {
    tab: 'Awarding bodies',
    heading: 'Your examinations, delivered independently and to your protocols.',
    text: 'We verify every candidate, run every session and send you a complete record afterwards. We never teach, mark or grade.',
    cta: 'Discuss a partnership', href: '/awarding-bodies/',
    image: 'n_inst', alt: 'Institutional examination building',
  },
  uni: {
    tab: 'Universities',
    heading: 'One standard across every campus and every city.',
    text: 'Paper and computer-based sittings with registration, payment collection and live attendance in one partner portal.',
    cta: 'Plan a multi-campus sitting', href: '/services/',
    image: 's_lecture12', alt: 'University examination hall',
  },
  cand: {
    tab: 'Candidates',
    heading: 'Sit your exam close to home, in a properly run centre.',
    text: 'Register, pay and download your Statement of Entry online, then sit in one of our venues across Pakistan or in Dubai.',
    cta: 'Book your exam', href: '/candidates/',
    image: 'n_teen', alt: 'Candidate during a listening paper',
  },
};

export const quickLinks = [
  { title: 'Find a centre', text: 'Nine cities in Pakistan, plus Dubai.', href: '/centres/', icon: 'centre' },
  { title: 'Book an exam', text: 'Register, pay online and download your SOE.', href: '/candidates/', icon: 'book' },
  { title: 'Exam day guide', text: 'What to bring and when to arrive.', href: '/#day', icon: 'guide' },
] as const;

export const stats = [
  { value: 9, suffix: '', label: 'Core markets', text: 'Pakistan, UAE, Saudi Arabia, Iraq, Egypt, Bahrain, Malaysia, Uzbekistan and the UK' },
  { value: 9, suffix: '', label: 'Cities in Pakistan', text: 'Karachi to Gilgit, with venues confirmed for each sitting' },
  { value: 3, suffix: '', label: 'International awarding bodies', text: 'University of Greenwich, City & Guilds and NCC Education' },
  { value: 24, suffix: 'h', label: 'Report turnaround', text: 'Full session record to the awarding body within a day' },
];

export const services: { title: string; text: string; image: ImageKey }[] = [
  { title: 'Exam management', text: 'Scheduling, venue preparation, candidate checks and post-session reporting.', image: 's_sheet14' },
  { title: 'Professional invigilation', text: 'Trained, impartial staff supervise every session from start to finish.', image: 's_teacher11' },
  { title: 'Secure venues', text: 'Controlled access, CCTV oversight and secure storage of materials.', image: 'n_cctv' },
  { title: 'Technology and quality', text: 'Digital ID and QR verification, incident reporting and a full audit trail.', image: 'n_tech' },
];

export const parties = [
  ['Institution', 'Sets the exam protocols and confirms candidate requirements.'],
  ['ITA', 'Verifies candidates, manages venues and invigilation, and records the session.'],
  ['Awarding body', 'Sets the assessment, marks it and issues the results.'],
];

export const gallery: [ImageKey, string, string][] = [
  ['centre_gems', 'Hall set for the GEMS scholarship programme', 'Partner sitting'],
  ['exam_sitting', 'Supervised sitting, invigilators on the floor', 'In progress'],
  ['hall_rows', 'Rows set to the seating plan', 'Large hall'],
  ['invigilators', 'Staff check-in desk', 'Registration'],
  ['centre_room', 'Folding desks and session wall', 'Exam room'],
  ['hall', 'Halls set in advance', 'Karachi'],
  ['entrance', 'Walk-through screening', 'Entrance'],
  ['verify', 'Photo ID and QR checks', 'Registration'],
  ['briefing', 'Candidate briefing', 'Before the session'],
  ['board', 'Session board', 'Exam room'],
  ['exam', 'Supervised sitting', 'In progress'],
  ['row', 'Row and desk markers', 'Seating plan'],
  ['signage', 'Code of conduct', 'Every venue'],
];
