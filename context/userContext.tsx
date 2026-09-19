import React,{createContext} from 'react'

export const UserContext = createContext<any>({
      userDetail: undefined,
      setUserDetail: ()=> {}
})
