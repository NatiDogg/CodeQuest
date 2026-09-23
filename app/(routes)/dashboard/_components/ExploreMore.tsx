import Image from 'next/image';
import React from 'react'

const ExploreMore = () => {

const ExplorMoreOptions = [
    {
        id: 1,
        title: 'Quizz Pack',
        desc: 'Practice what you learned with bite-sized code challenges.',
        icon: '/tree.png'
    },
    {
        id: 2,
        title: 'Video Courses',
        desc: 'Learn with structured video lessons taught step-by-step.',
        icon: '/game.png'
    },
    {
        id: 3,
        title: 'Community Project',
        desc: 'Build real-world apps by collaborating with the community.',
        icon: '/growth.png'
    },
    {
        id: 4,
        title: 'Explore Apps',
        desc: 'Explore prebuild app which you can try demo and build it',
        icon: '/start-up.png'
    }
];


  return (
     <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold font-game text-white"> Explore More</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
             {ExplorMoreOptions.map((options,index)=>(
                 <div key={options.id} className='flex flex-row gap-3 items-center border bg-zinc-900 p-3 rounded-xl'>
                    <Image width={80} height={80} alt={`${options.title} Image`} src={options.icon} />
                    <div className='flex flex-col gap-2'>
                        <h3 className=' font-medium font-game text-2xl'>{options.title}</h3>
                        <p className='text-sm text-gray-500'>{options.desc}</p>
                    </div>
                 </div>
             ))}
        </div>
        </div>
  )
}

export default ExploreMore