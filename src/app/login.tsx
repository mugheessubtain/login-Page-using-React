"use client"

import { useState } from "react"
import { userType } from "./userType";
import SignUp from "./signup";
const usersData = [
  {
    email: "mugheessubtain@gmail.com",
    password: "123456",
    userName: "M.Mughees",
    hobbies: ["swimming", "gardening","Playing cricket","gyming"],
    post: [
      {
        content:
          "'When You Feel Like Quitting, Remember Why You Started'",
        likes: 120,
      },
      {
        content:
          "Don't Wait for Opportunity, Create it.",
        likes: 105,
      },
      {
        content:
          "Great Things Never Come From Comfort Zones",
        likes: 160,
      },
      {
        content:
          "Action is the Foundational Key to Success",
        likes: 13,
      },
      {
        content:
          "Your self-worth is determined by you. ...",
        likes: 150,
      },
    ],
  },
  {
    email: "mutahir@gmail.com",
    password: "123456",
    userName: "M.Mutahir",
    hobbies: ["gym", "video games"],
    post: [
      {
        content:
        "Success consists of going from failure to failure without loss of enthusiasm.",
        likes: 100
      },
      {
        content:
        "When something is important enough, you do it even if the odds are not in your favor.",
        likes: 1500,
      },
    ],
  },
];
type LoginType ={
  changeAuthStatus: (status: boolean)=>void;
  setUser: (user: userType)=>void;
}

export default function Login({ changeAuthStatus, setUser }:LoginType) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = () => {
    let [userFound]:any = usersData.filter(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      changeAuthStatus(true);
      setUser(userFound);
    }
  }
  // const signupHandler=()=>{
  //   signup(true)
  // }

  return (
    <>
      <div style={{
        height: "457px",
        display: "flex",
        alignItems: "center",
        background: "#f0f2f5"
      }}>
        <div style={{
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
          margin: "auto",
          padding: "39px 31px 51px",
          width: "396px"

        }}>
          <div>
          <h1 style={{
            display:"flex",
            justifyContent:"center"
          }}>Login</h1>
            <label htmlFor="Email"
            >

              <input type="text"
                placeholder="Email Address"
                style={{
                  borderRadius: "6px",
                  fontSize: "17px",
                  padding: "14px 16px",
                  width: "330px"

                }}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </label>
            <br /><br />
            <label htmlFor="password">

              <input type="text"
                placeholder="password"
                style={{
                  borderRadius: "6px",
                  fontSize: "17px",
                  padding: "14px 16px",
                  width: "330px"

                }}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </label>

            <br /><br />
            <button onClick={loginHandler}
              style={{
                backgroundColor: "#1877f2",

                borderRadius: "6px",
                fontSize: "20px",
                lineHeight: "48px",
                padding: "0 16px",
                width: "363px",
                color: "white",
                fontStyle: "bold"
              }}
            >Log in</button>
            {/* <p>Sign up your account <button onClick={signupHandler}>Sign Up</button></p> */}
          </div>
        </div>
      </div >
    </>

  )
}
