import type { MetadataRoute } from 'next'
import { SITE, LAST_MOD, routes, groups } from '@/lib/site'

const full = (r: string) => SITE.url + (r === '/' ? '' : r)
const groupOf = (r: string) => groups.find((g) => g.includes(r))

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: full(r),
    lastModified: new Date(LAST_MOD),
    changeFrequency: 'monthly',
    priority: r === '/' || r === '/en' || r === '/es' || r === '/ar' ? 1 : 0.8,
    ...(groupOf(r) ? { alternates: { languages: { fr: full(groupOf(r)![0]), en: full(groupOf(r)![1]), es: full(groupOf(r)![2]), ar: full(groupOf(r)![3]) } } } : {}),
  }))
}
