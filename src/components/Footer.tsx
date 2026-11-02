import Link from 'next/link';
import { site } from '@/data/site';
import { img } from '@/data/images';
import { Wrap } from './ui';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <Wrap className="pb-10 pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <img loading="lazy" decoding="async" src={img('logoW')} alt={site.name} className="h-10" />
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed">
              Independent examination delivery and invigilation. A subsidiary of International Testing Services.
            </p>
            <h3 className="mb-3 mt-8 text-[15px] font-semibold text-white">Offices</h3>
            <ul className="space-y-2 text-[14px]">
              {site.offices.map((o) => <li key={o}>{o}</li>)}
              <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            </ul>
          </div>
          {site.footer.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-[15px] font-semibold text-white">{col.title}</h3>
              <ul className="space-y-2.5 text-[14px]">
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="hover:text-white">{label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-[12.5px] text-white/70">
          <span>© {new Date().getFullYear()} International Testing Alliance · {site.ibccRef}</span>
          <span className="flex gap-5">
            {site.legal.map(([label, href]) => <Link key={label} href={href} className="hover:text-white">{label}</Link>)}
          </span>
        </div>
      </Wrap>
    </footer>
  );
}
