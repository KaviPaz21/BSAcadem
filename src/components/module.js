import React, { useState } from 'react'

export default function Module({ no, modulesetter }) {
    const module = no - 1000
    const modules = ["Measurements", "Mechanics", "Oscillations and Waves", "Thermal Physics", "Gravitational Field", "Electrostatic field", "Magnetic Field", "Current Electricity", "Electronics", "Mechanical Properties of Matter", "Matter and Radiation"]
    
    const [active , setactive] = useState(1)
    return (
        <div>
            <div className={`font-csans text-xl pl-16 py-4 w-full bg-white absolute top-5 shadow-md shadow-gray-400`}>
                <div>My Courses &#10148; {modules[module]} </div>
                <div className='absolute top-2 right-10 py-2 bg-blue-600 px-9 text-white hover:scale-105 duration-200 rounded-lg cursor-pointer' onClick={() => modulesetter()}>back</div>
            </div>
            <div className='flex'>
                <div className='mr-5 w-cw20 bg-blue-500 rounded-lg h-c80 '>
                    <div className={`${active === 1 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={()=>setactive(1)}>PDF Documents</div>
                    <div className={`${active === 2 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={()=>setactive(2)}>Recording Links</div>
                    <div className={`${active === 3 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={()=>setactive(3)}>Practicals</div>
                    <div className={`${active === 4 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={()=>setactive(4)}>Lesson Peformance</div>
                    <div className={`${active === 5 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={()=>setactive(5)}>Forms</div>
                </div>
                <div className='bg-slate-100 w-cw80 rounded-lg py-5 px-12'>
                    <div className={`${active ===1 ? "block":"hidden"}`}>
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
                </div>

            </div>
        </div>
    )
}
