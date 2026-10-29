import Image from 'next/image';
import Link from 'next/link';
import { news } from '@/data/news';

export default function News({ limit = 4 }: { limit?: number }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <h2>News</h2>
          <Link href="/news/" className="btn-outline">All news</Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, limit).map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}/`} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={n.image} alt="" fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-sm text-muted">{n.date}</p>
              <h3 className="mt-1 text-lg leading-snug group-hover:text-blue">{n.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
