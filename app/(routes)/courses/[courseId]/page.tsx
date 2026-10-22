import { prisma } from '@/lib/prisma'
import CourseDetailBanner from './_components/CourseDetailBanner'
import { notFound } from 'next/navigation'
import CourseChapters from './_components/CourseChapters'
import CourseStatus from './_components/CourseStatus'
import UpgradeToPro from '../../dashboard/_components/UpgradeToPro'
import CommunityHelp from './_components/CommunityHelp'
import { currentUser } from '@clerk/nextjs/server'

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { courseId } = await params

 
  const user = await currentUser()
  const userEmail = user?.primaryEmailAddress?.emailAddress


  const [course, dbUser] = await Promise.all([
    prisma.courses.findUnique({
      where: { courseId },
      include: { courseChapters: true, enrollments: true },
    }),
    userEmail ? prisma.user.findUnique({ where: { email: userEmail } }) : Promise.resolve(null),
  ])

 
  if (!course) {
    notFound()
  }


  const completedExercises = dbUser?.id
    ? await prisma.completedExercise.findMany({
        where: {
          userId: dbUser.id,
          chapter: { courseId: courseId },
        },
      })
    : []

  return (
    <div>
      <CourseDetailBanner courseDetail={course} />
      
      <div className='grid grid-cols-3 p-10 md:px-16 gap-8 md:gap-10'>
        <div className='col-span-2'>
          <CourseChapters 
            courseDetail={course} 
            completedExercises={completedExercises} 
          />
        </div>
        
        <div className='flex flex-col gap-6'>
          <CourseStatus 
            courseDetail={course} 
            completedExercises={completedExercises} 
          />
          <UpgradeToPro />
          <CommunityHelp />
        </div>
      </div>
    </div>
  )
}


