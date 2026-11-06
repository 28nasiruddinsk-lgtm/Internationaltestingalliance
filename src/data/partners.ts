import { basePath } from './images';

// The four awarding bodies. `logo` is the official file in public/images/logos/ (SVG first, transparent PNG
// if there is none). Never recolour, crop or restyle it.
// Files taken from each body's own website (Nov 2026); no SVG is published, so these are the PNGs they use.
export const bodies = {
  greenwich: { name: 'University of Greenwich UK', href: '/university-of-greenwich-uk/', logo: 'university-of-greenwich.png' },
  cg: { name: 'City & Guilds', href: '/city-and-guilds/', logo: 'city-and-guilds.png' },
  ncc: { name: 'NCC Education', href: '/ncc-education/', logo: 'ncc-education.png' },
  gems: { name: 'GEMS Pathways', href: '/gems-pathways/', logo: 'gems-pathways.png' },
} as const;

export type BodyKey = keyof typeof bodies;
export const bodyKeys = Object.keys(bodies) as BodyKey[];
export const logoSrc = (k: BodyKey) => bodies[k].logo && `${basePath}/images/logos/${bodies[k].logo}`;
