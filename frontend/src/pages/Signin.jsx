import React, { useState } from 'react'
import { BottomWarning, Button, Heading, InputBox, SubHeading } from '../components'
import axios from 'axios';

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
      <div className='bg-gray-700 flex justify-center pt-4'>
    <div className='flex flex-col justify-center'>
      <div className='rounded-2xl bg-white w-96 text-center pb-3'>
        <Heading heading={"Sign In"} />
        <SubHeading text={"Enter the information for your account"} />
        <InputBox label={"Username"} placeholder={"Username"} onChange={e => setUsername(e.target.value)}/>
        <InputBox label={"Password"} placeholder={"Password"} onChange={e => setPassword(e.target.value)}/>
        <Button text={"Sign In"}
        onClick={async() => {
          const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
          });
          console.log(response.data)
          localStorage.setItem("token", response.data.token)
        }}/>
         <BottomWarning  label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
   </div>
  )
}

export default Signin
