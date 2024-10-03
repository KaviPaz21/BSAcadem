import React from 'react'

export default function Submission() {
    return (
        <div>
            <div className='font-csans text-5xl py-5 w-full pl-16 bg-white shadow-lg shadow-gray-200'>Add Submissions</div>

            <div className='mt-2 py-3 h-ch800 overflow-auto'>

                {(() => {
                    const arr = []
                    for (let i = 0; i < 5; i++) {
                        arr.push(
                            <div className='py-3 px-12 w-full bg-blue-100 rounded-lg mt-5'>
                                <div className='font-csans text-3xl'>Module Test Submission Mechanics</div>
                                <div className='grid grid-cols-2 pt-5 gap-80'>

                                    <div className='pl-7'>
                                    <div className='text-xl py-2 font-bold'>Module Name : Mechanics</div>
                                        <div className='text-xl py-2 font-bold'>Conditions</div>
                                        <div className='pl-16'>
                                            <ul>
                                                <li>@ Submit the answers for the paper that available on tests at quize window within the dead line </li>
                                                <li>@ You need to add hand written documents in PDF form</li>
                                                <li>@ Make Sure your submitted pdf is clear and readable</li>
                                            </ul>
                                        </div>
                                        <div className='text-xl py-2 font-bold'>Deadline - 2024-09-29 12.00 PM</div>
                                        <div className='text-xl py-2 font-bold text-red-600'>Submission Status - Not Submitted</div>
                                    </div>
                                    <div className=''>
                                        <input type="file" className='mt-5 mr-5 py-3 text-center bg-blue-600 w-52 text-white rounded-lg hover:scale-105 duration-300' />

                                        <div className='mt-5 mr-5 py-3 px-5 bg-green-600 w-52 text-center text-white rounded-lg hover:scale-105 duration-300 '>Save and Send</div>
                                    </div>


                                </div>
                            </div>

                        )
                    }
                    return arr
                })()}

            </div>
        </div>
    )
}
