import { structure } from '@/data/profile';
import { H2, Kicker, Rise, Wrap } from '../ui';

export default function Structure() {
  return (
    <section className="bg-tint py-24 md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker>Corporate structure</Kicker>
          <H2>A new name built on an established foundation.</H2>
          <p className="mt-4 text-[17px] leading-[1.7] text-body">
            Regulatory registrations and approvals are attributed to ITS wherever the source identifies ITS as the holder.
          </p>
        </Rise>
        <div className="relative mt-12 grid gap-6 md:grid-cols-2">
          {structure.map((s, n) => (
            <Rise key={s.name} delay={n * 120} className="h-full">
              <div className={`h-full border-t-[3px] bg-white p-8 ${n === 1 ? 'border-blue' : 'border-navy'}`}>
                <div className="text-[14px] font-semibold text-blue">{s.role}</div>
                <h3 className="mt-2 font-serif text-[20px] leading-snug text-ink">{s.name}</h3>
                <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-body">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3"><span className="mt-[11px] h-[3px] w-4 flex-none bg-blue" />{p}</li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
