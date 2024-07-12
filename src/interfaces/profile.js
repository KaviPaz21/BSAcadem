import React from 'react'
import { element } from 'three/examples/jsm/nodes/Nodes.js'

export default function Profile() {
  return (
    <div className='grid gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 sm:mx-4 lg:mx-12 xl:mx-20 my-12'>
      <div className='bg-slate-100 px-4 py-5 rounded-xl mx-4'>
        <div className='w-40 h-40 rounded-full bg-slate-400 float-left '></div>
        <div className='py-12 font-semibold text-3xl'>Pasindu Kavinda Bandara</div>

        <div className='mt-8 text-left text-2xl px-4 h-full  '>
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
                  <tr className='text-c17 text-center bg-white text-gray-700'>
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

    </div>
  )
}
