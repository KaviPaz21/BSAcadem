import React, { useState } from 'react'

export default function Module({ no, modulesetter }) {
    const count = 95
    const [benchmark, setbench] = useState(70)
    const [quizp, setqp] = useState(50)
    const [modulep, setmp] = useState(50)
    const [targetp, settarp] = useState(50)

    const module = no - 1000

    const qwidth = 60
    const twidth = 80
    const tarwidth = 100

    const modules = ["Measurements", "Mechanics", "Oscillations and Waves", "Thermal Physics", "Gravitational Field", "Electrostatic field", "Magnetic Field", "Current Electricity", "Electronics", "Mechanical Properties of Matter", "Matter and Radiation"]

    const [active, setactive] = useState(1)
    return (
        <div>
            <div className={`font-csans text-xl pl-16 py-4 w-full bg-white absolute top-5 shadow-md shadow-gray-400`}>
                <div>My Courses &#10148; {modules[module]} </div>
                <div className='absolute top-2 right-10 py-2 bg-blue-600 px-9 text-white hover:scale-105 duration-200 rounded-lg cursor-pointer' onClick={() => modulesetter()}>back</div>
            </div>
            <div className='flex'>
                <div className='mr-5 w-cw20 bg-blue-500 rounded-lg h-c80 '>
                    <div className={`${active === 1 ? "bg-blue-700" : "bg-blue-500"} subtp text-lg font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(1)}>Lesson Peformance</div>
                    <div className={`${active === 2 ? "bg-blue-700" : "bg-blue-500"} subtp text-lg font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(2)}>PDF Documents</div>
                    <div className={`${active === 3 ? "bg-blue-700" : "bg-blue-500"} subtp text-lg font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(3)}>Recording Links</div>
                    <div className={`${active === 4 ? "bg-blue-700" : "bg-blue-500"} subtp text-lg font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(4)}>Practicals</div>

                    <div className={`${active === 5 ? "bg-blue-700" : "bg-blue-500"} subtp text-lg font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(5)}>Forms</div>
                    <div className={` subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => modulesetter()}>Back</div>
                </div>
                <div className='bg-slate-100 w-cw80 rounded-lg py-5 px-12 '>



                    {//Lesson Peformance
                    }
                    <div className={`${active === 1 ? "block" : "hidden"} `}>
                        <div className='grid grid-cols-2 mt-5 gap-10'>
                            <div className={`${count > benchmark ? "bg-green-600" : "bg-red-500"} px-4 py-4  text-white rounded-lg`}>
                                <div className='text-left text-2xl font-csans'>Overall Lesson Peformance</div>
                                <div className='text-center py-5 text-8xl font-semibold '>{count}%</div>
                            </div>
                            <div className='bg-blue-100 p-5 rounded-lg'>
                                <div className='text-left text-2xl font-csans'>Overview</div>
                                <div className='pl-12 py-5'>
                                    <div className=''>Avarage Quiz Peformace</div>
                                    <div style={{ width: `${qwidth}%` }} className='bg-black  h-3 rounded-full shadow shadow-black w-full mt-2 mb-4'></div>
                                    <div className=''>Module Test Peformace</div>
                                    <div style={{ width: `${twidth}%` }} className='bg-black  h-3 rounded-full shadow shadow-black w-full mt-2 mb-4'></div>
                                    <div className=''>Target Question Peformace</div>
                                    <div style={{ width: `${tarwidth}%` }} className='bg-black  h-3 rounded-full shadow shadow-black w-full mt-2 mb-4'></div>
                                    <div className=''></div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                        <div className='mt-5 p-5 bg-blue-100 rounded-lg'>
                            <div className='text-left text-2xl font-csans'>Quizes</div>
                            <div className='pt-10'>
                                <table className='w-full'>
                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Total Quizes</td>
                                        <td className=' text-center text-2xl font-bold'>09</td>
                                    </tr>

                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Answered Quizes</td>
                                        <td className=' text-center'>06</td>
                                    </tr>
                                    <tr className='text-lg py-2 bg-green-300'>
                                        <td className='py-2 px-12'>Available Quizes</td>
                                        <td className=' text-center'>03</td>
                                    </tr>

                                </table>
                            </div>
                        </div>

                        <div className='mt-5 p-5 bg-blue-100 rounded-lg'>
                            <div className='text-left text-2xl font-csans'>Module Tests</div>
                            <div className='pt-10'>
                                <table className='w-full'>
                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Total tests</td>
                                        <td className=' text-center text-2xl font-bold'>04</td>
                                    </tr>

                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Answered tests</td>
                                        <td className=' text-center'>03</td>
                                    </tr>
                                    <tr className='text-lg py-2 bg-green-300'>
                                        <td className='py-2 px-12'>Available tests</td>
                                        <td className=' text-center'>01</td>
                                    </tr>

                                </table>
                            </div>
                        </div>

                        <div className='mt-5 p-5 bg-blue-100 rounded-lg'>
                            <div className='text-left text-2xl font-csans'>Target Questions</div>
                            <div className='pt-10'>
                                <table className='w-full'>
                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Total Questions</td>
                                        <td className=' text-center text-2xl font-bold'>02</td>
                                    </tr>

                                    <tr className='text-lg py-2'>
                                        <td className='py-2 px-12'>Answered Questions</td>
                                        <td className=' text-center'>02</td>
                                    </tr>
                                    <tr className='text-lg py-2 bg-green-300'>
                                        <td className='py-2 px-12'>Available Questions</td>
                                        <td className=' text-center'>00</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        </div>

                    </div>




                    {//for displaing pdf Documents
                    }
                    <div className={`${active === 2 ? "block" : "hidden"}`}>
                        <table className='w-full'>
                            <tr className='text-black font-bold bg-slate-300 rounded-lg'>
                                <td className='px-5 py-5'>PDF Name</td>
                                <td className='px-5'>Submitted Date</td>
                                <td className='px-5'>Action</td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>Download</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>Download</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>Download</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>Download</button></td>
                            </tr>


                        </table>

                    </div>




                    {//for displaing Reciording Links
                    }
                    <div className={`${active === 3 ? "block" : "hidden"}`}>
                        <table className='w-full'>
                            <tr className='text-black font-bold bg-slate-300 rounded-lg'>
                                <td className='px-5 py-5'>Video Name</td>
                                <td className='px-5'>Submitted Date</td>
                                <td className='px-5'>Duration</td>
                                <td className='px-5'>Action</td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'>25 min</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View &#8250;</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'>25 min</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View &#8250;</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'>25 min</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View &#8250;</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Lesson {modules[module]} for week 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'>25 min</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View &#8250;</button></td>
                            </tr>


                        </table>

                    </div>






                    {//for displaing pdf practicals
                    }
                    <div className={`${active === 4 ? "block" : "hidden"}`}>
                        <table className='w-full'>
                            <tr className='text-black font-bold bg-slate-300 rounded-lg'>
                                <td className='px-5 py-5'>Practical Name</td>
                                <td className='px-5'>Submitted Date</td>
                                <td className='px-5'>Action</td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Practical 01</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Practical 02</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Practical 03</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View</button></td>
                            </tr>
                            <tr className='py-5'>
                                <td className='px-5 py-4'>Practical 04</td>
                                <td className='px-5'>2024/09/12</td>
                                <td className='px-5'><button className='py-2 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-200'>View</button></td>
                            </tr>


                        </table>

                    </div>






                    {//for displaing Forms
                    }
                    <div className={`${active === 5 ? "block" : "hidden"}`}>
                        
                        <div className='bg-blue-100 px-5 py-5'>
                            <div className='text-2xl font-csans font-semibold'>Submit Your Question</div>
                            <input type="text" className='mt-5 w-full py-4 px-12 rounded-lg' placeholder=' type question here' />
                            <div className='mt-5 py-2 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-300 w-fit text-white'>POST</div>
                        </div>
                        <div className='w-full h-c500 mt-5 bg-blue-100 overflow-auto rounded-lg p-5'>
                            <table className='w-full'>
                            <tr className='bg-gray-300'>
                                    <td className='py-4 text-xl font-bold text-center'>Question</td>
                                    <td className='py-4 text-xl font-bold'> Answer</td>
                                    <td className='py-4 text-xl font-bold text-center'>Add Answer</td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>

                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                                <tr>
                                    <td className='py-4'>What is the measures and the equation of pressur</td>
                                    <td> pressure = force / area</td>
                                    <td><div className=' py-2 px-5 text-white bg-blue-600 rounded-lg hover:scale-105 duration-300 text-center'>Add Answer</div></td>
                                </tr>
                            </table>

                        </div>

                    </div>
                </div>





                

            </div>
        </div>
    )
}
