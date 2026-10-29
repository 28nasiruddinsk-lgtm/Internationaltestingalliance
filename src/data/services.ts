export type Service = { slug: string; title: string; summary: string; image: string; points: string[] };

export const services: Service[] = [
  {
    slug: 'exam-management',
    title: 'Exam management',
    summary: 'We handle scheduling, venue preparation, candidate checks and post-session reporting.',
    image: '/images/sitting.webp',
    points: ['Operational plan agreed with your team', 'Venue and schedule coordination', 'Candidate registration support', 'Consolidated post-session report'],
  },
  {
    slug: 'secure-venues',
    title: 'Secure venues',
    summary: 'Controlled access, CCTV oversight and secure storage at every location.',
    image: '/images/hall-rows.webp',
    points: ['Controlled entry and seating plans', 'CCTV oversight', 'Secure storage of materials', 'Documented chain of custody'],
  },
  {
    slug: 'technology-and-quality',
    title: 'Technology and quality assurance',
    summary: 'Digital ID and QR checks support verification; incident reports and session logs give an audit trail.',
    image: '/images/qr-scan.webp',
    points: ['Digital identity and QR check-in', 'Partner portal with live visibility', 'Incident reports and session logs', 'Quality assurance checks'],
  },
  {
    slug: 'professional-invigilation',
    title: 'Professional invigilation',
    summary: 'Trained personnel supervise exam sessions impartially, from start to finish.',
    image: '/images/invigilators.webp',
    points: ['Trained, impartial invigilators', 'Consistent procedures in every city', 'Prompt escalation of issues', 'Attendance registers for every sitting'],
  },
];
