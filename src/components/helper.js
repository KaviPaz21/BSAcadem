import React, { useState } from 'react'

export default function Helper() {
    const [chattitle , setchattitle] = useState("Chat Title")
    const [titlechangershow  , settitlechangershow] = useState(false)
    const [changecommand  , setchangecommand] = useState("Change Title")

    const changerdisplay = ()=>{
        settitlechangershow(!titlechangershow)
        if(titlechangershow === true){ setchangecommand("Update")}
        else{ setchangecommand("Change Title")}
    }
    
  return (
    <div className='w-c98 mt-5'>
        <div className='grid grid-cols-3 gap-3 py-4 px-5 text-white bg-black rounded-md'>
            <div className='text-3xl font-bold relative top-1/2 -translate-y-1/2 font-csans '>{chattitle}</div>
            <div className='relative w-full'>
                <input type="text" className={`${!titlechangershow && "scale-0"} duration-200 absolute right-0 w-cw500 px-12 py-2 rounded-md`}/>
            </div>
            <div className='w-full  relative'>
                <div className={`absolute left-10 py-2 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-200`}onClick={changerdisplay}>{changecommand}</div>
                </div>
        
        </div>
        <div className=' rounded-lg w-full h-c400 mt-5 flex '>
            <div className='w-8/12 mr-3 h-full bg-zinc-200 rounded-lg'>kdf</div>
            <div className='w-4/12 ml-2 h-full bg-zinc-200 rounded-lg'>
            <div className=' w-full bg-black text-white pl-12 py-3 text-2xl font-semibold rounded-lg'>Chat Histry</div>
            </div>

            

        </div>
        <div className='grid grid-cols-2 gap-1 py-4 px-5 mt-5 text-white bg-slate-500 rounded-md h-20'>
            
            <div className='relative w-full'>
                <input type="text" className={` duration-200 absolute right-0 w-full px-12 py-2 rounded-md text-black text-xl`} placeholder='text here...'/>
            </div>
            <div className='w-full  relative'>

                <div className={`absolute left-10 py-3 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-200`}>SEND &#10148;</div>
                </div>
        
        </div>
      
    </div>
  )
}
