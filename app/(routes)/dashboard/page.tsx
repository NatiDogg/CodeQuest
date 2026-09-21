import React from 'react'
import Image from 'next/image'
import WelcomeBannerPage from './_components/WelcomeBanner'
const Dashboard = () => {
  return (
     <section className='p-4 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 '>
          <div className=' col-span-2 flex flex-col gap-4 items-center p-4'>
               <WelcomeBannerPage />
               <div>
                  kebede
               </div>
               <div>
                  yonas
               </div>
          </div>
           <div className='flex flex-col gap-4 items-center p-4'> 
               right
           </div>
     </section>
  )
}

export default Dashboard