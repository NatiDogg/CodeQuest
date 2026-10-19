import { Button } from '@/components/ui/button'
import React from 'react'

const CommunityHelp = () => {
  return (
     <div className='font-game p-4 border-4 rounded-xl flex flex-col gap-1 items-center'>
             <h2 className='text-2xl'>Need Help?</h2>
             <p className='text-xl'>Ask question in our community </p>
             <Button variant={'pixel'} size={'lg'} className={'text-xl mt-2 cursor-pointer w-full'}>Go To Community</Button>
     </div>
  )
}

export default CommunityHelp