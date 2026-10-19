'use client'
import { Button } from '@/components/ui/button'
import { Courses } from '@/prisma/generated/prisma/client'
import Image from 'next/image'
import {useContext, useState} from 'react'
import {UserContext} from '@/context/userContext'
import axios from 'axios'
const CourseDetailBanner = ({ 

  courseDetail 
}: { 
  
  courseDetail: Courses | undefined 
}) => {
  if (!courseDetail) return null

   const {userDetail}  = useContext(UserContext)

   const [loading, setLoading] = useState<boolean>(false)
   const [isEnrolled, setisEnrolled] = useState<boolean>(false)

   const userId = userDetail?.id

    const enrollCourse = async()=>{
         if(!userId) return

         try {
          setLoading(true)

         const result = await axios.post('/api/enroll-course',{
               userId: userId,
            courseId: courseDetail.courseId,
            
         })

         setisEnrolled(true)
         } catch (error) {
               console.error('Failed to enroll course:', error)
         }
         finally{
          setLoading(false)
         }

         

    }

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
               <Button disabled={loading || isEnrolled} className={'w-fit font-game mt-5 cursor-pointer text-xl'} variant={loading || isEnrolled ? 'pixelDisabled' : 'pixel'} onClick={enrollCourse}>{isEnrolled ? 'Enrolled' : 'Enroll Now'}</Button>
            </div>
          </div>
    
       
    
        </section>
  )
}

export default CourseDetailBanner