import Link from 'next/link';
import ContactDialog from '../ContactDialog';

const card = 'flex h-full flex-col gap-2 rounded-2xl bg-white p-6 text-left shadow-[0_10px_40px_-18px_rgba(14,34,64,0.35)] transition-transform hover:-translate-y-1';

function Card({ title, text }: { title: string; text: string }) {
  return (
    <>
      <span className="font-serif text-xl text-ink">{title}</span>
      <span className="text-sm">{text}</span>
    </>
  );
}

// Overlaps the hero by pulling up with a negative margin.
export default function Actions() {
  return (
    <section className="relative z-10 -mt-24 md:-mt-28">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ContactDialog className={card}>
          <Card title="Contact us" text="Send an email query to the ITA team." />
        </ContactDialog>
        <Link href="/centres/" className={card}>
          <Card title="Find a centre" text="Cities and venues across Pakistan." />
        </Link>
        <Link href="/candidates/" className={card}>
          <Card title="Book an exam" text="Register and get your Statement of Entry." />
        </Link>
        <Link href="/#exam-day" className={card}>
          <Card title="Exam day guide" text="What happens from check-in to report." />
        </Link>
      </div>
    </section>
  );
}
