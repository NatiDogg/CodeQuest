import { prisma } from '@/lib/prisma'
import CourseDetailBanner from './_components/CourseDetailBanner'
import { notFound } from 'next/navigation'
import CourseChapters from './_components/CourseChapters'
import CourseStatus from './_components/CourseStatus'

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { courseId } = await params

  
  const course = await prisma.courses.findUnique({
    where: { courseId },
    include: { courseChapters: true },
  })

  if (!course) {
    notFound() 
  }

  return (
    <div>
      <CourseDetailBanner courseDetail={course} />
       <div className='grid grid-cols-4 p-10 md:px-16 gap-8 md:gap-10'>
            <div className='col-span-3 '>
                <CourseChapters courseDetail={course} />
            </div>
            <div>
               <CourseStatus />
            </div>
       </div>
    </div>
  )
}