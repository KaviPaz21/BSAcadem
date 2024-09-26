import React, { useState } from 'react'
import Animation from './animation'
import axios from 'axios'

export default function Helper({root}) {
    const [chattitle, setchattitle] = useState("Chat Title")
    const [titlechangershow, settitlechangershow] = useState(false)
    const [aniDis , setaniDIS] = useState(false)
    const [changecommand, setchangecommand] = useState("Change Title")

    const changerdisplay = () => {
        settitlechangershow(!titlechangershow)
        if (titlechangershow === true) { setchangecommand("Update") }
        else { setchangecommand("Change Title") }
    }

    const [msg , setmsg] = useState ([[1, "hellow user! How can I Assist you today"]])
    const [text , settext] = useState ('')
    const submitext = async(e)=>{
        if(text != ""){
            const newappending = [0 , text]
            setmsg(prev =>[...prev , newappending])
            try{
                setaniDIS(true)
                 const end = root + "/chatdata"
                 const res = await axios.post(end , {"promt":text})
                 const response = res.data
                 const responsemsg = [1 , response.res]
                 setmsg(prev =>[...prev , responsemsg])
                 setaniDIS(false)
            }catch(e){
                setaniDIS(false)
                console.log(e)
            }

        }
        settext('')
    }
    
    const defaultmsg = "hellow user! How can I Assist you today"
    return (
        <div className='w-c98 mt-5'>
            <div className='grid grid-cols-3 gap-3 py-4 px-5 text-white bg-black rounded-md'>
                <div className='text-3xl font-bold relative top-1/2 -translate-y-1/2 font-csans '>{chattitle}</div>
                <div className='relative w-full'>
                    <input type="text" className={`${!titlechangershow && "scale-0"} duration-200 absolute right-0 w-cw500 px-12 py-2 rounded-md`} />
                </div>
                <div className='w-full  relative'>
                    <div className={`absolute left-10 py-2 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-200`} onClick={changerdisplay}>{changecommand}</div>
                </div>

            </div>
            <div className=' rounded-lg w-full h-c400 mt-5 flex '>
                <div className='w-8/12 mr-3 h-full bg-zinc-200 rounded-lg px-10 py-7 overflow-auto'>
                    <table className='w-full'>


                        {(() => {
                            const msgs = []
                            var i = 0;
                            for (i = 0; i < msg.length; i++) {
                                msgs.push(
                                    <tr>
                                        <td className={`${msg[i][0] === 1 ? "block" : " opacity-0"} bg-blue-200  duration-200 py-2 w-fit px-5 rounded-lg my-2 text-lg dura`}>{msg[i][1]}</td>
                                        <td className={`${msg[i][0] === 0 ? "block" : "opacity-0"} bg-blue-500 text-white duration-200 py-2 px-5 rounded-lg my-2 text-lg`}> <div dangerouslySetInnerHTML={{__html:msg[i][1]}}></div> </td>
                                    </tr>
                                )
                            }
                            return msgs
                        })()}
                        
                    </table>
                    <div className={`${!aniDis && "scale-0"} dura`}><Animation/></div>
                </div>
                <div className='w-4/12 ml-2 h-full bg-zinc-200 rounded-lg'>
                    <div className=' w-full bg-black text-white pl-12 py-3 text-2xl font-semibold rounded-lg'>Chat Histry</div>
                </div>



            </div>
            <div className='grid grid-cols-2 gap-1 py-4 px-5 mt-5 text-white bg-slate-500 rounded-md h-20'>

                <div className='relative w-full'>
                    <input type="text" className={` duration-200 absolute right-0 w-full px-12 py-2 rounded-md text-black text-xl`} placeholder='text here...'  value={text} onChange={(e)=>settext(e.target.value)}/>
                </div>
                <div className='w-full  relative'>

                    <div className={`absolute left-10 py-3 px-5 bg-blue-600 rounded-lg hover:scale-105 duration-200`} onClick={submitext}>SEND &#10148;</div>
                </div>

            </div>

        </div>
    )
}
