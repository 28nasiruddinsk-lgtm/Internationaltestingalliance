import type { ImageKey } from '@/data/images';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  columns: [title: string, items: string[]][]; // one white card per column; an empty title hides the heading
  tint?: boolean;
  marks?: boolean; // tick the first column, cross the second ("Bring" / "Leave at home")
  image?: ImageKey; // photo beside the lists
  alt?: string;
  note?: string; // soft highlighted panel under the lists
};

const tick = <path d="M3 8.5l3.5 3.5L13 4.5" />;
const cross = <path d="M4 4l8 8M12 4l-8 8" />;

// Short bulleted lists in cards, for checklists and rules
export default function Lists({ kicker, title, intro, columns, tint, marks, image, alt = '', note }: Props) {
  const lists = (
    <div className={`mt-12 grid gap-5 ${columns.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {columns.map(([head, items], c) => (
        <Rise key={head || c} delay={c * 90} className="h-full">
          <div className="h-full border-t-[3px] border-blue bg-white p-7 shadow-[0_10px_30px_rgba(14,34,64,.06)]">
            {head && <h3 className="font-serif text-[20px] text-ink">{head}</h3>}
            <ul className={`space-y-3.5 text-[16px] leading-relaxed text-body ${head ? 'mt-5' : ''}`}>
              {items.map((it) => (
                <li key={it} className="flex gap-3">
                  {marks ? (
                    <span className={`mt-[3px] flex h-5 w-5 flex-none items-center justify-center rounded-full ${c === 0 ? 'bg-blue text-white' : 'bg-tint text-muted'}`}>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{c === 0 ? tick : cross}</svg>
                    </span>
                  ) : <span className="mt-[11px] h-[3px] w-4 flex-none bg-blue" />}
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Rise>
      ))}
    </div>
  );
  const head = (
    <Rise className="max-w-[720px]">
      {kicker && <Kicker>{kicker}</Kicker>}
      <H2>{title}</H2>
      {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
    </Rise>
  );
  const panel = note && (
    <Rise className="mt-8 border-l-[3px] border-blue bg-white/70 p-6 text-[16px] leading-[1.7] text-ink">{note}</Rise>
  );

  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      {image ? (
        <Wrap className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">{head}{lists}{panel}</div>
          <Rise delay={120} className="relative pb-5 pl-5 lg:col-span-5">
            <div className="absolute bottom-0 left-0 h-2/3 w-2/3 bg-blue" />
            <div className="relative h-[360px] overflow-hidden lg:h-full lg:min-h-[560px]">
              <img loading="lazy" decoding="async" src={img(image)} alt={alt} className="h-full w-full object-cover" />
            </div>
          </Rise>
        </Wrap>
      ) : (
        <Wrap>{head}{lists}{panel}</Wrap>
      )}
    </section>
  );
}
