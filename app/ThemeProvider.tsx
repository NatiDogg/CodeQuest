'use client'
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUser } from "@clerk/nextjs"

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
   const {user} = useUser()

    const createNewUser = ()=>{
      
    }
  return (
    <NextThemesProvider {...props}>
        {children}
        </NextThemesProvider>
  )
}

export default ThemeProvider
