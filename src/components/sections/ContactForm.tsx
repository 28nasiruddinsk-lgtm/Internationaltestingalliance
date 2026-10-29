'use client';
import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { openMail } from '@/lib/mailto';
import { Arrow, H2, Rise, Wrap } from '../ui';

const fields = [['name', 'Your name', 'text'], ['org', 'Organisation', 'text'], ['email', 'Email', 'email'], ['country', 'Country', 'text']] as const;
const box = 'mt-1.5 h-12 w-full border border-line bg-white px-3 text-[16px] font-normal text-ink outline-none focus:border-blue';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // a static site has no server, so the message is handed to the visitor's mail app
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openMail('Website enquiry', [['Name', d.get('name')], ['Organisation', d.get('org')], ['Email', d.get('email')], ['Country', d.get('country')], ['I am', d.get('who')], ['Message', d.get('message')]]);
    setSent(true);
  }

  return (
    <section className="py-20 md:py-24">
      <Wrap className="grid gap-14 lg:grid-cols-12">
        <Rise className="lg:col-span-7">
          <H2 className="!mt-0">Send us a message</H2>
          {sent ? (
            <div className="swap mt-8 border-l-[3px] border-blue bg-tint p-8" role="status">
              <div className="font-serif text-[22px] text-ink">Thank you.</div>
              <p className="mt-2 text-body">Your message is with our team and we’ll reply within one working day. If your email app did not open, write to {site.email}.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
              {fields.map(([name, label, type]) => (
                <label key={name} className="block text-[14px] font-semibold text-ink">
                  {label}
                  <input name={name} type={type} required className={box} />
                </label>
              ))}
              <label className="block text-[14px] font-semibold text-ink sm:col-span-2">
                I am
                <select name="who" className={box}>
                  <option>An awarding body</option>
                  <option>A university</option>
                  <option>A training provider</option>
                  <option>A candidate</option>
                </select>
              </label>
              <label className="block text-[14px] font-semibold text-ink sm:col-span-2">
                Message
                <textarea name="message" required rows={5} className={`${box} h-auto py-3`} />
              </label>
              <button className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-blue px-7 text-[15px] font-semibold text-white hover:bg-navy sm:col-span-2 sm:justify-self-start">
                Send message <Arrow />
              </button>
            </form>
          )}
        </Rise>
        <Rise delay={120} className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-serif text-[22px] text-ink md:text-[26px]">Talk to us directly</h2>
          <dl className="mt-6 space-y-5 text-[16px]">
            <div>
              <dt className="text-[14px] font-semibold text-muted">Email</dt>
              <dd><a href={`mailto:${site.email}`} className="text-blue underline-offset-4 hover:underline">{site.email}</a></dd>
            </div>
            {Object.entries(site.phones).map(([place, num]) => (
              <div key={place}>
                <dt className="text-[14px] font-semibold text-muted">{place}</dt>
                <dd><a href={`tel:${num.replace(/\s/g, '')}`} className="text-blue underline-offset-4 hover:underline">{num}</a></dd>
              </div>
            ))}
          </dl>
        </Rise>
      </Wrap>
    </section>
  );
}
