import { Button } from '@/components/ui/button'
import { Courses } from '@/prisma/generated/prisma/client'
import Image from 'next/image'
import React from 'react'

const CourseDetailBanner = ({ 

  courseDetail 
}: { 
  
  courseDetail: Courses | undefined 
}) => {
  if (!courseDetail) return null

  return (
    <section className='w-full flex flex-col gap-5'>
    
          <div className='w-full relative h-75 overflow-hidden'>
            <Image 
              className='w-full object-cover h-full absolute inset-0' 
              src={'/hero4.gif'} 
              height={300} 
              alt='coding hero gif' 
              width={1200} 
            />
    
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/30 z-10' />
    
            <div className='absolute z-20 flex flex-col gap-1 w-full mt-24 text-white px-12 md:px-20'>
              <h2 className='text-4xl sm:text-5xl font-game font-semibold'>{courseDetail.title}</h2>
              <p className='font-game text-xl'>{courseDetail.description}</p>
               <Button className={'w-fit font-game mt-5 cursor-pointer text-xl'} variant={'pixel'}>Enroll Now</Button>
            </div>
          </div>
    
          <div className='flex flex-col gap-4 mt-8 px-12 md:px-20 '>
                 <h2>hello</h2>
          </div>
    
        </section>
  )
}

export default CourseDetailBanner