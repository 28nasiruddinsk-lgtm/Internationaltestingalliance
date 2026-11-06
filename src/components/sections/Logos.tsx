import Link from 'next/link';
import { bodies, bodyKeys } from '@/data/partners';
import Logo from '../Logo';
import { H2, Kicker, Rise, Wrap } from '../ui';

type Props = { kicker?: string; title?: string; dark?: boolean };

// "Delivering for" strip: one equal tile per awarding body, each linking to its page on this site
export default function Logos({ kicker = 'Delivering for', title, dark = true }: Props) {
  return (
    <section className={`py-16 md:py-20 ${dark ? 'bg-navy text-white' : 'bg-tint'}`}>
      <Wrap>
        <Rise className={title ? 'max-w-[720px]' : ''}>
          <Kicker light={dark}>{kicker}</Kicker>
          {title && <H2>{title}</H2>}
        </Rise>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {bodyKeys.map((k, n) => (
            <li key={k} className="h-full">
              <Rise delay={n * 70} className="h-full">
                <Link href={bodies[k].href} className="block h-full transition-transform hover:-translate-y-0.5">
                  <Logo k={k} className="h-full" />
                </Link>
              </Rise>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
