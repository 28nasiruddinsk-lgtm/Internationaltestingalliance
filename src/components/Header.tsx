'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import { img } from '@/data/images';
import { Arrow, Wrap } from './ui';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [announce, setAnnounce] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {announce && !scrolled && (
        <div className="bg-navy text-[13px] text-white">
          <Wrap className="flex min-h-[40px] items-center gap-4 py-2">
            <span className="flex-none rounded-full bg-blue px-3 py-0.5 text-[12px] font-semibold">Announcement</span>
            <Link href="/news/" className="group truncate hover:underline">
              {site.announcement} <Arrow className="ml-1" />
            </Link>
            <button aria-label="Dismiss announcement" onClick={() => setAnnounce(false)}
              className="ml-auto flex h-8 w-8 flex-none items-center justify-center text-white/70 hover:text-white">
              <svg width="12" height="12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </Wrap>
        </div>
      )}
      <div className="border-b border-line">
        <Wrap className={`flex items-center transition-all duration-300 ${scrolled ? 'h-[68px]' : 'h-[92px]'}`}>
          <Link href="/" aria-label="International Testing Alliance home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('logo')} alt={site.name} className={`max-w-none transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`} />
          </Link>
          <nav className="ml-auto hidden items-center xl:flex" aria-label="Main">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="navlink relative whitespace-nowrap px-3 py-8 text-[15px] text-ink hover:text-blue">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 xl:ml-6">
            <Link href="/contact/" className="hidden whitespace-nowrap rounded-full border border-blue px-5 py-2.5 text-[14px] font-semibold text-blue hover:bg-tint md:inline-block">
              Contact us
            </Link>
            <Link href="/candidates/" className="hidden whitespace-nowrap rounded-full bg-blue px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-navy sm:inline-block">
              Book an exam
            </Link>
            <button aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)} className="flex h-11 w-11 items-center justify-center xl:hidden">
              <svg width="22" height="14" aria-hidden="true"><path d="M0 1h22M0 7h22M0 13h22" stroke="#0E2240" strokeWidth="1.6" /></svg>
            </button>
          </div>
        </Wrap>
      </div>
      {menu && (
        <div className="border-b border-line bg-white xl:hidden">
          <Wrap className="py-3">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setMenu(false)} className="block border-b border-line py-3 text-[17px] text-ink">
                {n.label}
              </Link>
            ))}
          </Wrap>
        </div>
      )}
    </header>
  );
}
