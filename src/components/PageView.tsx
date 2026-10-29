import { notFound } from 'next/navigation';
import { Sections } from './sections';
import { pages, withHeader } from '@/data/pages';

export default function PageView({ slug }: { slug: string }) {
  const page = pages[slug];
  if (!page) notFound();
  return <Sections list={withHeader(page)} />;
}
