import { H2, Kicker, Rise, Wrap } from '../ui';

// Corporate structure as a simple family tree: ITS (parent) above, ITA (subsidiary) below, joined by a line.
const PARENT = { code: 'ITS', role: 'Parent company', name: 'International Testing Services', text: 'Holds registrations, recognitions, and foundational track record. It is the recognized exam delivery partner for international institutions.' };
const CHILD = { code: 'ITA', role: 'Subsidiary', name: 'International Testing Alliance', text: 'IBCC-registered exam delivery across Pakistan. Independent invigilation with no stake in grading or candidate teaching.' };
const label = 'text-[12px] font-bold uppercase tracking-[.12em]';

export default function Structure() {
  return (
    <section className="bg-tint py-24 md:py-32">
      <Wrap className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Rise>
          <Kicker>Corporate structure</Kicker>
          <H2>Backed by Experience. Built for Pakistan and the UAE.</H2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-body">International Testing Alliance is a subsidiary of International Testing Services (ITS).</p>
          <p className="mt-8 max-w-[520px] border-l-[3px] border-blue pl-5 font-serif text-[20px] leading-snug text-navy md:text-[22px]">
            ITA delivers examination operations. It leverages ITS group global accreditations to deliver conflict-free exam administration in 9+ cities across Pakistan.
          </p>
        </Rise>

        <div>
          <Rise>
            <article className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-[0_24px_50px_rgba(14,34,64,.22)] md:p-10">
              <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-8 font-serif text-[150px] leading-none text-white/[.06]">{PARENT.code}</span>
              <span className={`${label} text-sky`}>{PARENT.role}</span>
              <h3 className="mt-3 font-serif text-[26px] leading-tight md:text-[30px]">{PARENT.name} <span className="text-sky">({PARENT.code})</span></h3>
              <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/80">{PARENT.text}</p>
            </article>
          </Rise>

          <div aria-hidden="true" className="relative ml-10 h-16 w-[2px] bg-blue md:ml-14">
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue bg-tint" />
          </div>

          <Rise delay={150}>
            <article className="relative ml-6 overflow-hidden rounded-2xl border border-line border-t-[4px] border-t-blue bg-white p-8 md:ml-10 md:p-10">
              <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-8 font-serif text-[150px] leading-none text-blue/[.06]">{CHILD.code}</span>
              <span className={`${label} text-blue`}>{CHILD.role} of ITS</span>
              <h3 className="mt-3 font-serif text-[26px] leading-tight text-ink md:text-[30px]">{CHILD.name} <span className="text-blue">({CHILD.code})</span></h3>
              <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-body">{CHILD.text}</p>
            </article>
          </Rise>
        </div>
      </Wrap>
    </section>
  );
}
