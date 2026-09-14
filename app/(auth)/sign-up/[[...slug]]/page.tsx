import React from 'react'
import {SignUp} from '@clerk/nextjs'
const SignUpPage = () => {
  return (
     <section className='flex flex-col justify-center items-center min-h-screen'>
                   <SignUp />
             </section>
  )
}

export default SignUpPage