import type { Metadata } from 'next';
import { Libre_Caslon_Text, Open_Sans } from 'next/font/google';
import Progress from '@/components/Progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const caslon = Libre_Caslon_Text({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-caslon' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://intltestingalliance.com'), // TODO: confirm the live domain
  alternates: { canonical: './' },
  title: { default: 'International Testing Alliance', template: '%s | ITA' },
  description: 'Independent examination delivery and invigilation in Pakistan, Dubai and international markets.',
  openGraph: {
    title: 'International Testing Alliance',
    description: 'Independent examination delivery and invigilation in Pakistan, Dubai and international markets.',
    type: 'website',
    images: ['/images/hall.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caslon.variable} ${openSans.variable}`}>
      <body>
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
