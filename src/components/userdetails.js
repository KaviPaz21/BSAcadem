import React from 'react'

export default function Userdetails() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-10 w-full my-10'>
        <div className='w-full bg-slate-100 rounded-lg' >
          <div className='bg-blue-600 text-white w-full rounded-lg  py-4 px-12 text-3xl'>User Info</div>
          <div className='h-c750 overflow-auto'>
            <table className='w-full mt-10'>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Name with Initials</td>
                <td className='py-4 text-lg px-10  font-csans'>K Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Full Name</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Email Address</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Gender</td>
                <td className='py-4 text-lg px-10  font-csans'></td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Birthday</td>
                <td className='py-4 text-lg px-10  font-csans'></td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>School</td>
                <td className='py-4 text-lg px-10  font-csans'></td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>A/L Year</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Home Address</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>NIC</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Class Hall Name</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>
              <tr>
                <td className='py-4 text-lg px-10 font-semibold font-csans'>Phone Number</td>
                <td className='py-4 text-lg px-10  font-csans'>Kavinda Bandara</td>
              </tr>

            </table>
            <div className='px-5 text-red-700'><i>If you need to update/ change these info, please contact site administrator</i></div>
          </div>
        </div>



        <div className='w-full bg-slate-100 rounded-lg'>
          <div className='bg-blue-600 text-white w-full rounded-lg  py-4 px-12 text-3xl'>Password Change</div>
          <div className='mx-5'>
            <table className='w-full mt-10 '>
              <tr>
                <td className='pl-16 py-5 text-lg font-semibold font-csans'>Currnet Passoword</td>
                <td> <input type="password" className='w-full py-4 px-10' placeholder='enter your current password' /></td>
              </tr>
              <tr>
                <td className='pl-16 py-5 text-lg font-semibold font-csans'>New Passoword</td>
                <td> <input type="password" className='w-full py-4 px-10' placeholder='enter your new password'/></td>
              </tr>
              <tr>
                <td className='pl-16 py-5 text-lg font-semibold font-csans'>Confirm Passowrd</td>
                <td> <input type="password" className='w-full py-4 px-10' placeholder='retype your new password' /></td>
              </tr>

              <tr>
                <td className='pl-16 py-5 text-lg font-semibold font-csans'></td>
                <td> <div className='py-2 mt-5 px-5 text-white bg-blue-600 w-fit rounded-lg hover:scale-105 duration-300 cursor-pointer'>Submit</div></td>
              </tr>
            </table>
          </div>

          <div className='bg-blue-600 text-white w-full rounded-lg  py-4 px-12 text-3xl mt-5'>Overview</div>
          <div className='mx-5'>
            <table className='w-full mt-5'>
              <tr className='text-lg font-semibold font-csans'>
                <td>Teacher</td>
                <td>Mr. Bandara Senarathne</td>
              </tr>
              <tr className='text-lg font-semibold font-csans'>
                <td>Site Administrator</td>
                <td>Mr. Bandara Senarathne / Mr. Pasindu Kavinda</td>
              </tr>
              <tr className='text-lg font-semibold font-csans'>
                <td>Web</td>
                <td className='text-blue-600'><a href="">https://bsacademy.netlify.app</a></td>
              </tr>


            </table>
            <div className='w-full bg-black py-5 mt-5 text-center text-white'>
              <div>copyright 2024 &#169; all rights reserved!</div>
              <div className='py-2 font-bold text-blue-200'>Developer <a href="https://pasindukavinda.netlify.app">&#9830; Pasindu Kavinda</a></div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
