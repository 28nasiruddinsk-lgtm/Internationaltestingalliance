'use client';
import { useState } from 'react';
import { countries } from '@/data/countries';
import { img } from '@/data/images';
import map from '@/data/map.json';
import { H2, Kicker, Rise, Wrap } from '../ui';

const byCode = Object.fromEntries(countries.map((c) => [c.code, c]));
const markets = map.mk as Record<string, string>;
const pins: Record<string, number[]> = map.pins;

export default function Operate() {
  const [sel, setSel] = useState('PAK');
  const [hover, setHover] = useState<string | null>(null);
  const c = byCode[sel];

  const fill = (code: string) =>
    code === sel ? '#0B4CA1' : byCode[code].operating ? '#5E8FD0' : code === hover ? '#A9C4E6' : '#C9DAEF';

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
            <svg viewBox="0 30 1000 470" preserveAspectRatio="xMidYMid meet" className="block h-auto w-full" role="img" aria-label="Map of ITA markets">
              <path d={map.bg} fill="#F4F8FD" stroke="#DCE6F2" strokeWidth=".8" />
              {countries.map(({ code, name }) => markets[code] && (
                <path key={code} d={markets[code]} fill={fill(code)} stroke="#fff" strokeWidth="1" className="cursor-pointer" style={{ transition: 'fill .25s' }}
                  onClick={() => setSel(code)} onMouseEnter={() => setHover(code)} onMouseLeave={() => setHover(null)}>
                  <title>{name}</title>
                </path>
              ))}
              {Object.entries(pins).map(([name, [x, y]]) => (
                <g key={name}>
                  <circle cx={x} cy={y} r="4" fill="#0E2240" stroke="#fff" strokeWidth="1.5" />
                  {((sel === 'PAK' && name !== 'Dubai') || (sel === 'ARE' && name === 'Dubai')) && (
                    <text x={name === 'Dubai' ? x - 9 : x + 9} y={y + 5} textAnchor={name === 'Dubai' ? 'end' : 'start'} fontSize="16" fill="#0E2240" fontWeight="600" stroke="#fff" strokeWidth="4" paintOrder="stroke">{name}</text>
                  )}
                </g>
              ))}
            </svg>
          </div>
          <div key={`d${sel}`} className="swap border-t-[3px] border-blue bg-white p-7">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-serif text-[24px] text-ink">{c.name}</h3>
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
