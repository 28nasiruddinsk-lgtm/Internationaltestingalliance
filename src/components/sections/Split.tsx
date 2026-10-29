import Link from 'next/link';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  paragraphs: string[];
  link?: { label: string; href: string };
  tint?: boolean;
};

// Heading on the left, text on the right (the home page About layout)
export default function Split({ kicker, title, paragraphs, link, tint }: Props) {
  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
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
