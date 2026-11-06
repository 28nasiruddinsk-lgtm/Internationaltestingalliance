import Link from 'next/link';
import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import type { BodyKey } from '@/data/partners';
import Logo from '../Logo';
import { Arrow, Kicker, Rise, Wrap } from '../ui';

type Props = {
  title: string;
  intro?: string;
  kicker?: string;
  headline?: string; // second line under the H1, in serif
  image?: ImageKey;
  alt?: string;
  light?: boolean;
  cover?: boolean; // image fills the whole header behind the text
  buttons?: { label: string; href: string }[]; // first is a white pill, the rest underlined links
  flip?: boolean; // mirror a cover photo so its subject sits right of the text
  logo?: BodyKey; // awarding body logo on a white tile beside the H1
};

export default function PageHeader({ title, intro, kicker, headline, image, alt = '', light, cover, buttons, flip, logo }: Props) {
  const tone = light ? 'bg-tint text-ink' : 'bg-navy text-white';
  const sub = light ? 'text-body' : 'text-white/85';
  const text = (
    <div>
      {kicker && <Kicker light={!light}>{kicker}</Kicker>}
      {logo ? (
        <div className="mt-5 flex flex-wrap items-center gap-5 md:flex-nowrap md:gap-7">
          <Logo k={logo} box="h-9 md:h-12" className="w-[200px] flex-none md:w-[220px]" />
          <h1 className="max-w-[760px] font-serif text-[28px] leading-[1.15] md:text-[42px]">{title}</h1>
        </div>
      ) : (
        <h1 className="mt-5 max-w-[860px] font-serif text-[28px] leading-[1.15] md:text-[42px]">{title}</h1>
      )}
      {headline && <p className="mt-6 max-w-[620px] font-serif text-[20px] leading-[1.3] md:text-[24px]">{headline}</p>}
      {intro && <p className={`mt-5 max-w-[620px] text-[17px] leading-[1.7] ${sub}`}>{intro}</p>}
      {buttons && (
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {buttons.map((b, i) => i === 0 ? (
            <Link key={b.label} href={b.href} className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-[15px] font-semibold ${light ? 'bg-blue text-white hover:bg-navy' : 'bg-white text-blue hover:bg-tint'}`}>
              {b.label} <Arrow />
            </Link>
          ) : (
            <Link key={b.label} href={b.href} className={`text-[15px] font-semibold underline underline-offset-[6px] ${light ? 'text-blue decoration-blue/40 hover:decoration-blue' : 'decoration-white/40 hover:decoration-white'}`}>
              {b.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  if (cover && image) {
    return (
      <section className="relative overflow-hidden bg-navy text-white">
        <img src={img(image)} alt={alt} className={`absolute inset-0 h-full w-full object-cover ${flip ? '-scale-x-100' : ''}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
        <Wrap className="relative py-28 md:py-44">
          <div className="max-w-[680px]">{text}</div>
        </Wrap>
      </section>
    );
  }

  return (
    <section className={`${tone} py-20 md:py-28`}>
      <Wrap className={image ? 'grid items-center gap-12 lg:grid-cols-2' : ''}>
        {text}
        {image && (
          <Rise delay={120}>
            <div className="h-[300px] overflow-hidden md:h-[420px]">
              <img src={img(image)} alt={alt} className="h-full w-full object-cover" />
            </div>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}
