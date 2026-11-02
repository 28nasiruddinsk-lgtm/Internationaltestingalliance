import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { Kicker, Rise, Wrap } from '../ui';

type Props = {
  title: string;
  intro?: string;
  kicker?: string;
  headline?: string; // second line under the H1, in serif
  image?: ImageKey;
  alt?: string;
  light?: boolean;
  cover?: boolean; // image fills the whole header behind the text
};

export default function PageHeader({ title, intro, kicker, headline, image, alt = '', light, cover }: Props) {
  const tone = light ? 'bg-tint text-ink' : 'bg-navy text-white';
  const sub = light ? 'text-body' : 'text-white/85';
  const text = (
    <div>
      {kicker && <Kicker light={!light}>{kicker}</Kicker>}
      <h1 className="mt-5 max-w-[860px] font-serif text-[28px] leading-[1.15] md:text-[42px]">{title}</h1>
      {headline && <p className="mt-6 max-w-[620px] font-serif text-[20px] leading-[1.3] md:text-[24px]">{headline}</p>}
      {intro && <p className={`mt-5 max-w-[620px] text-[17px] leading-[1.7] ${sub}`}>{intro}</p>}
    </div>
  );

  if (cover && image) {
    return (
      <section className="relative overflow-hidden bg-navy text-white">
        <img src={img(image)} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
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
