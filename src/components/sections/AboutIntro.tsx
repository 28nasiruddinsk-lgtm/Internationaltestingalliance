import { aboutFacts } from '@/data/profile';
import { img } from '@/data/images';
import { H2, Kicker, Rise, Wrap } from '../ui';

export default function AboutIntro() {
  return (
    <section className="py-24 md:py-32">
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          <Kicker>Who we are</Kicker>
          <H2>The neutral party in the examination room.</H2>
          <div className="mt-8 h-[320px] overflow-hidden md:h-[420px]">
            <img src={img('invigilators')} alt="ITA invigilators at the registration desk" className="h-full w-full object-cover" />
          </div>
        </Rise>
        <Rise delay={120} className="lg:col-span-6 lg:col-start-7">
          <p className="text-[20px] leading-[1.65] text-ink">
            International Testing Alliance (ITA) is an independent examination services organisation delivering secure, consistent and technology-enabled assessment across international markets.
          </p>
          <p className="mt-5 text-[17px] leading-[1.75] text-body">
            We plan, manage and deliver examinations: onboarding partners, verifying candidates, providing live invigilation and reporting after every session. Our delivery model combines global standards and quality controls with local expertise in every market we serve.
          </p>
          <p className="mt-5 text-[17px] leading-[1.75] text-body">
            ITA plays no role in teaching candidates or grading exams. The organisation sets its requirements, ITA administers the examination independently, and the awarding body keeps control of the assessment and the result.
          </p>
          <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {aboutFacts.map((f) => (
              <div key={f.value} className="bg-white p-5">
                <dt className="font-serif text-[26px] text-blue">{f.value}</dt>
                <dd className="mt-1 text-[14.5px] leading-relaxed text-body">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Rise>
      </Wrap>
    </section>
  );
}
