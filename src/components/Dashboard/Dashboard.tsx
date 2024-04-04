import React from 'react'
import { BlogForm } from '../BlogForm/BlogForm'
import { getBlogs } from '@/server-actions/blog/blog'
import PostItem from './PostItem/PostItem'
import GenerateUser from './GenerateUser/GenerateUser'
import { getUsers } from '@/server-actions/login/login'

export default async function Dashboard() {

  const blogs = await getBlogs()
  const users = await getUsers()
  return (
    <section className='min-h-screen grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 grid px-4 md:px-10 lg:px-24 py-8 md:py-48'>
      <div>
        <h1 className='text-4xl md:text-6xl font-bold '>Dashboard</h1>
      </div>
      <div className='flex-col flex gap-8'>
        <div>
          <BlogForm />
        </div>
        <div className='flex col-start-2 flex-col gap-2 '>
          {blogs.map(post => <PostItem key={post._id.toString()} id={post._id} name={post.title} />)}
        </div>
        <GenerateUser />
        <div>
          {users.map(user => <div key={user._id.toString()}>{user.username}</div>)}
        </div>
      </div>
    </section>
  )
}
