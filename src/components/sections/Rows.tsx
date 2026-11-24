import Link from 'next/link';
import type { BodyKey } from '@/data/partners';
import Logo from '../Logo';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Row = { title: string; text: string; href: string; cta: string; logo: BodyKey; extra?: { label: string; href: string } };
type Props = { kicker?: string; title: string; intro?: string; items: Row[] };

// Full-width linked rows: logo tile, name, one line, link. Fills blue on hover.
export default function Rows({ kicker, title, intro, items }: Props) {
  return (
    <section className="py-16 md:py-20">
      <Wrap>
        <Rise className="max-w-[720px]">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
        </Rise>
        <ul className="mt-12 border-b border-line">
          {items.map((r) => (
              <li key={r.href} className="group relative grid grid-cols-[96px_1fr] items-center gap-x-4 gap-y-3 border-t border-line py-5 transition-colors sm:grid-cols-[200px_1fr_auto] sm:gap-5 sm:px-5 sm:hover:bg-blue">
                <Logo k={r.logo} box="h-6 sm:h-9" className="w-[96px] !p-2 sm:w-[200px] sm:!p-6" />
                <div>
                  <h3 className="font-serif text-[19px] leading-snug text-ink sm:text-[22px] sm:group-hover:text-white md:text-[26px]">{r.title}</h3>
                  <p className="mt-1 text-[15px] text-body sm:text-[16px] sm:group-hover:text-white/85">{r.text}</p>
                  {r.extra && (
                    <Link href={r.extra.href} className="relative z-10 mt-2 inline-block text-[15px] font-semibold text-blue underline-offset-4 hover:underline sm:group-hover:text-white">
                      {r.extra.label} <span className="inline-block align-middle"><Arrow /></span>
                    </Link>
                  )}
                </div>
                {/* the main link covers the whole row; the extra link sits above it */}
                <Link href={r.href} className="col-start-2 inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-blue after:absolute after:inset-0 sm:col-start-auto sm:group-hover:text-white">
                  {r.cta} <Arrow />
                </Link>
              </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
