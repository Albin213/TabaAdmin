"use client"

import { React, useState} from 'react'
import { IoLogOut } from "react-icons/io5";



function Navbar() {

  const [logOut, setLogOut] = useState(false);

 
   
  function handleLogOut() {
    setLogOut(true);
  }

  return (
    <>
    <div className='w-full h-full flex justify-between px-10 border-b-2 border-white' >
      <div className='h-full text-white flex items-center'>
        <img className="w-[12%]" src='/taba-logo.png'/>
        <h1 className='text-2xl'>TABA</h1>
      </div>
      <div className='h-full flex items-center'>
        <button className='w-[130px] h-[50px] text-red-600 bg-white rounded-md flex justify-center items-center hover:bg-slate-100'
           onClick={handleLogOut}
        >Logout 
          <IoLogOut className='w-[20%] ms-2 text-2xl'/>
        </button>
      </div>
    </div>
    

    {
      logOut && 
      <div className='w-[100vw] h-[100vh] z-10 absolute top-0 left-0 flex justify-center items-center backdrop-blur-md'>
        <div className='w-[500px] h-[300px] rounded bg-blue-50 border-2 border-blue-950'>
          <div className='h-[40%] flex justify-center items-end'>
              <p className='font-bold text-2xl text-blue-900'>Are you sure you want to logout? </p>
          </div>
          <div className='h-[60%] flex justify-around items-center'>

            <button className='w-[100px] h-[40px] rounded bg-blue-950 text-white hover:bg-blue-700' 
            onClick={ () => { 
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/"; 
            } }
            >
              Yes</button>

            <button className='w-[100px] h-[40px] rounded border-blue-950 border-2 text-blue-950 hover:bg-blue-700 hover:text-white hover:border-none'
              onClick={ () => { setLogOut(false) } }
            >
              No</button>
          </div>
        </div>
      </div>
    }
    
    </>
  )
}

export default Navbar