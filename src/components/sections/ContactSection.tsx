import ContactForm from '../ContactForm';
import { site } from '@/data/site';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-blue text-white">
      <div className="container-page grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-white">Work with us</h2>
          <p className="mt-5 max-w-sm text-white/85">
            Tell us about your examinations, candidate numbers and locations. We will reply by email.
          </p>
          <div className="mt-8 space-y-1 text-sm text-white/85">
            <a href={`mailto:${site.email}`} className="block underline">{site.email}</a>
            {site.phones.map((p) => <p key={p.label}>{p.label}: {p.value}</p>)}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 text-body md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
