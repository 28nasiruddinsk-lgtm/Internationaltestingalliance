import Link from 'next/link';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-navy py-16 text-sm text-white/80">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-3 max-w-xs">
            Independent examination delivery. A subsidiary of International Testing Services (ITS).
          </p>
        </div>
        <ul className="space-y-2">
          {site.nav.map((n) => (
            <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
          ))}
        </ul>
        <div className="space-y-2">
          <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
          {site.phones.map((p) => (
            <p key={p.label}>{p.label}: {p.value}</p>
          ))}
          <p>Offices: {site.offices.join(' and ')}</p>
          <p>IBCC ref {site.ibccRef}</p>
        </div>
      </div>
      <div className="container-page mt-12 border-t border-white/15 pt-6 text-white/60">
        © {new Date().getFullYear()} International Testing Alliance
      </div>
    </footer>
  );
}
