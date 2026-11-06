import { Kicker, Rise, Wrap } from '../ui';

// One large line on blue, for a single idea the page should not bury
export default function Pull({ kicker, text }: { kicker?: string; text: string }) {
  return (
    <section className="bg-blue py-20 text-white md:py-28">
      <Wrap>
        <Rise className="mx-auto max-w-[980px] text-center">
          {kicker && <div className="inline-block"><Kicker light>{kicker}</Kicker></div>}
          <p className="mt-6 font-serif text-[26px] leading-[1.3] md:text-[38px]">{text}</p>
        </Rise>
      </Wrap>
    </section>
  );
}
