import { MetadataRoute } from 'next'
import data from './db/data.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.milanesa.app'

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Páginas dinámicas de canciones
  const songPages: MetadataRoute.Sitemap = data
    .filter(song => song.slug !== 'proximamente-1') // Filtra páginas "próximamente"
    .map((song) => ({
      url: `${baseUrl}/songs/${song.slug}`,
      lastModified: new Date(song.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...songPages]
}
