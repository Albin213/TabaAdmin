"use client"

import React, { useState } from 'react';
import axios from 'axios';

function PasswordReset(props) {

  const [data, setData] = useState({
    userName : "",
    newPassword: ""
  })
 
  function handleOnChange(event) {
    const {name, value} = event.target
    setData((prevValue) => {
       return {...prevValue, [name]:value}
    }
    ) 
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const {userName , newPassword} = data;

    if(userName && newPassword) {
        // console.log(JSON.stringify(data));
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/reset-password`, data)
        .then(res =>{
            // console.log(res.data);
            alert(res.data.message);
        })
        .catch(err => {
            // console.log('error',err.response.data);
            alert(err.response.data.message);
        })
    }

  }



  return (

    <div className='w-[800px] h-[500px] bg-white rounded-lg flex'>
         
      <div className='w-[60%] ' >
        <h1 className='text-blue-900 font-bold text-4xl ms-10 mt-24 '>{ props.headerText ? props.headerText : "Reset Your Password?" }</h1>
        <div className='text-left mt-[30px] w-[400px]  mx-auto'>

          <p className='mb-[5px] text-blue-900'>Enter Your Username:</p>
          <input 
            className='w-full h-10 focus:outline-none focus:border-blue-500 border-blue-900 border-b-[3px]' 
            type='text' 
            placeholder='username' 
            name='userName'
            onChange={ handleOnChange }
          />

          <p className='mb-[5px] mt-[20px] text-blue-900'>Enter Your New Password:</p>
          <input 
            className='w-full h-10 focus:outline-none focus:border-blue-500 border-blue-900 border-b-[3px]' 
            type='password' 
            placeholder='password' 
            name='newPassword'
            onChange={ handleOnChange }
          />
          
          <div className=''>
            <button 
              className='w-[100px] h-10 mt-10 text-white bg-blue-900 rounded-md hover:bg-blue-700'
              onClick= {handleOnSubmit}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className='w-[40%]'>
          { 
            props.headerText &&
            <button className='h-8 w-8 text-2xl relative left-[255px] top-[30px] bg-slate-300 hover:bg-blue-400' onClick={() => {props.setShowPopup(false)} }>x</button>
          }
        <img src='/reset-image.jpg'  className='pt-28'/>
      </div>
    </div>

  )
}

export default PasswordReset
