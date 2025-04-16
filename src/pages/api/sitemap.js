import { getAllPosts } from '../../lib/api'

export default async function handler(req, res) {
  const posts = getAllPosts(['slug', 'date'])
  const baseUrl = 'https://altankurt.com'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map(
          post => `
        <url>
          <loc>${baseUrl}/blog/${post.slug}</loc>
          <lastmod>${post.date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}
