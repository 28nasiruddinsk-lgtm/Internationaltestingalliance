import type { Metadata } from 'next';
import { Libre_Caslon_Text, Open_Sans } from 'next/font/google';
import Progress from '@/components/Progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const caslon = Libre_Caslon_Text({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-caslon' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: { default: 'International Testing Alliance', template: '%s | ITA' },
  description: 'Independent examination delivery and invigilation in Pakistan, Dubai and international markets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caslon.variable} ${openSans.variable}`}>
      <body>
        <Progress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
