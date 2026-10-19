'use client'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Prisma } from "@/prisma/generated/prisma/client";

type CourseWithChapters = Prisma.CoursesGetPayload<{include: {courseChapters: true}}>


const CourseStatus = ({courseDetail}: {courseDetail: CourseWithChapters | undefined }) => {

    if(!courseDetail) return null

    const {courseChapters} = courseDetail

    const [counts, setCounts] = useState<{
         totalExercises: number,
         totalXp: number
    }>({totalExercises: 0, totalXp: 0})

    const getCounts = () => {
        let totalExercises = 0;
        let totalXp = 0;

        courseChapters.forEach((chapter) => {
            
            if (Array.isArray(chapter?.exercises)) {
                totalExercises += chapter.exercises.length;
                chapter.exercises.forEach((exercise) => {
                    const ex = exercise as { xp?: number };
                      totalXp += Number(ex?.xp) || 0;
                });
            }
        });

   
        setCounts({ totalExercises, totalXp });
    }
    useEffect(()=>{
         courseDetail && getCounts()
    },[courseDetail])

  return (
    <div className='font-game p-4 border-4 rounded-xl w-full'>
         <h2 className='text-2xl'>Course Progress</h2>
         <div className='flex items-center gap-6 mt-4'>
            <Image src={'/book.png'} alt='book' width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl'>Exercises  <span className='text-gray-400'>1/{counts?.totalExercises}</span></h2>
                <Progress value={37} className={'mt-2'} />
            </div>
         </div>
         <div className='flex items-center gap-6 mt-4'>
            <Image src={'/star.png'} alt='book' width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl'>XP Earned  <span className='text-gray-400'>1/{counts?.totalXp}</span></h2>
                <Progress value={37} className={'mt-2'} />
            </div>
         </div>
    </div>
  )
}

export default CourseStatus