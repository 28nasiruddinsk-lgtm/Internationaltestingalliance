import { milestones } from '@/data/profile';
import { H2, Kicker, Rise, Wrap } from '../ui';

export default function Milestones({ kicker = 'Our progress', title = 'Built with purpose. Recognised through progress.' }: { kicker?: string; title?: string }) {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker>{kicker}</Kicker>
          <H2>{title}</H2>
        </Rise>
        <div className="mt-14 grid gap-8 md:grid-cols-5 md:gap-5">
          {milestones.map((m, n) => (
            <Rise key={m.date} delay={n * 90}>
              <div className="relative border-l-[3px] border-blue pl-5 md:border-l-0 md:border-t-[3px] md:pl-0 md:pt-5">
                <div className="text-[13.5px] font-semibold text-blue">{m.date}</div>
                <h3 className="mt-2 font-serif text-[19px] leading-snug text-ink">{m.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-body">{m.text}</p>
              </div>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
