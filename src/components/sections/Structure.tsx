import { H2, Kicker, Rise, Wrap } from '../ui';

// Corporate structure: ITS and ITA as two joined halves of one panel, with the relationship badge on the seam.
const SIDES = [
  { code: 'ITS', role: 'Parent company', name: 'International Testing Services', text: 'Holds registrations, recognitions, and foundational track record. It is the recognized exam delivery partner for international institutions.', bg: 'bg-navy' },
  { code: 'ITA', role: 'Subsidiary', name: 'International Testing Alliance', text: 'IBCC-registered exam delivery across Pakistan. Independent invigilation with no stake in grading or candidate teaching.', bg: 'bg-blue' },
];
const FACTS = ['IBCC-registered', '9+ cities across Pakistan', 'Conflict-free exam administration'];

export default function Structure() {
  return (
    <section className="bg-tint py-24 md:py-32">
      <Wrap>
        <Rise className="mx-auto max-w-[760px] text-center">
          <div className="inline-block"><Kicker>Corporate structure</Kicker></div>
          <H2>Backed by Experience. Built for Pakistan and the UAE.</H2>
          <p className="mt-5 text-[17px] leading-[1.7] text-body">International Testing Alliance is a subsidiary of International Testing Services (ITS).</p>
        </Rise>

        <Rise delay={120} className="relative mt-14">
          <div className="grid overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(14,34,64,.22)] md:grid-cols-2">
            {SIDES.map((s, n) => (
              <article key={s.code} className={`relative overflow-hidden ${s.bg} px-8 py-12 text-white md:px-14 md:py-16 ${n ? 'pt-16 md:pl-20' : 'pb-16 md:pr-20'}`}>
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-4 font-serif text-[180px] leading-none text-white/[.07] md:text-[220px]">{s.code}</span>
                <span className={`text-[12px] font-bold uppercase tracking-[.14em] ${n ? 'text-white/80' : 'text-sky'}`}>{s.role}</span>
                <div className="mt-4 font-serif text-[56px] leading-none md:text-[72px]">{s.code}</div>
                <h3 className="mt-3 text-[18px] font-semibold">{s.name}</h3>
                <p className="relative mt-4 max-w-[420px] text-[15.5px] leading-relaxed text-white/85">{s.text}</p>
              </article>
            ))}
          </div>
          {/* the seam: ITA is a subsidiary of ITS */}
          <div className="absolute left-1/2 top-1/2 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[6px] border-tint bg-white text-center text-navy shadow-lg">
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true" className="rotate-90 text-blue md:rotate-0"><path d="M0 7h19M13 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
            <span className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[.08em]">Subsidiary<br />of ITS</span>
          </div>
        </Rise>

        <Rise delay={220} className="mt-12 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <p className="font-serif text-[20px] leading-snug text-navy md:text-[24px]">
            ITA delivers examination operations. It leverages ITS group global accreditations to deliver conflict-free exam administration in 9+ cities across Pakistan.
          </p>
          <ul className="grid gap-3">
            {FACTS.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-3.5 text-[15px] font-semibold text-ink">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="flex-none text-blue"><circle cx="9" cy="9" r="9" fill="currentColor" /><path d="M5 9.3l2.6 2.5L13 6.5" fill="none" stroke="#fff" strokeWidth="2" /></svg>
                {f}
              </li>
            ))}
          </ul>
        </Rise>
      </Wrap>
    </section>
  );
}
