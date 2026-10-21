'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { UserContext } from '@/context/userContext'
import axios from 'axios'
import { CoursesGetPayload } from '@/prisma/generated/prisma/models'
import { useToastManager } from '@/components/ui/toast'


type CourseWithChapters = CoursesGetPayload<{ include: { courseChapters: true, enrollments: true } }>

const CourseDetailBanner = ({ 
  courseDetail 
}: { 
  courseDetail: CourseWithChapters | undefined 
}) => {
  if (!courseDetail) return null

  const { userDetail } = useContext(UserContext)
  const [loading, setLoading] = useState<boolean>(false)
  
  
  const [locallyEnrolled, setLocallyEnrolled] = useState<boolean>(false)
  const toastManager = useToastManager()

  const userId = userDetail?.id


  const isEnrolled = locallyEnrolled || Boolean(
    userId && courseDetail.enrollments.some((enrolled) => enrolled.userId === userId)
  )

  const enrollCourse = async () => {
    if (!userId) return

    try {
      setLoading(true)
      await axios.post('/api/enroll-course', {
        userId: userId,
        courseId: courseDetail.courseId,
      })
      setLocallyEnrolled(true)
      toastManager.add({
        title: 'Success', 
        description: "Course Enrolled!", 
        type: 'success'
      })
      
    } catch (error) {
      console.error('Failed to enroll course:', error)
    } finally {
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
          unoptimized
        />
 
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/30 z-10' />
 
        <div className='absolute z-20 flex flex-col gap-1 w-full mt-24 text-white px-12 md:px-20'>
          <h2 className='text-4xl sm:text-5xl font-game font-semibold'>{courseDetail.title}</h2>
          <p className='font-game text-xl'>{courseDetail.description}</p>
           {
             isEnrolled ?  <Button className={'w-fit font-game mt-5 cursor-pointer text-xl'} variant={'pixel'}> 
               Continue Learning...
             </Button>  :  <Button 
            disabled={loading || isEnrolled} 
            className='w-fit font-game mt-5 cursor-pointer text-xl' 
            variant={loading || isEnrolled ? 'pixelDisabled' : 'pixel'} 
            onClick={enrollCourse}
          >
            Enroll Now
          </Button>
           }
        </div>
      </div>
    </section>
  )
}

export default CourseDetailBanner