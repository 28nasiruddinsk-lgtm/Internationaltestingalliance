'use client';
import { useEffect, useRef, useState } from 'react';
import { Rise, Wrap, prefersReducedMotion } from '../ui';

// Corporate structure "orbit band", matching the earlier ITA site: as the section scrolls into view
// the ITA node travels along an arc around the ITS core and settles at the top right.
const CARDS = [
  { role: 'Parent company', name: 'International Testing Services', text: 'Holds registrations, recognitions, and foundational track record. It is the recognized exam delivery partner for international institutions.' },
  { role: 'Subsidiary', name: 'International Testing Alliance', text: 'IBCC-registered exam delivery across Pakistan. Independent invigilation with no stake in grading or candidate teaching.' },
];

const R = 210, C = 2 * Math.PI * R; // orbit radius and circumference in the 600×600 drawing
const START = 150, SWEEP = 165; // degrees: the node starts lower left and ends top right (315°)
const at = (deg: number) => [300 + R * Math.cos((deg * Math.PI) / 180), 300 + R * Math.sin((deg * Math.PI) / 180)];
const mono = 'font-mono text-[11px] font-semibold uppercase tracking-[.08em]';

export default function Structure() {
  const stage = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0); // 0 → 1 as the stage scrolls up the screen; locks at 1

  useEffect(() => {
    if (prefersReducedMotion()) { setP(1); return; }
    let frame = 0, done = false;
    const update = () => {
      frame = 0;
      const el = stage.current;
      if (!el || done) return;
      const r = el.getBoundingClientRect();
      // starts as the drawing enters the screen, settles once its top reaches a fifth of the way down
      const v = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight * 0.8)));
      if (v >= 1) done = true;
      setP(v);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const angle = START + SWEEP * p;
  const [nx, ny] = at(angle);
  const moving = p > 0.02 && p < 1;

  return (
    <section className="relative overflow-hidden py-24 text-white md:py-28" style={{ background: 'radial-gradient(circle at 70% 50%, #1B347F 0%, #101B32 75%)' }}>
      {/* drifting decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <span className="absolute right-[8%] top-[14%] h-3 w-3 rounded-full bg-[#7B9BE8]/80" style={{ transform: `translateY(${(1 - p) * 30}px)` }} />
        <span className="absolute right-[18%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-[#4A7A77]" style={{ transform: `translateY(${(p - 1) * 40}px)` }} />
        <span className="absolute left-[46%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#7B9BE8]/60" />
        <span className="absolute right-[4%] top-[58%] h-2 w-2 rounded-full bg-[#4A7A77]/80" />
      </div>
      <Wrap className="relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Rise>
            <p className={`${mono} inline-block rounded-full border border-white/20 bg-white/[.06] px-3.5 py-1.5`}>Corporate structure</p>
            <h2 className="mt-6 max-w-[520px] text-[30px] font-bold leading-[1.15] md:text-[38px]">Backed by Experience. Built for Pakistan and the UAE.</h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-white/80">International Testing Alliance is a subsidiary of International Testing Services (ITS).</p>
          </Rise>
          <div className="mt-8 grid max-w-[540px] gap-3">
            {CARDS.map((c, n) => (
              <Rise key={c.name} delay={n * 120}>
                <article className="rounded-[10px] border border-white/20 bg-white/[.07] px-5 py-4 backdrop-blur-sm">
                  <span className={`${mono} text-[#7B9BE8]`}>{c.role}</span>
                  <h3 className="mt-1.5 text-[17px] font-bold">{c.name}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/80">{c.text}</p>
                </article>
              </Rise>
            ))}
          </div>
          <Rise delay={240}>
            <p className="mt-6 max-w-[540px] border-l-[3px] border-[#7B9BE8] pl-4 text-[15px] leading-[1.7] text-white/85">
              ITA delivers examination operations. It leverages ITS group global accreditations to deliver conflict-free exam administration in 9+ cities across Pakistan.
            </p>
          </Rise>
        </div>

        <div ref={stage} aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[460px]">
          <div className="absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(74,122,119,.45), transparent 65%)' }} />
          <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <linearGradient id="orbitArc" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#4A7A77" />
                <stop offset="1" stopColor="#7B9BE8" />
              </linearGradient>
            </defs>
            <g transform={`rotate(${p * 40} 300 300)`}>
              <circle cx="300" cy="300" r="285" fill="none" stroke="#fff" strokeOpacity=".12" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
              <circle cx="585" cy="300" r="6" fill="#4A7A77" />
              <circle cx="15" cy="300" r="4.5" fill="#7B9BE8" />
            </g>
            <circle cx="300" cy="300" r={R} fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5" />
            <circle cx="300" cy="300" r={R} fill="none" stroke="url(#orbitArc)" strokeWidth="5" strokeLinecap="round"
              strokeDasharray={`${C} ${C}`} strokeDashoffset={C - C * (SWEEP / 360) * p} transform={`rotate(${START} 300 300)`} />
            {[5, 4, 3, 2].map((size, i) => {
              const [tx, ty] = at(angle - (i + 1) * 4.5);
              return <circle key={size} cx={tx} cy={ty} r={size} fill="#7B9BE8" style={{ opacity: moving ? 0.7 - i * 0.15 : 0, transition: 'opacity .3s' }} />;
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #4A7A77, #2C6E68 55%, #1F5C57)',
              boxShadow: '0 0 0 18px rgba(44,110,104,.22), 0 0 0 38px rgba(44,110,104,.1), 0 30px 60px rgba(16,27,50,.6)',
              transform: `translate(-50%, -50%) scale(${0.85 + 0.15 * p})`,
            }}>
            <strong className="font-mono text-[40px] font-bold leading-none md:text-[46px]">ITS</strong>
            <span className={`${mono} mt-2 text-[10px] text-white/85`}>Parent company</span>
          </div>

          <div className="absolute flex aspect-square w-[21%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full"
            style={{
              left: `${(nx / 600) * 100}%`, top: `${(ny / 600) * 100}%`,
              background: 'radial-gradient(circle at 35% 30%, #4B72D6, #2849A4 55%, #1B347F)',
              boxShadow: '0 0 0 12px rgba(40,73,164,.35), 0 0 0 26px rgba(40,73,164,.14), 0 14px 30px rgba(16,27,50,.55)',
            }}>
            <strong className="font-mono text-[24px] font-bold leading-none md:text-[28px]">ITA</strong>
            <span className={`${mono} mt-1 text-[9px] text-white/85`}>Subsidiary</span>
            {p >= 1 && <i className="absolute inset-0 rounded-full border-2 border-[#7B9BE8]" style={{ animation: 'orbit-ripple 1.2s ease-out 2' }} />}
          </div>

          <div className={`${mono} absolute rounded-full bg-white px-3 py-1.5 font-bold text-[#101B32]`}
            style={{ left: '20%', top: '20%', opacity: p, transition: 'opacity .3s' }}>
            Subsidiary of ITS
          </div>
        </div>
      </Wrap>
    </section>
  );
}
