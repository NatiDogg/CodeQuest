
import { notFound } from 'next/navigation';
import PlayGround from './_components/PlayGround';
import { prisma } from '@/lib/prisma'


interface PageProps{
   params: Promise<{courseId: string, exerciseSlug: string}>
}
const ExercisePlayGround = async({params}: PageProps) => {

      const {courseId,exerciseSlug} = await params
     //course->courseChapters[array]->exericse[array]->slug

     const course = await prisma.courses.findUnique({where: {courseId},include: {courseChapters: true}})

     if(!course) return notFound()
     let targetChapter = null;
     let targetExercise = null;

     for(const chapter of course.courseChapters){
         const exercises = Array.isArray(chapter.exercises) ? chapter.exercises : []

         const found = exercises.find((exercise: any)=> exercise.slug === exerciseSlug)

         if(found){
           targetChapter = chapter
           targetExercise = found
           break
         }
     }

     if (!targetExercise || !targetChapter) notFound()
   
  return (
    <PlayGround />
  )
}

export default ExercisePlayGround



