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
  image?: ImageKey; // photo on the left, text on the right
  alt?: string;
  facts?: { value: string; label: string }[];
  chips?: string[]; // short tags under the text, e.g. city names
};

// Heading on the left, text on the right (the home page About layout)
export default function Split({ kicker, title, paragraphs, link, tint, image, alt = '', facts, chips }: Props) {
  const body = (
    <>
      {paragraphs.map((p, i) => (
        <p key={p} className={i === 0 ? 'text-[19px] leading-[1.7] text-ink' : 'mt-5 text-[16px] leading-[1.75] text-body'}>{p}</p>
      ))}
      {chips && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li key={c} className="rounded-full border border-blue/25 bg-white px-4 py-2 text-[14px] font-semibold text-blue">{c}</li>
          ))}
        </ul>
      )}
      {facts && (
        <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.value} className="bg-white p-5">
              <dt className="font-serif text-[26px] text-blue">{f.value}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-body">{f.label}</dd>
            </div>
          ))}
        </dl>
      )}
      {link && (
        <Link href={link.href} className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
          {link.label} <Arrow />
        </Link>
      )}
    </>
  );

  if (image) {
    return (
      <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
        <Wrap className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Rise className="relative pb-5 pl-5">
            <div className="absolute bottom-0 left-0 h-2/3 w-2/3 bg-blue" />
            <div className="relative h-[320px] overflow-hidden md:h-[540px]">
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
            </div>
          </Rise>
          <Rise delay={120}>
            {kicker && <Kicker>{kicker}</Kicker>}
            <H2 className="mb-6">{title}</H2>
            {body}
          </Rise>
        </Wrap>
      </section>
    );
  }

  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
        </Rise>
        <Rise delay={120} className="lg:col-span-6 lg:col-start-7">{body}</Rise>
      </Wrap>
    </section>
  );
}
