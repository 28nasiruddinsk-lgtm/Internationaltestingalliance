import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import Reveal from '../Reveal';

export default function Services() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="max-w-xl">Four services, chosen individually or together</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Reveal key={s.slug} className="h-full">
              <Link href={`/services/${s.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line">
                <div className="relative aspect-[4/3]">
                  <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="text-sm">{s.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
