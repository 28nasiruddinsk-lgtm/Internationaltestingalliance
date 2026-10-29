'use client';
import { useState } from 'react';
import { site } from '@/data/site';

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-navy text-sm text-white">
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <p>{site.announcement}</p>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full hover:bg-white/10"
        >
          ×
        </button>
      </div>
    </div>
  );
}
