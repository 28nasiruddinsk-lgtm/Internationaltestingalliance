import { notFound } from 'next/navigation';
import { Sections } from '@/components/sections';
import { pages } from '@/data/pages';

// Only these inner pages are published for now; every other path returns the 404 page.
// Add a key from data/pages.ts here to publish it.
const published = ['about'];

export const dynamicParams = false;
export const generateStaticParams = () => published.map((path) => ({ slug: path.split('/') }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const header = pages[slug.join('/')]?.find((s) => s.type === 'pageHeader');
  return { title: String(header?.props?.title ?? '') };
}

export default async function InnerPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const list = pages[slug.join('/')];
  if (!list) notFound();
  return <Sections list={list} />;
}
