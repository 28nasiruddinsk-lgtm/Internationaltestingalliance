import { ceoMessage, leaders, type Leader } from '@/data/board';
import { basePath } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = { featured?: boolean; kicker?: string; title?: string };

const photo = (l: Leader) => `${basePath}/images/${l.photo}`;

// The rest of a long message folds away under a native disclosure, so the page stays scannable.
function More({ paras, dark }: { paras: string[]; dark?: boolean }) {
  if (!paras.length) return null;
  return (
    <details className="group mt-5">
      <summary className={`inline-flex cursor-pointer list-none items-center gap-2 text-[15px] font-semibold ${dark ? 'text-sky' : 'text-blue'}`}>
        <span className="group-open:hidden">Read the full message</span>
        <span className="hidden group-open:inline">Show less</span>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="transition-transform group-open:rotate-180"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
      </summary>
      <div className="mt-4 space-y-4">{paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>
    </details>
  );
}

export default function Leaders({ featured, kicker, title }: Props) {
  if (featured) {
    const l = ceoMessage;
    return (
      <section className="bg-navy py-24 text-white md:py-32">
        <Wrap className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
          <Rise>
            <img src={photo(l)} alt={`${l.name}, ${l.role}`} className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
            <p className="mt-5 font-serif text-[22px]">{l.name}</p>
            <p className="mt-1 text-[14px] text-white/70">{l.role}</p>
          </Rise>
          <Rise delay={120}>
            <Kicker light>{kicker ?? 'A message from our leadership'}</Kicker>
            <blockquote className="mt-6 font-serif text-[28px] leading-[1.25] md:text-[38px]">“{l.quote}”</blockquote>
            <div className="mt-8 space-y-4 text-[16px] leading-[1.75] text-white/80">
              {l.message.slice(0, 2).map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              <More paras={l.message.slice(2)} dark />
            </div>
          </Rise>
        </Wrap>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker>{kicker ?? 'Leadership'}</Kicker>
          <H2>{title ?? 'The people accountable for every sitting'}</H2>
        </Rise>
        <div className="mt-14 space-y-20 md:space-y-24">
          {leaders.map((l, n) => (
            <article key={l.name} className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Rise className={n % 2 ? 'lg:order-2' : ''}>
                <img loading="lazy" decoding="async" src={photo(l)} alt={`${l.name}, ${l.role}`} className="aspect-[4/3] w-full rounded-2xl object-cover object-top" />
              </Rise>
              <Rise delay={100}>
                <p className="text-[12px] font-bold uppercase tracking-[.14em] text-blue">{l.role}</p>
                <h3 className="mt-2 font-serif text-[30px] leading-tight text-ink md:text-[36px]">{l.name}</h3>
                <blockquote className="mt-6 border-l-[3px] border-blue pl-5 font-serif text-[20px] leading-snug text-navy md:text-[22px]">“{l.quote}”</blockquote>
                <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-body">
                  <p>{l.message[0]}</p>
                  <More paras={l.message.slice(1)} />
                </div>
              </Rise>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
