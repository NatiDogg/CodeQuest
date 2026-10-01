import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const UpgradeToPro = () => {
  return (
     <div className='flex flex-col gap-1 items-center p-4 border-4'>
          <Image src={'/3d-dice.png'} height={70} width={70} alt='logo image' />
          <h2 className='font-game text-3xl'>Upgrade to Pro</h2>
          <p className='font-game text-gray-500 text-xl text-center'>Join Pro Membership and Get all course access</p>
          <Button className={'font-game w-full cursor-pointer'} variant={'pixel'} size={'lg'}>Upgrade</Button>
     </div>
  )
}

export default UpgradeToPro