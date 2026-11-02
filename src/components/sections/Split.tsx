import Link from 'next/link';
import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  paragraphs: string[];
  link?: { label: string; href: string };
  tint?: boolean;
  image?: ImageKey; // shown under the heading
  alt?: string;
};

// Heading on the left, text on the right (the home page About layout)
export default function Split({ kicker, title, paragraphs, link, tint, image, alt = '' }: Props) {
  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {image && (
            <div className="mt-8 h-[300px] overflow-hidden md:h-[380px]">
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
            </div>
          )}
        </Rise>
        <Rise delay={120} className="lg:col-span-6 lg:col-start-7">
          {paragraphs.map((p, i) => (
            <p key={p} className={i === 0 ? 'text-[19px] leading-[1.7] text-ink' : 'mt-5 text-[16px] leading-[1.75] text-body'}>{p}</p>
          ))}
          {link && (
            <Link href={link.href} className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
              {link.label} <Arrow />
            </Link>
          )}
        </Rise>
      </Wrap>
    </section>
  );
}
