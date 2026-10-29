'use client';
import { useRef, type ReactNode } from 'react';
import ContactForm from './ContactForm';

export default function ContactDialog({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className={className} onClick={() => ref.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={ref}
        className="w-[min(40rem,92vw)] rounded-2xl p-0 backdrop:bg-navy/60"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="p-6 md:p-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl">Contact us</h2>
              <p className="mt-2 text-sm">Send an email query and the team will reply.</p>
            </div>
            <button
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-full border border-line"
            >
              ×
            </button>
          </div>
          <ContactForm />
        </div>
      </dialog>
    </>
  );
}
