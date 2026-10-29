import type { MetadataRoute } from 'next';
import { published } from '@/data/pages';
import { siteUrl } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...published].map((path) => ({ url: `${siteUrl}/${path ? `${path}/` : ''}` }));
}
