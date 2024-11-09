import React, { useState } from 'react'
import { Button, Heading, InputBox, SubHeading, BottomWarning } from '../components'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  return (
  <div className='bg-gray-700 h-screen flex justify-center pt-4'>
    <div className='flex flex-col justify-center'>
      <div className='rounded-2xl bg-white w-96 text-center pb-3'>
        <Heading heading={"Sign Up"} />
        <SubHeading text={"Enter the information for your account"} />
        <InputBox label={"First Name"} placeholder={"First Name"}
        onChange={e => setFirstName(e.target.value)} />
        <InputBox label={"Last Name"} placeholder={"Last Name"}
        onChange={e => setLastName(e.target.value)} />
        <InputBox label={"Username"} placeholder={"Username"}
        onChange={e => setUsername(e.target.value)}/>
        <InputBox label={"Password"} placeholder={"Password"}
        onChange={e => setPassword(e.target.value)}/>
        <Button onClick={async () => {
           const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            firstName,
            lastName,
            password
          });
          localStorage.setItem("token", response.data.token)
          navigate("/dashboard")
        }} text={"Sign Up"}/>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
  ) 
}

export default Signup
