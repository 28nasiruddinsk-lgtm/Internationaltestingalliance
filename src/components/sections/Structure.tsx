import { Kicker, Rise, Wrap } from '../ui';

// Corporate structure: ITS as parent, ITA as the operating subsidiary, with an orbit diagram
const cards = [
  { role: 'Parent company', name: 'International Testing Services (ITS)', text: 'Holds registrations, recognitions, and foundational track record. It is the recognized exam delivery partner for international institutions.' },
  { role: 'Subsidiary', name: 'International Testing Alliance (ITA)', text: 'IBCC-registered exam delivery across Pakistan. Independent invigilation with no stake in grading or candidate teaching.' },
];

export default function Structure() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      {/* soft light behind the diagram */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-blue/30 blur-[120px]" />
      <Wrap className="relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Rise>
            <Kicker light>Corporate structure</Kicker>
            <h2 className="mt-5 font-serif text-[30px] leading-[1.15] md:text-[44px]">Backed by Experience. Built for Pakistan and the UAE.</h2>
            <p className="mt-5 max-w-[600px] text-[17px] leading-[1.7] text-white/80">International Testing Alliance is a subsidiary of International Testing Services (ITS).</p>
          </Rise>
          <div className="mt-10 grid gap-4">
            {cards.map((c, n) => (
              <Rise key={c.name} delay={n * 120}>
                <div className="rounded-2xl border border-white/15 bg-white/[.06] p-6">
                  <div className="text-[11.5px] font-semibold uppercase tracking-[.16em] text-sky">{c.role}</div>
                  <h3 className="mt-2 text-[18px] font-semibold">{c.name}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-white/80">{c.text}</p>
                </div>
              </Rise>
            ))}
          </div>
          <Rise delay={240}>
            <p className="mt-8 max-w-[640px] border-l-[3px] border-sky pl-5 text-[16px] leading-[1.7] text-white/90">
              ITA delivers examination operations. It leverages ITS group global accreditations to deliver conflict-free exam administration in 9+ cities across Pakistan.
            </p>
          </Rise>
        </div>
        <Rise delay={150} className="hidden lg:col-span-5 lg:block">
          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[440px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-white/20" />
            <div className="absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-blue shadow-[0_0_0_14px_rgba(11,76,161,.25),0_30px_80px_rgba(0,0,0,.35)]">
              <span className="font-serif text-[52px] leading-none">ITS</span>
              <span className="mt-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/85">Parent company</span>
            </div>
            <div className="absolute right-[4%] top-[6%] flex h-[30%] w-[30%] flex-col items-center justify-center rounded-full bg-sky text-navy shadow-[0_0_0_10px_rgba(141,184,238,.18)]">
              <span className="font-serif text-[34px] leading-none">ITA</span>
              <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[.16em]">Subsidiary</span>
            </div>
            <span className="absolute left-[8%] top-[12%] rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.12em] text-navy">Subsidiary of ITS</span>
          </div>
        </Rise>
      </Wrap>
    </section>
  );
}
