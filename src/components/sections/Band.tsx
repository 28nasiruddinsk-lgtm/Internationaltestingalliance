import Link from 'next/link';
import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Wrap } from '../ui';

type Props = {
  title: string;
  text: string;
  buttons: { label: string; href: string }[];
  kicker?: string;
  image?: ImageKey; // photo behind the text with a navy fade
};

// The blue "Work with us" band that closes a page
export default function Band({ title, text, buttons, kicker = 'Work with us', image }: Props) {
  return (
    <section className={`relative overflow-hidden py-24 text-white md:py-32 ${image ? 'bg-navy' : 'bg-blue'}`}>
      {image && (
        <>
          <img loading="lazy" decoding="async" src={img(image)} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        </>
      )}
      <Wrap className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Kicker light>{kicker}</Kicker>
          <H2>{title}</H2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          {buttons.map((b, i) => (
            <Link key={b.label} href={b.href}
              className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold ${i === 0 ? 'bg-white text-blue hover:bg-tint' : 'border border-white/60 text-white hover:bg-white/10'}`}>
              {b.label} <Arrow />
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
