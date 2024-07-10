'use client'
import React, { FormEvent, useState } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'

function page() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`${email? email : 'none'} and ${message? message : 'none'} submitted successfully`)
        setEmail('')
        setMessage('')
    }

  return (
    <div className='min-h-screen w-full bg-gray-100 dark:bg-gray-900 py-12 pt-36 flex flex-col justify-center items-center'>
    <BackgroundBeams className='z-0'/>
        <div className='text-center max-w-[50%]'>
            <h2 className='text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white'>Contact Us</h2>
            <p className='text-base text-gray-600'>We're here to help with any questions about our courses, programs, or events.Teach out and let us know how we can assist you in your musical journey.</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-5 z-10'>
            <div>
                <label htmlFor="email"></label>
                <input type="email" placeholder='Your email address' className='bg-slate-800 px-4 py-2 w-full rounded-lg outline-none' onChange={ e => setEmail(e.target.value) } value={email}/>
            </div>
            <div>
                <label htmlFor="message"></label>
                <textarea name="message" cols={30} rows={10} placeholder='Your message' className='bg-slate-800 px-4 py-2 w-full rounded-lg resize-none outline-none' onChange={ e => setMessage(e.target.value) } value={message}></textarea>
            </div>
            <button type='submit' className="w-fit px-4 py-2 rounded border border-neutral-600 text-white bg-teal-600 hover:bg-gray-100 hover:text-black transition duration-200"
            >
                Send Message
            </button>
        </form>
    </div>
  )
}

export default page