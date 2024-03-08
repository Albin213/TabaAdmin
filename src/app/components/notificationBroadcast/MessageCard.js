"use client"

import React , { useState, useEffect }from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';

function MessageCard(props) {

    const [token, setToken] = useState();

    const [message, setMessage] = useState({
        title: "",
        body: ""
    })
    
    const regNo = {
        regNo : props.member.regNo
    }



    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/get_token`, regNo);
              setToken(response.data[0].token);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);




    const handleCloseDetails = () => {
        props.handleClosePopMessage();
    };
    

    function handleOnChange(event) {
        const { name, value } = event.target
        setMessage((prevValue) => {
           return {...prevValue, [name]:value}
        }
        ) 
    }

    const handleBroadcastMessage = async (event) => {
        event.preventDefault();
            const {title , body} = message;
        
            if(title && body) {
                // console.log(JSON.stringify(message));

                const notification = {
                    regNo : props.member.regNo,
                    registrationToken : token,
                    title: title,
                    body : body
                }                
                // console.log(notification);


                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notification/send-notification`, notification)
                .then(res =>{
                    // console.log(res);
                    alert(res.data);
                    setMessage({
                        title : "",
                        body : ""
                    });
                    // setTimeout(() => {
                    //     window.location.href = "/admin/notificationBroadcast";    
                    // }, 100);
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
    <div className='fixed top-0 left-0 w-full h-full bg-[#515050cf] backdrop-blur-[1px] z-10 flex justify-center items-center overflow-hidden'>
        <div className='w-[900px] h-[410px] bg-white rounded'>

            
                <div className='w-full relative flex items-center'>
                    <h1 className='w-full p-5 text-2xl bg-blue-900  text-white font-semibold'>
                        <span className='text-lg font-light'>Send message to :</span> {props.member.firstName}
                    </h1>
                    <button className='h-8 w-8 bg-blue-200 text-2xl rounded-full absolute right-[15px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
                </div>

                <div className='w-[95%] mt-5 mx-auto p-2 flex relative bg-[#beb8b867] rounded focus:border-blue-700'>
                       
               
                <div className='w-full h-full'>
                    <input 
                        type='text'
                        className='w-[100%] h-[50px] mb-5 font-semibold text-xl border-blue-950 border-b-2 outline-none bg-transparent placeholder:text-blue-950'
                        placeholder='Message title....'
                        name="title"
                        value={message.title} 
                        onChange={handleOnChange} 
                    />
                    <textarea 
                        className='w-[85%] text-xl outline-none bg-transparent placeholder:text-blue-950'  rows={7}
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
    </div>
  )
}

export default MessageCard
