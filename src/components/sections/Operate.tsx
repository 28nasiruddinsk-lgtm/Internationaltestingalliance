'use client';
import { useState } from 'react';
import { countries } from '@/data/countries';
import { img } from '@/data/images';
import map from '@/data/map.json';
import { H2, Kicker, Rise, Wrap } from '../ui';

const byCode = Object.fromEntries(countries.map((c) => [c.code, c]));
const markets = map.mk as Record<string, string>;

// Callout label anchors: dot = geographic point, off = box top-left offset (×S)
const S = 2.3;
const labels: Record<string, { dot: [number, number]; off: [number, number] }> = {
  GBR: { dot: [70, 118], off: [-118, -60] },
  UZB: { dot: [572, 235], off: [36, -66] },
  IRQ: { dot: [415, 315], off: [-92, -40] },
  PAK: { dot: [612, 345], off: [66, -16] },
  EGY: { dot: [320, 372], off: [-140, -6] },
  SAU: { dot: [430, 392], off: [-140, 56] },
  BHR: { dot: [470, 386], off: [-14, 100] },
  ARE: { dot: [500, 396], off: [104, 30] },
  MYS: { dot: [905, 545], off: [40, 46] },
};

export default function Operate() {
  const [sel, setSel] = useState('PAK');
  const [hover, setHover] = useState<string | null>(null);
  const c = byCode[sel];

  const fill = (code: string) =>
    code === sel ? '#0B4CA1' : code === hover ? '#B9C0C8' : '#CCD0D5';

  return (
    <section id="operate" className="bg-tint py-24 md:py-32">
      <Wrap>
        <Rise>
          <Kicker>Where we work</Kicker>
          <H2 className="max-w-[640px]">Centres in Pakistan and Dubai. Candidates across nine markets.</H2>
        </Rise>
        <div className="mt-12 grid items-stretch gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6">
          <div className="border border-line bg-white">
            <svg viewBox="-540 -30 2250 1010" preserveAspectRatio="xMidYMid meet" className="block h-auto w-full" role="img" aria-label="Map of ITA markets">
              <path d={map.bg} fill="#CCD0D5" stroke="#fff" strokeWidth=".8" />
              {countries.map(({ code, name }) => markets[code] && (
                <path key={code} d={markets[code]} fill={fill(code)} stroke="#fff" strokeWidth=".8" className="cursor-pointer" style={{ transition: 'fill .2s' }}
                  onClick={() => setSel(code)} onMouseEnter={() => setHover(code)} onMouseLeave={() => setHover(null)}>
                  <title>{name}</title>
                </path>
              ))}
              {countries.map(({ code, name }) => {
                const L = labels[code];
                if (!L) return null;
                const [dx, dy] = L.dot;
                const w = (name.length * 7.2 + 18) * S, h = 22 * S;
                const bx = dx + L.off[0] * S, by = dy + L.off[1] * S;
                return (
                  <g key={code} className="cursor-pointer" onClick={() => setSel(code)}>
                    <line x1={dx} y1={dy} x2={bx + w / 2} y2={by + h / 2} stroke="#15497a" strokeWidth={1.4 * S} />
                    <rect x={bx} y={by} width={w} height={h} rx={4 * S} fill={code === sel ? '#0B4CA1' : '#15497a'} />
                    <text x={bx + w / 2} y={by + h * 0.68} textAnchor="middle" fontSize={12.5 * S} fill="#fff" fontWeight="600">{name}</text>
                    <circle cx={dx} cy={dy} r={5 * S} fill="#15497a" stroke="#fff" strokeWidth={1.6 * S} />
                  </g>
                );
              })}
            </svg>
          </div>
          <div key={`d${sel}`} className="swap border-t-[3px] border-blue bg-white p-7">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-serif text-[20px] text-ink">{c.name}</h3>
              <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${c.operating ? 'bg-blue text-white' : 'bg-white text-blue'}`}>{c.status}</span>
            </div>
            <dl className="mt-4 text-[15px]">
              {([['Cities', c.cities], ['Approvals', c.approvals], ['Contact', c.contact]] as const).filter(([, v]) => v).map(([k, v]) => (
                <div key={k} className="border-t border-[#D3E0F0] py-3">
                  <dt className="font-semibold text-ink">{k}</dt>
                  <dd className="mt-0.5 leading-relaxed text-body">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[14px] font-semibold text-ink">Choose a country</label>
            <select id="country" value={sel} onChange={(e) => setSel(e.target.value)} className="mt-2 h-12 w-full border border-line bg-white px-3 text-[15px] text-ink">
              {countries.map((x) => <option key={x.code} value={x.code}>{x.name}</option>)}
            </select>
            <div className="mb-5 mt-4 flex flex-wrap gap-2">
              {countries.map((x) => (
                <button key={x.code} onClick={() => setSel(x.code)}
                  className={`rounded-full border px-3 py-1 text-[12.5px] ${x.code === sel ? 'border-blue bg-blue text-white' : 'border-line text-body hover:border-blue hover:text-blue'}`}>
                  {x.name}
                </button>
              ))}
            </div>
            <div key={`i${sel}`} className="swap relative min-h-[260px] flex-1 overflow-hidden">
              <img loading="lazy" decoding="async" src={img(c.photo)} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
