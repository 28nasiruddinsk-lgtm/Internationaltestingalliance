import type { ImageKey } from './images';

export const day: [time: string, title: string, text: string, image: ImageKey][] = [
  ['07:30', 'Venue opened and checked', 'The hall is inspected, desks numbered at regulation spacing and rules posted at the entrance.', 's_hall19'],
  ['08:15', 'Candidates arrive', 'Walk-through screening, photo ID and QR verification for every candidate before entry.', 'qr_scan'],
  ['08:45', 'Briefing and seating', 'Candidates are briefed on the rules and seated to the plan. Personal items are stored away.', 's_teacher11'],
  ['09:00', 'Papers opened', 'Sealed papers are opened in front of candidates. Start and end times are posted on the board.', 's_answer13'],
  ['09:05', 'Live invigilation', 'Invigilators patrol the room, log anything unusual and escalate incidents immediately.', 's_student15'],
  ['12:10', 'Papers sealed', 'Scripts are counted, sealed and logged against the attendance register.', 's_sheet14'],
  ['Same day', 'Report sent', 'Attendance, incident logs and evidence go to the awarding body in one record.', 's_meet4'],
];

// Film: start second, title, caption. TODO: replace with the real film when supplied.
export const filmChapters: [number, string, string][] = [
  [0, 'Doors and screening', 'Walk-through screening at the entrance'],
  [3.4, 'Identity and QR check', 'Photo ID and QR verified at registration'],
  [6.8, 'Candidate briefing', 'Rules explained before the session'],
  [10.2, 'Session board posted', 'Exam, start and end times on the board'],
  [13.6, 'Supervised sitting', 'Invigilators on the floor'],
  [17.0, 'Hall reset', 'Ready for the next sitting'],
];
export const filmSeconds = 21;

// Session log for the hall replay: progress point (0-100), clock, text. Illustrative data.
export const hallLog: [number, string, string][] = [
  [0, '08:15', 'Doors opened. Screening and ID checks begin.'],
  [7, '08:19', 'First candidate verified with photo ID and QR.'],
  [30, '08:38', '24 of 48 candidates checked in.'],
  [58, '08:57', '48 of 48 checked in. Doors closed.'],
  [62, '09:00', 'Papers unsealed in front of candidates.'],
  [81, '10:42', 'Incident at desk C4: candidate unwell, escorted, time recorded.'],
  [95, '12:00', 'Time called. Scripts collected.'],
  [99, '12:10', 'Scripts sealed. Report sent to awarding body.'],
];
