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
            When the same organisation teaches, registers and invigilates, nobody can call the result fully impartial. We sit between the institution and the candidate, apply the awarding body’s own procedures, and hand back a record of everything that happened. We play no part in teaching or in marking.
          </p>
          <Link href="/about/" className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
            How independent delivery works <Arrow />
          </Link>
        </Rise>
      </Wrap>
      <Wrap className="mt-16 grid gap-6 md:grid-cols-[1.45fr_1fr]">
        <Rise>
          <div className="h-[300px] overflow-hidden md:h-[400px]">
            <img src={img('s_team2')} alt="Partner team reviewing a sitting plan" className="h-full w-full object-cover" />
          </div>
        </Rise>
        <Rise delay={120}>
          <div className="h-[300px] overflow-hidden md:h-[400px]">
            <img src={img('s_dubai1')} alt="Colleagues in Dubai" className="h-full w-full object-cover object-[60%_center]" />
          </div>
        </Rise>
      </Wrap>
    </section>
  );
}
