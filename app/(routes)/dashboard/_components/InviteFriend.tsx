import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const InviteFriend = () => {
  return (
     <div className='flex w-full flex-col items-center gap-2 mt-8 p-4 border rounded-xl bg-zinc-900'>
        <Image alt='mail logo' src={'/mail.png'} width={80} height={80} />
        <h2 className='text-3xl font-game'>Invite Friend</h2>
        <p className='font-game'>Having Fun? Share the love with a friend! Enter an email and we will send them a personal invite</p>
        <div className='flex flex-row gap-4 items-center mt-4'>
            <Input className='min-w-sm' placeholder='Enter Invitee Email' />
            <Button variant={'pixel'} className={'font-game cursor-pointer'} >Invite</Button>
        </div>
     </div>


  )
}

export default InviteFriend