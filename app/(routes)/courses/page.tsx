import React from 'react'
import Image from "next/image"
import CourseList from './_components/CourseList'

const CoursesPage = () => {
  return (
    <section className='w-full flex flex-col gap-5'>

      <div className='w-full relative h-75 overflow-hidden'>
        <Image 
          className='w-full object-cover h-full absolute inset-0' 
          src={'/course-banner.gif'} 
          height={300} 
          alt='coding hero gif' 
          width={1200} 
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/30 z-10' />

        <div className='absolute z-20 flex flex-col gap-1 w-full mt-24 text-white px-12 md:px-20'>
          <h2 className='text-4xl sm:text-5xl font-game font-semibold'>Explore all Courses</h2>
          <p className='font-game text-xl'>Explore courses which you want to learn more than 50+ courses</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-8 px-12 md:px-20 '>
        <h2 className='font-game text-3xl '>All Courses</h2>
        <div>
             <CourseList />
        </div>
      </div>

    </section>
  )
}

export default CoursesPage