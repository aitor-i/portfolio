'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { Button } from "@/components/ui/button"

export function BlogForm() {


  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.valueOf();
    const surname = formData.get('surname')?.valueOf();
    const email = formData.get('email')?.valueOf();
    const phone = formData.get('phone')?.valueOf();
    const message = formData.get('message')?.valueOf();

    const body = {
      name,
      surname,
      email,
      phone,
      message
    }

    const url = new URL('http://localhost:3003/api/contact-form');


    const response = await fetch(url, {
      method: 'POST', // Set the method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Convert the data to a JSON string
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  }


  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 tracking-tight">Post a blog entry</h2>
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
        <Input name='title' placeholder="Title" />
        <Textarea name='post' className="min-h-[10rem]" placeholder="Blog post" />
        <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Upload</Button>
      </form>
    </div>
  )
}
