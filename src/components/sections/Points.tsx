import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title?: string; // without a title the points stand alone, each with its own heading
  intro?: string;
  items: string[][]; // [title, text]
  tint?: boolean;
  image?: ImageKey; // tall photo beside the points
  alt?: string;
};

// Short benefit points in two columns, a blue rule above each, no icons
export default function Points({ kicker, title, intro, items, tint, image, alt = '' }: Props) {
  const list = (
    <dl className={`${title ? 'mt-12' : ''} grid gap-x-12 gap-y-10 ${image ? 'sm:grid-cols-2' : 'md:grid-cols-2 md:gap-x-16'}`}>
      {items.map(([t, text], n) => (
        <Rise key={t} delay={(n % 2) * 90}>
          <div className="border-t-[3px] border-blue pt-5">
            <dt className="font-serif text-[20px] text-ink">{t}</dt>
            <dd className="mt-2 max-w-[520px] text-[16px] leading-relaxed text-body">{text}</dd>
          </div>
        </Rise>
      ))}
    </dl>
  );
  const head = (
    <Rise className="max-w-[720px]">
      {kicker && <Kicker>{kicker}</Kicker>}
      {title && <H2>{title}</H2>}
      {intro && <p className="mt-5 text-[17px] leading-[1.75] text-body">{intro}</p>}
    </Rise>
  );

  return (
    <section className={`py-16 md:py-20 ${tint ? 'bg-tint' : ''}`}>
      {image ? (
        <Wrap className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Rise className="relative pb-5 pr-5 lg:col-span-5">
            <div className="absolute bottom-0 right-0 h-2/3 w-2/3 bg-blue" />
            <div className="relative h-[360px] overflow-hidden md:h-full md:min-h-[620px]">
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
            </div>
          </Rise>
          <div className="lg:col-span-7">{title && head}{list}</div>
        </Wrap>
      ) : (
        <Wrap>{title && head}{list}</Wrap>
      )}
    </section>
  );
}
