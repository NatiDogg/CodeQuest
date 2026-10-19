import { prisma } from '@/lib/prisma'
import CourseDetailBanner from './_components/CourseDetailBanner'
import { notFound } from 'next/navigation'
import CourseChapters from './_components/CourseChapters'
import CourseStatus from './_components/CourseStatus'
import UpgradeToPro from '../../dashboard/_components/UpgradeToPro'
import CommunityHelp from './_components/CommunityHelp'

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
       <div className='grid grid-cols-3 p-10 md:px-16 gap-8 md:gap-10'>
            <div className='col-span-2 '>
                <CourseChapters courseDetail={course} />
            </div>
            <div className='flex flex-col gap-6'>
               <CourseStatus />
               <UpgradeToPro />
               <CommunityHelp />
            </div>
       </div>
    </div>
  )
}