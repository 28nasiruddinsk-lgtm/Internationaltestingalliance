import Link from 'next/link';
import { news } from '@/data/news';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

export default function News({ limit = 4 }: { limit?: number }) {
  return (
    <section id="news" className="bg-tint py-16 md:py-20">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise>
            <Kicker>News and announcements</Kicker>
            <H2>Latest from ITA</H2>
          </Rise>
          {limit < news.length && <Link href="/news-events/" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue">All news <Arrow /></Link>}
        </div>
        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {news.slice(0, limit).map((n, k) => (
            <Rise key={n.slug} delay={k * 100}>
              <Link href={`/news/${n.slug}/`} className="group flex gap-4 sm:block">
                <div className={`h-[84px] w-[112px] flex-none overflow-hidden sm:h-[200px] sm:w-auto ${n.graphic ? 'border border-line bg-white' : ''}`}>
                  <img loading="lazy" decoding="async" src={img(n.image)} alt="" className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${n.graphic ? 'object-contain' : 'object-cover'}`} />
                </div>
                <div><div className="text-[13px] font-semibold text-blue sm:mt-5 sm:text-[13.5px]">{n.date}</div>
                <h3 className="mt-1 font-serif text-[16px] leading-snug sm:mt-2 sm:text-[18px] text-ink group-hover:text-blue">{n.title}</h3></div>
              </Link>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
