"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

function Admin() {

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
          <div className="w-[80%] h-full bg-admin p-10">
          <div className='w-full h-full p-5 overflow-hidden overflow-y-auto flex flex-wrap justify-between'>
            
            
            <div className='w-[30%] h-[400px] me-2 mb-8 bg-member-approval rounded-xl border-white border-[.5px] hover:scale-105 cursor-pointer'>
              <Link href="/admin/memberRequest">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">Members Approval</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-members-list rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/membersList">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">Members List</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-payment rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/payments">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">Payment</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-committee rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/executiveCommittee">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">Executive Committee</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-notification rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/notificationBroadcast">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-center text-3xl">Notification <br/> & <br/> Broadcast</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-reports rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/reports">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">Reports</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-reset rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/resetPassword">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-center text-3xl">Password Reset</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 bg-aboutus rounded-xl border-white border-[.5px]  hover:scale-105 cursor-pointer'>
              <Link href="/admin/aboutUs">
                <div className="w-full h-full rounded-xl border-white border-[0.5px] flex justify-center items-center hover:backdrop-blur-sm">
                  <h1 className="text-white text-3xl">About Us</h1>
                </div>
              </Link>
            </div>

            <div className='w-[30%] h-[400px] me-2 mb-8 '>
            
            </div>
            
          </div>
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

export default Admin