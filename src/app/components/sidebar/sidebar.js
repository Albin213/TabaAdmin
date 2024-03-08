"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome,FaRegIdCard,FaList,FaRedoAlt } from "react-icons/fa";
import { HiCurrencyRupee , HiUserGroup } from "react-icons/hi2";
import { VscBroadcast } from "react-icons/vsc";
import { TbReportSearch } from "react-icons/tb";
import { FaCircleInfo } from "react-icons/fa6";


function Sidebar() {

  const pathname = usePathname()

  return (
    <div className='w-full h-full pt-8'>
      <ul className='w-full text-white'>

        <Link href="/admin">
          <li className={`${pathname === '/admin' ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaHome className="text-3xl me-4"/> Home
          </li>
        </Link>

        <Link href="/admin/memberRequest">
          <li className={`${pathname.startsWith('/admin/memberRequest') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaList className="text-3xl me-4"/> Members Approval
          </li>
        </Link>

        <Link href="/admin/membersList">
          <li className={`${pathname.startsWith('/admin/membersList') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}> 
            <FaRegIdCard className="text-3xl me-4"/>Members List
          </li>
        </Link>

        <Link href="/admin/payments">
          <li className={`${pathname.startsWith('/admin/payments') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <HiCurrencyRupee className="text-4xl me-4"/>Payment
          </li>
        </Link>

        <Link href="/admin/executiveCommittee">
          <li className={`${pathname.startsWith('/admin/executiveCommittee') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <HiUserGroup className="text-4xl me-4"/>Executive Committee
          </li>
        </Link>  

        <Link href="/admin/notificationBroadcast">
          <li className={`${pathname.startsWith('/admin/notificationBroadcast') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <VscBroadcast className="text-4xl me-4"/>Notification & Broadcast
          </li>
        </Link>
        <Link href="/admin/reports">
          <li className={`${pathname.startsWith('/admin/reports') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <TbReportSearch className="text-3xl me-4"/>Reports
          </li>
        </Link>  

        <Link href="/admin/resetPassword">
          <li className={`${pathname.startsWith('/admin/resetPassword') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaRedoAlt className="text-3xl me-4"/>Password Reset
          </li>
        </Link>  

        <Link href="/admin/aboutUs">
          <li className={`${pathname.startsWith('/admin/aboutUs') ? ' h-[60px] text-[1rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[60px] text-[1rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaCircleInfo className="text-3xl me-4"/>About Us
          </li>
        </Link>    


      </ul>
    </div>
  )
}

export default Sidebar