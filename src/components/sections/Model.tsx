'use client';
import { parties } from '@/data/home';
import { H2, Kicker, Rise, Wrap, useInView } from '../ui';

type Props = { kicker?: string; title?: string; intro?: string };

export default function Model({ kicker = 'Independence', title = 'Three parties, each with one job.', intro }: Props) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker>{kicker}</Kicker>
          <H2>{title}</H2>
          {intro && <p className="mt-5 text-[16px] leading-[1.75] text-body">{intro}</p>}
        </Rise>
        <div ref={ref} className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-[27px] hidden h-[2px] bg-line md:block">
            <div className="h-full bg-blue" style={{ width: seen ? '100%' : '0%', transition: 'width 1.4s cubic-bezier(.2,.7,.2,1) .2s' }} />
          </div>
          {parties.map(([title, text], n) => (
            <div key={title} className="relative text-center" style={{ opacity: seen ? 1 : 0, transition: `opacity .6s ${n * 300}ms` }}>
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full font-serif text-[18px] ${n === 1 ? 'bg-blue text-white' : 'border-2 border-blue bg-white text-blue'}`}>{n + 1}</div>
              <h3 className={`mt-5 font-serif text-[21px] ${n === 1 ? 'text-blue' : 'text-ink'}`}>{title}</h3>
              <p className="mx-auto mt-2 max-w-[300px] text-[16px] leading-relaxed text-body">{text}</p>
            </div>
          ))}
        </div>
        <Rise delay={300} className="mx-auto mt-16 max-w-[820px] border-y border-line py-8 text-center">
          <p className="font-serif text-[22px] italic leading-snug text-navy md:text-[32px]">“No teaching. No marking. No influence over the outcome.”</p>
        </Rise>
      </Wrap>
    </section>
  );
}
