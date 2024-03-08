"use client"

import React, { useState, useEffect} from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Sidebar from '@/app/components/sidebar/sidebar'
import PasswordReset from '@/app/components/passwordReset/PasswordReset'

function page() {

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {

    setLoggedIn(localStorage.getItem("isLoggedIn"));

  }, [])


  return (

    <>
      {
        loggedIn === "true" ? 
        
        (
          <div  className="w-full h-[100vh]">
            <div className="w-full h-[10%]  bg-slate-950">
              <Navbar/>
            </div>
            <div className="w-full h-[90%] flex" >
              <div className="w-[20%] h-full bg-slate-950">
                <Sidebar/>
              </div>
              <div className="w-[80%] h-full flex justify-center items-center bg-[#d0d6f6]">
                <PasswordReset/>
              </div>
            </div>
          </div>
        ) : (
          <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
            <h1 className='text-2xl mb-5'>You are logged out, please login</h1>
            <button 
              className='w-[200px] h-[50px] bg-blue-600 hover:bg-blue-800 text-2xl text-white rounded'
              onClick={() => {
                window.location.href = "/";  
              }}
            >Login</button>
          </div>
        )
      }
    </>


  )
}

export default page