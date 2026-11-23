'use client';
import { useState, type FormEvent } from 'react';
import { sendForm } from './mailto';

type Lines = [label: string, value: FormDataEntryValue | null][];

// Shared submit logic for the site's forms: sends through the mail handler and tracks the outcome.
export function useSend(subject: string, lines: (d: FormData) => Lines) {
  const [status, setStatus] = useState<'idle' | 'busy' | 'sent' | 'mail-app'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'busy') return;
    const form = e.currentTarget;
    setStatus('busy');
    setError('');
    const r = await sendForm(form, subject, lines(new FormData(form)));
    if (typeof r === 'object') { setError(r.error); setStatus('idle'); } else setStatus(r);
  }

  return { onSubmit, error, busy: status === 'busy', sent: status === 'sent' || status === 'mail-app', viaApp: status === 'mail-app' };
}

// Hidden field that only bots fill in; the mail handler drops anything that has it.
export function Honeypot() {
  return <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />;
}
