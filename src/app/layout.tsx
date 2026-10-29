import type { Metadata } from 'next';
import { Libre_Caslon_Text, Open_Sans } from 'next/font/google';
import Progress from '@/components/Progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { organizationSchema, site, siteUrl } from '@/data/site';
import './globals.css';

const caslon = Libre_Caslon_Text({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-caslon' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-open-sans' });

const homeTitle = 'International Testing Alliance | Testing Service in Pakistan';
const homeDescription = 'IBCC-registered testing service in Pakistan and the UAE. Independent exam management, invigilation and secure exam centres for universities and awarding bodies.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: './' },
  title: { default: homeTitle, template: '%s | ITA' },
  description: homeDescription,
  openGraph: { title: homeTitle, description: homeDescription, type: 'website', siteName: site.name, images: ['/images/hall.jpg'] },
  twitter: { card: 'summary_large_image', title: homeTitle, description: homeDescription, images: ['/images/hall.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caslon.variable} ${openSans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {/* without JavaScript nothing may stay hidden by the reveal animation */}
        <noscript><style>{'[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style></noscript>
        <a href="#main" className="sr-only z-[80] bg-white px-4 py-2 text-blue focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Progress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
