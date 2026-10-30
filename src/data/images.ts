const files = {
  logo: 'logo.png',
  logoW: 'logoW.png',
  portal: 'portal.jpg',

  // ITA centre photos
  hall: 'hall.jpg',
  entrance: 'entrance.jpg',
  verify: 'verify.jpg',
  briefing: 'briefing.jpg',
  board: 'board.jpg',
  exam: 'exam.jpg',
  row: 'row.jpg',
  signage: 'signage.jpg',
  centre_room: 'centre-room.webp',
  centre_gems: 'centre-gems.webp',
  hall_rows: 'hall-rows.webp',
  exam_sitting: 'exam-sitting.webp',
  invigilators: 'invigilators.webp',
  qr_scan: 'qr-scan.webp',
  svc_exam: 'svc-exam-mgmt.webp',
  svc_venue: 'svc-venue.webp',
  svc_inv: 'svc-invigilation.webp',
  svc_qr: 'svc-qr.webp',
  hero_cand: 'hero-candidate.jpg',
  hero_uni: 'hero-university.jpg',
  ibcc_registered: 'ibcc-registered.png',

  // stock photos
  s_dubai1: 's_dubai1.jpg',
  s_team2: 's_team2.jpg',
  s_walk3: 's_walk3.jpg',
  s_meet4: 's_meet4.jpg',
  s_group5: 's_group5.jpg',
  s_teacher11: 's_teacher11.jpg',
  s_lecture12: 's_lecture12.jpg',
  s_answer13: 's_answer13.jpg',
  s_sheet14: 's_sheet14.jpg',
  s_student15: 's_student15.jpg',
  s_hall19: 's_hall19.jpg',
  market_malaysia: 'country-malaysia.webp',
  market_egypt: 'country-egypt.webp',
  market_iraq: 'country-iraq.webp',
  market_saudi: 'country-saudi.webp',
  market_uk: 'country-uk.webp',
  market_uzbekistan: 'country-uzbekistan.webp',
  market_uae: 'country-uae.webp',

  // hero, services and news
  n_inst: 'n_inst.jpg',
  n_teen: 'n_teen.jpg',
  n_tech: 'n_tech.jpg',
  n_cctv: 'n_cctv.jpg',
  n_walk: 'n_walk.jpg',
  n_ncc: 'n_ncc.jpg',
  n_pbc: 'n_pbc.png',
  n_ibccr: 'n_ibccr.png',
  n_ibccb: 'n_ibccb.png',
} as const;

export type ImageKey = keyof typeof files;
// prefix for a sub-path deploy (GitHub Pages preview); empty in normal builds
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const img = (key: ImageKey) => `${basePath}/images/${files[key]}`;
