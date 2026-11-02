'use client';
import { parties } from '@/data/home';
import { H2, Kicker, Rise, Wrap, useInView } from '../ui';

type Props = { kicker?: string; title?: string; intro?: string; dark?: boolean };

export default function Model({ kicker = 'Independence', title = 'Three parties, each with one job.', intro, dark }: Props) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  return (
    <section className={`py-24 md:py-32 ${dark ? 'bg-navy text-white' : ''}`}>
      <Wrap>
        <Rise className="mx-auto max-w-[760px] text-center">
          <div className="inline-block"><Kicker light={dark}>{kicker}</Kicker></div>
          <H2>{title}</H2>
          {intro && <p className={`mt-5 text-[16px] leading-[1.75] ${dark ? 'text-white/80' : 'text-body'}`}>{intro}</p>}
        </Rise>
        <div ref={ref} className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className={`absolute left-[16%] right-[16%] top-[27px] hidden h-[2px] md:block ${dark ? 'bg-white/20' : 'bg-line'}`}>
            <div className={`h-full ${dark ? 'bg-sky' : 'bg-blue'}`} style={{ width: seen ? '100%' : '0%', transition: 'width 1.4s cubic-bezier(.2,.7,.2,1) .2s' }} />
          </div>
          {parties.map(([title, text], n) => {
            const circle = n === 1
              ? (dark ? 'bg-sky text-navy' : 'bg-blue text-white')
              : (dark ? 'border-2 border-sky bg-navy text-white' : 'border-2 border-blue bg-white text-blue');
            const head = n === 1 ? (dark ? 'text-sky' : 'text-blue') : (dark ? 'text-white' : 'text-ink');
            return (
              <div key={title} className="relative text-center" style={{ opacity: seen ? 1 : 0, transition: `opacity .6s ${n * 300}ms` }}>
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full font-serif text-[18px] ${circle}`}>{n + 1}</div>
                <h3 className={`mt-5 font-serif text-[19px] ${head}`}>{title}</h3>
                <p className={`mx-auto mt-2 max-w-[300px] text-[16px] leading-relaxed ${dark ? 'text-white/75' : 'text-body'}`}>{text}</p>
              </div>
            );
          })}
        </div>
        <Rise delay={300} className={`mx-auto mt-16 max-w-[820px] border-y py-8 text-center ${dark ? 'border-white/20' : 'border-line'}`}>
          <p className={`font-serif text-[20px] italic leading-snug md:text-[26px] ${dark ? 'text-white' : 'text-navy'}`}>“No teaching. No marking. No influence over the outcome.”</p>
        </Rise>
      </Wrap>
    </section>
  );
}
