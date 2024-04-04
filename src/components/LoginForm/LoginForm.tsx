'use client'
import React, { useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from '@/server-actions/login/login'
import { useRouter } from 'next/navigation'


export default function LoginForm() {
  const [message, setMessage] = useState<string>()
  const [loadingStatus, setLoadingStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoadingStatus('loading')

    const formData = new FormData(event.currentTarget)
    const name = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    formRef.current?.reset()!
    const res = await login(name!, password!)
    if (!res) setMessage('Invalid username or password')
    router.push("/dashboard")
    setMessage('')

    setLoadingStatus('success')
  }

  return (
    <form className="grid gap-4" ref={formRef} onSubmit={onSubmitHandler}>
      <Input name='username' autoComplete='name' required placeholder="Usuario" type="text" />
      <Input name='password' autoComplete='current-password' required placeholder="Contraseña" type='password' />
      {message && <p className='text-sm text-red-500'>{message}</p>}
      {loadingStatus === 'loading' ?
        <div>Login...</div> :
        <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Acceder</Button>
      }
    </form>
  )
}
