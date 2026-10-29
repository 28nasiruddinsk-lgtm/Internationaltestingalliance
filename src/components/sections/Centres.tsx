'use client';
import Image from 'next/image';
import { useRef } from 'react';

// TODO: replace with ITA's own centre photos as they are supplied.
const photos = [
  { src: '/images/centre-room.webp', alt: 'Examination room with folding desks' },
  { src: '/images/centre-gems.webp', alt: 'Hall set up for the GEMS scholarship programme' },
  { src: '/images/hall-rows.webp', alt: 'Large hall with rows of desks' },
  { src: '/images/sitting.webp', alt: 'Candidates sitting an examination' },
];

export default function Centres() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0 });

  return (
    <section className="section">
      <div className="container-page">
        <h2 className="max-w-xl">Our centres</h2>
        <p className="mt-4 max-w-xl">Standardised venues with the same layout, controls and staffing in every city.</p>
      </div>
      <div
        ref={track}
        className="mt-12 flex cursor-grab gap-5 overflow-x-auto px-6 pb-4 active:cursor-grabbing md:px-14 [scrollbar-width:thin]"
        onPointerDown={(e) => {
          drag.current = { down: true, x: e.clientX, left: track.current!.scrollLeft };
        }}
        onPointerMove={(e) => {
          if (drag.current.down) track.current!.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current.down = false)}
        onPointerLeave={() => (drag.current.down = false)}
      >
        {photos.map((p) => (
          <div key={p.src} className="relative aspect-[4/3] w-[80vw] shrink-0 overflow-hidden rounded-2xl md:w-[34rem]">
            <Image src={p.src} alt={p.alt} fill draggable={false} sizes="34rem" className="select-none object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
