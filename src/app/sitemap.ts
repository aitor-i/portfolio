import { getBlogs } from '@/server-actions/blog/blog'
import { MetadataRoute } from 'next'

const generateBlogPostsSitemapObjects = async () => {
  const posts = await getBlogs()
  return posts.map(posts => {
    return {
      slug: posts._id,
      updatedAt: new Date()
    }
  })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.aitoribarra.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.aitoribarra.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.aitoribarra.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...(await generateBlogPostsSitemapObjects()).map((post) => {
      return {
        url: `https://www.aitoribarra.com/blog/${post.slug}`,
        lastModified: new Date(),
      }
    })
  ]
}
