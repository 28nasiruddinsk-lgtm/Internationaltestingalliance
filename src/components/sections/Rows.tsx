import Link from 'next/link';
import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Row = { title: string; text: string; href: string; cta: string; image: ImageKey };
type Props = { kicker?: string; title: string; intro?: string; items: Row[] };

// Full-width linked rows: thumbnail, name, one line, link. Fills blue on hover.
export default function Rows({ kicker, title, intro, items }: Props) {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
        </Rise>
        <ul className="mt-12 border-b border-line">
          {items.map((r, n) => (
            <Rise key={r.href} delay={n * 70}>
              <li className="border-t border-line">
                <Link href={r.href} className="group grid items-center gap-5 py-5 transition-colors hover:bg-blue sm:grid-cols-[140px_1fr_auto] sm:px-5">
                  <div className="hidden h-[90px] overflow-hidden sm:block">
                    <img loading="lazy" decoding="async" src={img(r.image)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] text-ink group-hover:text-white md:text-[26px]">{r.title}</h3>
                    <p className="mt-1 text-[16px] text-body group-hover:text-white/85">{r.text}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-blue group-hover:text-white">
                    {r.cta} <Arrow />
                  </span>
                </Link>
              </li>
            </Rise>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
