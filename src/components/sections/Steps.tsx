import Link from 'next/link';
import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  items: string[][]; // [title, text]
  image?: ImageKey; // photo that stays in view beside the steps
  alt?: string;
  dark?: boolean;
  link?: { label: string; href: string };
};

// Steps down the page with large outlined numbers
export default function Steps({ kicker, title, intro, items, image, alt = '', dark, link }: Props) {
  const sub = dark ? 'text-white/75' : 'text-body';
  return (
    <section className={`py-24 md:py-32 ${dark ? 'bg-navy text-white' : 'bg-tint'}`}>
      <Wrap className={`grid gap-14 ${image ? 'lg:grid-cols-12 lg:gap-20' : ''}`}>
        <div className={image ? 'lg:col-span-7' : 'max-w-[900px]'}>
          <Rise>
            {kicker && <Kicker light={dark}>{kicker}</Kicker>}
            <H2>{title}</H2>
            {intro && <p className={`mt-5 text-[16px] leading-[1.75] ${sub}`}>{intro}</p>}
          </Rise>
          <ol className="mt-12">
            {items.map(([t, text], n) => (
              <Rise key={t} delay={n * 90}>
                <li className={`grid grid-cols-[72px_1fr] gap-5 border-t py-7 md:grid-cols-[104px_1fr] ${dark ? 'border-white/15' : 'border-line'}`}>
                  <span className={`font-serif text-[56px] leading-none md:text-[76px] ${dark ? 'text-sky/80' : 'text-blue'}`}
                    style={{ WebkitTextStroke: dark ? '1.5px #8DB8EE' : '1.5px #0B4CA1', color: 'transparent' }}>
                    {String(n + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-2">
                    <h3 className={`font-serif text-[21px] ${dark ? 'text-white' : 'text-ink'}`}>{t}</h3>
                    <p className={`mt-2 max-w-[560px] text-[16px] leading-relaxed ${sub}`}>{text}</p>
                  </div>
                </li>
              </Rise>
            ))}
          </ol>
          {link && (
            <Link href={link.href} className={`group mt-6 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-semibold ${dark ? 'bg-white text-blue hover:bg-tint' : 'bg-blue text-white hover:bg-navy'}`}>
              {link.label} <Arrow />
            </Link>
          )}
        </div>
        {image && (
          <Rise delay={120} className="lg:col-span-5">
            <div className="relative h-[360px] overflow-hidden lg:sticky lg:top-28 lg:h-[600px]">
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
              <div className={`absolute bottom-0 left-0 h-2 w-1/2 ${dark ? 'bg-sky' : 'bg-blue'}`} />
            </div>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}
