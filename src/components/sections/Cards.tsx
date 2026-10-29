import type { Card } from '@/data/profile';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  items: Card[];
  tint?: boolean;
  numbered?: boolean;
  outro?: string;
};

export default function Cards({ kicker, title, intro, items, tint, numbered = true, outro }: Props) {
  const cols = items.length % 3 === 0 ? 'lg:grid-cols-3' : items.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';
  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap>
        <Rise className="max-w-[720px]">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
        </Rise>
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
          {items.map((c, n) => (
            <Rise key={c.title} delay={n * 70} className="h-full">
              <div className="h-full border-t-[3px] border-blue bg-white p-6">
                {c.image && (
                  <div className="-mx-6 -mt-6 mb-5 h-[200px] overflow-hidden">
                    <img loading="lazy" decoding="async" src={img(c.image)} alt={`${c.title} at an ITA exam venue`} className="h-full w-full object-cover" />
                  </div>
                )}
                {c.tag && <div className="text-[13px] font-semibold text-blue">{c.tag}</div>}
                {numbered && !c.tag && <div className="text-[13px] font-semibold tabular-nums text-blue">0{n + 1}</div>}
                <h3 className="mt-2 font-serif text-[18px] leading-[1.25] text-ink">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-body">{c.text}</p>
              </div>
            </Rise>
          ))}
        </div>
        {outro && <p className="mt-10 max-w-[820px] text-[16px] leading-[1.75] text-body">{outro}</p>}
      </Wrap>
    </section>
  );
}
