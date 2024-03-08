"use client"

// import React, { useState, useEffect } from 'react'
// import Navbar from '@/app/components/navbar/navbar'
// import Sidebar from '@/app/components/sidebar/sidebar'
// import MemberCard from '@/app/components/memberCard/MemberCard'
// // import  members from '../../components/requestTable/list'
// import MemberDetails from '@/app/components/memberDetails/MemberDetails'
// import axios from 'axios'

// function MembersList() {

//   const [viewMemberDetails, setViewMemberDetails] = useState(false);
//   const [membersData, setMembersData] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`);
//         console.log(response.data);
//         setMembersData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   function handleViewMemberDetails(){
//     setViewMemberDetails(true)
//   }
  
//   function handleCloseViewMemberDetails(){
//     setViewMemberDetails(false)

//   }


//   return (
//     <div  className="w-full h-[100vh]">
//         <div className="w-full h-[10%]  bg-slate-950">
//           <Navbar/>
//         </div>
//         <div className="w-full h-[90%] flex" >
//           <div className="w-[20%] h-full bg-slate-950">
//             <Sidebar/>
//           </div>
//           <div className="w-[80%] h-full p-8 flex flex-wrap overflow-y-auto">

//             <div className='w-[80%] h-[10%] mb-5 flex items-center'>
//               <input type='text' className='w-[90%] h-full me-2 bg-[hsla(0,0%,0%,0.1)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded' placeholder ='Search'/>
//               <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700' >Search</button>
//             </div>

//             {
//               membersData.map((member, index)=>{
//                 return (
//                   <>
//                     <MemberCard key={index} member={member} viewMemberDetails={viewMemberDetails} handleViewMemberDetails={handleViewMemberDetails} handleCloseViewMemberDetails={handleCloseViewMemberDetails}/>
//                   </>
//                 );           
//               })
//             } 

//           </div>
//         </div>
//         </div>
//   )
// }

// export default MembersList






// import React, { useState, useEffect } from 'react';
// import Navbar from '@/app/components/navbar/navbar';
// import Sidebar from '@/app/components/sidebar/sidebar';
// import MemberCard from '@/app/components/memberCard/MemberCard';
// import axios from 'axios';

// function MembersList() {
//   const [viewMemberDetails, setViewMemberDetails] = useState(false);
//   const [membersData, setMembersData] = useState([]);
//   const [selectedMember, setSelectedMember] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`);
//         setMembersData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   function handleViewMemberDetails(member) {
//     setViewMemberDetails(true);
//     setSelectedMember(member);
//   }

//   function handleCloseViewMemberDetails() {
//     setViewMemberDetails(false);
//     setSelectedMember(null); // Clear selected member details when closing
//   }

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10%] bg-slate-950">
//         <Navbar />
//       </div>
//       <div className="w-full h-[90%] flex">
//         <div className="w-[20%] h-full bg-slate-950">
//           <Sidebar />
//         </div>
//         <div className="w-[80%] h-full p-8 flex flex-wrap overflow-y-auto">
//           <div className='w-[80%] h-[10%] mb-5 flex items-center'>
//             <input type='text' className='w-[90%] h-full me-2 bg-[hsla(0,0%,0%,0.1)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded' placeholder='Search' />
//             <button className='w-[100px] h-full rounded bg-blue-950 text-white hover:bg-blue-700' >Search</button>
//           </div>

//           {membersData.map((member, index) => (
//             <MemberCard key={index} member={member} viewMemberDetails={viewMemberDetails} selectedMember={selectedMember} handleViewMemberDetails={handleViewMemberDetails} handleCloseViewMemberDetails={handleCloseViewMemberDetails} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MembersList;










"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import MemberCard from '@/app/components/memberCard/MemberCard';
import axios from 'axios';


function MembersList() {
  
  const [viewMemberDetails, setViewMemberDetails] = useState(false);
  const [membersData, setMembersData] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [loggedIn, setLoggedIn] = useState("");
  const [pageNo, setPageNo] = useState(1);

 

  useEffect(() => {

    setLoggedIn(localStorage.getItem("isLoggedIn"));
    

    const fetchData = async () => {
      try {
        if(searchTerm === ""){
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`,{
            page: pageNo
          });
          setMembersData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]); // Empty dependency array ensures this useEffect runs only once on mount

  function handleViewMemberDetails(member) {
    setViewMemberDetails(true);
    setSelectedMember(member);
  }

  function handleCloseViewMemberDetails() {
    setViewMemberDetails(false);
    setSelectedMember(null);
  }

  const handleSearch = async () => {

    console.log(pageNo);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/search_users`, {
        search: searchTerm,
      });
      setMembersData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handlePage = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`, {
        page: pageNo,
      });
      setMembersData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  function handleNextPage() {
    setPageNo(pageNo + 1);
    handlePage();
  }

  function handlePreviousPage() {
    if(pageNo > 1) {
      setPageNo(pageNo - 1);
      handlePage();
    } else {
      return;
    }
  }







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


        <div className='w-[80%] h-full'>

        <div className="w-full h-[90%] p-8 flex flex-wrap overflow-y-auto">
          <div className='w-[80%] h-[10%] mb-5 flex items-center'>
            <input
              type='text'
              className='w-[90%] h-full me-2 bg-[hsla(0,0%,0%,0.1)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
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
            <MemberCard
              key={index}
              member={member}
              viewMemberDetails={viewMemberDetails}
              selectedMember={selectedMember}
              handleViewMemberDetails={handleViewMemberDetails}
              handleCloseViewMemberDetails={handleCloseViewMemberDetails}
            />
          ))}

        </div>


        <div className='w-full h-[10%] pe-[70px] flex flex-row-reverse items-center bg-[hsla(0,0%,0%,0.1)]'>
              <button 
                className='w-[160px] h-[40px] ms-4 bg-blue-950 text-white rounded  hover:bg-blue-700'
                onClick= {handleNextPage}
              >{"Next >>"}</button>

              <button 
                className='w-[160px] h-[40px] bg-blue-950 text-white rounded  hover:bg-blue-700'
                onClick= {handlePreviousPage}
              >{"<< Previous"}</button>
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

  );
}

export default MembersList;
