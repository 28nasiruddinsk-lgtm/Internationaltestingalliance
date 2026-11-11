import Link from 'next/link';
import { img } from '@/data/images';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

export default function Intro() {
  return (
    <section className="py-24 md:py-32">
      <Wrap className="grid gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          <Kicker>About ITA</Kicker>
          <H2>The neutral party in the examination room.</H2>
        </Rise>
        <Rise delay={120} className="lg:col-span-6 lg:col-start-7">
          <p className="text-[19px] leading-[1.7] text-ink">
            International Testing Alliance plans, runs and reports on examinations for awarding bodies, universities and training providers.
          </p>
          <p className="mt-5 text-[16px] leading-[1.75] text-body">
            ITA is an independent examination services organization. The institution sets its protocols, we administer the examination independently, and the awarding body retains control of the exam. We play no role in teaching candidates or grading exams, and we deliver one consolidated record of every session.
          </p>
          <p className="mt-4 text-[16px] leading-[1.75] text-body">
            Our delivery model combines global standards and quality controls with local expertise and operational capabilities across every market we serve.
          </p>
          <Link href="/about-us/" className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
            How independent delivery works <Arrow />
          </Link>
        </Rise>
      </Wrap>
      <Wrap className="mt-16 grid gap-6 md:grid-cols-[1.45fr_1fr]">
        <Rise>
          <div className="h-[300px] overflow-hidden md:h-[400px]">
            <img loading="lazy" decoding="async" src={img('s_team2')} alt="ITA partnerships team reviewing a sitting plan with a partner" className="h-full w-full object-cover" />
          </div>
        </Rise>
        <Rise delay={120}>
          <div className="h-[300px] overflow-hidden md:h-[400px]">
            <img loading="lazy" decoding="async" src={`${img('s_dubai1')}?v=walking-ladies-20261104`} alt="Three women walking together outside" className="h-full w-full object-cover object-[60%_center]" />
          </div>
        </Rise>
      </Wrap>
    </section>
  );
}
