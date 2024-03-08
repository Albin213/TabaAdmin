"use client"

import React, { useState } from 'react'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from 'axios'
import ForgotPassword from '../passwordReset/ForgotPassword';


function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [data, setData] = useState({
       userName:"",
       password:"" 
    })


    function handleOnChange(event) {
         const {name,value} = event.target
         setData((prevValue) => {
            return {...prevValue, [name]:value}
         }
         ) 
    }

    async function handleOnSubmit(event) {
        event.preventDefault();
        const {userName , password} = data;
    
        if(userName && password) {
            // console.log(JSON.stringify(data));
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, data)
            .then(res =>{
                // console.log(res.data);
                localStorage.setItem("isLoggedIn", "true");
                alert(res.data.message);
                setTimeout(() => {
                    window.location.href = "/admin";    
                }, 1000);
            })
            .catch(err => {
                // console.log('error',err.response.data);
                alert(err.response.data.message);
            })
        }

    }

     


    function handlePassword() {
        setShowPassword(!showPassword);
    }

    function handlePopUp() {
        setShowPopup(true);
    }

    // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
    <div className='text-white text-[2rem] ms-24 flex'>
        <img  className="w-[8%]" src="/taba-logo.png"/>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl'>TABA</h1>
            <p className='text-xl'>THE ALLEPPEY BAR ASSOCIATION</p>
            <p className='text-[12px]'>SINCE 1908  REGD 1941</p>
        </div>
        
    </div>
    <div className='w-[400px] h-[450px] py-8  bg-[hsla(360,100%,100%,.1)] rounded-xl  relative left-[150px] top-[70px] text-center '  >
        <h1 className='font-bold text-2xl text-white font'>Admin Login</h1>
        <div className='mt-12 px-[30px] text-left '>
            <form  action='/login' method='post' onSubmit={handleOnSubmit}>
                <label htmlFor="userName" className='text-white' >Username</label><br/>
                <input type='text' 
                    id='userName' 
                    name='userName' 
                    value={data.username}
                    onChange={handleOnChange}
                    className='w-full h-[45px] mb-5 ps-2 rounded-lg bg-transparent border-white border-[1px] text-white focus:bg-none outline-none' 
                /><br/>
                <label  htmlFor="password"  className='text-white'>Password</label><br/>
                <div className="w-full h-[45px] rounded-lg bg-transparent border-white border-[1px] text-white flex justify-center items-center">
                    
                    <input type= {showPassword ? 'text' : 'password'} 
                        id='password'
                        name='password'
                        value={data.password} 
                        onChange={handleOnChange}
                        className='w-[85%] h-[45px] ps-2 rounded-lg bg-transparent border-none text-white focus:outline-none bg-none '
                    />
                    { showPassword ? <VscEye className="w-[15%] text-xl cursor-pointer" onClick={handlePassword} /> : <VscEyeClosed className="w-[15%] text-xl cursor-pointer" onClick={handlePassword} /> }
                </div>
                <br/>
                <p className='mt-2 text-white text-sm'><a className='hover:text-blue-300 underline cursor-pointer' onClick={handlePopUp}>Forgot Password?</a></p>
               <div className='w-[100%] text-center mt-12'>
                <button type='submit' className='w-[65%] h-[40px] bg-white text-black rounded-md font-bold hover:bg-slate-300' >Login</button>
                </div>
            </form>
        </div>
    </div>
    
    { showPopup && 
       <div className="w-[100vw] h-[100vh] absolute left-0 top-0 flex justify-center items-center backdrop-blur-sm">
            <ForgotPassword setShowPopup={setShowPopup} />
       </div>
    }

    </>
  )
}

export default Login
