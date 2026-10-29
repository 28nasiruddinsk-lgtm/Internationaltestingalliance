import Link from 'next/link';
import { services } from '@/data/home';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

export default function Services() {
  return (
    <section className="bg-tint py-24 md:py-32">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise>
            <Kicker>Our services</Kicker>
            <H2 className="max-w-[620px]">Take one service, or hand us the whole sitting.</H2>
          </Rise>
          <Link href="/services/" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue">All services <Arrow /></Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, n) => (
            <Rise key={s.title} delay={n * 90} className="h-full">
              <Link href={s.href} className="group flex h-full flex-col bg-white">
                <div className="relative h-[220px] overflow-hidden">
                  <img loading="lazy" decoding="async" src={img(s.image)} alt={s.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ filter: 'saturate(.9)' }} />
                  <span className="absolute left-0 top-0 bg-blue px-3 py-1.5 text-[13px] font-semibold text-white">0{n + 1}</span>
                </div>
                <div className="flex flex-1 flex-col border-t-[3px] border-blue p-6">
                  <h3 className="min-h-[2.5em] font-serif text-[18px] leading-[1.25] text-ink group-hover:text-blue">{s.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-body">{s.text}</p>
                  <span className="mt-auto inline-block pt-5 text-blue"><Arrow /></span>
                </div>
              </Link>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
