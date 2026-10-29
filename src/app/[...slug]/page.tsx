import { notFound } from 'next/navigation';
import { Sections } from '@/components/sections';
import { pages } from '@/data/pages';

// Published inner pages. Everything else 404s; add a key from data/pages.ts to publish it.
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
