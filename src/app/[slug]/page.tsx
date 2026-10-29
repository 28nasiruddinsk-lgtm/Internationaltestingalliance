import type { Metadata } from 'next';
import PageView from '@/components/PageView';
import { pages } from '@/data/pages';

// services and news have their own folders for their detail routes, so their index pages live there.
const own = ['services', 'news'];
const slugs = Object.keys(pages).filter((s) => !own.includes(s));

export const dynamicParams = false;
export const generateStaticParams = () => slugs.map((slug) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageView slug={slug} />;
}
