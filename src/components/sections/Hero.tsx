'use client';
import Link from 'next/link';
import { useState } from 'react';
import { audiences, type AudienceKey } from '@/data/home';
import { img } from '@/data/images';
import { site } from '@/data/site';
import { Arrow } from '../ui';

export default function Hero() {
  const [key, setKey] = useState<AudienceKey>('bodies');
  const a = audiences[key];
  const entries = Object.entries(audiences) as [AudienceKey, (typeof audiences)[AudienceKey]][];

  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
        <div className="relative z-10 bg-navy text-white">
          <div className="flex h-full flex-col px-6 pb-24 pt-12 md:px-12 lg:pl-[max(48px,calc((100vw-1520px)/2+56px))] lg:pr-14 lg:pt-12">
            <div className="flex max-w-full gap-1 self-start overflow-x-auto rounded-full border border-white/40 p-1 [scrollbar-width:none]" role="tablist" aria-label="Choose who you are">
              {entries.map(([k, v]) => (
                <button key={k} role="tab" aria-selected={key === k} onClick={() => setKey(k)}
                  className={`flex-none whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] sm:px-4 font-semibold transition-colors ${key === k ? 'bg-white text-blue' : 'text-white hover:bg-white/10'}`}>
                  {v.tab}
                </button>
              ))}
            </div>
            <div key={key} className="swap">
              <h1 className="mt-6 font-serif text-[26px] leading-[1.15] md:text-[36px]">{a.heading}</h1>
              {/* TODO: line pending client confirmation (SEO brief) */}
              <p className="mt-3 text-[16px] font-semibold text-white">An IBCC-registered testing service in Pakistan and the UAE.</p>
              <p className="mt-3 max-w-[500px] text-[16px] leading-[1.65] text-white/85">{a.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link href={a.href} className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-blue hover:bg-tint">
                  {a.cta} <Arrow />
                </Link>
                <a href="#contact-us" className="inline-flex items-center gap-2 text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white">
                  Contact us
                </a>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6 text-[13px] text-white/85">
              <span className="border-r border-white/30 pr-5">
                IBCC registration<br /><b className="font-semibold text-white">Ref. {site.ibccRef}</b>
              </span>
              <span>A subsidiary of<br /><b className="font-semibold text-white">International Testing Services</b></span>
            </div>
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
