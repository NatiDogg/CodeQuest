import React from 'react'
import Image from 'next/image'
import WelcomeBannerPage from './_components/WelcomeBanner'
import EnrolledCourses from './_components/EnrolledCourses'
import ExploreMore from './_components/ExploreMore'
const Dashboard = () => {
  return (
     <section className='p-4 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 '>
          <div className=' col-span-2 w-full flex flex-col gap-4 items-center p-4'>
               <WelcomeBannerPage />
                <EnrolledCourses />
                <ExploreMore />
          </div>
           <div className='flex flex-col gap-4 items-center p-4'> 
               right
           </div>
     </section>
  )
}

export default Dashboard