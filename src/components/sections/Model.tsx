'use client';
import { parties } from '@/data/home';
import { H2, Kicker, Rise, Wrap, useInView } from '../ui';

type Props = {
  kicker?: string;
  title?: string;
  intro?: string;
  dark?: boolean;
  steps?: string[][]; // [title, text]; defaults to the three parties
  highlight?: number; // index of the filled circle
  quote?: string; // empty string hides it
  tint?: boolean;
};

const QUOTE = '“No teaching. No marking. No influence over the outcome.”';

export default function Model({ kicker = 'Independence', title = 'Three parties, each with one job.', intro, dark, steps = parties, highlight = 1, quote = QUOTE, tint }: Props) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const edge = `${50 / steps.length}%`; // line runs from the first circle's centre to the last
  return (
    <section className={`py-24 md:py-32 ${dark ? 'bg-navy text-white' : tint ? 'bg-tint' : ''}`}>
      <Wrap>
        <Rise className="mx-auto max-w-[760px] text-center">
          <div className="inline-block"><Kicker light={dark}>{kicker}</Kicker></div>
          <H2>{title}</H2>
          {intro && <p className={`mt-5 text-[16px] leading-[1.75] ${dark ? 'text-white/80' : 'text-body'}`}>{intro}</p>}
        </Rise>
        <div ref={ref} className={`relative mt-14 grid gap-10 md:gap-6 ${steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          <div className={`absolute top-[27px] hidden h-[2px] md:block ${dark ? 'bg-white/20' : 'bg-line'}`} style={{ left: edge, right: edge }}>
            <div className={`h-full ${dark ? 'bg-sky' : 'bg-blue'}`} style={{ width: seen ? '100%' : '0%', transition: 'width 1.4s cubic-bezier(.2,.7,.2,1) .2s' }} />
          </div>
          {steps.map(([title, text], n) => {
            const circle = n === highlight
              ? (dark ? 'bg-sky text-navy' : 'bg-blue text-white')
              : (dark ? 'border-2 border-sky bg-navy text-white' : 'border-2 border-blue bg-white text-blue');
            const head = n === highlight ? (dark ? 'text-sky' : 'text-blue') : (dark ? 'text-white' : 'text-ink');
            return (
              <div key={title} className="relative text-center" style={{ opacity: seen ? 1 : 0, transition: `opacity .6s ${n * 300}ms` }}>
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full font-serif text-[18px] ${circle}`}>{n + 1}</div>
                <h3 className={`mt-5 font-serif text-[19px] ${head}`}>{title}</h3>
                <p className={`mx-auto mt-2 max-w-[300px] text-[16px] leading-relaxed ${dark ? 'text-white/75' : 'text-body'}`}>{text}</p>
              </div>
            );
          })}
        </div>
        {quote && (
          <Rise delay={300} className={`mx-auto mt-16 max-w-[820px] border-y py-8 text-center ${dark ? 'border-white/20' : 'border-line'}`}>
            <p className={`font-serif text-[20px] italic leading-snug md:text-[26px] ${dark ? 'text-white' : 'text-navy'}`}>{quote}</p>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}
