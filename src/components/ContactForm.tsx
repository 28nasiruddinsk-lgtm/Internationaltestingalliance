'use client';
import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

// TODO: a static export has no server. Swap the mailto for a form endpoint once the client picks one.
export default function ContactForm({ onDark = false }: { onDark?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get('name')}\nOrganisation: ${d.get('org') || '-'}\nEmail: ${d.get('email')}\n\n${d.get('message')}`;
    const subject = encodeURIComponent(String(d.get('subject')));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm">
        Full name
        <input name="name" required autoComplete="name" className="field" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Email
        <input name="email" type="email" required autoComplete="email" className="field" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Organisation (optional)
        <input name="org" autoComplete="organization" className="field" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Subject
        <select name="subject" className="field">
          <option>General enquiry</option>
          <option>Awarding body partnership</option>
          <option>University or institution</option>
          <option>Candidate support</option>
          <option>Result or certificate query</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        Message
        <textarea name="message" required rows={5} className="field" />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button className={onDark ? 'btn-light' : 'btn-primary'}>Send by email</button>
        {sent && <p role="status" className="text-sm">Your email app should open with the message ready to send.</p>}
      </div>
    </form>
  );
}
