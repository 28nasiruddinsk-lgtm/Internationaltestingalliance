import { delivery } from '@/data/home';
import { H2, Kicker, Rise, Wrap } from '../ui';

// Who does what in a sitting: institution → ITA → awarding body (company profile, independence slide)
export default function Delivery() {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <Rise className="mx-auto max-w-[760px] text-center">
          <div className="inline-block"><Kicker>Independence</Kicker></div>
          <H2>Independent Delivery. Clear Accountability.</H2>
          <p className="mt-5 text-[16px] leading-[1.75] text-body">The organization defines its requirements. ITA administers the examination independently. The awarding body retains control of the exam.</p>
        </Rise>
        <ol className="mt-14 grid gap-5 md:grid-cols-3 md:gap-12">
          {delivery.map(([num, name, role, points], n) => {
            const ita = n === 1;
            return (
              <li key={name} className="relative">
                {n > 0 && (
                  <svg aria-hidden="true" width="22" height="14" viewBox="0 0 22 14" className="absolute -left-[34px] top-[60px] hidden text-blue md:block">
                    <path d="M0 7h19M13 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
                <Rise delay={n * 120} className="h-full">
                  <div className={`h-full rounded-2xl p-7 ${ita ? 'bg-navy text-white shadow-[0_24px_50px_rgba(14,34,64,.25)]' : 'border border-line bg-tint'}`}>
                    <div className={`font-serif text-[22px] ${ita ? 'text-sky' : 'text-blue'}`}>{num}</div>
                    <h3 className={`mt-3 text-[15px] font-bold uppercase tracking-[.06em] ${ita ? 'text-white' : 'text-ink'}`}>{name}</h3>
                    <p className={`mt-2 font-serif text-[20px] leading-snug ${ita ? 'text-white' : 'text-ink'}`}>{role}</p>
                    <ul className={`mt-5 space-y-2.5 border-t pt-5 text-[15.5px] leading-relaxed ${ita ? 'border-white/15 text-white/85' : 'border-line text-body'}`}>
                      {points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className={`mt-[10px] h-[3px] w-3.5 flex-none ${ita ? 'bg-sky' : 'bg-blue'}`} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Rise>
              </li>
            );
          })}
        </ol>
      </Wrap>
    </section>
  );
}
