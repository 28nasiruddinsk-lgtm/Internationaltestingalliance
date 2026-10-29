import Link from 'next/link';
import { Arrow, Wrap } from '../ui';

type Props = { title: string; text: string; links: { label: string; href: string }[] };

// Slim tinted strip with a line of text and a couple of links
export default function Strip({ title, text, links }: Props) {
  return (
    <section className="bg-tint py-14">
      <Wrap className="flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-[640px]">
          <h2 className="font-serif text-[22px] text-ink">{title}</h2>
          <p className="mt-2 text-[16px] leading-[1.7] text-body">{text}</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
              {l.label} <Arrow />
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
