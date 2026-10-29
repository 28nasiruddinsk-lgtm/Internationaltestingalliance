'use client';
import { useState } from 'react';
import { cities, countries } from '@/data/countries';

// TODO: add the map graphic beside the chips once supplied.
export default function Countries() {
  const [sel, setSel] = useState(countries[0].name);
  const c = countries.find((x) => x.name === sel)!;
  return (
    <section className="section bg-tint">
      <div className="container-page grid gap-12 md:grid-cols-2">
        <div>
          <h2>Where we work</h2>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Countries">
            {countries.map((x) => (
              <button
                key={x.name}
                onClick={() => setSel(x.name)}
                aria-pressed={x.name === sel}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${x.name === sel ? 'border-navy bg-navy text-white' : 'border-line bg-white hover:border-blue'}`}
              >
                {x.name}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8" aria-live="polite">
          <p className="text-sm text-blue">{c.status}</p>
          <h3 className="mt-1 text-2xl">{c.name}</h3>
          <p className="mt-3">{c.note}</p>
          {c.name === 'Pakistan' && (
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
              {cities.map((city) => (
                <li key={city} className="rounded-full bg-tint px-3 py-1">{city}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
