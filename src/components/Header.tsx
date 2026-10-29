'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link href="/" className="font-serif text-2xl text-navy">
          {site.short}
          <span className="ml-3 hidden font-sans text-sm text-muted lg:inline">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Main">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-blue">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact/" className="btn-primary hidden sm:inline-flex">Contact us</Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={menu}
            aria-label="Menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? '×' : '≡'}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="container-page flex flex-col gap-4 border-t border-line py-5 lg:hidden" aria-label="Mobile">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setMenu(false)}>{n.label}</Link>
          ))}
          <Link href="/contact/" onClick={() => setMenu(false)} className="btn-primary self-start">Contact us</Link>
        </nav>
      )}
      <div className="h-0.5 origin-left bg-blue" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
