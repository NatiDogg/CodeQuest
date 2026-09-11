import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NavBar from './NavBar'
const Header = () => {
  return (
      <div className='p-4 max-w-7xl flex flex-row justify-between gap-4 items-center w-full'>
           <div className='flex flex-row gap-1 items-center'>
               <Image className='hidden md:block' src={'/3d-dice.png'} width={40} height={40} alt='logo image'></Image>
               <h2 className='font-bold text-2xl md:text-4xl font-game'>CodeQuest</h2>
           </div>
           {/*NavBar*/}
           <NavBar />

           <Button className='font-game text-2xl cursor-pointer' variant={'pixel'}>SignUp</Button>
      </div>


  )
}

export default Header