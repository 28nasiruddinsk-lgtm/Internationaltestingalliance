import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sections } from '@/components/sections';
import { meta, pages, published } from '@/data/pages';
import { siteUrl } from '@/data/site';

export const dynamicParams = false;
export const generateStaticParams = () => published.map((path) => ({ slug: path.split('/') }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = meta[slug.join('/')];
  if (!m) return {};
  return { title: { absolute: m.title }, description: m.description, openGraph: { title: m.title, description: m.description }, twitter: { title: m.title, description: m.description } };
}

export default async function InnerPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');
  const list = pages[path];
  if (!list || !published.includes(path)) notFound();

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: meta[path]?.title.split(' | ')[0] ?? path, item: `${siteUrl}/${path}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Sections list={list} />
    </>
  );
}
