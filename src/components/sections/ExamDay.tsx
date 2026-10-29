'use client';
import { useEffect, useState } from 'react';
import { examDay } from '@/data/steps';

export default function ExamDay() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % examDay.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const step = examDay[active];
  return (
    <section id="exam-day" className="section bg-navy text-white">
      <div className="container-page">
        <h2 className="max-w-xl text-white">Exam day, step by step</h2>
        <ol
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-7"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {examDay.map((s, n) => (
            <li key={s.time}>
              <button
                onClick={() => setActive(n)}
                aria-current={n === active}
                className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${n === active ? 'border-white bg-white text-navy' : 'border-white/25 hover:bg-white/10'}`}
              >
                <span className="block text-sm opacity-70">{s.time}</span>
                <span className="block">{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-xl text-lg text-white/85" aria-live="polite">{step.text}</p>
      </div>
    </section>
  );
}
