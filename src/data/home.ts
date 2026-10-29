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
    image: 'hall_rows', alt: 'Rows of numbered desks set out in an ITA exam hall for a large sitting',
  },
  uni: {
    tab: 'Universities',
    heading: 'One standard across every campus and every city.',
    text: 'Paper and computer-based sittings with registration, payment collection and live attendance in one partner portal.',
    cta: 'Plan a multi-campus sitting', href: '/services/',
    image: 'centre_gems', alt: 'ITA exam hall set up for a partner sitting in Pakistan',
  },
  cand: {
    tab: 'Candidates',
    heading: 'Sit your exam close to home, in a properly run centre.',
    text: 'Register, pay and download your Statement of Entry online, then sit in one of our venues across Pakistan or in Dubai.',
    cta: 'Book your exam', href: '/candidates/',
    image: 'exam_sitting', alt: 'Invigilators supervising candidates in an ITA exam hall',
  },
};

export const quickLinks = [
  { title: 'Find a centre', text: 'Nine cities in Pakistan, plus Dubai.', href: '/centres/', icon: 'centre' },
  { title: 'Book an exam', text: 'Register, pay online and download your SOE.', href: '/candidates/', icon: 'book' },
  { title: 'Exam day guide', text: 'What to bring and when to arrive.', href: '/#day', icon: 'guide' },
] as const;

// `word` replaces the count-up for a figure that is not a number
export const stats: { value: number; suffix: string; word?: string; label: string; text: string }[] = [
  { value: 9, suffix: '', label: 'Core markets', text: 'Pakistan, Iraq, UAE, Saudi Arabia, Egypt, Bahrain, Malaysia, Uzbekistan and the UK' },
  { value: 9, suffix: '', label: 'Cities in Pakistan', text: 'Karachi to Gilgit, with venues confirmed for each sitting' },
  { value: 4, suffix: '', label: 'International awarding bodies', text: 'NCC Education, City & Guilds, University of Greenwich UK and GEMS Pathways' },
  { value: 24, suffix: 'h', label: 'Report turnaround', text: 'Full session record to the awarding body within a day' },
];

export const services: { title: string; text: string; image: ImageKey; alt: string; href: string }[] = [
  { title: 'Exam management', text: 'Scheduling, venue preparation, candidate checks and post-session reporting.', image: 's_sheet14', href: '/exam-management/',
    alt: 'Exam paperwork being checked against a candidate list' },
  { title: 'Secure venues', text: 'Controlled access, CCTV oversight and secure storage of materials.', image: 'n_cctv', href: '/exam-venues/',
    alt: 'CCTV camera covering an ITA exam hall' },
  { title: 'Technology and quality assurance', text: 'Digital ID and QR verification, incident reporting and a full audit trail.', image: 'n_tech', href: '/technology-driven-solutions/',
    alt: 'Digital identity check on a screen at an ITA registration desk' },
  { title: 'Professional invigilation', text: 'Trained, impartial staff supervise every session from start to finish.', image: 's_teacher11', href: '/professional-invigilation/',
    alt: 'Invigilator supervising candidates during an exam' },
];

export const parties = [
  ['Institution', 'Sets the exam protocols and confirms candidate requirements.'],
  ['ITA', 'Verifies candidates, manages venues and invigilation and records the session.'],
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
