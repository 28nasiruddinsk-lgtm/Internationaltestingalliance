'use client';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { quickLinks } from '@/data/home';
import { site } from '@/data/site';
import { openMail } from '@/lib/mailto';
import { Arrow, Wrap } from '../ui';

const icons = {
  centre: <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z M12 12.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z" />,
  book: <path d="M4 5.5h16v14H4z M4 9.5h16 M8.5 3v4 M15.5 3v4 M8 13.5h3 M8 16h6" />,
  guide: <path d="M6 3.5h9l3 3v14H6z M15 3.5v3h3 M9 11h6 M9 14h6 M9 17h4" />,
};

const input = 'h-11 min-w-0 flex-1 rounded-full bg-transparent px-4 text-[15px] text-ink outline-none placeholder:text-muted';

// Email enquiry box. Opens the visitor's mail app (static site, no server).
function ContactCell() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openMail('Website enquiry', [['Question', d.get('question')], ['Reply to', d.get('email')]]);
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="border-b border-line p-8 lg:border-b-0 lg:border-r" style={{ borderTop: '3px solid #0B4CA1' }}>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3.5 6h17v12h-17z M3.5 7l8.5 6.5L20.5 7" />
          </svg>
        </span>
        <label htmlFor="cq-email" className="font-serif text-[20px] text-ink">Contact us</label>
      </div>
      <p className="mt-3 text-[14px] text-body">Send a question by email and our team will reply.</p>
      <div className="mt-4 rounded-full border border-line bg-tint p-1 focus-within:border-blue">
        <input id="cq-email" name="email" type="email" required placeholder="Your email address" autoComplete="email" className={`${input} w-full`} />
      </div>
      <div className="mt-2 flex rounded-full border border-line bg-tint p-1 focus-within:border-blue">
        <input name="question" required aria-label="Your question" placeholder="Your question" className={input} />
        <button className="h-11 rounded-full bg-blue px-6 text-[14px] font-semibold text-white hover:bg-navy">Send</button>
      </div>
      <p role="status" className="mt-3 min-h-[1.2em] text-[12.5px] text-muted">
        {sent ? 'Your email app should open with the message ready to send.' : `Or write to ${site.email}`}
      </p>
    </form>
  );
}

export default function Actions() {
  return (
    <section id="contact-us" className="relative z-20 -mt-16" style={{ background: 'linear-gradient(to bottom,transparent 0,transparent 64px,#EEF3FA 64px)' }}>
      <Wrap>
        <div className="grid border border-line bg-white shadow-[0_24px_60px_rgba(14,34,64,.12)] lg:grid-cols-[1.55fr_1fr_1fr_1fr]">
          <ContactCell />
          {quickLinks.map((l, n) => (
            <Link key={l.title} href={l.href}
              className={`group relative flex flex-col p-8 transition-colors hover:bg-tint ${n < 2 ? 'border-b border-line sm:border-b-0 lg:border-r' : ''}`}>
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue transition-transform duration-300 group-hover:scale-x-100" />
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">{icons[l.icon]}</svg>
              </span>
              <span className="mt-4 font-serif text-[19px] text-ink">{l.title}</span>
              <span className="mt-1.5 text-[14px] leading-relaxed text-body">{l.text}</span>
              <span className="mt-auto flex items-center gap-2 pt-5 text-[14px] font-semibold text-blue">Open <Arrow /></span>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
