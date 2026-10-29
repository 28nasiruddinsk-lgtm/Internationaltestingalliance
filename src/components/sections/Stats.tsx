'use client';
import { useEffect, useState } from 'react';
import { stats } from '@/data/steps';
import { useInView } from '../Reveal';

function Count({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(to);
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / 1200, 1);
      setN(Math.round(to * t));
      if (t < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n}</>;
}

export default function Stats() {
  const [ref, seen] = useInView<HTMLDListElement>();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="mb-12 max-w-xl">ITA in numbers</h2>
        <dl ref={ref} className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-line pl-6">
              <dd className="font-serif text-5xl text-navy">
                <Count to={s.value} run={seen} />{s.suffix}
              </dd>
              <dt className="mt-2 text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
