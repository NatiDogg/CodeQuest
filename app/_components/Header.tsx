'use client'
import react from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NavBar from './NavBar'
import {  UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
      const {user} = useUser()
  return (
      <div className='p-4 max-w-7xl flex flex-row justify-between gap-4 items-center w-full'>
           <div className='flex flex-row gap-1 items-center'>
               <Image className='hidden md:block' src={'/3d-dice.png'} width={40} height={40} alt='logo image'></Image>
               <h2 className='font-bold text-2xl md:text-4xl font-game'>CodeQuest</h2>
           </div>
           {/*NavBar*/}
           <NavBar />

          {!user ?  <Link href={'/sign-in'}><Button className='font-game text-2xl cursor-pointer' variant={'pixel'}>SignUp</Button> </Link>: 
            <div className='flex flex-row gap-3 items-center'>
                 <Button className='font-game text-2xl cursor-pointer' variant={'pixel'}>Dashboard</Button>
                 <UserButton />
            </div>

          }
      </div>


  )
}

export default Header