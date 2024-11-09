import React from 'react'
import { Appbar, Balance, Users } from '../components'

function Dashboard() {
  return (
    <div className='bg-slate-100'>
      <Appbar />
      <Balance value={3978}/>
      <Users />
    </div>
  )
}

export default Dashboard
