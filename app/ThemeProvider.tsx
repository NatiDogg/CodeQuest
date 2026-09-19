'use client'
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUser } from "@clerk/nextjs"
import axios from 'axios'
import { UserContext } from "@/context/userContext"
import Header from "./_components/Header"
const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
   const {user} = useUser()
   const [userDetail, setUserDetail] = React.useState()

    React.useEffect(()=>{
         user && createNewUser()
    },[user])
    const createNewUser = async()=>{
        const response = await axios.post('/api/user', {})
        setUserDetail(response.data.user)
        
    }
  return (
    <NextThemesProvider {...props}>
        <UserContext.Provider value={{userDetail, setUserDetail}}>
            <div>
               <Header />
             {children}
            </div>
        </UserContext.Provider>
        
        </NextThemesProvider>
  )
}

export default ThemeProvider
