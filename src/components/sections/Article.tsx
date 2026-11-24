import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { img, type ImageKey } from '@/data/images';
import { Arrow, Rise, Wrap } from '../ui';

type Props = { image: ImageKey; alt?: string; graphic?: boolean; body: string[] };

// **bold** inside a line, e.g. a person's name before their role
const inline = (s: string): ReactNode =>
  s.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-ink">{part}</strong> : <Fragment key={i}>{part}</Fragment>));

// News article body. Lines starting "## " are subheadings, runs of "- " lines become a list, the rest are paragraphs.
export default function Article({ image, alt = '', graphic, body }: Props) {
  const blocks: ReactNode[] = [];
  for (let i = 0; i < body.length; i++) {
    const line = body[i];
    if (line.startsWith('## ')) {
      blocks.push(<h2 key={i} className="mt-10 font-serif text-[24px] leading-snug text-ink md:text-[28px]">{line.slice(3)}</h2>);
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < body.length && body[i].startsWith('- ')) items.push(body[i++].slice(2));
      i--;
      blocks.push(
        <ul key={i} className="mt-5 space-y-2.5">
          {items.map((it) => <li key={it} className="flex gap-3"><span className="mt-[11px] h-[3px] w-4 flex-none bg-blue" /><span>{inline(it)}</span></li>)}
        </ul>,
      );
    } else {
      blocks.push(<p key={i} className="mt-5">{inline(line)}</p>);
    }
  }
  return (
    <section className="py-12 md:py-16">
      <Wrap>
        <Rise className="mx-auto max-w-[820px]">
          <div className={`overflow-hidden rounded-2xl ${graphic ? 'border border-line bg-white' : ''}`}>
            <img src={img(image)} alt={alt} className={`w-full ${graphic ? 'max-h-[420px] object-contain' : 'max-h-[560px] object-cover'}`} />
          </div>
          <div className="mt-6 text-[16.5px] leading-[1.8] text-body">{blocks}</div>
          <Link href="/news-events/" className="group mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">All news <Arrow /></Link>
        </Rise>
      </Wrap>
    </section>
  );
}
