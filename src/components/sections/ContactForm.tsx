'use client';
import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { openMail } from '@/lib/mailto';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Field = [name: string, label: string, type: string];
type Choice = [name: string, label: string, options: string[]];
type Props = {
  kicker?: string;
  title?: string;
  intro?: string;
  fields?: Field[];
  choices?: Choice[];
  button?: string;
  thanks?: string;
  subject?: string;
  tint?: boolean;
  direct?: boolean; // email and phone column beside the form
  id?: string;
};

const FIELDS: Field[] = [['name', 'Your name', 'text'], ['org', 'Organisation', 'text'], ['email', 'Email', 'email'], ['country', 'Country', 'text']];
const CHOICES: Choice[] = [['who', 'I am', ['An awarding body', 'A university', 'A training provider', 'A candidate']]];
const box = 'mt-1.5 h-12 w-full border border-line bg-white px-3 text-[16px] font-normal text-ink outline-none focus:border-blue';

export default function ContactForm({
  kicker, title = 'Send us a message', intro, fields = FIELDS, choices = CHOICES, button = 'Send message',
  thanks = 'Your message is with our team and we’ll reply within one working day.', subject = 'Website enquiry', tint, direct = true, id,
}: Props) {
  const [sent, setSent] = useState(false);

  // a static site has no server, so the message is handed to the visitor's mail app
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openMail(subject, [...fields, ...choices, ['message', 'Message']].map(([name, label]) => [label, d.get(name)]));
    setSent(true);
  }

  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-24 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className="grid gap-14 lg:grid-cols-12">
        <Rise className={direct ? 'lg:col-span-7' : 'lg:col-span-8'}>
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2 className={kicker ? '' : '!mt-0'}>{title}</H2>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
          {sent ? (
            <div className="swap mt-8 border-l-[3px] border-blue bg-white p-8" role="status">
              <div className="font-serif text-[22px] text-ink">Thank you.</div>
              <p className="mt-2 text-body">{thanks} If your email app did not open, write to {site.email}.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
              {fields.map(([name, label, type]) => (
                <label key={name} className="block text-[14px] font-semibold text-ink">
                  {label}
                  <input name={name} type={type} required={type !== 'tel'} className={box} />
                </label>
              ))}
              {choices.map(([name, label, options]) => (
                <label key={name} className="block text-[14px] font-semibold text-ink sm:col-span-2">
                  {label}
                  <select name={name} className={box}>
                    {options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
              ))}
              <label className="block text-[14px] font-semibold text-ink sm:col-span-2">
                Message
                <textarea name="message" required rows={5} className={`${box} h-auto py-3`} />
              </label>
              <button className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-blue px-7 text-[15px] font-semibold text-white hover:bg-navy sm:col-span-2 sm:justify-self-start">
                {button} <Arrow />
              </button>
            </form>
          )}
        </Rise>
        {direct && (
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
        )}
      </Wrap>
    </section>
  );
}
