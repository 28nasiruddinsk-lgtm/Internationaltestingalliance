import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sections } from '@/components/sections';
import { Wrap } from '@/components/ui';
import { trails } from '@/data/pages-more';
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

  const trail = trails[path] ?? [[meta[path]?.title.split(' | ')[0] ?? path, path]];
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', ''], ...trail].map(([name, p], i) => (
      { '@type': 'ListItem', position: i + 1, name, item: `${siteUrl}/${p ? `${p}/` : ''}` }
    )),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {trails[path] && (
        <nav aria-label="Breadcrumb" className="bg-navy text-[13px] text-white/75">
          <Wrap className="py-3">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {[['Home', ''], ...trail].map(([name, p], i, all) => (
                <li key={p} className="flex items-center gap-2">
                  {i < all.length - 1
                    ? <><Link href={`/${p ? `${p}/` : ''}`} className="hover:text-white hover:underline">{name}</Link><span aria-hidden="true">›</span></>
                    : <span aria-current="page" className="text-white">{name}</span>}
                </li>
              ))}
            </ol>
          </Wrap>
        </nav>
      )}
      <Sections list={list} path={path} />
    </>
  );
}
