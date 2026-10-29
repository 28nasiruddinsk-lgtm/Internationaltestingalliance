import Link from 'next/link';
import { Wrap } from '@/components/ui';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="py-24 md:py-40">
      <Wrap>
        <p className="text-[14px] font-semibold text-blue">404</p>
        <h1 className="mt-4 max-w-[640px] font-serif text-[32px] leading-[1.15] md:text-[56px]">This page does not exist.</h1>
        <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-body">The page you are looking for is not available. Try the homepage or the About page.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-navy">Homepage</Link>
          <Link href="/about-us/" className="rounded-full border border-blue px-7 py-3.5 text-[15px] font-semibold text-blue hover:bg-tint">About ITA</Link>
        </div>
      </Wrap>
    </section>
  );
}
