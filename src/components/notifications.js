import React from 'react'
import '../styles/notification.css'

export default function Notifications({ root }) {
    const notification = [
        ["Quiz Submission", "you have sucessfully compleated the quiz scheduled for the lesson 02 taught on last week. please navigate to quiz > grades to see your score", "2024/09/27"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"],
        ["Notification title goes here", "Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...Nootification Content Goes here...", "2024/09/30"]
    ]
    return (
        <div className='mx-2'>
            <div className='Ntopic font-csans text-5xl py-10 w-full pl-16  fixed bg-white shadow-lg shadow-gray-200'>Notifications</div>
            <div className='overflow-auto pt-32'>
            {(() => {
                const res = []
                let i = 0
                for (i = 0; i < notification.length; i++) {
                    res.push(
                        <div className='mt-3 px-4 bg-blue-100 rounded-lg py-8  '>
                            <div className='text-2xl font-semibold pb-5'>{notification[i][0]}</div>
                            <div className=' text-lg font-csans text-justify'>{notification[i][1]}</div>
                            <div className='font-csans font-bold text-sm pt-5 text-right pr-24'>Date :  {notification[i][2]}</div>
                        </div>
                    )
                }
                return res
            })()}
            </div>
        </div>
    )
}
