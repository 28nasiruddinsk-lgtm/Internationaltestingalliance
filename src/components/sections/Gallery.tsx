'use client';
import { useRef, useState, type PointerEvent } from 'react';
import { gallery } from '@/data/home';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

const arrow = <path d="M1 5.5h12M8.5 1l4.5 4.5L8.5 10" fill="none" stroke="currentColor" strokeWidth="1.5" />;

export default function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = track.current!;
    setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth || 1));
  };
  const down = (e: PointerEvent) => {
    drag.current = { x: e.clientX, left: track.current!.scrollLeft };
    track.current!.classList.add('dragging');
  };
  const move = (e: PointerEvent) => {
    if (drag.current) track.current!.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => {
    drag.current = null;
    track.current?.classList.remove('dragging');
  };
  const by = (dir: number) => track.current!.scrollBy({ left: dir * track.current!.clientWidth * 0.6, behavior: 'smooth' });

  return (
    <section className="overflow-hidden py-24 md:py-32">
      <Wrap className="flex flex-wrap items-end justify-between gap-6">
        <Rise>
          <Kicker>Our centres</Kicker>
          <H2>Real rooms. Real people.</H2>
          <p className="mt-3 text-[15px] text-body">Drag or scroll through photographs from ITA venues.</p>
        </Rise>
        <div className="flex gap-2">
          <button aria-label="Scroll back" onClick={() => by(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-blue text-blue hover:bg-tint">
            <svg width="15" height="11" className="rotate-180" aria-hidden="true">{arrow}</svg>
          </button>
          <button aria-label="Scroll forward" onClick={() => by(1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white hover:bg-navy">
            <svg width="15" height="11" aria-hidden="true">{arrow}</svg>
          </button>
        </div>
      </Wrap>
      <div ref={track} onScroll={onScroll} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}
        className="gal mt-10 flex cursor-grab gap-5 overflow-x-auto px-6 pb-4 md:px-[max(48px,calc((100vw-1520px)/2+56px))]">
        {gallery.map(([image, title, place], n) => (
          <figure key={image} className={`flex-none select-none ${n % 3 === 0 ? 'w-[78vw] md:w-[560px]' : 'w-[64vw] md:w-[380px]'}`}>
            <div className="h-[300px] overflow-hidden md:h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(image)} alt={title} draggable={false} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" style={{ filter: 'saturate(.9)' }} />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-line pt-3">
              <span className="font-serif text-[19px] text-ink">{title}</span>
              <span className="text-[13px] text-muted">{place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <Wrap>
        <div className="mt-6 h-[3px] bg-line"><div className="h-full bg-blue transition-[width] duration-150" style={{ width: `${12 + progress * 88}%` }} /></div>
      </Wrap>
    </section>
  );
}
