import React, { useState } from 'react'

import logo from '../images/logo.png'

export default function Home() {
  const getCurrentMonth = () => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date();
    return monthNames[date.getMonth()];
  };
  const [activation, setactivation] = useState("Not Activated")


  return (
    <div className='mt-24 mx-4'>
      <div className='text-left font-serif sm:text-center lg:text-left xl:text-left xl:mx-36 lg:mx-12 sm:mx-0'>
        <span className='text-xl'>Wlecome Back </span>
        <span className='text-2xl '> Pasindu Kavinda...</span>
      </div>
      <div className='mt-5  bg-slate-100 xl:mx-32 lg:mx-12 sm:mx-4 rounded-2xl py-8'>
        <img src={logo} alt="logo" className='relative left-1/2 -translate-x-1/2 rounded-xl'/>
        <div className='py-4 text-5xl font-semibold'>Bandara Senarathne</div>
        <div className='grid gap-3 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-4'>
          <div className='bg-slate-300 py-4 rounded-xl'>
                <div className='text-3xl font-bold'>SIGMA</div>
                <div className='text-xl font-semibold'>Wallawaya</div>
          </div>
          <div className='bg-slate-300 py-4 rounded-xl'>
                <div className='text-3xl font-bold'>EXPERTEXION</div>
                <div className='text-xl font-semibold'>Kesbewa</div>
          </div>
          <div className='bg-slate-300 py-4 rounded-xl'>
                <div className='text-3xl font-bold'>SAHASTHRA</div>
                <div className='text-xl font-semibold'>Pilliyandala</div>
          </div>

        </div>

      </div>

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-12 sm:mx-2 xl:mx-32'>
        <div className='bg-blue-600 rounded-xl py-4 '>
          <div className='bg-blue-600 py-6 text-white text-3xl '>Announcements</div>
          <div className=' px-8 text-white py-4 h-72 overflow-auto'>
            <div className='text-left pt-8 '>
              dummy announcement 01. this is a just dummy announcement for see the contetnts
            </div>
            <div className='text-left font-semibold pt-4'>published By: S. Senarathna</div>
            <div className='text-left font-semibold pt-1'>Date : 2024.07.14</div>
            <hr />

            <div className='text-left pt-8 '>
              dummy announcement 01. this is a just dummy announcement for see the contetnts
            </div>
            <div className='text-left font-semibold pt-4'>published By: S. Senarathna</div>
            <div className='text-left font-semibold pt-1'>Date : 2024.07.14</div>
            <hr />
          </div>
        </div>

        <div className='bg-blue-600 rounded-xl py-4 text-white px-6 '>
          <div className='bg-blue-600 pt-6 text-white text-3xl '>User</div>

          <div className='text-center  my-5 mx-4 text-white overflow-auto'>
            <div className='text-xl py-2'>Name : Pasindu Kavinda Bandara</div>
            <div className='font-semibol xl:text-xl sm:text-sm py-2'>User ID : 200185455985</div>
            <div className='py-2  xl:text-xl sm:text-sm'>Current Month :{getCurrentMonth()}</div>
            <div className='text-sm py-2' >Activation Status for this Month
              <div className={`${activation === "Activated" ? "text-green-600" : "text-red-600"} font-semibold sm:text-sm xl:text-xl`}> {activation}</div></div>
            <div className='text-sm pt-5'>Contacts</div>
            <div className='text-xl font-semibold'>077- 123-1234</div>
          </div>


        </div>

        <div className='bg-blue-600 rounded-xl py-4 '>
          <div className='bg-blue-600 py-6 text-white text-3xl '>Upcoming Events</div>

          <div className=' px-8 text-white py-4 h-72 overflow-auto'>
            <div className='text-2xl text-left pt-4'>A Quiz</div>
            <div className='text-left pt-4 '>
              A quiz has been scheduled on 2024/07/25 at 15.30 . it covers up to measures
            </div>
            <div className='text-left font-semibold pt-1'>Published Date : 2024.07.14</div>
            <hr />

            <div className='text-2xl text-left pt-4'>A Test Paper</div>
            <div className='text-left pt-4 '>
              A test has been scheduled on 2024/08/02 at 12.30 . it covers up to measures
            </div>
            <div className='text-left font-semibold pt-4'>published By: S. Senarathna</div>
            <div className='text-left font-semibold pt-1'>Date : 2024.07.14</div>
            <hr />
          </div>

        </div>


      </div>
    </div>
  )
}
