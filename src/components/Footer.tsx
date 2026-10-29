import Link from 'next/link';
import { site } from '@/data/site';
import { img } from '@/data/images';
import { Wrap } from './ui';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <Wrap className="pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img loading="lazy" decoding="async" src={img('logoW')} alt={site.name} className="h-10" />
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed">
              Independent examination delivery and invigilation. A subsidiary of International Testing Services.
            </p>
          </div>
          {site.footer.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[15px] font-semibold text-white">{col.title}</h3>
              <ul className="space-y-2 text-[14px]">
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="hover:text-white">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-[15px] font-semibold text-white">Offices</h3>
            <ul className="space-y-2 text-[14px]">
              {site.offices.map((o) => <li key={o}>{o}</li>)}
              <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            </ul>
          </div>
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
