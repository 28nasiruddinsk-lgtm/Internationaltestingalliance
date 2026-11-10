export const siteUrl = 'https://intltestingalliance.com'; // TODO: confirm the live domain

export const site = {
  name: 'International Testing Alliance',
  email: 'info@intltestingalliance.com',
  phones: { Pakistan: '+92 322 8490221', Dubai: '+971 55 978 1353' },
  ibccRef: 'IBCC/RC-1/Impl-2/2025/758',
  portal: 'https://portal.intltestingalliance.com/', // ITA portal for partners and candidates
  announcement: 'Pakistan Bar Council lists ITS, our parent company, among approved agencies for foreign law examinations, September 2026',
  // header: an entry with `items` opens a dropdown; one with only `href` is a plain link
  nav: [
    { label: 'About', items: [['About us', '/about-us/'], ['Our board and management', '/our-board-and-management/'], ['Licensing and approvals', '/licensing-and-approvals/'], ['Compliance and security', '/compliance-security/'], ['UAE and Dubai', '/uae/'], ['Careers', '/careers/']] },
    { label: 'Services', items: [['All services', '/services/'], ['Exam management', '/exam-management/'], ['Secure venues', '/exam-venues/'], ['Technology and quality assurance', '/technology-driven-solutions/'], ['Professional invigilation', '/professional-invigilation/']] },
    { label: 'Awarding bodies', items: [['All awarding bodies', '/awarding-bodies/'], ['University of Greenwich UK', '/university-of-greenwich-uk/'], ['City & Guilds', '/city-and-guilds/'], ['International Foundation Programme', '/international-foundation-program/', true], ['NCC Education', '/ncc-education/'], ['GEMS Pathways', '/gems-pathways/']] },
    { label: 'Candidates', items: [['Book an exam', '/book-an-exam/'], ['Exam day guidelines', '/exam-day-guidelines/']] },
    { label: 'News', href: '/news-events/' },
    { label: 'Contact', href: '/contact/' },
  ] as { label: string; href?: string; items?: [label: string, href: string, sub?: boolean][] }[],
  footer: [
    { title: 'ITA', links: [['About us', '/about-us/'], ['Our board and management', '/our-board-and-management/'], ['Licensing and approvals', '/licensing-and-approvals/'], ['UAE and Dubai', '/uae/'], ['News and events', '/news-events/'], ['Careers', '/careers/'], ['Become a partner', '/become-a-partner/'], ['Contact us', '/contact/']] },
    { title: 'Services', links: [['All services', '/services/'], ['Exam management', '/exam-management/'], ['Secure venues', '/exam-venues/'], ['Technology and quality assurance', '/technology-driven-solutions/'], ['Professional invigilation', '/professional-invigilation/']] },
    { title: 'Awarding bodies', links: [['All awarding bodies', '/awarding-bodies/'], ['University of Greenwich UK', '/university-of-greenwich-uk/'], ['City & Guilds', '/city-and-guilds/'], ['International Foundation Programme', '/international-foundation-program/'], ['NCC Education', '/ncc-education/'], ['GEMS Pathways', '/gems-pathways/']] },
    { title: 'Candidates', links: [['Book an exam', '/book-an-exam/'], ['Exam day guidelines', '/exam-day-guidelines/']] },
  ],
  offices: ['Karachi: 101 Marine Point, DC-1, Block 9, Clifton', 'Dubai: Level 21, Al Habtoor Business Tower, Dubai Marina'],
  legal: [['Privacy policy', '/privacy-policy/'], ['Compliance and security', '/compliance-security/']],
};

// Organization schema (JSON-LD), added to every page in app/layout.tsx
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: 'ITA',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  email: site.email,
  telephone: site.phones.Pakistan,
  parentOrganization: { '@type': 'Organization', name: 'International Testing Services (ITS)' },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: site.phones.Pakistan, areaServed: 'PK', email: site.email },
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: site.phones.Dubai, areaServed: 'AE', email: site.email },
  ],
  location: [
    { '@type': 'Place', name: 'ITA Karachi', address: { '@type': 'PostalAddress', streetAddress: '101 Marine Point, DC-1, Block 9, Clifton', addressLocality: 'Karachi', addressCountry: 'PK' } },
    { '@type': 'Place', name: 'ITA Dubai', address: { '@type': 'PostalAddress', streetAddress: 'Level 21, Al Habtoor Business Tower, Dubai Marina', addressLocality: 'Dubai', addressCountry: 'AE' } },
  ],
};
