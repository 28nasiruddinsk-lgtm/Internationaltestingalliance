import { notFound } from 'next/navigation';
import { news } from '@/data/news';
import { Sections } from '@/components/sections';

export const dynamicParams = false;
export const generateStaticParams = () => news.map((n) => ({ slug: n.slug }));

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) notFound();
  return (
    <Sections
      list={[
        { type: 'pageHeader', props: { title: n.title, intro: n.date } },
        { type: 'prose', props: { title: 'Details', paragraphs: n.body, image: n.image } },
      ]}
    />
  );
}
