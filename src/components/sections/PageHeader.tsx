import { Kicker, Wrap } from '../ui';

export default function PageHeader({ title, intro, kicker }: { title: string; intro?: string; kicker?: string }) {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <Wrap>
        {kicker && <Kicker light>{kicker}</Kicker>}
        <h1 className="mt-5 max-w-[860px] font-serif text-[32px] leading-[1.15] md:text-[42px]">{title}</h1>
        {intro && <p className="mt-5 max-w-[620px] text-[17px] leading-[1.7] text-white/80">{intro}</p>}
      </Wrap>
    </section>
  );
}
