import React, { useState } from 'react'
import '../styles/quiz.css'

export default function Gradings() {

    const [active, setactive] = useState(1)
    return (
        <div>

            <div className='w-full bg-blue-600 text-center text-white rounded-lg'>
                <div className={`${active === 1 ? "bg-blue-800" : "bg-blue-600"} px-12 py-3 cursor-pointer inline-block hover:bg-blue-700 duration-200`} onClick={() => setactive(1)}>Quiz Marks</div>
                <div className={`${active === 2 ? "bg-blue-800" : "bg-blue-600"} px-12 py-3 cursor-pointer inline-block hover:bg-blue-700 duration-200`} onClick={() => setactive(2)}>Module Test Marks</div>
                <div className={`${active === 3 ? "bg-blue-800" : "bg-blue-600"} px-12 py-3 cursor-pointer inline-block hover:bg-blue-700 duration-200`} onClick={() => setactive(3)}>Target Question Marks</div>
                <div className={`${active === 4 ? "bg-blue-800" : "bg-blue-600"} px-12 py-3 cursor-pointer inline-block hover:bg-blue-700 duration-200`} onClick={() => setactive(4)}>Paper Marks</div>
            </div>

            <div className={`${active === 1 ? "block" : "hidden"}`}>
                <div className='py-5 bg-purple-500 mt-10 grid grid-cols-2 px-12 text-white rounded-lg'>
                    <div className='text-2xl marktopic '>Overall Quiz Marks : </div>
                    <div className='text-3xl text-right'>92%</div>
                </div>
                <div className='h-c500 w-full overflow-auto'>
                    <table className='w-full mt-5'>
                        <tr className='bg-gray-300'>
                            <td className='py-2 px-5 text-left'>Quiz Name</td>
                            <td className='py-2 px-5 '>Quiz ID</td>
                            <td className='py-2 px-5 '>Marks</td>
                        </tr>

                        |{(() => {
                            const arr = []

                            for (let i = 0; i < 6; i++) {
                                arr.push(
                                    <tr className='mt-2'>
                                        <td className='py-2 px-5 text-left'>Module Quiz</td>
                                        <td className='py-2 px-5 '>1001 - {i + 1}</td>
                                        <td className='py-2 px-5 '>{15 * i + 5}%</td>
                                    </tr>
                                )

                            }

                            return arr
                        })()}
                    </table>
                </div>


            </div>






            <div className={`${active === 2 ? "block" : "hidden"}`}>
                <div className='py-5 bg-purple-500 mt-10 grid grid-cols-2 px-12 text-white rounded-lg'>
                    <div className='text-2xl marktopic'>Overall Module Test Marks : </div>
                    <div className='text-3xl text-right'>79%</div>
                </div>
                <div className='h-c500 w-full overflow-auto'>
                    <table className='w-full mt-5'>
                        <tr className='bg-gray-300'>
                            <td className='py-2 px-5 text-left'>Module Test Name</td>
                            <td className='py-2 px-5 '>Module test ID</td>
                            <td className='py-2 px-5 '>Marks</td>
                        </tr>

                        |{(() => {
                            const arr = []

                            for (let i = 0; i < 6; i++) {
                                arr.push(
                                    <tr className='mt-2'>
                                        <td className='py-2 px-5 text-left'>Module test</td>
                                        <td className='py-2 px-5 '>M1001 - {i + 1}</td>
                                        <td className='py-2 px-5 '>{12 * i + 5}%</td>
                                    </tr>
                                )

                            }

                            return arr
                        })()}
                    </table>
                </div>


            </div>





            <div className={`${active === 3 ? "block" : "hidden"}`}>
                <div className='py-5 bg-purple-500 mt-10 grid grid-cols-2 px-12 text-white rounded-lg'>
                    <div className='text-2xl marktopic'>Overall Target Question Marks : </div>
                    <div className='text-3xl text-right'>85%</div>
                </div>
                <div className='h-c500 w-full overflow-auto'>
                    <table className='w-full mt-5'>
                        <tr className='bg-gray-300'>
                            <td className='py-2 px-5 text-left'>Target Question Name</td>
                            <td className='py-2 px-5 '>Target Question ID</td>
                            <td className='py-2 px-5 '>Marks</td>
                        </tr>

                        |{(() => {
                            const arr = []

                            for (let i = 0; i < 6; i++) {
                                arr.push(
                                    <tr className='mt-2'>
                                        <td className='py-2 px-5 text-left'>Target Questions</td>
                                        <td className='py-2 px-5 '>TQ100{i + 1}</td>
                                        <td className='py-2 px-5 '>{14 * i + 5}%</td>
                                    </tr>
                                )

                            }

                            return arr
                        })()}
                    </table>
                </div>


            </div>





            <div className={`${active === 4 ? "block" : "hidden"}`}>
                <div className='py-5 bg-purple-500 mt-10 grid grid-cols-2 px-12 text-white rounded-lg'>
                    <div className='text-2xl marktopic'>Overall Paper Marks : </div>
                    <div className='text-3xl text-right'>74%</div>
                </div>
                <div className='h-c500 w-full overflow-auto'>
                    <table className='w-full mt-5'>
                        <tr className='bg-gray-300'>
                            <td className='py-2 px-5 text-left'>Paper Name</td>
                            <td className='py-2 px-5 '>Paper No</td>
                            <td className='py-2 px-5 '>Marks</td>
                        </tr>

                        |{(() => {
                            const arr = []

                            for (let i = 0; i < 6; i++) {
                                arr.push(
                                    <tr className='mt-2'>
                                        <td className='py-2 px-5 text-left'>Full Paper</td>
                                        <td className='py-2 px-5 '>0{i + 1}</td>
                                        <td className='py-2 px-5 '>{16 * i + 5}%</td>
                                    </tr>
                                )

                            }

                            return arr
                        })()}
                    </table>
                </div>


            </div>
        </div>
    )
}
