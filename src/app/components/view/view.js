import React from 'react'

function View(props) {


   // console.log(props.user);
  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm absolute top-0 left-0 flex justify-center items-center '>
    <div className='w-[900px] h-[500px] bg-slate-200  top-[190px] left-[400px] rounded border-b-2 border-blue-900'>
        <div className='w-full h-[25%] bg-blue-900 relative flex items-center'>
            <img className='mt-[110px] ms-[150px] rounded-full h-[180px] w-[180px] border-4 object-cover' src={ props.user.image ? "data:image/png;base64," + props.user.image : "/profile_dummy.jpeg"}  alt='Profile photo'/>
            <div className='flex flex-col justify-center ms-[50px] text-white'>
              <h1 className= 'text-3xl font-bold '>{props.user.firstName} {props.user.lastName}</h1>
              <p>{props.user.regNo}</p>
            </div>
            <button className='h-8 w-8 bg-white text-2xl absolute right-[20px] top-[20px] hover:bg-blue-500 hover:text-white' onClick={props.handleCloseView}>x</button>
        </div>
        <div className='w-full h-[75%] pt-[110px] pb-[60px] flex'>
         <div className='w-[30%] pt-[40px] text-center border-r-4 border-blue-900 '  >
            <h1 className='text-blue-900 font-bold text-2xl'>Enrollment No.</h1>
            <p className='text-2xl'>{props.user.regNo}</p>
         </div>
         <div className='w-[30%] pt-[40px]  text-center border-blue-900 border-r-4' >
            <h1 className='text-blue-900 font-bold text-2xl'>Address</h1>
            <p className='text-xl'>{props.user.address}</p>
         </div>
         <div className='w-[40%] pt-[40px]  text-center'> 
            <h1 className='text-blue-900  text-2xl'>{props.user.phone}</h1>
            <p>{props.user.email}</p>
         </div>

        </div>
    </div>
    </div>
  )
}

export default View
