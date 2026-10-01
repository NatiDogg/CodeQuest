'use client'
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
const UserStatus = () => {
     const {user} = useUser()
  return (
      <div className='flex flex-col gap-2 p-4 border-4
     '>
             <div className='flex flex-row gap-2 items-center'>
                 <Image src={'/alex_walk.gif'} alt='user avater' width={70} height={70} />
                <h2 className='font-game text-2xl'>{user?.primaryEmailAddress?.emailAddress}</h2>
             </div>
             <div className=' grid p-2 grid-cols-2 gap-4'>
                   <div className='flex flex-row gap-3 items-center'>
                            <Image src={'/star.png'} height={35} width={25} alt='image' />
                            <div className='flex flex-col'>
                                 <h3 className='text-2xl font-game '>20</h3>
                                 <p className='font-game text-gray-500'>Total Rewards</p>
                            </div>
                   </div>
                   <div className='flex flex-row gap-3 items-center'>
                            <Image src={'/badge.png'} height={35} width={25} alt='image' />
                             <div className='flex flex-col'>
                                 <h3 className='text-2xl font-game '>3</h3>
                                 <p className='font-game text-gray-500'>Badge</p>
                            </div>
                   </div>
                   <div className='flex flex-row gap-3 items-center'>
                            <Image src={'/start-up.png'} height={35} width={25} alt='image' />
                            <div className='flex flex-col'>
                                 <h3 className='text-2xl font-game '>High</h3>
                                 <p className='font-game text-gray-500'>Rank</p>
                            </div>
                   </div>
                   <div className='flex flex-row gap-3 items-center'>
                            <Image src={'/fire.png'} height={35} width={25} alt='image' />
                            <div className='flex flex-col'>
                                 <h3 className='text-2xl font-game '>7</h3>
                                 <p className='font-game text-gray-500'>Daily Streak</p>
                            </div>
                   </div>
             </div>
      </div>
  )
}

export default UserStatus