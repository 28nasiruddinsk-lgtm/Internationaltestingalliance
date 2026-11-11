import Link from 'next/link';
import { bodies, bodyKeys, type BodyKey } from '@/data/partners';
import Logo from '../Logo';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

type Props = { kicker?: string; title?: string; dark?: boolean; detailed?: boolean };

// profile slide 18 lists the bodies in this order and closes with the shared standards
const PROFILE_ORDER: BodyKey[] = ['ncc', 'cg', 'greenwich', 'gems'];
const STANDARDS = ['Standardised venues', 'Examiner checks', 'Full session reporting'];

// "Delivering for" strip: one equal tile per awarding body, each linking to its page on this site.
// `detailed` (home page) adds the profile text under each logo and the shared standards.
export default function Logos({ kicker, title, dark = true, detailed }: Props) {
  const head = kicker ?? (detailed ? 'Partners' : 'Delivering for');
  const heading = title ?? (detailed ? 'The Same Delivery Standard for Every Awarding Body' : undefined);
  return (
    <section className={`${detailed ? 'py-24 md:py-32' : 'py-16 md:py-20'} ${dark ? 'bg-navy text-white' : 'bg-tint'}`}>
      <Wrap>
        <Rise className={heading ? 'max-w-[720px]' : ''}>
          <Kicker light={dark}>{head}</Kicker>
          {heading && <H2>{heading}</H2>}
        </Rise>
        <ul className={`${detailed ? 'mt-12 sm:grid-cols-2' : 'mt-8 grid-cols-2'} grid gap-4 md:gap-5 lg:grid-cols-4`}>
          {(detailed ? PROFILE_ORDER : bodyKeys).map((k, n) => (
            <li key={k} className="h-full">
              <Rise delay={n * 70} className="h-full">
                {detailed ? (
                  <Link href={bodies[k].href} className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/[.06] p-4 transition-colors hover:border-white/35 hover:bg-white/10">
                    <Logo k={k} className="h-[104px]" />
                    <h3 className="mt-5 px-2 text-[16px] font-semibold text-white">{bodies[k].name}</h3>
                    <p className="mt-2 px-2 text-[15px] leading-relaxed text-white/80">{bodies[k].about}</p>
                    <span className="mt-auto flex items-center gap-2 px-2 pb-1 pt-5 text-[14px] font-semibold text-sky group-hover:text-white">
                      See exams <Arrow />
                    </span>
                  </Link>
                ) : (
                  <Link href={bodies[k].href} className="block h-full transition-transform hover:-translate-y-0.5">
                    <Logo k={k} className="h-full" />
                  </Link>
                )}
              </Rise>
            </li>
          ))}
        </ul>
        {detailed && (
          <Rise delay={200}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="The same standard for every awarding body">
              {STANDARDS.map((s) => (
                <li key={s} className="rounded-xl border border-white/15 bg-white/[.04] px-5 py-4 text-center text-[13px] font-bold uppercase tracking-[.1em] text-white">{s}</li>
              ))}
            </ul>
          </Rise>
        )}
      </Wrap>
    </section>
  );
}
