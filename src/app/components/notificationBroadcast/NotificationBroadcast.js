"use client"

import React from 'react'
import MessageCard from './MessageCard';;

function NotificationCard(props) {

 
  

    const handleClick = (event) => {
        event.preventDefault();
        props.handlePopMessage(props.member);
    };
    


  return (
    <>
    <div className={`w-[23%] me-5 mb-5 h-[400px] bg-slate-200 text-left rounded border-blue-950 border-b-2 hover:scale-105 cursor-pointer ${props.selectedMember === props.member ? 'bg-gray-300' : ''}`} onClick={handleClick}>
      
    <div className='mx-auto mb-8 py-5 bg-blue-950 rounded '>
          <img className="mx-auto w-[150px] h-[150px] rounded-full border-white border-4 object-cover " src={props.member.image ? "data:image/png;base64," + props.member.image : "/profile_dummy.jpeg"} alt='card'/>
      </div>
      <div className='ps-5 leading-8'>
          <p><span className='text-blue-900 font-bold me-1'>Enrollment No:</span> {props.member.regNo}</p>
          <p><span className='text-blue-900 font-bold me-1'>Name:</span> {props.member.firstName}</p>
          <p><span className='text-blue-900 font-bold me-1'>Blood Group:</span> {props.member.bloodGroup}</p>
          <p><span className='text-blue-900 font-bold me-1'>Phone No:</span> +91-{props.member.phone}</p>
      </div>

    </div>

    {props.viewMessageCard && props.selectedMember === props.member && <MessageCard key={props.key} member={props.selectedMember} handleClosePopMessage={props.handleClosePopMessage} />}
  </>
  )
}

export default NotificationCard