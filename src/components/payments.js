import React from 'react'
import '../styles/payments.css'

export default function Payments({ root }) {
    return (
        <div>
            <div className='paytopic font-csans text-5xl py-5 w-full pl-16 bg-white shadow-lg shadow-gray-200'>Payments & Activations</div>
            <div className='paydetails mt-5 w-full bg-slate-100 rounded-lg'>
                <div className='payhistry m-3 bg-blue-100 rounded-lg'>
                    <div className=' bg-blue-600 text-white text-3xl py-3 px-16 rounded-lg'>Payment Histry </div>
                    <div className='grid grid-cols-2 py-5 px-10 text-lg font-semibold'>
                        <div>Index : 261001</div>
                        <div>Name : Kavinda</div>
                    </div>
                    <div className='h-c600 overflow-auto'>
                        <table className='w-full'>
                            <tr className='bg-gray-300 font-semibold'>
                                <td className='py-4 px-5'>Month</td>
                                <td className='py-4 px-5'>Institute</td>
                                <td className='py-4 px-5'>Amount</td>
                                <td className='py-4 px-5'>Status</td>
                            </tr>
                            {(() => {
                                const arr = [];
                                for (let i = 1; i < 13; i++) {
                                    arr.push(
                                        <tr>
                                            <td className='py-4 px-5'>{i}</td>
                                            <td className='py-4 px-5'>Sigma</td>
                                            <td className='py-4 px-5'>3000/-</td>
                                            <td className='py-4 px-5 text-green-700 font-semibold'>PAID</td>
                                        </tr>
                                    )
                                }
                                return arr
                            })()}

                        </table>
                    </div>
                </div>
                <div className='lmsactive bg-blue-100 mt-3 rounded-lg'>
                    <div className='bg-blue-600 text-white w-full rounded-lg  py-4 px-12 text-3xl'>LMS Activations</div>

                    <div className='my-7 px-12 grid grid-cols-2 text-xl font-semibold'>
                        <div>
                            <div>Current Month</div>
                            <div>Activation Status</div>
                        </div>
                        <div>
                            <div>2024- October</div>
                            <div>Activated</div>
                        </div>
                    </div>



                    <div className='mt-5'>
                        <div className=' bg-blue-600 text-white text-3xl py-3 px-16 rounded-lg'>Contact Administrator</div>
                        <div className='mx-5 mt-5'>
                            <div className='py-3'>
                                please make sure to contact an administrator due to a serious concern and keep wait until a responsible person solve your issue or wait until contact you. <br />Thank You!
                            </div>
                            <textarea name="" className='w-full h-40 text-lg py-2 px-8' placeholder='Write your concern' id=""></textarea>

                            <div className=' mt-2 py-2 px-12 w-fit bg-blue-700 text-white text-lg rounded-lg hover:scale-105 duration-300'>submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
