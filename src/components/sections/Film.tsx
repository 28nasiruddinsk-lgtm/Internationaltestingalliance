'use client';
import { useEffect, useRef, useState } from 'react';
import { filmChapters, filmSeconds } from '@/data/sitting';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap, prefersReducedMotion, useInView } from '../ui';

const fmt = (s: number) => `0:${String(Math.floor(s)).padStart(2, '0')}`;

export default function Film() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [touched, setTouched] = useState(false);
  const [ref, seen] = useInView<HTMLElement>(0.45);

  // Autoplay (muted) the first time the section is seen, unless the visitor already used the controls.
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    el.muted = true;
    if (seen && !touched && !prefersReducedMotion()) el.play().then(() => setPlaying(true)).catch(() => {});
  }, [seen, touched]);

  const toggle = () => {
    const el = video.current!;
    setTouched(true);
    if (el.paused) { el.play(); setPlaying(true); } else { el.pause(); setPlaying(false); }
  };
  const seek = (to: number) => {
    const el = video.current!;
    el.currentTime = to;
    setTouched(true);
    el.play();
    setPlaying(true);
  };
  const current = filmChapters.reduce((acc, c, n) => (time >= c[0] ? n : acc), 0);

  return (
    <section id="film" ref={ref} className="bg-navy py-24 text-white md:py-32">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker light>On film</Kicker>
          <H2>Twenty-one seconds inside a sitting.</H2>
          <p className="mt-4 text-[16px] text-white/70">From the door to the empty hall afterwards, as it runs at our centres.</p>
        </Rise>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="relative aspect-video overflow-hidden bg-black">
              <video ref={video} poster={img('entrance')} muted loop playsInline preload="metadata"
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)} onClick={toggle}
                className="absolute inset-0 h-full w-full cursor-pointer object-cover" aria-label="Film of an ITA exam sitting">
                <source src="/film/sitting.mp4" type="video/mp4" />
                <source src="/film/sitting.webm" type="video/webm" />
              </video>
              {!playing && (
                <button onClick={toggle} aria-label="Play film" className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/95 text-blue shadow-2xl transition-transform hover:scale-105">
                  <span className="pulse absolute inset-0 rounded-full bg-white/40" />
                  <svg width="26" height="30" aria-hidden="true" className="relative ml-2"><path d="M0 0l26 15L0 30z" fill="#0B4CA1" /></svg>
                </button>
              )}
              <div className="absolute left-4 top-4 rounded-full bg-navy/75 px-3.5 py-1.5 text-[12.5px] font-semibold backdrop-blur-sm">
                {current + 1}/{filmChapters.length} · {filmChapters[current][1]}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12">
                <div className="relative h-[5px] cursor-pointer rounded-full bg-white/25"
                  onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); seek(((e.clientX - r.left) / r.width) * filmSeconds); }}>
                  <div className="absolute inset-y-0 left-0 rounded-full bg-sky" style={{ width: `${(time / filmSeconds) * 100}%` }} />
                  {filmChapters.slice(1).map(([s]) => (
                    <span key={s} className="absolute top-0 h-full w-[2px] bg-navy/80" style={{ left: `${(s / filmSeconds) * 100}%` }} />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4 text-[13px]">
                  <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
                    {playing
                      ? <svg width="10" height="12" aria-hidden="true"><path d="M1.5 0v12M8.5 0v12" stroke="#0E2240" strokeWidth="2" /></svg>
                      : <svg width="10" height="12" aria-hidden="true"><path d="M0 0l10 6-10 6z" fill="#0E2240" /></svg>}
                  </button>
                  <span className="tabular-nums text-white/85">{fmt(time)} / {fmt(filmSeconds)}</span>
                  <span className="hidden text-white/60 sm:inline">No sound</span>
                  <button onClick={() => video.current?.requestFullscreen?.()} aria-label="Full screen" className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/40 hover:bg-white/10">
                    <svg width="14" height="14" aria-hidden="true"><path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" fill="none" stroke="#fff" strokeWidth="1.6" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12.5px] text-white/50">Cut from photographs taken at ITA centres in Karachi. Final film to follow.</p>
          </div>
          <ol className="border-t border-white/15">
            {filmChapters.map(([start, title, caption], n) => (
              <li key={start}>
                <button onClick={() => seek(start + 0.05)}
                  className={`group flex w-full items-start gap-4 border-b border-white/15 py-4 pl-4 text-left transition-colors ${n === current && playing ? 'bg-white/[.07] shadow-[inset_3px_0_0_#8DB8EE]' : 'hover:bg-white/[.04]'}`}>
                  <span className={`mt-0.5 w-10 flex-none text-[13px] font-semibold tabular-nums ${n === current ? 'text-sky' : 'text-white/50'}`}>{fmt(start)}</span>
                  <span>
                    <span className={`block font-serif text-[18px] ${n === current ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{title}</span>
                    <span className="mt-0.5 block text-[13px] text-white/55">{caption}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Wrap>
    </section>
  );
}
