import Link from 'next/link';
import type { BodyKey } from '@/data/partners';
import Logo from '../Logo';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Row = { title: string; text: string; href: string; cta: string; logo: BodyKey; extra?: { label: string; href: string } };
type Props = { kicker?: string; title: string; intro?: string; items: Row[] };

// Full-width linked rows: logo tile, name, one line, link. Fills blue on hover.
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
          {items.map((r) => (
              <li key={r.href} className="group relative grid items-center gap-5 border-t border-line py-5 transition-colors hover:bg-blue sm:grid-cols-[200px_1fr_auto] sm:px-5">
                <Logo k={r.logo} box="h-9" className="w-[200px]" />
                <div>
                  <h3 className="font-serif text-[22px] text-ink group-hover:text-white md:text-[26px]">{r.title}</h3>
                  <p className="mt-1 text-[16px] text-body group-hover:text-white/85">{r.text}</p>
                  {r.extra && (
                    <Link href={r.extra.href} className="relative z-10 mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-blue underline-offset-4 hover:underline group-hover:text-white">
                      {r.extra.label} <Arrow />
                    </Link>
                  )}
                </div>
                {/* the main link covers the whole row; the extra link sits above it */}
                <Link href={r.href} className="inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-blue after:absolute after:inset-0 group-hover:text-white">
                  {r.cta} <Arrow />
                </Link>
              </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
