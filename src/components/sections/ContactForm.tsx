'use client';
import { site } from '@/data/site';
import { Honeypot, useSend } from '@/lib/useSend';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Field = [name: string, label: string, type: string, optional?: boolean];
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
  messageLabel?: string;
  note?: string; // a line above the button, e.g. what to attach
  file?: string; // label for an optional CV upload (PDF or Word, sent as an attachment)
};

const FIELDS: Field[] = [['name', 'Your name', 'text'], ['org', 'Organisation', 'text'], ['email', 'Email', 'email'], ['country', 'Country', 'text']];
const CHOICES: Choice[] = [['who', 'I am', ['An awarding body', 'A university', 'A training provider', 'A candidate']]];
const box = 'mt-1.5 h-12 w-full border border-line bg-white px-3 text-[16px] font-normal text-ink outline-none focus:border-blue';

export default function ContactForm({
  kicker, title = 'Send us a message', intro, fields = FIELDS, choices = CHOICES, button = 'Send message',
  thanks = 'Your message is with our team and we’ll reply within one working day.', subject = 'Website enquiry', tint, direct = true, id, messageLabel = 'Message', note, file,
}: Props) {
  const { onSubmit, busy, sent, viaApp, error } = useSend(subject, (d) => [...fields, ...choices, ['message', messageLabel]].map(([name, label]) => [label, d.get(name)]));

  return (
    <section id={id} className={`scroll-mt-24 py-14 md:py-20 ${tint ? 'bg-tint' : ''}`}>
      <Wrap className="grid gap-14 lg:grid-cols-12">
        <Rise className={direct ? 'lg:col-span-7' : 'lg:col-span-8'}>
          {kicker && <Kicker>{kicker}</Kicker>}
          <H2 className={kicker ? '' : '!mt-0'}>{title}</H2>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-body">{intro}</p>}
          {sent ? (
            <div className="swap mt-8 border-l-[3px] border-blue bg-white p-8" role="status">
              <div className="font-serif text-[22px] text-ink">Thank you.</div>
              <p className="mt-2 text-body">{thanks}{viaApp && ` If your email app did not open, write to ${site.email}.`}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              {fields.map(([name, label, type, optional]) => (
                <label key={name} className="block text-[14px] font-semibold text-ink">
                  {label}{optional && <span className="font-normal text-muted"> (optional)</span>}
                  <input name={name} type={type} required={!optional} className={box} />
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
                {messageLabel}
                <textarea name="message" required rows={5} className={`${box} h-auto py-3`} />
              </label>
              {file && (
                <label className="block text-[14px] font-semibold text-ink sm:col-span-2">
                  {file}
                  <input name="cv" type="file" accept=".pdf,.doc,.docx" className="mt-1.5 block w-full text-[15px] font-normal text-body file:mr-4 file:rounded-full file:border-0 file:bg-tint file:px-5 file:py-2.5 file:font-semibold file:text-blue" />
                  <span className="mt-1 block text-[13px] font-normal text-muted">PDF or Word, up to 5 MB.</span>
                </label>
              )}
              {note && <p className="text-[14px] leading-relaxed text-body sm:col-span-2">{note}</p>}
              <Honeypot />
              {error && <p role="alert" className="text-[14px] font-semibold text-red-700 sm:col-span-2">{error}</p>}
              <button disabled={busy} className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-blue px-7 text-[15px] font-semibold text-white hover:bg-navy disabled:opacity-60 sm:col-span-2 sm:justify-self-start">
                {busy ? 'Sending…' : button} <Arrow />
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
