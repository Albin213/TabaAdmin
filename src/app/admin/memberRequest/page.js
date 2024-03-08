// "use client"
// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
// import RequestTable from '@/app/components/requestTable/requestTable';
// import View from "../../components/view/view";
// // import data from "../../components/requestTable/list"

// function MemberRequest() {

//   const [view, setView] = useState(false);


//   useEffect(() => {
//     (async () => {
//       await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-new-users`)
//       .then(res => {
//         console.log(res.data);
//         const data = res.data;
//       })
//       .catch(err => {
//         console.log('error', err);
//       });
//     })()
//   }, []);

//    function handleView() {
//      setView(true);
//    }

//    function handleCloseView() {
//      setView(false);
//    }

//   return (
// <div  className="w-full h-[100vh]">
//         <div className="w-full h-[10%]  bg-slate-950">
//           <Navbar/>
//         </div>
//         <div className="w-full h-[90%] flex" >
//           <div className="w-[20%] h-full bg-slate-950">
//             <Sidebar/>
//           </div>
//           <div className="bg-admin w-[80%] h-full p-8 pe-10">
//           <RequestTable key={1} data={data} handleView={handleView}/> 
//           { view && <View handleCloseView={handleCloseView} />}
//           </div>
//         </div>
// </div>

//   )
// }

// export default MemberRequest







// "use client"
// // MemberRequest.jsx
// import React, { useState, useEffect } from 'react';
// import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
// import axios from 'axios';
// import RequestTable from '@/app/components/requestTable/requestTable';
// import View from "../../components/view/view";



// function MemberRequest() {
//   const [view, setView] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-new-users`);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   function handleView(selectedUser) {
//     setView(true);
//     setSelectedUser(selectedUser);
//   }

//   function handleCloseView() {
//     setView(false);
//     setSelectedUser(null);
//   }

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10%]  bg-slate-950">
//         <Navbar/>
//       </div>
//       <div className="w-full h-[90%] flex" >
//         <div className="w-[20%] h-full bg-slate-950">
//           <Sidebar/>           
//         </div>
//         <div className="bg-admin w-[80%] h-full p-8 pe-10">
//           <RequestTable data={data} handleView={handleView} />
//           {view && selectedUser && <View user={selectedUser} handleCloseView={handleCloseView} />}
//         </div>
//       </div>
//     </div>
      
//   );
// }

// export default MemberRequest;














"use client"
// MemberRequest.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import axios from 'axios';
import RequestTable from '@/app/components/requestTable/requestTable';
import View from "../../components/view/view";

function MemberRequest() {
  const [view, setView] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [data, setData] = useState([]);

  const [loggedIn, setLoggedIn] = useState("");



  useEffect(() => {

    setLoggedIn(localStorage.getItem("isLoggedIn"));


    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-new-users`);
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleView(selectedUser) {
    setView(true);
    setSelectedUser(selectedUser);
  }

  function handleCloseView() {
    setView(false);
    setSelectedUser(null);
  }

  const handleSetData = (updatedData) => {
    setData(updatedData);
  };


  const handleSearch = async (searchTerm) => {
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/search_requests`, {
        search: searchTerm,
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (

    <>
      {
        loggedIn === "true" ? 
        (
          <div className="w-full h-[100vh]">
            <div className="w-full h-[10%]  bg-slate-950">
              <Navbar/>
            </div>
            <div className="w-full h-[90%] flex" >
              <div className="w-[20%] h-full bg-slate-950">
                <Sidebar/>           
              </div>
              <div className="bg-admin w-[80%] h-full p-8 pe-10">
                <RequestTable data={data} handleView={handleView} setData={handleSetData} handleSearch={handleSearch}/>
                {view && selectedUser && <View user={selectedUser} handleCloseView={handleCloseView} />}
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

export default MemberRequest;
