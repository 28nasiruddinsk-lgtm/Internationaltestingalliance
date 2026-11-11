import { basePath } from './images';

// The four awarding bodies. `logo` is the official file in public/images/logos/ (SVG first, transparent PNG
// if there is none). Never recolour, crop or restyle it.
// Files taken from each body's own website (Nov 2026); no SVG is published, so these are the PNGs they use.
// `about` is the company profile's partner text (slide 18).
export const bodies = {
  greenwich: { name: 'University of Greenwich UK', href: '/university-of-greenwich-uk/', logo: 'university-of-greenwich.png',
    about: 'Computer- and paper-based exam delivery, including candidate registration, payment portals, flexibility, prompt reports, Statement of Entry access, and real-time attendance tracking.' },
  cg: { name: 'City & Guilds', href: '/city-and-guilds/', logo: 'city-and-guilds.png',
    about: 'For City & Guilds, we manage sessions according to standardized protocols and deliver comprehensive reports immediately following each sitting.' },
  ncc: { name: 'NCC Education', href: '/ncc-education/', logo: 'ncc-education.png',
    about: 'We provide NCC Education with independent records for every exam sitting and accommodate candidates across partner premises.' },
  gems: { name: 'GEMS Pathways', href: '/gems-pathways/', logo: 'gems-pathways.png',
    about: 'ITA manages examination operations for GEMS Pathways, including planning, candidate coordination, invigilation and secure exam delivery.' },
} as const;

export type BodyKey = keyof typeof bodies;
export const bodyKeys = Object.keys(bodies) as BodyKey[];
export const logoSrc = (k: BodyKey) => bodies[k].logo && `${basePath}/images/logos/${bodies[k].logo}`;
