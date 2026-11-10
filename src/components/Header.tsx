'use client';
import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/data/site';
import { img } from '@/data/images';
import { Arrow, Wrap } from './ui';

const Chevron = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [announce, setAnnounce] = useState(true);
  const [open, setOpen] = useState<string | null>(null); // label of the open desktop dropdown

  return (
    <>
      {announce && (
        <div className="bg-navy text-[13px] text-white">
          <Wrap className="flex min-h-[40px] items-center gap-4 py-2">
            <span className="flex-none rounded-full bg-blue px-3 py-0.5 text-[12px] font-semibold">Announcement</span>
            <Link href="/news-events/" className="group truncate hover:underline">
              {site.announcement} <Arrow className="ml-1" />
            </Link>
            <button aria-label="Dismiss announcement" onClick={() => setAnnounce(false)}
              className="ml-auto flex h-8 w-8 flex-none items-center justify-center text-white/70 hover:text-white">
              <svg width="12" height="12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </Wrap>
        </div>
      )}
      <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-line">
        <Wrap className="flex h-[80px] items-center">
          <Link href="/" aria-label="International Testing Alliance home">
            <img src={img('logo')} alt={site.name} className="h-8 max-w-none sm:h-10" />
          </Link>
          <nav className="ml-auto hidden items-center xl:flex" aria-label="Main" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(null); }}>
            {site.nav.map((n) => n.items ? (
              <div key={n.label} className="relative"
                onMouseEnter={() => setOpen(n.label)} onMouseLeave={() => setOpen(null)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null); }}>
                <button aria-expanded={open === n.label} aria-haspopup="true" onClick={() => setOpen(open === n.label ? null : n.label)}
                  className={`navlink relative flex items-center gap-1.5 whitespace-nowrap px-3 py-7 text-[15px] hover:text-blue ${open === n.label ? 'text-blue' : 'text-ink'}`}>
                  {n.label} <Chevron open={open === n.label} />
                </button>
                {open === n.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[280px] border-t-[3px] border-blue bg-white py-3 shadow-[0_18px_40px_rgba(14,34,64,.14)]">
                    <ul>
                      {n.items.map(([label, href, sub]) => (
                        <li key={href}>
                          <Link href={href} onClick={() => setOpen(null)} className={`block whitespace-nowrap py-2.5 pr-5 hover:bg-tint hover:text-blue ${sub ? 'pl-9 text-[14px] text-body' : 'pl-5 text-[15px] text-ink'}`}>{sub && <span aria-hidden="true" className="mr-2 text-blue">↳</span>}{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.label} href={n.href!} className="navlink relative whitespace-nowrap px-3 py-7 text-[15px] text-ink hover:text-blue">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 xl:ml-6">
            <a href={site.portal} className="hidden whitespace-nowrap rounded-full border border-blue px-5 py-2.5 text-[14px] font-semibold text-blue hover:bg-tint md:inline-block">
              Partner portal
            </a>
            <Link href="/book-an-exam/" className="hidden whitespace-nowrap rounded-full bg-blue px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-navy sm:inline-block">
              Book an exam
            </Link>
            <button aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)} className="flex h-11 w-11 items-center justify-center xl:hidden">
              <svg width="22" height="14" aria-hidden="true">
                <path d={menu ? 'M3 1l16 12M19 1L3 13' : 'M0 1h22M0 7h22M0 13h22'} stroke="#0E2240" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </Wrap>
      </div>
      {menu && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-b border-line bg-white xl:hidden">
          <Wrap className="py-3">
            {site.nav.map((n) => n.items ? (
              <details key={n.label} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[17px] text-ink [&::-webkit-details-marker]:hidden">
                  {n.label}
                  <svg aria-hidden="true" width="12" height="7" viewBox="0 0 12 7" className="text-blue transition-transform duration-200 group-open:rotate-180">
                    <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </summary>
                <ul className="mb-3 border-l-[3px] border-blue pl-4">
                  {n.items.map(([label, href, sub]) => (
                    <li key={href}>
                      <Link href={href} onClick={() => setMenu(false)} className={`block py-2 text-body hover:text-blue ${sub ? 'pl-4 text-[14px]' : 'text-[15px]'}`}>{sub && <span aria-hidden="true" className="mr-2 text-blue">↳</span>}{label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link key={n.label} href={n.href!} onClick={() => setMenu(false)} className="block border-b border-line py-3 text-[17px] text-ink">
                {n.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 py-5">
              <Link href="/book-an-exam/" onClick={() => setMenu(false)} className="rounded-full bg-blue px-5 py-2.5 text-[14px] font-semibold text-white">Book an exam</Link>
              <a href={site.portal} className="rounded-full border border-blue px-5 py-2.5 text-[14px] font-semibold text-blue">Partner portal</a>
              <Link href="/contact/" onClick={() => setMenu(false)} className="rounded-full border border-line px-5 py-2.5 text-[14px] font-semibold text-ink">Contact us</Link>
            </div>
          </Wrap>
        </div>
      )}
      </header>
    </>
  );
}
