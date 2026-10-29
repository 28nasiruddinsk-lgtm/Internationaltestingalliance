import { H2, Rise, Wrap } from '../ui';

const offices = [
  { city: 'Karachi', address: '101 Marine Point, DC-1, Block 9, Clifton, Karachi', map: 'https://www.google.com/maps/search/?api=1&query=101+Marine+Point+Clifton+Karachi' },
  { city: 'Dubai', address: 'Level 21, Al Habtoor Business Tower, Dubai Marina', map: 'https://www.google.com/maps/search/?api=1&query=Al+Habtoor+Business+Tower+Dubai+Marina' },
];

// TODO: office photos and embedded maps once the client supplies them
export default function Offices() {
  return (
    <section className="pb-20 md:pb-28">
      <Wrap>
        <Rise><H2 className="!mt-0">Our offices</H2></Rise>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {offices.map((o, n) => (
            <Rise key={o.city} delay={n * 90} className="h-full">
              <div className="h-full border-t-[3px] border-blue bg-tint p-8">
                <h3 className="font-serif text-[24px] text-ink">{o.city}</h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-body">{o.address}</p>
                <a href={o.map} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[15px] font-semibold text-blue underline-offset-4 hover:underline">
                  View on Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Rise>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
