'use client'

import React, { useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { Button } from "@/components/ui/button"
import { postBlog } from '@/server-actions/blog/blog'
import { useCookies } from 'react-cookie'
import { validateToken } from '@/server-actions/login/login'
import { useRouter } from 'next/navigation'
import { getCookie } from '@/utils/getCookie'

export function BlogForm() {

  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const formData = new FormData(event.currentTarget)

    const title = formData.get('title')?.toString()!
    const post = formData.get('post')?.toString()!
    formRef.current?.reset()


    const res = await postBlog(title, post)
    console.log(res)

  }

  const cookienValidation = async () => {
    const token = getCookie('ai') ?? ''
    const isTokenValid = await validateToken(token)
    if (!isTokenValid) router.push("/login")
  }

  useEffect(() => {
    cookienValidation()
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 tracking-tight">Post a blog entry</h2>
      <form className="grid gap-4" ref={formRef} onSubmit={onSubmitHandler}>
        <Input name='title' required placeholder="Title" />
        <Textarea name='post' required className="min-h-[10rem]" placeholder="Blog post" />
        <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Upload</Button>
      </form>
    </div>
  )
}
