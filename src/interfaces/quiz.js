import React, { useState } from 'react'
import Header from '../components/header'

export default function Quiz() {
    const [active, setactive] = useState(1)
    const len = 5

    const [all, setall] = useState(true)
    const [submissions, setsubmission] = useState(false)
    const [marks, setmarks] = useState(false)

    const activate = (k) => {
        setactive(k)

        setall(false)
        setsubmission(false)
        setmarks(false)
        if (k === 1) { setall(true) }
        else if (k === 2) { setsubmission(true) }
        else if (k === 3) { setmarks(true) }
    }
    return (
        <div>
            <div className='xl:mx-16 lg:mx-12 sm:mx-2 mt-24 '>
               
                <div className='bg-blue-600 text-white mt-4 py-2 rounded-xl'>
                    <span className={`${active === 1 ? "pb-4 " : ""} sm:px-1 lg:px-4 xl:px-8 text-c17 font-semibold bg-blue-600 rounded-xl duration-300 cursor-pointer`} onClick={() => activate(1)}>All Quizes</span>
                    <span className={`${active === 2 ? "pb-4 " : ""} sm:px-1 lg:px-4 xl:px-8 text-c17 font-semibold bg-blue-600 rounded-xl duration-300 cursor-pointer`} onClick={() => activate(2)}>Submissions</span>
                    <span className={`${active === 3 ? "pb-4 " : ""} sm:px-1 lg:px-4 xl:px-8 text-c17 font-semibold bg-blue-600 rounded-xl duration-300 cursor-pointer`} onClick={() => activate(3)}>Marks and results</span>
                </div>
                <div className='mt-8 '>
                    <div className={`${!all && "scale-0"} duration-300 absolute bg-slate-100 w-cw93 py-5 px-5 rounded-xl`}>
                        <div className='text-left text-xl font-semibold'>All Quizes view</div>
                        <div className=' overflow-auto h-auto'>
                            <table className='w-full mt-4'>
                                <tr className='bg-blue-600 text-white '>
                                    <td className='py-4'>No</td>
                                    <td>Quiz ID</td>
                                    <td>Quizes</td>
                                    <td>Duration</td>
                                    <td>Dead Line</td>
                                    <td>status</td>
                                    <td>Action</td>
                                </tr>
                                {(() => {
                                    const elements = []
                                    let id = 1000
                                    for (let i = 0; i < len; i++) {
                                        elements.push(
                                            <tr className='border-b border-gray-400'>
                                                <td className='py-6'>{i + 1}</td>
                                                <td className='py-4'>{id + 1}</td>
                                                <td className='py-4'>15</td>
                                                <td className='py-4'>30 min</td>
                                                <td className='py-4'>2024/07/25</td>
                                                <td className='py-4'>Not compleated</td>
                                                <td className='py-4'><button className='bg-green-600 text-white px-4 py2 rounded-xl cursor-pointer hover:scale-105 duration-300'>Start</button></td>
                                            </tr>
                                        )
                                    }
                                    return elements
                                })()}


                            </table>
                        </div>
                    </div>
                    <div className={`${!submissions && "scale-0"} duration-300 absolute bg-slate-100 w-cw93 py-5 px-5 rounded-xl`}>
                        <div className='text-left text-xl font-semibold'>Add Submissions</div>

                        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-6'>

                            {(()=>{
                                let content = []
                                for (let i =0; i<10;i++){
                                    content.push(
                                        <div className='bg-white rounded-xl hover:scale-105 duration-300 px-4'>
                                <div className='font-semibold text-2xl text-center py-4'>Assignment  {i+1}</div>
                                <div className=' py-2 font-sans text-c17 text-left'>Instructions:</div>
                                <div className='text-left ml-4 w-full'>
                                    all instruction goes here all instruction goes here
                                </div>
                                <div className='text-center font-semibold'> Due Date : 2024/07/29</div>
                                <div className='font-semibold text-red-600 text-center'>Not Finished</div>

                                <button className='text-left m-5 py-2 px-4  text-white bg-blue-600 font-semibold hover:scale-105 duration-300 cursor-pointer rounded-xl'>Add Submission</button>
                            </div>
                                    )
                                }
                                return content
                            })()}
                            
                        </div>
                    </div>
                    <div className={`${!marks && "scale-0"} duration-300 absolute bg-slate-100 w-cw93 py-5 px-5 rounded-xl`}>
                        <div className='text-left text-xl font-semibold'>View Marks</div>



                        <div className=' overflow-auto h-auto'>
                            <table className='w-full mt-4'>
                                <tr className='bg-blue-600 text-white '>
                                    <td className='py-4'>No</td>
                                    <td>Quiz ID</td>
                                    <td>Enrolled Date</td>
                                    <td>Duration</td>
                                    <td>Marks</td>
                                    <td>status</td>
                                    
                                </tr>
                                {(() => {
                                    const elements = []
                                    let id = 1000
                                    let score = 50
                                    for (let i = 0; i < len; i++) {
                                        score=score+5
                                        elements.push(
                                            <tr className='border-b border-gray-400'>
                                                <td className='py-6'>{i + 1}</td>
                                                <td className='py-4'>{id + 1}</td>
                                                <td className='py-4'>2024-06-30</td>
                                                <td className='py-4'>30 min</td>
                                                <td className='py-4'>{score}</td>
                                                <td className='py-4 text-green-600 font-semibold text-xl'>pass</td>
                                                
                                            </tr>
                                        )
                                    }
                                    return elements
                                })()}


                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
