'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { generateUser } from '@/server-actions/login/login';
import React, { useState } from 'react'

export default function GenerateUser() {
  const [password, setPassword] = useState<string>();

  const onGenerateUserSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username')?.toString()
    const { password, message } = await generateUser(username!)
    setPassword(password)
  }

  return <section className='gird grid-cols-1 md:grid-cols-2' >
    <form onSubmit={onGenerateUserSubmit} className='flex-col flex gap-2'>
      <Input name='username' placeholder='Username' required />
      <Button>Generate user </Button>
    </form>
    {password && <p>{password}</p>}
  </section>
}
