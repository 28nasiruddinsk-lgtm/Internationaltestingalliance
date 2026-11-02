import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  text?: string;
  images: [ImageKey, string][]; // [image, caption]; the first one is shown large
};

// One large photo and two stacked beside it, captions on a dark fade
export default function Mosaic({ kicker, title, text, images }: Props) {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {text && <p className="mt-5 text-[17px] leading-[1.75] text-body">{text}</p>}
        </Rise>
        <div className="mt-12 grid gap-4 md:h-[560px] md:grid-cols-3 md:grid-rows-2">
          {images.map(([key, caption], i) => (
            <Rise key={key} delay={i * 90} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
              <figure className="group relative h-[260px] overflow-hidden md:h-full">
                <img loading="lazy" decoding="async" src={img(key)} alt={caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5 pt-14 text-[15px] font-semibold text-white">
                  {caption}
                </figcaption>
              </figure>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
