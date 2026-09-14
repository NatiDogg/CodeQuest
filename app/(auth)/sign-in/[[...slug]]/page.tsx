import React from 'react'
import {SignIn} from '@clerk/nextjs'
const SignInPage = () => {
  return (
        <section className='flex flex-col justify-center items-center min-h-screen'>
              <SignIn />
        </section>


  )
}

export default SignInPage