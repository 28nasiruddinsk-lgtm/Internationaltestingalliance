import Image from 'next/image';

export type ProseProps = {
  title: string;
  paragraphs: string[];
  points?: string[];
  image?: string;
};

// Generic text block used by inner pages.
export default function Prose({ title, paragraphs, points, image }: ProseProps) {
  return (
    <section className="section">
      <div className={`container-page grid gap-12 ${image ? 'md:grid-cols-2' : 'max-w-4xl'}`}>
        <div>
          <h2>{title}</h2>
          {paragraphs.map((p) => <p key={p} className="mt-5">{p}</p>)}
          {points && (
            <ul className="mt-6 list-disc space-y-2 pl-5">
              {points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          )}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={image} alt="" fill sizes="50vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
