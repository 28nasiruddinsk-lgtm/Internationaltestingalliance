import Image from 'next/image';
import Reveal from '../Reveal';

export default function About() {
  return (
    <section className="section bg-tint">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2>One operating partner, from planning to report</h2>
          <p className="mt-5">
            International Testing Alliance (ITA) is an independent examination services organisation delivering secure,
            consistent and technology-enabled assessment across international markets. We onboard partners, verify
            candidates, run live invigilation and report on every session.
          </p>
          <p className="mt-4">
            ITA is the operating subsidiary of International Testing Services (ITS), whose registrations and approvals
            support our work. We play no part in teaching candidates or grading exams.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src="/images/invigilators.webp" alt="ITA invigilators at a registration desk" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src="/images/sitting.webp" alt="Candidates sitting an examination" fill sizes="25vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
