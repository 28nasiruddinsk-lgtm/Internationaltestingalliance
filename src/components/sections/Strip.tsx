import Link from 'next/link';
import { Arrow, Wrap } from '../ui';

type Props = { title: string; text: string; links?: { label: string; href: string }[] };

// Slim tinted strip with a line of text and a couple of links
export default function Strip({ title, text, links }: Props) {
  return (
    <section className="border-t border-white/10 bg-navy py-14 text-white">
      <Wrap className="flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-[640px]">
          <h2 className="font-serif text-[22px] text-white">{title}</h2>
          <p className="mt-2 text-[16px] leading-[1.7] text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links?.map((l) => (
            <Link key={l.label} href={l.href} className="group inline-flex items-center gap-2 text-[15px] font-semibold text-sky hover:text-white">
              {l.label} <Arrow />
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
