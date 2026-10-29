'use client';
import { useEffect, useState } from 'react';
import { stats } from '@/data/home';
import { Kicker, H2, Rise, Wrap, prefersReducedMotion, useInView } from '../ui';

function Count({ to, run, delay }: { to: number; run: boolean; delay: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) { setN(to); return; }
    let raf = 0;
    let start = 0;
    const timer = setTimeout(() => {
      const tick = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / 1600);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [run, to, delay]);
  return <>{n}</>;
}

export default function Counters() {
  const [ref, seen] = useInView<HTMLElement>(0.35);
  return (
    <section ref={ref} className="bg-tint pb-24 pt-20 md:pb-32 md:pt-24">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise className="max-w-[640px]">
            <Kicker>ITA in numbers</Kicker>
            <H2>A young organisation with a wide reach.</H2>
          </Rise>
          <p className="text-[13px] text-muted">Figures as of October 2026. Source: ITA operations.</p>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, k) => (
            <div key={s.label} className="group relative bg-white p-8 transition-colors hover:bg-[#F7FAFE]">
              <div className="flex items-baseline gap-1 font-serif text-[40px] leading-none text-blue tabular-nums md:text-[46px]">
                {s.word ? <span className="text-[30px] md:text-[34px]">{s.word}</span> : <Count to={s.value} run={seen} delay={k * 180} />}
                <span className="text-[24px] text-navy">{s.suffix}</span>
              </div>
              <div className="mt-5 h-[3px] w-full bg-line">
                <div className="h-full bg-blue" style={{ width: seen ? '100%' : '0%', transition: `width 1.6s cubic-bezier(.2,.7,.2,1) ${k * 180}ms` }} />
              </div>
              <h3 className="mt-5 font-serif text-[18px] text-ink">{s.label}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-body">{s.text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
