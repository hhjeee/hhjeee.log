import { MetadataRoute } from 'next';

import { getSiteMapPostList } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSiteMapPostList();
  const baseUrl = 'https://hhjeee-log.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
