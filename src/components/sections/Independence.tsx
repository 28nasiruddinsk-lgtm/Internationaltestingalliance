import Reveal from '../Reveal';

const parties = [
  { name: 'Institution', role: 'Sets exam protocols', points: ['Confirms candidate requirements', 'Provides institutional guidance'] },
  { name: 'ITA', role: 'Administers the examination', points: ['Verifies candidates and conditions', 'Manages venues and invigilation', 'Records and reports session evidence'] },
  { name: 'Awarding body', role: 'Controls assessment', points: ['Sets assessment requirements', 'Maintains academic standards', 'Determines marking, grading and results'] },
];

export default function Independence() {
  return (
    <section className="section bg-tint">
      <div className="container-page">
        <h2 className="max-w-xl">Independent delivery. Clear accountability.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {parties.map((p, n) => (
            <Reveal key={p.name}>
              <div className="relative h-full rounded-2xl bg-white p-8">
                <p className="text-sm text-muted">0{n + 1}</p>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <p className="mt-1 font-semibold text-blue">{p.role}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.points.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 font-serif text-xl italic text-navy md:text-2xl">
          No teaching. No marking. No influence over the outcome.
        </p>
      </div>
    </section>
  );
}
