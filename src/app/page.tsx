"use client"
import { useState } from "react"

import Timeline from "./timeline"
import Login from "./login"
import { userType } from "./userType"



export default function Home(){
  const [isAuthenticted,setIsAuthenticted]=useState(false)
  const[user,setUser]=useState<userType|null>(null)
  return(
    <>
    {
      isAuthenticted?
      <Timeline
      userStatus={user}
      />:(

        <Login
        changeAuthStatus={setIsAuthenticted} 
        setUser={setUser} 
      />
      )
    
    }
    </>
  )
}