'use client'

import { Courses } from '@/prisma/generated/prisma/client'
import axios from 'axios'
import { ChartNoAxesColumn } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const CourseList = () => {
  const [courseList, setCourseList] = useState<Courses[]>([])
  const [loading, setLoading] = useState(true)

  const getAllCourses = async () => {
    
    try {
      const courses = await axios.get('/api/course')
      setCourseList(courses?.data?.courses || [])
    } catch (error) {
      console.error('Failed to fetch courses:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch'>
      {loading ? (
        // Loading Skeleton UI
        Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className='animate-pulse border rounded-xl p-4 flex flex-col gap-3'>
            <div className='w-full aspect-video bg-slate-200 rounded-lg'></div>
            <div className='h-5 bg-slate-200 rounded w-3/4'></div>
            <div className='h-4 bg-slate-200 rounded w-full'></div>
            <div className='h-4 bg-slate-200 rounded w-1/4'></div>
          </div>
        ))
      ) : courseList && courseList.length > 0 ? (
        courseList.map((course) => {
          const parsedId = parseInt(course.courseId.trim())
          const image = (parsedId === 2 || parsedId === 3)
            ? '/hero3.gif'
            : course.bannerImg

          return (
            <Link href={`courses/${course.courseId.trim()}`}>
              <div
              key={course.courseId}
              className='flex flex-col border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 p-3 gap-3 group cursor-pointer'
            >
              {/* Banner Image Container */}
              <div className='relative w-full aspect-video rounded-lg overflow-hidden bg-slate-100'>
                <Image
                  src={image}
                  alt={course.title || 'Course Image'}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                />
              </div>

              {/* Course Info */}
              <div className='flex flex-col flex-1 justify-between gap-2 p-1'>
                <div className='flex flex-col gap-1'>
                  <h2 className='font-game text-2xl'>
                    {course.title}
                  </h2>
                  <p className='font-game text-[16px] text-gray-400 line-clamp-2 '>
                    {course.description}
                  </p>
                </div>

                {course.level && (
                  <div className='pt-2 bg-zinc-800 w-fit p-2 rounded-2xl flex flex-row items-end gap-1'>
                    <ChartNoAxesColumn className='h-5 w-5' />
                    <span className='text-xs '>{course.level}</span>
                    
                  </div>
                )}
              </div>
            </div>
            </Link>
          )
        })
      ) : (
        <div className='col-span-full text-center py-10 text-slate-500 font-medium'>
          No Courses Found
        </div>
      )}
    </div>
  )
}

export default CourseList