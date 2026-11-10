import { Wrap } from '../ui';

// Long-form text such as a privacy notice: one readable column of headings, paragraphs and lists.
// In paragraphs and list items, an email address or phone number becomes a link.
type Block = { h?: string; p?: string[]; list?: string[]; sub?: string[] };
type Props = { blocks: Block[]; updated?: string };

const LINKABLE = /([\w.+-]+@[\w-]+\.[\w.]+|\+?\d[\d\s]{8,}\d)/g;

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(LINKABLE).map((part, i) => {
        if (i % 2 === 0) return part;
        const href = part.includes('@') ? `mailto:${part}` : `tel:${part.replace(/\s/g, '')}`;
        return <a key={i} href={href} className="font-semibold text-blue underline-offset-4 hover:underline">{part}</a>;
      })}
    </>
  );
}

export default function Doc({ blocks, updated }: Props) {
  return (
    <section className="py-16 md:py-24">
      <Wrap>
        <div className="max-w-[780px]">
          {updated && <p className="mb-10 text-[14px] text-muted">{updated}</p>}
          {blocks.map((b, n) => (
            <div key={n} className={n ? 'mt-12' : ''}>
              {b.h && <h2 className="font-serif text-[22px] leading-snug text-ink md:text-[26px]">{b.h}</h2>}
              {b.p?.map((t) => <p key={t} className="mt-4 text-[16px] leading-[1.8] text-body"><Rich text={t} /></p>)}
              {b.list && (
                <ul className="mt-4 space-y-3 text-[16px] leading-[1.75] text-body">
                  {b.list.map((t) => (
                    <li key={t} className="flex gap-3"><span className="mt-[12px] h-[3px] w-4 flex-none bg-blue" /><span><Rich text={t} /></span></li>
                  ))}
                </ul>
              )}
              {b.sub && (
                <ul className="mt-3 space-y-2 border-l-[3px] border-tint pl-5 text-[15.5px] leading-[1.7] text-body">
                  {b.sub.map((t) => <li key={t}><Rich text={t} /></li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
