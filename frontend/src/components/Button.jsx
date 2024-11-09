import React from 'react'

function Button({ text, onClick }) {
  return (
    <div>
      <button className='bg-blue-700 p-2 mt-1 rounded-lg justify-center hover:bg-slate-600 text-white'
      onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
