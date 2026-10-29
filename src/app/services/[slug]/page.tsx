import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { Sections } from '@/components/sections';

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <Sections
      list={[
        { type: 'pageHeader', props: { title: s.title, intro: s.summary } },
        { type: 'prose', props: { title: 'What is included', paragraphs: [], points: s.points, image: s.image } },
        { type: 'contact' },
      ]}
    />
  );
}
