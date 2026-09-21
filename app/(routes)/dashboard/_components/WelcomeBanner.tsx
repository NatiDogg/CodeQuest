'use client'
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
const WelcomeBannerPage = () => {
     const {user} = useUser()
  return (
    <div className='flex flex-row gap-4 items-center'>
                  <Image alt='robo' src={'/machine.webp'} height={120} width={120} />
                  <h2 className='px-10 py-5 text-xl bg-gray-500 text-white font-game rounded-md  '>Welcome Back {user?.fullName || 'Guest'}. Let's start Learning</h2>
               </div>
  )
}

export default WelcomeBannerPage