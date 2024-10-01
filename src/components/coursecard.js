import React from 'react'
import bg from '../images/bgbl.jpg'

export default function Coursecard({topic , no , status , modulesetter}) {
  const openmodule = ()=>{
    modulesetter(no)
  }
  return (
    <div className=' w-cw300 bg-slate-200 h-auto rounded-lg pb-3 mb-6 shadow-gray-300 shadow-lg'>
      <img src={bg} alt="bg" className='rounded-lg' />
      <div className='text-center text-2xl font-csans py-1 font-semibold'>{topic}</div>
      <div className='text-center font-bold'>lesson No: {no}</div>
      <div className='text-center'>{status}</div>
      <div className='mx-5 text-center my-2 text-white py-2 rounded-lg bg-blue-600 hover:scale-105 duration-300' onClick={openmodule}>Access Materials</div>
    </div>
  )
}
