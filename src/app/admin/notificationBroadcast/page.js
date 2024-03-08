"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import NotificationCard from '@/app/components/notificationBroadcast/NotificationBroadcast';
import axios from 'axios';
import { IoSend } from "react-icons/io5";

function MembersList() {
  
  const [viewMessageCard, setViewMessageCard] = useState(false);
  const [membersData, setMembersData] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [message, setMessage] = useState({
    name: "",
    body: ""
  })

  const [loggedIn, setLoggedIn] = useState("");


  useEffect(() => {

    setLoggedIn(localStorage.getItem("isLoggedIn"));

    const fetchData = async () => {
      try {
        if(searchTerm === ""){
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`);
          setMembersData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]); // Empty dependency array ensures this useEffect runs only once on mount



  function handleOnChange(event) {
    const { name, value } = event.target
    setMessage((prevValue) => {
       return {...prevValue, [name]:value}
    }
    ) 
  }




  function handlePopMessage(member) {
    setViewMessageCard(true);
    setSelectedMember(member);
  }

  function handleClosePopMessage() {
    setViewMessageCard(false);
    setSelectedMember(null);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/search_users`, {
        search: searchTerm,
      });
      setMembersData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleBroadcastMessage = async (event) => {
    event.preventDefault();
        const {title , body} = message;
    
        if(title && body) {
            // console.log(JSON.stringify(message));
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notification/send-broadcast-notification`, message)
            .then(res =>{
                // console.log(res);
                alert(res.data);
                setTimeout(() => {
                    window.location.href = "/admin/notificationBroadcast";    
                }, 100);
            })
            .catch(err => {
                // console.log('error',err.response.data);
                alert(err.response.data);
            })
        } else {
          alert("Enter the required fields");
        }
  };

  
  
 



  return (

    <>
    
      {
        loggedIn === "true" ? 
        (
          <div className="w-full h-[100vh]">
      <div className="w-full h-[10%] bg-slate-950">
        <Navbar />
      </div>
      <div className="w-full h-[90%] flex">
        <div className="w-[20%] h-full bg-slate-950">
          <Sidebar />
        </div>
        <div className="bg-admin w-[80%] h-full p-8 flex flex-wrap overflow-y-auto">


        <div className='w-full '>
          <h1 className='p-5 text-2xl bg-[hsla(0,0%,0%,0.4)]  text-white'>Broadcast Message</h1>
            <div className='w-[80%] mt-3 p-2 flex relative bg-[#faf9f9ad] rounded focus:border-blue-700'>

              <div className='w-full'>
                <input type='text'
                  className='w-[100%] h-[50px] mb-5 font-semibold text-xl border-blue-950 border-b-2 outline-none bg-transparent placeholder:text-blue-950'
                  placeholder='Message title..'
                  name="title"
                  value={message.title} 
                  onChange={handleOnChange}
                />
                <textarea 
                  className='w-[85%] text-xl outline-none bg-transparent placeholder:text-blue-950'  rows={8}
                  placeholder='Type your message here.....'
                  name="body"
                  value={message.body}
                  onChange={handleOnChange}
                />
              </div>

              <button 
                className='w-[100px] h-[60px] mb-2 me-2 bg-blue-600 hover:bg-blue-800 absolute bottom-0 right-0 rounded-3xl flex items-center justify-center'
                onClick={handleBroadcastMessage}
              >
                <IoSend className='text-3xl text-white'/>
              </button>
             </div>
        </div>


        <h1 className='w-full mt-10 p-5 text-2xl bg-[hsla(0,0%,0%,0.4)]  text-white'>Message a Member</h1>



          <div className='w-[80%] h-[10%] my-5 flex items-center'>
            <input
              type='text'
              className='w-[90%] h-full me-2 bg-[#faf9f9ad] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
              placeholder='Search' 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
            <button className='w-[100px] h-full rounded bg-blue-950 text-white hover:bg-blue-700' onClick={handleSearch}>
              Search
            </button>
          </div>

          {membersData.map((member, index) => (
            <NotificationCard
              key={index}
              member={member}
              viewMessageCard={viewMessageCard}
              selectedMember={selectedMember}
              handlePopMessage={handlePopMessage}
              handleClosePopMessage={handleClosePopMessage}
            />
          ))}
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




    
  );
}

export default MembersList;







         
           
          
         
