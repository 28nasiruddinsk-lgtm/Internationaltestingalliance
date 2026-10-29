export const siteUrl = 'https://intltestingalliance.com'; // TODO: confirm the live domain

export const site = {
  name: 'International Testing Alliance',
  email: 'info@intltestingalliance.com',
  phones: { Pakistan: '+92 322 8490221', Dubai: '+971 55 978 1353' },
  ibccRef: 'IBCC/RC-1/Impl-2/2025/758',
  announcement: 'Pakistan Bar Council lists ITS, our parent company, among approved agencies for foreign law examinations, September 2026',
  nav: [
    { label: 'About', href: '/about-us/' },
    { label: 'Services', href: '/services/' },
    { label: 'Awarding bodies', href: '/awarding-bodies/' },
    { label: 'Candidates', href: '/candidates/' },
    { label: 'Centres', href: '/centres/' },
    { label: 'News', href: '/news-events/' },
  ],
  footer: [
    { title: 'ITA', links: [['About us', '/about-us/'], ['Contact us', '/contact/'], ['Licensing and approvals', '/licensing-and-approvals/'], ['News and events', '/news-events/'], ['Careers', '/careers/']] },
    { title: 'Services', links: [['Exam management', '/exam-management/'], ['Secure venues', '/exam-venues/'], ['Technology and quality assurance', '/technology-driven-solutions/'], ['Professional invigilation', '/professional-invigilation/']] },
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
