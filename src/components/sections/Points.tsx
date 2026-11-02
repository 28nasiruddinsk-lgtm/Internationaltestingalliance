import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = { kicker?: string; title: string; items: string[][]; tint?: boolean }; // items: [title, text]

// Short benefit points in two columns, a blue rule above each, no icons
export default function Points({ kicker, title, items, tint }: Props) {
  return (
    <section className={`py-24 md:py-32 ${tint ? 'bg-tint' : ''}`}>
      <Wrap>
        <Rise className="max-w-[720px]">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
        </Rise>
        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {items.map(([t, text], n) => (
            <Rise key={t} delay={(n % 2) * 90}>
              <div className="border-t-[3px] border-blue pt-5">
                <dt className="font-serif text-[20px] text-ink">{t}</dt>
                <dd className="mt-2 max-w-[520px] text-[16px] leading-relaxed text-body">{text}</dd>
              </div>
            </Rise>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}
