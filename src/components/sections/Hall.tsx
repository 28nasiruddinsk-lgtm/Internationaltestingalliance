'use client';
import { useEffect, useMemo, useState } from 'react';
import { hallLog } from '@/data/sitting';
import { H2, Kicker, Rise, Wrap, prefersReducedMotion, seeded, useInView } from '../ui';

const COLS = 8, ROWS = 6, DW = 46, DH = 30, GX = 30, GY = 28, X0 = 170, Y0 = 160;
const deskXY = (c: number, r: number) => [X0 + c * (DW + GX), Y0 + r * (DH + GY)];
const aisle = (k: number) => X0 + DW * (k + 1) + GX * k + GX / 2;
const INCIDENT_DESK = 2 * COLS + 3;

// clock for progress t (0-100): check-in, pause, three-hour paper, collection
const clock = (t: number) => {
  let m: number;
  if (t < 60) m = 8 * 60 + 15 + (t / 60) * 44;
  else if (t < 62) m = 9 * 60;
  else if (t < 96) m = 9 * 60 + ((t - 62) / 34) * 180;
  else m = 12 * 60 + ((t - 96) / 4) * 10;
  m = Math.floor(m);
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};

// point on a closed loop; u is the fraction of laps
function along(pts: number[][], u: number) {
  const segs = pts.map((a, i) => { const b = pts[(i + 1) % pts.length]; return { a, b, len: Math.hypot(b[0] - a[0], b[1] - a[1]) }; });
  let d = (u % 1) * segs.reduce((n, s) => n + s.len, 0);
  for (const { a, b, len } of segs) {
    if (d <= len) { const f = d / len; return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; }
    d -= len;
  }
  return pts[0];
}

export default function Hall() {
  const [ref, seen] = useInView<HTMLElement>(0.35);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [run, setRun] = useState(0);

  // desk fill order, shuffled once with a fixed seed
  const order = useMemo(() => {
    const rand = seeded(7);
    const a = [...Array(48).keys()];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }, []);

  useEffect(() => {
    if (!seen) return;
    if (prefersReducedMotion()) { setT(100); return; }
    if (!playing) return;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setT((p) => {
        const next = Math.min(100, p + dt / 190);
        if (next >= 100) setPlaying(false);
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, playing, run]);

  const filled = Math.floor((Math.min(t, 58) / 58) * 48);
  const checked = new Set(order.slice(0, filled));
  const papers = t >= 62;
  const live = t >= 62 && t < 96;
  const p1 = live ? along([[aisle(1), 140], [aisle(1), 480], [aisle(3), 480], [aisle(3), 140]], (t - 62) / 9) : [96, 486];
  const p2 = live ? along([[aisle(5), 140], [aisle(5), 480], [770, 480], [770, 140]], (t - 62) / 11 + 0.3) : [118, 500];
  const log = hallLog.filter((l) => t >= l[0]);
  const phase = t < 58 ? 'Check-in' : t < 62 ? 'Doors closed' : t < 96 ? 'Examination in progress' : 'Session closed';
  const [ix, iy] = deskXY(3, 2);

  return (
    <section ref={ref} className="bg-tint py-24 md:py-32">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise className="max-w-[720px]">
            <Kicker>Inside a sitting</Kicker>
            <H2>Watch a session run, desk by desk.</H2>
            <p className="mt-4 text-[16px] text-body">A replay of a 48-candidate paper, drawn from the seating plan and session log we keep for every sitting. Illustrative data.</p>
          </Rise>
          <div className="flex gap-2">
            <button onClick={() => setPlaying(!playing)} disabled={t >= 100}
              className="rounded-full border border-blue px-5 py-2.5 text-[14px] font-semibold text-blue hover:bg-white disabled:opacity-40">{playing ? 'Pause' : 'Play'}</button>
            <button onClick={() => { setT(0); setPlaying(true); setRun((x) => x + 1); }}
              className="rounded-full bg-blue px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-navy">Replay</button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="overflow-x-auto border border-line bg-white">
            <svg viewBox="0 0 900 560" className="block h-auto w-full" role="img"
              aria-label={`Exam hall seating plan. ${phase}. ${filled} of 48 candidates checked in.`}>
              <defs>
                <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v6" stroke="#DCE3EC" strokeWidth="2" /></pattern>
              </defs>
              <rect x="60" y="60" width="780" height="460" fill="#fff" stroke="#14202E" strokeWidth="3" />
              <rect x="60" y="440" width="10" height="70" fill="#fff" />
              <text x="80" y="535" fontSize="12" fill="#6B7480">Entrance and screening</text>
              <rect x="330" y="60" width="240" height="10" fill="#14202E" />
              <rect x="340" y="76" width="220" height="40" fill="#EEF3FA" stroke="#B9CBE3" />
              <text x="450" y="94" textAnchor="middle" fontSize="11" fill="#46505C">SESSION BOARD</text>
              <text x="450" y="110" textAnchor="middle" fontSize="13" fill="#0B4CA1" fontWeight="600">{clock(t)}  ·  {phase}</text>
              <rect x="760" y="80" width="60" height="40" fill="url(#hatch)" stroke="#B9CBE3" />
              <text x="790" y="135" textAnchor="middle" fontSize="10.5" fill="#6B7480">Secure store</text>
              {[...Array(ROWS)].map((_, r) => (
                <text key={`r${r}`} x={X0 - 24} y={Y0 + r * (DH + GY) + 20} fontSize="12" fill="#6B7480" fontWeight="600">{'ABCDEF'[r]}</text>
              ))}
              {[...Array(COLS)].map((_, c) => (
                <text key={`c${c}`} x={X0 + c * (DW + GX) + DW / 2} y={Y0 - 12} textAnchor="middle" fontSize="11" fill="#6B7480">{c + 1}</text>
              ))}
              {[...Array(48)].map((_, i) => {
                const [x, y] = deskXY(i % COLS, Math.floor(i / COLS));
                const on = checked.has(i);
                const incident = i === INCIDENT_DESK && t >= 81;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width={DW} height={DH} fill={on ? '#0B4CA1' : '#F4F7FB'}
                      stroke={incident ? '#D9822B' : on ? '#0B4CA1' : '#C9D6E6'} strokeWidth={incident ? 3 : 1} style={{ transition: 'fill .35s' }} />
                    {on && papers && <rect x={x + 14} y={y + 6} width={18} height={18} fill="#fff" opacity=".95" />}
                    {on && !papers && <path d={`M${x + 16} ${y + 15}l5 5 9-10`} fill="none" stroke="#fff" strokeWidth="2" />}
                  </g>
                );
              })}
              {t >= 81 && (
                <g>
                  <line x1={ix + DW} y1={iy} x2="660" y2="300" stroke="#D9822B" strokeWidth="1.2" />
                  <text x="664" y="304" fontSize="12" fill="#B4661C" fontWeight="600">Incident logged, 10:42</text>
                </g>
              )}
              {[p1, p2].map(([x, y], k) => (
                <g key={k}>
                  <circle cx={x} cy={y} r="11" fill="#8DB8EE" opacity=".35" />
                  <circle cx={x} cy={y} r="6.5" fill="#0E2240" stroke="#fff" strokeWidth="2" />
                </g>
              ))}
              <g fontSize="11.5" fill="#46505C">
                <rect x="560" y="536" width="12" height="12" fill="#0B4CA1" /><text x="578" y="546">Checked in</text>
                <circle cx="664" cy="542" r="6" fill="#0E2240" /><text x="676" y="546">Invigilator</text>
                <rect x="756" y="536" width="12" height="12" fill="#fff" stroke="#D9822B" strokeWidth="2" /><text x="774" y="546">Incident</text>
              </g>
            </svg>
            <div className="h-[3px] bg-line"><div className="h-full bg-blue" style={{ width: `${t}%` }} /></div>
          </div>
          <div className="flex flex-col border border-line bg-white">
            <div className="grid grid-cols-2 border-b border-line">
              <div className="p-5">
                <div className="text-[12.5px] text-muted">Checked in</div>
                <div className="font-serif text-[26px] text-ink tabular-nums">{filled}<span className="text-[18px] text-muted"> / 48</span></div>
              </div>
              <div className="border-l border-line p-5">
                <div className="text-[12.5px] text-muted">Session clock</div>
                <div className="font-serif text-[26px] text-blue tabular-nums">{clock(t)}</div>
              </div>
            </div>
            <div className="px-5 pt-4 text-[14px] font-semibold text-ink">Session log</div>
            <ol className="flex-1 overflow-hidden px-5 pb-5 pt-2">
              {log.map(([, time, text]) => (
                <li key={time} className="swap flex gap-3 border-b border-line py-2.5 text-[13.5px]">
                  <span className="w-11 flex-none font-semibold tabular-nums text-blue">{time}</span>
                  <span className={time === '10:42' ? 'text-[#B4661C]' : 'text-body'}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
