import { getBlogs } from '@/server-actions/blog/blog'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const posts = await getBlogs()
  return (
    <section className="px-4 md:px-8 h-screen" >
      <h1 className="text-5xl md:text-6xl">Coming Soon</h1>
      <div className="grid gap-4 grid-cols-1  py-4 md:py-8">
        {posts.map(post =>

          <Link key={post._id.toString()} href={`blog/${post._id}`} className='p-4 bg-gray-50 text-gray-950 rounded' >
            <h3>{post.title}</h3>
          </Link>
        )}

      </div>
    </section >

  )
}
