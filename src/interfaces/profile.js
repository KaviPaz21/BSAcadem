import React, { useState } from 'react'
import { element } from 'three/examples/jsm/nodes/Nodes.js'

export default function Profile() {
  const [change, setchange] = useState(false)

  const changer = () => {
    setchange(!change)
  }

  return (
    <div className='grid gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 sm:mx-4 lg:mx-12 xl:mx-20 mt-24'>
      <div className='bg-slate-100 px-4 py-5 rounded-xl mx-4 sm:h-auto lg:h-auto xl:h-ch800 overflow-auto'>
        <div className='w-40 h-40 rounded-full bg-slate-400 float-left '></div>
        <div className='py-12 font-semibold text-3xl'>Pasindu Kavinda Bandara</div>

        <div className='mt-8 text-left text-2xl px-4  '>
          <div>Payment Info</div>
          <table className=' my-4 w-full overflow-auto'>
            <tr className='text-xl text-center bg-blue-600 text-white'>
              <td className='py-4'>Month</td>
              <td>Amount</td>
              <td>Institute</td>
              <td>Activation</td>
            </tr>

            {(() => {
              const elements = []
              for (let i = 0; i < 12; i++) {
                elements.push(
                  <tr className={`text-c17 text-center bg-white text-gray-700`}>
                    <td className='py-4'>{i + 1}</td>
                    <td>2000/=</td>
                    <td>Expertexion</td>
                    <td>Activated</td>
                  </tr>)
              } return elements
            })()}
          </table>
        </div>
      </div>

      <div className='text-left bg-slate-100 rounded-xl mx-4 px-6 py-6 sm:h-auto lg:h-auto xl:h-ch800 overflow-auto'>
        <div className='text-2xl font-semibold'>User Info</div>
        <div className='bg-white rounded-xl w-full h-auto my-5'>
          <div className='px-4 py-4 text-nv18 font-semibold'>Name : <span className='text-c17 font-normal py-5 pl-4'>Pasindu Kavinda</span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>Age : <span className='text-c17 font-normal py-5 pl-4'>24 Years</span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>School : <span className='text-c17 font-normal py-5 pl-4'>Central college Anuradhapura</span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>NIC : <span className='text-c17 font-normal py-5 pl-4'>123456789123</span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>Batch : <span className='text-c17 font-normal py-5 pl-4'>2025 AL (Revision) </span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>Mobile : <span className='text-c17 font-normal py-5 pl-4'>07188899952</span></div>
          <div className='px-4 py-4 text-nv18 font-semibold'>Email : <span className='text-c17 font-normal py-5 pl-4'>bsacadewmy@gmail.com</span></div>

          <div className='px-4 py-4 text-nv18 font-semibold'>Registered Date : <span className='text-c17 font-normal py-5 pl-4'>2024/07/10</span></div>
          <button className='mx-4 px-5 py-3 bg-blue-600 text-white rounded-xl my-4 hover:scale-105 duration-300' onClick={changer}>Change Password</button>
        </div>
        <div className={`${!change && "scale-0" && "hidden"} bg-white rounded-xl w-full h-auto my-5 duration-300 px-3`}>

          <table className=' w-full'>
            <tr>
              <td className='px-4 py-4 text-nv18 font-semibold'>User ID : </td>
              <td><input type="text" className='w-full px-2 py-3 border-b border-black'/></td>
            </tr>
            <tr>
              <td className='px-4 py-4 text-nv18 font-semibold'>Current Password : </td>
              <td><input type="password" className='w-full px-2 py-3 border-b border-black'/></td>
            </tr>
            <tr>
              <td className='px-4 py-4 text-nv18 font-semibold'>New Password : </td>
              <td><input type="password" className='w-full px-2 py-3 border-b border-black'/></td>
            </tr>
            <tr>
              <td className='px-4 py-4 text-nv18 font-semibold'>Confirm Password : </td>
              <td><input type="password" className='w-full px-2 py-3 border-b border-black'/></td>
            </tr>

          </table>
          

          <button className='mx-4 px-5 py-3 bg-blue-600 text-white rounded-xl my-4 hover:scale-105 duration-300' >Submit Changers</button>
        </div>
      </div>

    </div>
  )
}
