'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// true once the element is on screen (or motion is reduced)
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen || prefersReducedMotion()] as const;
}

export function Rise({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(14px)',
        transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export const Wrap = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1520px] px-6 md:px-14 ${className}`}>{children}</div>
);

export function Kicker({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[14px] font-semibold ${light ? 'text-white' : 'text-blue'}`}>
      <span className={`h-[3px] w-7 ${light ? 'bg-sky' : 'bg-blue'}`} />
      {children}
    </div>
  );
}

export const Arrow = ({ className = '' }: { className?: string }) => (
  <svg aria-hidden="true" width="15" height="11" viewBox="0 0 15 11"
    className={`inline-block transition-transform duration-200 group-hover:translate-x-1 ${className}`}>
    <path d="M1 5.5h12M8.5 1l4.5 4.5L8.5 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const H2 = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`mt-5 font-serif text-[22px] leading-[1.2] md:text-[30px] ${className}`}>{children}</h2>
);

// seeded random, so the hall replay is identical on every load
export function seeded(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
