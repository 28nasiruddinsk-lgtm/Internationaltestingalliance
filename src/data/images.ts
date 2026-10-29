// Image keys used by the section data. Files live in /public/images.
const files = {
  logo: 'logo.png', logoW: 'logoW.png', portal: 'portal.jpg',
  hall: 'hall.jpg', entrance: 'entrance.jpg', verify: 'verify.jpg', briefing: 'briefing.jpg',
  board: 'board.jpg', exam: 'exam.jpg', registration: 'registration.jpg', invigilator: 'invigilator.jpg',
  row: 'row.jpg', signage: 'signage.jpg',
  s_dubai1: 's_dubai1.jpg', s_team2: 's_team2.jpg', s_walk3: 's_walk3.jpg', s_meet4: 's_meet4.jpg',
  s_group5: 's_group5.jpg', s_out6: 's_out6.jpg', s_team7: 's_team7.jpg', s_woman8: 's_woman8.jpg',
  s_teacher11: 's_teacher11.jpg', s_lecture12: 's_lecture12.jpg', s_answer13: 's_answer13.jpg',
  s_sheet14: 's_sheet14.jpg', s_student15: 's_student15.jpg', s_passport17: 's_passport17.jpg',
  s_board18: 's_board18.jpg', s_hall19: 's_hall19.jpg',
  // ITA's own centre photos
  centre_room: 'centre-room.webp', centre_gems: 'centre-gems.webp', hall_rows: 'hall-rows.webp',
  exam_sitting: 'exam-sitting.webp', invigilators: 'invigilators.webp', qr_scan: 'qr-scan.webp',
  ibcc_registered: 'ibcc-registered.png',
  n_inst: 'n_inst.jpg', n_teen: 'n_teen.jpg', n_tech: 'n_tech.jpg', n_cctv: 'n_cctv.jpg', n_qr: 'n_qr.jpg',
  n_walk: 'n_walk.jpg', n_team: 'n_team.jpg', n_ncc: 'n_ncc.jpg',
  n_pbc: 'n_pbc.png', n_ibccr: 'n_ibccr.png', n_ibccb: 'n_ibccb.png',
} as const;

export type ImageKey = keyof typeof files;
export const img = (key: ImageKey) => `/images/${files[key]}`;
