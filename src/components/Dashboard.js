import React from 'react'
import '../styles/dashboard.css'


export default function Dashboard() {
  const date = new Date();
  const cdate = date.toLocaleDateString()
  return (
    <div className='relative w-cw98 py-5 mx-2'>

      <div className="justify-center mt-5">
        <div className='name_basics grid grid-cols-2 gap-5 px-12 w-full bg-gray-100 rounded-lg'>
          <div>
            <div className='pt-5 text-2xl welcome'>Welcome User....</div>
            <div className='pb-5 pt-2 text-5xl uname'>Pasindu Kavinda Bandara</div>
          </div>
          <div className='my-5'>
            <div className='text-center text-xl bg-gray-300 py-2 rounded-md mb-3'>Date - {cdate}</div>
            <div className='text-center text-xl bg-gray-300 py-2 rounded-md mb-3'>Sigma - Wellawaya</div>
            <div className='text-center text-xl bg-gray-300 py-2 rounded-md mb-3'>Batch - 2026 A/L</div>
          </div>
        </div>


        <div className='px-12 w-full bg-gray-100 rounded-lg mt-5'>


          <div className='dash_sec_two grid grid-cols-2 gap-5 '>
            <div className='works'>
              <div className='py-5 text-2xl'>TOP Priority Works</div>
              <div className='text-left text-xl bg-blue-300 py-2 px-4 rounded-md mb-3 h-24'>
                <div className='text-normal '>Task 01</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 15
                </div>
              </div>
              <div className='text-left px-4 text-xl bg-blue-200 py-2 rounded-md mb-3 h-24'>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>
              </div>
            </div>

            <div className='announcements'>
              <div className='py-5 text-2xl'>Announcements</div>
              <div className='text-left px-4 text-xl bg-blue-200 py-2 rounded-md mb-3 h-52 overflow-auto'>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>
                <div className='text-normal '>Task 02</div>
                <div className='font-semibold text-lg pl-5'>
                  Compleate Quiz 16
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="row ">

      </div>

      <div className="relative mt-5 bg-gray-100 row text-center w-full rounded-lg">
        <div className='pt-5 font-semibold font-csans text-5xl'>Bandara Senarathne Academy</div>
        <div className='pt-2 font-semibold text-xl'>☎ +94 71 555 5555</div>
        <div className='pt-2 font-semibold text-xl'>🌍 <a href="https://bsacademy.netlify.app/">https://bsacademy.netlify.app/</a></div>

        <div className='hallnames  flex justify-center py-5'>
          <div className='hall py-2 mx-5 my-3  w-80 bg-blue-700 text-white rounded-md'>
            <div className='text-2xl font-semibold'>Expertexion</div>
            <div>▼ Kesbewa</div>
          </div>
          <div className='hall py-2 mx-5 my-3  w-80 bg-blue-700 text-white rounded-md'>
            <div className='text-2xl font-semibold'>Sigma</div>
            <div>▼ Wellawaya</div>
          </div>
          <div className='hall py-2 mx-5 my-3  w-80 bg-blue-700 text-white rounded-md'>
            <div className='text-2xl font-semibold'>Minacra</div>
            <div>▼ Hanwella</div>
          </div>
        </div>
      </div>

    </div>
  )
}
