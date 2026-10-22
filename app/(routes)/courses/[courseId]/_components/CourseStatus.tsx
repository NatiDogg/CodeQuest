'use client'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import  { useContext, useMemo } from 'react'
import { Prisma,CompletedExercise } from "@/prisma/generated/prisma/client";
import { UserContext } from '@/context/userContext';

type CourseWithChapters = Prisma.CoursesGetPayload<{include: {courseChapters: true, enrollments: true}}>

const CourseStatus = ({ courseDetail, completedExercises }: { courseDetail: CourseWithChapters | undefined, completedExercises:CompletedExercise[]  }) => {
    if (!courseDetail) return null

    const { courseChapters, enrollments } = courseDetail
    const { userDetail } = useContext(UserContext)
    const userId = userDetail?.id

    
    const courseEnrollmentInfo = userId 
        ? enrollments.find((enrolled) => enrolled.userId === userId) 
        : null

    const isEnrolled = Boolean(courseEnrollmentInfo)

    
    const { totalExercises, totalXp } = useMemo(() => {
        let exercisesCount = 0
        let xpCount = 0

        courseChapters.forEach((chapter) => {
            if (Array.isArray(chapter?.exercises)) {
                exercisesCount += chapter.exercises.length
                chapter.exercises.forEach((exercise) => {
                    const ex = exercise as { xp?: number }
                    xpCount += Number(ex?.xp) || 0
                })
            }
        })

        return { totalExercises: exercisesCount, totalXp: xpCount }
    }, [courseChapters])

    
    const exerciseProgress = 0 
    const xpEarned = courseEnrollmentInfo?.xpEarned || 0

    return (
        <div className='font-game p-6 border-4 rounded-xl w-full bg-card shadow-sm'>
            <h2 className='text-2xl font-bold mb-4'>Course Progress</h2>
            
            {/* Exercises Progress */}
            <div className='flex items-center gap-6 mt-4'>
                <Image src={'/book.png'} alt='book' width={50} height={50} />
                <div className='w-full'>
                    <h2 className='flex justify-between text-xl'>
                        Exercises 
                        <span className='text-gray-400'>{exerciseProgress}/{totalExercises}</span>
                    </h2>
                    <Progress value={(exerciseProgress / (totalExercises || 1)) * 100} className='mt-2' />
                </div>
            </div>

            {/* XP Earned Progress */}
            <div className='flex items-center gap-6 mt-6'>
                <Image src={'/star.png'} alt='star' width={50} height={50} />
                <div className='w-full'>
                    <h2 className='flex justify-between text-xl'>
                        XP Earned 
                        <span className='text-gray-400'>{xpEarned}/{totalXp}</span>
                    </h2>
                    <Progress value={(xpEarned / (totalXp || 1)) * 100} className='mt-2' />
                </div>
            </div>
        </div>
    )
}

export default CourseStatus