import React, { useState } from 'react'
import Gradings from './gradings'



export default function Quizs() {
    const [active, setactive] = useState(1)
    return (
        <div>
            <div className='font-csans text-5xl py-5 w-full pl-16 bg-white shadow-lg shadow-gray-200'>Quizes and Tests</div>
            <div className='flex mt-5' >
                <div className='mr-5 w-cw20 bg-blue-500 rounded-lg h-c80 '>
                    <div className={`${active === 1 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(1)}>Quizes</div>
                    <div className={`${active === 2 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(2)}>Module Tests</div>
                    <div className={`${active === 3 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(3)}>Target Questions</div>
                    <div className={`${active === 4 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(4)}>Papers</div>

                    <div className={`${active === 5 ? "bg-blue-700" : "bg-blue-500"} subtp text-xl font-csans text-white py-5 hover:bg-blue-600 px-12 rounded-lg duration-300`} onClick={() => setactive(5)}>Marks & Grades</div>

                </div>

                <div className='w-cw80 h-c750 bg-slate-100 rounded-lg'>

                    <div className={`${active === 1 ? "block" : "hidden"} px-2 py-4 h-c400`}>
                        <div className='overflow-auto h-c400'>
                            {(() => {
                                const arr = []
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                        <div key={i} className='bg-blue-100 px-10 py-5 rounded-lg mb-5'>
                                            <div className='font-csans text-2xl'>Title : Module Quiz</div>
                                            <div className='grid grid-cols-3'>
                                                <div>
                                                    <div className='font-bold text-xl pt-5'>Coverings :</div>
                                                    <div className='pl-12'>
                                                        <div>Try to answer all Questions</div>
                                                        <div>Only one Attempt allowed</div>
                                                    </div>
                                                </div>
                                                <div className='pt-5'>
                                                    <div className='pt-3 font-bold'>QUIZ ID : 1001-{i + 1}</div>
                                                    <div>Total Questions  : 20</div>
                                                    <div>Time Allowed : 1hr</div>
                                                    <div className='text-red-600'>Status : Not Completed</div>
                                                </div>
                                                <div>
                                                    <div className='py-2 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-300 w-fit text-white mt-10'>
                                                        Answer Quiz
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return arr
                            })()}
                        </div>
                    </div>







                    <div className={`${active === 2 ? "block" : "hidden"} px-2 py-2 h-c400 ove`}>
                        <div className='py-2 px-2 grid grid-cols-2 bg-blue-600 rounded-lg'>
                            <div className='text-xl text-white px-12 py-5'>Select Your Module Number</div>
                            <div className='text-xl text-white  px-10 py-5'>
                                <select name="cars" id="cars" className='bg-blue-500 py-1 px-5 rounded-lg'>
                                    <option value="volvo">Lesson 01</option>
                                    <option value="volvo">Lesson 02</option>
                                    <option value="volvo">Lesson 03</option>
                                    <option value="volvo">Lesson 04</option>
                                    <option value="volvo">Lesson 05</option>
                                    <option value="volvo">Lesson 06</option>
                                    <option value="volvo">Lesson 07</option>
                                    <option value="volvo">Lesson 08</option>
                                    <option value="volvo">Lesson 09</option>
                                    <option value="volvo">Lesson 10</option>
                                    <option value="volvo">Lesson 11</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-5 h-c600 overflow-auto'>
                            {(() => {
                                const arr = []
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                        <div className='mb-5 w-full px-2 py-4 rounded-lg bg-blue-100 h-c700 overflow-auto'>
                                            <div className='text-xl font-bold'>Module Test ID : M1001-1</div>
                                            <div className='grid grid-cols-2'>
                                                <div className='pl-12 pt-5'>
                                                    <div className='font-semibold text-lg'>Instriuctions.</div>
                                                    <div> - Answer in a Seperate paper clearly.</div>
                                                    <div> - on that paper clearly state your index no, name , a/l year and hall location</div>
                                                    <div> - using a scannar or your mobile and create a pdf file of that answered file</div>
                                                    <div> - then upload it into corresponding Upload link at ADD SUBMISSION page</div>
                                                </div>

                                                <div className='text-lg text-white py-2 px-10 bg-blue-600 rounded-lg hover:scale-105 duration-300 w-fit h-fit'>Download Paper</div>

                                            </div>
                                        </div>
                                    )
                                }
                                return arr
                            })()}

                        </div>

                    </div>







                    <div className={`${active === 3 ? "block" : "hidden"} px-2 py-2 h-c400 ove`}>
                        <div className='py-2 px-2 grid grid-cols-2 bg-blue-600 rounded-lg'>
                            <div className='text-xl text-white px-12 py-5'>Select Your Module Number</div>
                            <div className='text-xl text-white  px-10 py-5'>
                                <select name="cars" id="cars" className='bg-blue-500 py-1 px-5 rounded-lg'>
                                    <option value="volvo">Lesson 01</option>
                                    <option value="volvo">Lesson 02</option>
                                    <option value="volvo">Lesson 03</option>
                                    <option value="volvo">Lesson 04</option>
                                    <option value="volvo">Lesson 05</option>
                                    <option value="volvo">Lesson 06</option>
                                    <option value="volvo">Lesson 07</option>
                                    <option value="volvo">Lesson 08</option>
                                    <option value="volvo">Lesson 09</option>
                                    <option value="volvo">Lesson 10</option>
                                    <option value="volvo">Lesson 11</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-5 h-c600 overflow-auto'>
                            {(() => {
                                const arr = []
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                        <div className='mb-5 w-full px-2 py-4 rounded-lg bg-blue-100 h-c700 overflow-auto'>
                                            <div className='text-xl font-bold'>Target Question ID : TQ100{i + 1}</div>
                                            <div className='grid grid-cols-2'>
                                                <div className='pl-12 pt-5'>
                                                    <div className='font-semibold text-lg'>Instriuctions.</div>
                                                    <div> - Answer in a Seperate paper clearly.</div>
                                                    <div> - on that paper clearly state your index no, name , a/l year and hall location</div>
                                                    <div> - using a scannar or your mobile and create a pdf file of that answered file</div>
                                                    <div> - then upload it into corresponding Upload link at ADD SUBMISSION page</div>
                                                </div>

                                                <div className='text-lg text-white py-2 px-10 bg-blue-600 rounded-lg hover:scale-105 duration-300 w-fit h-fit'>Download Paper</div>

                                            </div>
                                        </div>
                                    )
                                }
                                return arr
                            })()}

                        </div>

                    </div>








                    <div className={`${active === 4 ? "block" : "hidden"}  px-2 py-4 h-c400`}>
                        <div className='overflow-auto h-c400'>
                            {(() => {
                                const arr = []
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                        <div className=' bg-blue-100 px-10 py-5 rounded-lg mb-5'>
                                            <div className='font-csans text-2xl'>Title : Test Paper {i + 1}</div>
                                            <div className=''>
                                                <div>

                                                    <div className='font-bold text-xl pt-5'>Instructions :</div>
                                                    <div className='pl-12 pt-5'>
                                                        <div className='font-semibold text-lg'>Instriuctions.</div>
                                                        <div> - Answer in a Seperate paper clearly.</div>
                                                        <div> - on that paper clearly state your index no, name , a/l year and hall location</div>
                                                        <div> - using a scannar or your mobile and create a pdf file of that answered file</div>
                                                        <div> - then upload it into corresponding Upload link at ADD SUBMISSION page</div>
                                                    </div>
                                                </div>


                                                <div >
                                                    <div className='py-2 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-300 w-fit text-white mt-10'>Download Paper</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return arr
                            })()}
                        </div>
                    </div>









                    <div className={`${active === 5 ? "block" : "hidden"}  px-2 py-4 h-c400`}>
                        <Gradings />
                    </div>

                </div>






            </div>
        </div>
    )
}
