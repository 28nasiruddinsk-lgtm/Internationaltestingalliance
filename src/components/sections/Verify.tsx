'use client';
import { Honeypot, useSend } from '@/lib/useSend';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Props = { kicker?: string; title?: string; text?: string };

// Certificate check request. No public results database yet, so the number goes to our team by email.
// Swap the mail hand-off for a live lookup once the awarding bodies' records are connected
export default function Verify({
  kicker = 'Verify a result',
  title = 'Results anyone can check',
  text = 'Employers and universities can check a certificate. Enter the number printed under its QR code and we match it against the awarding body’s own record.',
}: Props) {
  const { onSubmit, busy, sent, viaApp, error } = useSend('Verify a result', (d) => [['Certificate number', d.get('number')], ['Reply to', d.get('email')]]);

  return (
    <section id="verify" className="py-16 md:py-20">
      <Wrap className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Rise>
          <Kicker>{kicker}</Kicker>
          <H2>{title}</H2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-body">{text}</p>
        </Rise>
        <Rise delay={120}>
          <form onSubmit={onSubmit} className="border-t-[3px] border-blue bg-navy p-8 text-white shadow-[0_24px_60px_rgba(14,34,64,.18)] md:p-10">
            <div className="flex items-center gap-4">
              {/* QR mark */}
              <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" className="flex-none text-sky">
                <path fill="currentColor" d="M2 2h14v14H2zM6 6v6h6V6zM28 2h14v14H28zM32 6v6h6V6zM2 28h14v14H2zM6 32v6h6v-6zM20 2h4v4h-4zM20 10h4v8h-4zM28 20h4v4h-4zM36 20h6v4h-6zM20 22h4v4h-4zM28 28h4v6h-4zM36 30h6v4h-6zM28 38h14v4H28zM20 30h4v12h-4z" />
              </svg>
              <div className="font-serif text-[22px]">Check a certificate</div>
            </div>
            {sent ? (
              <p role="status" className="swap mt-6 text-[16px] leading-[1.7] text-white/85">
                Thank you. {viaApp ? 'Your email app should open with the number ready to send, and we’ll' : 'Your request has been sent. We’ll'} reply once we’ve checked it against the awarding body’s record.
              </p>
            ) : (
              <>
                <label className="mt-7 block text-[14px] font-semibold text-white/85">
                  Number under the QR code
                  <input name="number" required placeholder="e.g. ITA-2026-000000" className="mt-1.5 h-12 w-full border border-white/25 bg-white/10 px-3 text-[16px] text-white outline-none placeholder:text-white/40 focus:border-sky" />
                </label>
                <label className="mt-4 block text-[14px] font-semibold text-white/85">
                  Your email
                  <input name="email" type="email" required className="mt-1.5 h-12 w-full border border-white/25 bg-white/10 px-3 text-[16px] text-white outline-none focus:border-sky" />
                </label>
                <Honeypot />
                {error && <p role="alert" className="mt-4 text-[14px] text-red-300">{error}</p>}
                <button disabled={busy} className="group mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-white px-7 text-[15px] font-semibold text-blue hover:bg-tint disabled:opacity-60">
                  {busy ? 'Sending…' : 'Verify a result'} <Arrow />
                </button>
              </>
            )}
          </form>
        </Rise>
      </Wrap>
    </section>
  );
}
