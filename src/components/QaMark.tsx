'use client';
import { useEffect, useState, type ReactNode } from 'react';

// Shows a revision note around a section when the page is opened with ?qa (see data/qa.ts)
export default function QaMark({ note, children }: { note?: string; children: ReactNode }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(new URLSearchParams(location.search).has('qa')), []);
  if (!note || !on) return <>{children}</>;
  return (
    <div className="relative outline outline-4 -outline-offset-4 outline-[#F59E0B]">
      <div className="absolute left-3 top-3 z-40 max-w-[min(560px,calc(100%-24px))] rounded-md bg-[#F59E0B] px-3 py-1.5 text-[13px] font-semibold leading-snug text-black shadow-lg">
        Changed: {note}
      </div>
      {children}
    </div>
  );
}
