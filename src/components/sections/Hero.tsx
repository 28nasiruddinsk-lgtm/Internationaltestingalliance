'use client';
import Link from 'next/link';
import { useState } from 'react';
import { audiences, type AudienceKey } from '@/data/home';
import { img } from '@/data/images';
import { site } from '@/data/site';
import { bodies, bodyKeys } from '@/data/partners';
import Logo from '../Logo';
import { Arrow } from '../ui';

export default function Hero() {
  const [key, setKey] = useState<AudienceKey>('bodies');
  const a = audiences[key];
  const entries = Object.entries(audiences) as [AudienceKey, (typeof audiences)[AudienceKey]][];

  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
        <div className="relative z-10 bg-navy text-white">
          <div className="flex h-full flex-col px-6 pb-28 pt-12 md:px-12 lg:pb-32 lg:pl-[max(48px,calc((100vw-1520px)/2+56px))] lg:pr-14 lg:pt-12">
            <div className="flex max-w-full gap-1 self-start overflow-x-auto rounded-full border border-white/40 p-1 [scrollbar-width:none]" role="tablist" aria-label="Choose who you are">
              {entries.map(([k, v]) => (
                <button key={k} role="tab" aria-selected={key === k} onClick={() => setKey(k)}
                  className={`flex-none whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] sm:px-4 font-semibold transition-colors ${key === k ? 'bg-white text-blue' : 'text-white hover:bg-white/10'}`}>
                  {v.tab}
                </button>
              ))}
            </div>
            <div key={key} className="swap">
              <h1 className="mt-9 font-serif text-[26px] leading-[1.15] md:text-[36px]">{a.heading}</h1>
              {key === 'bodies' && (
                <ul className="mt-7 grid max-w-[480px] grid-cols-4 gap-2" aria-label="Awarding bodies we deliver for">
                  {bodyKeys.map((k) => (
                    <li key={k}>
                      <Link href={bodies[k].href} className="block h-full opacity-95 transition-opacity hover:opacity-100"><Logo k={k} box="h-5 md:h-6" className="h-full !rounded-lg !p-2" /></Link>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-7 max-w-[500px] text-[16px] leading-[1.65] text-white/85">{a.text}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href={a.href} className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-blue hover:bg-tint">
                  {a.cta} <Arrow />
                </Link>
                <a href="#contact-us" className="inline-flex items-center gap-2 text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white">
                  Contact us
                </a>
              </div>
            </div>
            <ul className="mt-auto grid max-w-[560px] gap-3 pt-10 sm:grid-cols-2" aria-label="Registrations and approvals">
              {site.approvals.map((a) => (
                <li key={a.body}>
                  <Link href="/licensing-and-approvals/" className="block h-full rounded-2xl border border-white/15 bg-white/[.06] p-4 transition-colors hover:border-white/35 hover:bg-white/10">
                    <span className="flex items-center justify-between gap-3">
                      <span className="rounded-md bg-white px-2.5 py-1 text-[13px] font-bold" style={{ color: a.color }}>{a.body}</span>
                      <span className="text-[11px] font-semibold tracking-[.12em] text-sky">ITS GROUP</span>
                    </span>
                    <span className="mt-3 block text-[14px] font-semibold leading-snug text-white">{a.title}</span>
                    <span className="mt-3 block text-[10.5px] font-semibold tracking-[.14em] text-sky/90">REFERENCE</span>
                    <span className="mt-0.5 block text-[13px] text-white/85">{a.ref}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden bg-navy lg:h-auto lg:min-h-[440px]">
          {entries.map(([k, v]) => (
            <img key={k} src={img(v.image)} alt={v.alt} className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: key === k ? 1 : 0, transform: key === k ? 'scale(1)' : 'scale(1.04)', transition: 'opacity .9s ease, transform 1.4s cubic-bezier(.2,.7,.2,1)' }} />
          ))}
          <a href="#film" className="group absolute bottom-24 left-6 flex items-center gap-4 rounded-full bg-white/95 py-2 pl-2 pr-6 text-ink shadow-[0_10px_30px_rgba(14,34,64,.25)] hover:bg-white">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue">
              <span className="pulse absolute inset-0 rounded-full bg-blue/40" />
              <svg width="14" height="16" aria-hidden="true" className="relative ml-1"><path d="M0 0l14 8-14 8z" fill="#fff" /></svg>
            </span>
            <span>
              <span className="block text-[12px] text-muted">Film · 21 seconds</span>
              <span className="block text-[15px] font-semibold">Watch a sitting at ITA</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
