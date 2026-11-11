import type { MetadataRoute } from 'next'
import { SITE, routes } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: SITE.url + (r === '/' ? '' : r), lastModified: new Date(), changeFrequency: 'monthly', priority: r === '/' ? 1 : 0.8 }))
}
