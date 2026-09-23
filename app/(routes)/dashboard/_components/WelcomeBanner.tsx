'use client'
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
const WelcomeBannerPage = () => {
     const {user} = useUser()
  return (
    <div className='w-full flex flex-row gap-4 items-center justify-center'>
      <Image alt='robo' src={'/machine.webp'} height={120} width={120} />
      <h2 className='p-4 text-2xl bg-zinc-800 text-white font-game rounded-lg rounded-bl-none flex-1'>
        Welcome Back <span className='text-yellow-400'>{user?.fullName || 'Guest'}</span>, Let's start Learning
      </h2>
    </div>
  )
}

export default WelcomeBannerPage