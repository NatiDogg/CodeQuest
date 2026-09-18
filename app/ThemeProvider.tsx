'use client'
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUser } from "@clerk/nextjs"
import axios from 'axios'
const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
   const {user} = useUser()

    React.useEffect(()=>{
         user && createNewUser()
    },[user])
    const createNewUser = async()=>{
        const response = await axios.post('/api/user', {})

        console.log(response.data)
        
    }
  return (
    <NextThemesProvider {...props}>
        {children}
        </NextThemesProvider>
  )
}

export default ThemeProvider
