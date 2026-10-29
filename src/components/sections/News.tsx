import Link from 'next/link';
import { news } from '@/data/news';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

export default function News({ limit = 4 }: { limit?: number }) {
  return (
    <section id="news" className="py-24 md:py-32">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise>
            <Kicker>News and announcements</Kicker>
            <H2>Latest from ITA</H2>
          </Rise>
          <Link href="/news/" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue">All news <Arrow /></Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, limit).map((n, k) => (
            <Rise key={n.slug} delay={k * 100}>
              <Link href={`/news/${n.slug}/`} className="group block">
                <div className="h-[200px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(n.image)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ filter: 'saturate(.9)' }} />
                </div>
                <div className="mt-5 text-[13.5px] font-semibold text-blue">{n.date}</div>
                <h3 className="mt-2 font-serif text-[19px] leading-snug text-ink group-hover:text-blue">{n.title}</h3>
              </Link>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
