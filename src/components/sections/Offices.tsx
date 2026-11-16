import { img, type ImageKey } from '@/data/images';
import { site } from '@/data/site';
import { Arrow, H2, Kicker, Rise, Wrap } from '../ui';

const offices: { city: string; country: string; address: string; phone: string; map: string; image: ImageKey; alt: string }[] = [
  { city: 'Karachi', country: 'Pakistan', address: '101 Marine Point, DC-1, Block 9, Clifton, Karachi', phone: site.phones.Pakistan, map: 'https://www.google.com/maps/search/?api=1&query=101+Marine+Point+Clifton+Karachi', image: 'about_team', alt: 'The ITA team in Pakistan' },
  { city: 'Dubai', country: 'United Arab Emirates', address: 'Level 21, Al Habtoor Business Tower, Dubai Marina', phone: site.phones.Dubai, map: 'https://www.google.com/maps/search/?api=1&query=Al+Habtoor+Business+Tower+Dubai+Marina', image: 'uae_pro', alt: 'An ITA team member in Dubai' },
];

// TODO: real office photos and embedded maps once the client supplies them
export default function Offices() {
  return (
    <section className="py-16 md:py-20">
      <Wrap>
        <Rise className="max-w-[720px]">
          <Kicker>Our offices</Kicker>
          <H2>Visit us in Karachi or Dubai</H2>
        </Rise>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offices.map((o, n) => (
            <Rise key={o.city} delay={n * 100} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_40px_rgba(14,34,64,.08)]">
                <div className="relative h-[220px] md:h-[260px]">
                  <img loading="lazy" decoding="async" src={img(o.image)} alt={o.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 text-white">
                    <span className="text-[12px] font-bold uppercase tracking-[.14em] text-white/90">{o.country}</span>
                    <h3 className="mt-1 font-serif text-[30px] leading-none">{o.city}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[16px] leading-[1.7] text-body">{o.address}</p>
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="mt-3 text-[16px] font-semibold text-ink hover:text-blue">{o.phone}</a>
                  <a href={o.map} target="_blank" rel="noopener noreferrer" className="group mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-semibold text-blue">
                    View on Google Maps <Arrow /><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
