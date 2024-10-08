import React, { useState } from 'react'
import Dash from "../images/dashboard.svg"
import notification from "../images/nitification.svg"
import course from "../images/course.svg"
import submission from "../images/submission.svg"
import quiz from "../images/quiz.svg"
import ai from "../images/ai.svg"
import payment from "../images/payment.svg"
import user from "../images/user.svg"

import '../styles/navbar.css'

export default function Navbar({activateinterface}) {
    const [exp, setexp] = useState(false)
    const [active , setactivecolumn] =  useState(1)

    const setactive =(K)=>{
        activateinterface(K);
        setactivecolumn(K);
    }
    return (
        <div className={`${exp ? "w-72" :"md:w-20"} navbar fixed left-0 top-0 h-full bg-slate-100 duration-200`}>
            <div className='absolute -right-5 top-5 button'>
                <div className={`${!exp ? "block" : "hidden"} text-3xl bg-blue-700 w-12 h-12 pt-1 rounded-full text-white text-center hover:scale-105 duration-200 cursor-pointer`} onClick={()=>setexp(!exp)}>&#x276F;</div>
                <div className={`${exp ?"block" : "hidden" } text-3xl bg-blue-700 w-12 h-12 pt-1 rounded-full text-white text-center hover:scale-105 duration-200 cursor-pointer`} onClick={()=>setexp(!exp)}>&#x276E;</div>
            </div>
            <div className={`${!exp && "scale-0"} absolute ml-5 mt-12 duration-300`}>
                <div className=' font-csans font-bold text-3xl'>BSA LMS &#x2655;</div>
                <div className='mt-12 ml-5 '>
                    <div className={`${active === 1 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(1)}>&#x27A4; Dashboard</div>
                    <div className={`${active === 2 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(2)}>&#x27A4; Notifications</div>
                    <div className={`${active === 3 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(3)}>&#x27A4; My Courses</div>
                    <div className={`${active === 4 ? "bg-slate-300" : "bg-slate-100" }  elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(4)}>&#x27A4; Submissions</div>
                    <div className={`${active === 5 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(5)}>&#x27A4; Quizes & tests</div>
                    <div className={`${active === 6 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(6)}>&#x27A4; AI Study Helper</div>
                    <div className={`${active === 7 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(7)}>&#x27A4; Payments & Actvations</div>
                    <div className={`${active === 8 ? "bg-slate-300" : "bg-slate-100" } elm py-3 font-csans font-semibold text-cl pl-3 mr-2 hover:bg-slate-200 duration-300`} onClick={()=>setactive(8)}>&#x27A4; My Info</div>
                </div>

            </div>


            <div className={`${exp && "scale-0"} trimmed ml-4 mt-24 duration-300`}>
                <div className='logoname font-csans font-bold text-3xl'>BSA</div>
                <div className='mt-5 shortnav '>
                   <div><img src={Dash} alt="" className={ `${active === 1 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(1)}/></div>
                   <div><img src={notification} alt="" className={ `${active === 2 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(2)}/></div>
                   <div><img src={course} alt="" className={ `${active === 3 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(3)}/></div>
                   <div><img src={submission} alt="" className={ `${active === 4 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(4)}/></div>
                   <div><img src={quiz} alt="" className={ `${active === 5 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(5)}/></div>
                   <div><img src={ai} alt="" className={ `${active === 6 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(6)}/></div>
                   <div><img src={payment} alt="" className={ `${active === 7 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(7)}/></div>
                   <div><img src={user} alt="" className={ `${active === 8 ? "bg-slate-300" : "bg-slate-100" } w-11 p-2 mt-2 rounded-lg  hover:bg-slate-200 duration-300`} onClick={()=>setactive(8)}/></div>

                </div>

            </div>
        </div>
    )
}
