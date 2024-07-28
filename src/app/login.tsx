"use client"

import { useState } from "react"
import { userType } from "./userType";
const usersData = [
  {
    email: "mugheessubtain@gmail.com",
    password: "123456",
    userName: "M.Mughees",
    hobbies: ["swimming", "gardening"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 10,
      },
      {
        content:
          "ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 15,
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
          "special Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 100,
      },
      {
        content:
          "the quick ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
        likes: 1500,
      },
    ],
  },
];
type LoginType ={
  changeAuthStatus: (status: boolean)=>void;
  setUser: (user: userType)=>void;
}

export default function Login({ changeAuthStatus, setUser }: LoginType) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = () => {
    let [userFound] = usersData.filter(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      changeAuthStatus(true);
      setUser(userFound);
    }
  }

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
          </div>
        </div>
      </div >
    </>

  )
}
