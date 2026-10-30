export type Country = {
  code: string; name: string; status: string; operating: boolean;
  cities: string; approvals: string; contact: string;
  photo:
    | 's_group5' | 's_walk3' | 'n_walk' | 'invigilators'
    | 'market_malaysia' | 'market_egypt' | 'market_iraq'
    | 'market_saudi' | 'market_uk' | 'market_uzbekistan';
};

const tbc = ''; // TODO: client to confirm approvals and status for each market
const email = 'info@intltestingalliance.com';
const partner = 'Partner venues arranged per sitting';

export const countries: Country[] = [
  { code: 'PAK', name: 'Pakistan', status: 'Operating centres', operating: true, photo: 's_group5',
    cities: 'Karachi, Hyderabad, Lahore, Islamabad, Rawalpindi, Gujranwala, Multan, Faisalabad, Gilgit',
    approvals: 'IBCC registration. Pakistan Bar Council approval for foreign law examinations.',
    contact: '101 Marine Point, DC-1, Block 9, Clifton, Karachi · +92 322 8490221' },
  { code: 'ARE', name: 'United Arab Emirates', status: 'Operating centre', operating: true, photo: 'invigilators',
    cities: 'Dubai', approvals: tbc, contact: 'Level 21, Al Habtoor Business Tower, Dubai Marina · +971 55 978 1353' },
  { code: 'SAU', name: 'Saudi Arabia', status: 'Core market', operating: false, photo: 'market_saudi', cities: partner, approvals: tbc, contact: email },
  { code: 'IRQ', name: 'Iraq', status: 'Core market', operating: false, photo: 'market_iraq', cities: partner, approvals: tbc, contact: email },
  { code: 'EGY', name: 'Egypt', status: 'Core market', operating: false, photo: 'market_egypt', cities: partner, approvals: tbc, contact: email },
  { code: 'BHR', name: 'Bahrain', status: 'Core market', operating: false, photo: 'n_walk', cities: partner, approvals: tbc, contact: email },
  { code: 'MYS', name: 'Malaysia', status: 'Core market', operating: false, photo: 'market_malaysia', cities: partner, approvals: tbc, contact: email },
  { code: 'UZB', name: 'Uzbekistan', status: 'Core market', operating: false, photo: 'market_uzbekistan', cities: partner, approvals: tbc, contact: email },
  { code: 'GBR', name: 'United Kingdom', status: 'Core market', operating: false, photo: 'market_uk', cities: 'Awarding body relationships', approvals: tbc, contact: 'WhatsApp +44 7401 137464' },
];
