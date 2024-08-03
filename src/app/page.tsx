"use client"
import { useState } from "react"

import Timeline from "./timeline"
import Login from "./login"
import { userType } from "./userType"
import NavBar from "./navbar"
import SignUp from "./signup"
import { sign } from "crypto"



export default function Home() {
  const [isAuthenticted, setIsAuthenticted] = useState(false)
  const [user, setUser] = useState<userType | null>(null)
  const [signup, setSignUp] = useState(false)
  return (
    <>

      {
        isAuthenticted ?
          (
            <>
              <NavBar
                isAuthenticted={isAuthenticted}
                setUser={user}
              />
              <Timeline
                userStatus={user}
                isAuthenticted={setIsAuthenticted}
              />
            </>
          )

          : (
            <>
              <NavBar
                isAuthenticted={isAuthenticted}
                setUser={user}
              />

              <Login
                changeAuthStatus={setIsAuthenticted}
                setUser={setUser}
                // signup={setSignUp}
              />


            </>
          )
          
          // signup?<SignUp/>


      }
      
    </>

  )
}
