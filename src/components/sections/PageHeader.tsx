export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="container-page">
        <h1 className="max-w-3xl text-white">{title}</h1>
        <p className="mt-5 max-w-2xl text-white/80">{intro}</p>
      </div>
    </section>
  );
}
