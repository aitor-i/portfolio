import React from 'react'
import { BlogForm } from '../BlogForm/BlogForm'
import { getBlogs } from '@/server-actions/blog/blog'

export default async function Dashboard() {

  const blogs = await getBlogs()
  console.log(blogs)
  return (
    <section className='min-h-screen'>
      <div className='grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 grid px-4 md:px-10 lg:px-24 py-8 md:py-36'>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold '>Dashboard</h1>
        </div>
        <div>
          <BlogForm />
        </div>
      </div>
    </section>
  )
}
