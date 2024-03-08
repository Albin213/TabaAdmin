"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PaymentView(props) {
   
    const [amount, setAmount] = useState("");
    const [editAmount, setEditAmount] = useState(false);
    const [dueAmount, setDueAmount] = useState("");

    useEffect(() => {
        
    
    }, []);

   
    function handleDueChange(event) {
        const value = event.target.value;
        setDueAmount(value);
    }



    function handleAmountChange(event) {
        const value = event.target.value;
        setAmount(value);
    }

    async function handleDueSubmit() {


        const dueData = {
            annualFee : dueAmount
        }
        const userId = props.user._id;

        // console.log(dueData, userId);

        if(dueAmount) {

            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/update-fee/${userId}`, dueData)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                window.location.href = "/admin/payments";

                setDueAmount("");
                // console.log("window");

                // console.log("window");

            })
            .catch(err => {
                // console.log('error',err.response.data);
                alert(err.response.data.message);
            });

        } else {
            alert("Please enter an amount")
        }

        
        
    }




    function handleAmountChange(event) {
        const value = event.target.value;
        setAmount(value);
    }

    async function handleAmountSubmit() {


        const data = {
            paymentAmount: amount
        };
        const userId = props.user._id;

        // console.log(data, userId);

        if(amount) {

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/updatePayment/${userId}`, data)
            .then(res => {
                // console.log(res.data);
                alert(res.data.message);
                setAmount("");
                // console.log("window");
                window.location.href = "/admin/payments";

            })
            .catch(err => {
                // console.log('error',err.response.data);
                alert(err.response.data.message);
            });

        } else {
            alert("Please enter an amount");
        }

        
        
    }

  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm absolute top-0 left-0 flex justify-center items-center '>
        <div className='w-[900px] h-[500px] bg-slate-200 rounded border-b-2 border-blue-900'>
            <div className='w-full h-[25%] bg-blue-900 relative flex items-center'>
                <img className='ms-[50px] h-[110px] w-[100px] border-4 object-cover'  src={props.user.image ? "data:image/png;base64," + props.user.image : "/profile_dummy.jpeg"} alt='Profile photo'/>
                <div className='flex flex-col justify-center ms-[50px] text-white'>
                    <h1 className= ' text-3xl font-bold '>{props.user.firstName}</h1>
                    <p>{props.user.regNo}</p>
                </div>
                <button className='h-8 w-8 bg-white text-2xl absolute top-[20px] right-[20px] hover:text-white hover:bg-blue-700' onClick={ () => { props.setEditPayment(false) } }>x</button>
            </div>
            <div className='w-full h-[75%] px-[50px] py-[30px] flex'>
                <div className='w-[50%] pt-[40px] text-left border-r-4 border-blue-900 '  >
                    <h1 className='text-blue-900 font-bold text-xl'>Phone No.</h1>
                    <p className='text-xl mb-5'>{props.user.phone}</p>
                    <h1 className='text-blue-900 font-bold text-xl'>Email</h1>
                    <p className='text-xl mb-5'>{props.user.email}</p>
                    <h1 className='text-blue-900 font-bold text-xl'>DOB</h1>
                    <p className='text-xl mb-5'>{props.user.DOB}</p>
                </div>
                <div className='w-[50%] pt-[40px]  text-left ps-10' >
                    <h1 className='text-blue-900 font-bold text-xl'>Paid Amount</h1>
                    <p className='text-xl mb-5'>{props.user.paidAmount}</p>
                    <h1 className='text-blue-900 font-bold text-xl'>Due Amount</h1>
                    {
                        editAmount ? (
                        <>
                            <input 
                                className='mt-2 ps-2 h-[40px] outline-none border-blue-900 border-[0.5px] focus:border-[2px]' 
                                type='number' 
                                placeholder='Enter the amount'
                                name= "due_amount"
                                value={dueAmount}
                                onChange={ handleDueChange }
                            />
                            <button 
                                className='w-[100px] h-[40px] text-white bg-blue-950 hover:bg-blue-700' type='submit'
                                onClick = { () => {
                                    setEditAmount(false);
                                    handleDueSubmit();
                                } }
                            >Save</button>
                        </>
                        ) : (
                            <>
                            <p className='text-xl mb-5 me-5 inline-block'>{props.user.annualFee}</p>
                            <button 
                                className='w-[80px] h-[35px] text-white bg-blue-950 hover:bg-blue-700' type='submit'
                                onClick = { () => {
                                    setEditAmount(true)
                                } }
                            >Edit</button>
                            </>
                        )
                    }


                    <h1 className='text-blue-900 font-bold text-xl'>Enter Amount</h1>
                    <input 
                        className='mt-2 ps-2 h-[40px] outline-none border-blue-900 border-[0.5px] focus:border-[2px]' 
                        type='number' 
                        placeholder='Enter the amount'
                        name= "amount"
                        value={amount}
                        onChange={ handleAmountChange }
                    />
                    <button 
                        className='w-[100px] h-[40px] text-white bg-blue-950 hover:bg-blue-700' type='submit'
                        onClick = { handleAmountSubmit }
                    >Update</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PaymentView


