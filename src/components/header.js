import React from 'react'

export default function Header({head}) {
  return (
    <div className='bg-blue-100 mx-4 rounded-xl text-center'>
      <div className='font-bold text-3xl mt-4 animate-ease-in ml-8 py-4' >{head}</div>
    </div>
  )
}
