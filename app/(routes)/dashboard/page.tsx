import React from 'react'
import Image from 'next/image'
import WelcomeBannerPage from './_components/WelcomeBanner'
import EnrolledCourses from './_components/EnrolledCourses'
import ExploreMore from './_components/ExploreMore'
import InviteFriend from './_components/InviteFriend'
import UserStatus from './_components/UserStatus'
import UpgradeToPro from './_components/UpgradeToPro'
const Dashboard = () => {
  return (
     <section className='p-4 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 '>
          <div className=' col-span-2 w-full flex flex-col gap-4 items-center p-4'>
               <WelcomeBannerPage />
                <EnrolledCourses />
                <ExploreMore />
                <InviteFriend />
          </div>
           <div className='mt-10 flex flex-col gap-4'> 
                 <UserStatus />
                 <UpgradeToPro />
           </div>
     </section>
  )
}

export default Dashboard