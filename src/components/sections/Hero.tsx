'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const audiences = [
  {
    key: 'Awarding bodies',
    title: 'Independent delivery of your examinations',
    text: 'We plan, manage and deliver your sittings, then return one consolidated record. You keep control of the exam, the marking and the result.',
    image: '/images/hall-rows.webp',
    href: '/awarding-bodies/',
  },
  {
    key: 'Universities',
    title: 'Examinations on your premises or ours',
    text: 'Use your own venue or an external one. ITA runs verification, invigilation and reporting to the standard you set.',
    image: '/images/centre-gems.webp',
    href: '/services/',
  },
  {
    key: 'Candidates',
    title: 'Sit your exam close to home',
    text: 'Register, pay and download your Statement of Entry online. On the day, a three-step identity check gets you seated quickly.',
    image: '/images/sitting.webp',
    href: '/candidates/',
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const a = audiences[i];
  return (
    <section className="bg-navy text-white">
      <div className="container-page grid items-center gap-10 pb-40 pt-14 md:grid-cols-2 md:pb-48 md:pt-20">
        <div>
          <div role="tablist" aria-label="Audience" className="mb-8 flex flex-wrap gap-2">
            {audiences.map((x, n) => (
              <button
                key={x.key}
                role="tab"
                aria-selected={n === i}
                onClick={() => setI(n)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${n === i ? 'bg-white text-navy' : 'border border-white/30 hover:bg-white/10'}`}
              >
                {x.key}
              </button>
            ))}
          </div>
          <h1 className="text-white">{a.title}</h1>
          <p className="mt-5 max-w-lg text-white/80">{a.text}</p>
          <Link href={a.href} className="btn-light mt-8">Learn more</Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          {audiences.map((x, n) => (
            <Image
              key={x.image}
              src={x.image}
              alt=""
              fill
              priority={n === 0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${n === i ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
