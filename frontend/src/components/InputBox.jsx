import React from 'react'

function InputBox({label, placeholder, onChange}) {
  return (
    <div className=''>
      <div className='text-sm font-semibold text-left pl-9'>
        {label}
      </div>
      <input onChange={onChange} type="text" placeholder={placeholder} className='px-4 mb-3 w-80 border border-gray-600 rounded-lg p-2'/>
    </div>
  )
}

export default InputBox
