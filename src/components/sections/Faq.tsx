import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = { kicker?: string; title: string; items: string[][] }; // items: [question, answer]

// Accordion on native <details>, closed by default; FAQPage data helps search show the answers
export default function Faq({ kicker, title, items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return (
    <section className="bg-tint py-24 md:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-4">
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2>{title}</H2>
        </Rise>
        <div className="border-t border-line lg:col-span-7 lg:col-start-6">
          {items.map(([q, a]) => (
            <details key={q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[19px] text-ink hover:text-blue [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden="true" className="relative h-4 w-4 flex-none">
                  <span className="absolute left-0 top-[7px] h-[2px] w-4 bg-blue" />
                  <span className="absolute left-[7px] top-0 h-4 w-[2px] bg-blue transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="max-w-[640px] pb-6 text-[16px] leading-[1.75] text-body">{a}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
