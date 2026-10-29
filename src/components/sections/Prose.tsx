import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

export type ProseProps = {
  kicker?: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  image?: ImageKey;
  alt?: string;
  tint?: boolean;
  contain?: boolean;
};

export default function Prose({ kicker, title, paragraphs, points, image, alt = '', tint, contain }: ProseProps) {
  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className={`grid gap-12 ${image ? 'lg:grid-cols-2' : ''}`}>
        <Rise className={image ? '' : 'max-w-[820px]'}>
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
          {paragraphs.map((p) => <p key={p} className="mt-5 text-[16px] leading-[1.75] text-body">{p}</p>)}
          {points && (
            <ul className="mt-6 space-y-3 text-[16px] text-body">
              {points.map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-[11px] h-[3px] w-4 flex-none bg-blue" />{p}</li>
              ))}
            </ul>
          )}
        </Rise>
        {image && (
          <Rise delay={120}>
            <div className={`h-[320px] overflow-hidden md:h-[440px] ${contain ? 'border border-line bg-white' : ''}`}>
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className={`h-full w-full ${contain ? 'object-contain' : 'object-cover'}`} />
            </div>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}
