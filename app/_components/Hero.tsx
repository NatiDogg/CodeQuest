import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Hero = () => {
  return (
     <section className=' w-full relative h-screen overflow-hidden '>
         <Image className='w-full h-full absolute inset-0' src={'/hero.gif'} height={1000} alt='coding hero gif' width={1000} />

         <div className='absolute z-50 flex w-full flex-col  items-center  mt-24'>
            <h2 className='font-bold text-5xl md:text-7xl font-game'>Start Your </h2>
            <h2 className='font-bold text-5xl md:text-8xl font-game bg-linear-to-r bg-clip-text text-transparent from-yellow-500 to-yellow-300'>Coding Adventure</h2>
            <h3 className='text-white font-game text-3xl'>Beginner friendly coding courses and projects</h3>
             <Link href={'/sign-up'}>
                <Button className='font-game cursor-pointer mt-7 text-3xl p-6 ' variant={'pixel'}>GET STARTED</Button>
             </Link>
         </div>
     </section>


  )
}

export default Hero