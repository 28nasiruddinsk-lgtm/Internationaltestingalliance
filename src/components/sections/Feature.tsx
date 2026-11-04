import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  items?: string[][]; // [title, text]
  image: ImageKey;
  alt?: string;
  left?: boolean; // card on the left of the photo
};

// A wide photo with a white card overlapping it
export default function Feature({ kicker, title, intro, items, image, alt = '', left }: Props) {
  return (
    <section className="py-24 md:py-32">
      <Wrap className="relative">
        <div className={`h-[300px] overflow-hidden md:h-[620px] lg:w-[72%] ${left ? 'lg:ml-auto' : ''}`}>
          <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
        </div>
        {/* positioning lives on this wrapper: Rise sets its own transform */}
        <div className={`relative -mt-20 mx-4 lg:absolute lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[52%] lg:-translate-y-1/2 ${left ? 'lg:left-14' : 'lg:right-14'}`}>
        <Rise className="relative bg-white p-8 shadow-[0_30px_70px_rgba(14,34,64,.16)] md:p-12">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-blue" />
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {intro && <p className="mt-5 text-[16px] leading-[1.75] text-body">{intro}</p>}
          {items && (
            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {items.map(([t, text]) => (
                <div key={t} className="border-l-[3px] border-blue pl-4">
                  <dt className="font-serif text-[18px] text-ink">{t}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-body">{text}</dd>
                </div>
              ))}
            </dl>
          )}
        </Rise>
        </div>
      </Wrap>
    </section>
  );
}
