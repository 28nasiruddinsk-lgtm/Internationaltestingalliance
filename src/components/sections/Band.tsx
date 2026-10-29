import Link from 'next/link';
import { Arrow, H2, Kicker, Wrap } from '../ui';

type Props = { title: string; text: string; buttons: { label: string; href: string }[] };

// The blue "Work with us" band that closes a page
export default function Band({ title, text, buttons }: Props) {
  return (
    <section className="bg-blue py-24 text-white md:py-32">
      <Wrap className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Kicker light>Work with us</Kicker>
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
