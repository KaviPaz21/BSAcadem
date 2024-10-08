import React, { useState } from 'react'
import Coursecard from './coursecard'
import Module from './module'

export default function Courses() {
  const [modulevisible, setmodulevisible] = useState(false)
  const [modelno , setmodelno] = useState(null)
  const subjects = [
    [1000, "Measurements", "Activated"],
    [1001, "Mechanics", "Activated"],
    [1002, "Oscillations and Waves ", "Activated"],
    [1003, "Thermal Physics ", "Activated"],
    [1004, "Gravitational Field", "Activated"],
    [1005, "Electrostatic field", "Activated"],
    [1006, "Magnetic Field", "Activated"],
    [1007, "Current Electricity ", "Activated"],
    [1008, "Electronics", "Activated"],
    [1009, "Mechanical Properties of Matter", "Activated"],
    [1010, "Matter and Radiation", "Activated"]
  ]

  const modulesetter = (K)=>{
    if(modelno === null){
      setmodelno(K)
      setmodulevisible(!modulevisible)
    }else{
      setmodelno(null)
      setmodulevisible(!modulevisible)
    }
  }
  return (
    <div className='mx-2'>
      <div className={`${modulevisible ? "hidden" : "block"} font-csans text-4xl pl-16 py-5 w-full bg-white fixed shadow-sm shadow-gray-100`}>My Courses</div>

      <div className={`${modulevisible ? "hidden" : "flex"} pt-24  flex-wrap gap-10`}>
        {(() => {
          const res = []
          let i = 0;
          for (i = 0; i < subjects.length; i++) {
            res.push(
              <Coursecard className=""
                modulesetter = {modulesetter}
                no={subjects[i][0]}
                topic={subjects[i][1]}
                status={subjects[i][2]}
              />
            )
          }
          return res
        })()}
      </div>
      <div className={`${!modulevisible && "scale-0"} pt-32`}>
        <Module no={modelno} modulesetter={modulesetter}/>
      </div>


    </div>
  )
}
