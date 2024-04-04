import React from 'react'
import LoginForm from '../LoginForm/LoginForm'

export default function Login() {
  return (
    <section className='min-h-screen'>
      <div className='grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 grid px-4 md:px-10 lg:px-24 py-8 md:py-48'>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold '>Login</h1>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
