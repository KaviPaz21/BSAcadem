import React, { useState } from 'react'
import Navbar from './components/navbar'
import Dashboard from './components/Dashboard'
import Helper from './components/helper'
import Notifications from './components/notifications'
import Courses from './components/courses'
import Submission from './components/submission'
import Quizs from './components/quizs'
import Payments from './components/payments'
import Userdetails from './components/userdetails'
import './styles/index.css'
export default function Indexes() {
  const [one , setone] =useState(true)
  const [two , settwo] =useState(false)
  const [three , setthree] =useState(false)
  const [four , setfour] =useState(false)
  const [five, setfive] =useState(false)
  const [six , setsix] =useState(false)
  const [seven , setseven] =useState(false)
  const [eight , seteight] =useState(false)
  
  
  const activateinterface =(K)=>{
    setone(false)
    settwo(false)
    setthree(false)
    setfour(false)
    setfive(false)
    setsix(false)
    setseven(false)
    seteight(false)
    if(K===1){setone(true)}
    else if(K===2){settwo(true)}
    else if(K===3){setthree(true)}
    else if(K===4){setfour(true)}
    else if(K===5){setfive(true)}
    else if(K===6){setsix(true)}
    else if(K===7){setseven(true)}
    else if(K===8){seteight(true)}
  }

  const root = "http://127.0.0.1:5000"
  return (
    <div className=''>
      <div className='fixed z-20'><Navbar activateinterface = {activateinterface}/></div>
      <div className={`${!one && "scale-0"} element absolute w-11/12 ml-28 duration-300`}><Dashboard/></div>
      
    </div>
  )
}
/*

      <div className={`${!two && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Notifications root = {root}/></div>
      <div className={`${!three && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Courses root = {root}/></div>
      <div className={`${!four && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Submission root = {root}/></div>
      <div className={`${!five && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Quizs root = {root}/></div>
      <div className={`${!six && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Helper root = {root}/></div>
      <div className={`${!seven && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Payments root = {root}/></div>
      <div className={`${!eight && "scale-0"} absolute w-11/12  ml-36 duration-300`}><Userdetails root = {root}/></div>
      */