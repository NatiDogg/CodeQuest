import { prisma } from '@/lib/prisma'
import CourseDetailBanner from './_components/CourseDetailBanner'
import { notFound } from 'next/navigation'

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
    </div>
  )
}