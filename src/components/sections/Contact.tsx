'use client';
import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { openMail } from '@/lib/mailto';
import { Arrow, H2, Kicker, Wrap } from '../ui';

const fields = [['name', 'Your name', 'text'], ['org', 'Organisation', 'text'], ['email', 'Work email', 'email'], ['country', 'Country', 'text']] as const;
const box = 'mt-1.5 h-12 w-full border border-white/30 bg-white px-3 text-[15px] font-normal text-ink';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openMail('Partnership enquiry', [['Name', d.get('name')], ['Organisation', d.get('org')], ['Email', d.get('email')], ['Country', d.get('country')], ['Represents', d.get('who')]]);
    setSent(true);
  }

  return (
    <section id="work" className="bg-blue py-24 text-white md:py-32">
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker light>Work with us</Kicker>
          <H2>Talk to us about your next sitting.</H2>
          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.7] text-white/80">
            Tell us about your candidates and locations. Our partnerships team replies within one working day.
          </p>
          <div className="mt-8 space-y-1 text-[15px]">
            <a href={`mailto:${site.email}`} className="block underline">{site.email}</a>
            <div className="text-white/85">
              {Object.entries(site.phones).map(([place, num], i) => (
                <span key={place}>
                  {i > 0 && ' · '}
                  {place} <a href={`tel:${num.replace(/\s/g, '')}`} className="whitespace-nowrap underline">{num}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="swap border-l-[3px] border-sky bg-white/10 p-8" role="status">
              <div className="font-serif text-[22px]">Thank you.</div>
              <p className="mt-2 text-white/80">Your email app should open with the enquiry ready to send.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              {fields.map(([name, label, type]) => (
                <label key={name} className="block text-[13.5px] font-semibold">
                  {label}
                  <input name={name} type={type} required className={`${box} outline-none focus:border-sky`} />
                </label>
              ))}
              <label className="block text-[13.5px] font-semibold sm:col-span-2">
                I represent
                <select name="who" className={box}>
                  <option>An awarding body</option>
                  <option>A university</option>
                  <option>A training provider</option>
                </select>
              </label>
              <button className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-7 text-[15px] font-semibold text-blue hover:bg-tint sm:col-span-2 sm:justify-self-start">
                Send enquiry <Arrow />
              </button>
            </form>
          )}
        </div>
      </Wrap>
    </section>
  );
}
