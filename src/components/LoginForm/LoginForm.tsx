'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.valueOf();
    const password = formData.get('password')?.valueOf();

    const body = {
      name,
      password,
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
    <form className="grid gap-4" onSubmit={onSubmitHandler}>
      <Input name='user' placeholder="Usuario" type="text" />
      <Input name='password' placeholder="Contraseña" type='password' />
      <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Acceder</Button>
    </form>
  )
}
