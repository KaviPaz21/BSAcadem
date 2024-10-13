import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const goinside=()=>{
        navigate("/LMS")
    }
  return (
    <div className=''>
      <div className='relative h-fit top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-fit px-12 py-10 bg-slate-100 rounded-lg shadow-sm shadow-gray-300'>

            <div className='text-center font-csans font-bold'>
                    <div className='text-4xl py-0'>&#x2655;</div>
                    <div className='relative -top-2'>BSA-LMS</div>
            </div>
            <div className='font-csans text-2xl font-semibold pt-5 pb-2'>LOG-IN</div>
            <input type="text" name="" placeholder='Username' className='py-2 px-5 w-60 rounded-full my-2' /><br />
            <input type="password" name="" placeholder='Username' className='py-2 px-5 w-60 rounded-full my-2'/>

            <div className='py-2 px-8 bg-blue-600 text-white rounded-lg text-center mt-7' onClick={goinside}>submit</div>

            <div className='text-center text-slate-400 pt-4'>Bandara Senarathne Academy</div>

      
      </div>
    </div>
  )
}
