'use client';
import { useEffect, useState } from 'react';
import { day } from '@/data/sitting';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap, prefersReducedMotion, useInView } from '../ui';

export default function Day() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [ref, seen] = useInView<HTMLElement>(0.3);

  useEffect(() => {
    if (!seen || !auto || prefersReducedMotion()) return;
    const id = setInterval(() => setActive((x) => (x + 1) % day.length), 4200);
    return () => clearInterval(id);
  }, [seen, auto]);

  const [time, title, text] = day[active];
  return (
    <section id="day" ref={ref} className="bg-navy py-24 text-white md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker light>A sitting, hour by hour</Kicker>
          <H2>What happens on exam day.</H2>
          <p className="mt-4 text-[16px] text-white/70">A three-hour paper at one of our centres. Timings are typical and vary by awarding body.</p>
        </Rise>
        <div className="mt-12 grid gap-10 lg:grid-cols-[360px_1fr]">
          <ol>
            {day.map(([t, h], n) => (
              <li key={t}>
                <button onClick={() => { setActive(n); setAuto(false); }}
                  className={`group flex w-full items-baseline gap-5 border-l-[3px] py-3.5 pl-5 text-left transition-colors ${n === active ? 'border-sky bg-white/[.06]' : 'border-white/15 hover:border-white/40'}`}>
                  <span className={`w-[72px] flex-none text-[14px] font-semibold tabular-nums ${n === active ? 'text-sky' : 'text-white/70'}`}>{t}</span>
                  <span className={`font-serif text-[18px] ${n === active ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>{h}</span>
                </button>
              </li>
            ))}
          </ol>
          <div>
            <div className="relative h-[300px] overflow-hidden md:h-[420px]">
              {day.map(([t, , , image], n) => (
                <img loading="lazy" decoding="async" key={t} src={img(image)} alt="" className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: n === active ? 1 : 0, transition: 'opacity .8s ease', filter: 'saturate(.9)' }} />
              ))}
              <div className="absolute left-0 top-0 bg-sky px-4 py-2 text-[15px] font-semibold text-navy tabular-nums">{time}</div>
            </div>
            <div key={active} className="swap mt-6 max-w-[620px]" aria-live="polite">
              <h3 className="font-serif text-[20px]">{title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-white/85">{text}</p>
            </div>
            <div className="mt-6 h-[2px] bg-white/15"><div className="h-full bg-sky transition-all duration-500" style={{ width: `${((active + 1) / day.length) * 100}%` }} /></div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
