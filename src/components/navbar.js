import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import user from '../images/user.svg'
import home from '../images/home.svg'
import lession from '../images/lessions.svg'
import activation from '../images/activationhistory.svg'
import quiz from '../images/quiz.svg'


const Navbar = () => {
    const [active, setactive]= useState(1)
    const setindication=(k)=>{
        setactive(k)
    }
  return (
    <div>
        <div className=' flex-col justify-center opacity-80'>
            <div className='fixed top-1/2 -translate-y-1/2 bg-gray-200 ml-2 px-2 py-2 rounded-xl'>
            
            <Link to="/Home"><div className={`${active===1 ? "bg-gray-400":"bg-gray-200"} hover:scale-105 duration-300 hover:bg-gray-300 p-1 rounded-xl my-5`} onClick={()=>setindication(1)}><img src={home} alt="home" className=' w-8 ' /></div></Link>
            <Link to="/Profile"><div className={`${active===2 ? "bg-gray-400":"bg-gray-200"} hover:scale-105 duration-300 hover:bg-gray-300 p-1 rounded-xl my-5`} onClick={()=>setindication(2)}><img src={user} alt="home" className=' w-8 ' /></div></Link>
                <Link to="/Lessions"><div className={`${active===3 ? "bg-gray-400":"bg-gray-200"} hover:scale-105 duration-300 hover:bg-gray-300 p-1 rounded-xl my-5`} onClick={()=>setindication(3)}><img src={lession} alt="home" className=' w-8 ' /></div></Link>
                <div className={`${active===4 ? "bg-gray-400":"bg-gray-200"} hover:scale-105 duration-300 hover:bg-gray-300 p-1 rounded-xl my-5`} onClick={()=>setindication(4)}><img src={activation} alt="home" className=' w-8 ' /></div>
                <div className={`${active===5 ? "bg-gray-400":"bg-gray-200"} hover:scale-105 duration-300 hover:bg-gray-300 p-1 rounded-xl my-5`} onClick={()=>setindication(5)}><img src={quiz} alt="home" className=' w-8 ' /></div>
                
            </div>
        </div>
    </div>
  );
};

export default Navbar;
