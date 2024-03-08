"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import MemberCard from '@/app/components/memberCard/MemberCard';
import axios from "axios";

function Reports() {
  
    const [loggedIn, setLoggedIn] = useState("");
    const [searchQuery, setSearchQuery] = useState({
      field : "",
      value : ""
    });
    const [searchedData, setSearchedData] = useState([]);


    console.log(searchQuery);

    useEffect(() => {
  
      setLoggedIn(localStorage.getItem("isLoggedIn"));
  
    }, []);


    function handleOnChange(e) {
      const { name, value } = event.target;
      setSearchQuery((prevValue) => {
        return {
          ...prevValue,
          [name] : value
        }
      })
    }



    const handleSearch = async () => {

      if(searchQuery.value) {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/search_users`, {
            search: searchQuery.value
          });
          setSearchedData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        alert("Please enter the required search term.")
      }
      
    };






    async function  handleDownload() {

     const { field, value } = searchQuery;

     let queryField = field;
     let queryValue = "";
     const encodedValue = value.replace(/\+/g, '%2b');
     queryValue = encodedValue;

      // if(searchQuery.fie {
      //    queryField = searchQuery.field;
      //    queryValue = searchQuery.value;
      // }
      //  else if (searchQuery.field === 'bloodGroup') {
      //   queryField = searchQuery.field;
      //   queryValue = searchQuery.value;
      // }


    //  console.log(queryField, queryValue , "query");
    if(field && value) {
      try {
        
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/export?field=${queryField}&value=${queryValue}`, { responseType: 'blob' });
        console.log(response);
        
        if (response.status === 200) {
          alert("Data exported successfully");
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'download.xlsx';
          a.click();
        } 

        

      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response.status === 404) {
          alert("No member found for the specified criteria");
        }
      }

    } else {
      alert("Please enter the required fields.");
    }

      
    }



    async function  handleExportAll() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/export-data`, { responseType: 'blob' });
        console.log(response.data);
        
        if (response.status === 200) {
          alert("Data exported successfully");
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'download.xlsx';
          a.click();
        }

        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


  
    return (
  
      <>
        {
          loggedIn === "true" ? 
            (
  
        <div  className="w-full h-[100vh]">
          <div className="w-full h-[10%]  bg-slate-950">
            <Navbar/>
          </div>
          <div className="w-full h-[90%] flex" >
            <div className="w-[20%] h-full bg-slate-950">
              <Sidebar/>
            </div>
            <div className="w-[80%] h-full bg-admin p-10">



              <div className='w-full h-[10%] mb-5 flex'>
                <div className='h-full w-[15%] me-4 '>
                    <select 
                      className="h-full w-full ps-2 rounded bg-[hsla(0,0%,99%,1)] text-blue-950 cursor-pointer"
                      name="field"
                      value={searchQuery.field}
                      onChange={handleOnChange}
                    >
                      <option value="" disabled>Select Field</option>
                      <option value="welfareMember">Welfare Member</option>
                      <option value="bloodGroup">Blood Group</option>
                      {/* <option value="field3">Field 3</option> */}
                    </select>
                </div>


                <div className='h-full w-[60%]'>
                  <input
                    type='text'
                    className='w-[80%] h-full me-2 bg-[hsla(0,0%,99%,1)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
                    placeholder='Search'
                    name="value"
                    value={searchQuery.value}
                    onChange={handleOnChange}
                  />
                  <button 
                    className='w-[100px] h-full rounded bg-blue-950 text-white hover:bg-blue-700'
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>

                <button 
                  className='h-full w-[10%] bg-blue-600 rounded hover:scale-105 text-white me-10'
                  onClick={handleDownload}
                >Download</button>

                <button 
                  className='h-full w-[10%] bg-blue-600 rounded hover:scale-105 text-white me-10'
                  onClick={handleExportAll}
                >
                  Export All
                </button>

              </div>


              <div className='w-full h-[90%] overflow-y-auto rounded'>

                <table className='w-full max-h-full bg-[#edececa3] '>
                  <thead className=''>
                    <tr className='text-left h-[60px] w-full'>
                      <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
                      <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
                      <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
                      <th className='sticky top-0 bg-blue-950 text-white '>Blood Group</th>
                      <th className='sticky top-0 bg-blue-950 text-white '>Welfare Member</th>
                      <th className='sticky top-0 bg-blue-950 text-white '>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    searchedData[0] ? (
                      searchedData.map((member, index) => (

                        <tr key={index} className='border-black border-b-[1px] h-[55px]'>
                          <td className='ps-4'>{index + 1}</td>
                          <td className='font-bold cursor-pointer hover:underline hover:text-blue-900'>{member.firstName}</td>
                          <td>{member.regNo}</td>
                          <td>{member.bloodGroup}</td>
                          <td>{member.welfareMember}</td>
                          <td>{member.phone}</td>
                        </tr>
                      ))
                    ) : (
                      <tr  className='border-black border-b-[1px] h-[55px]'>
                          
                          <td></td>
                          <td>No data to display</td>

                        </tr>
                    )

                    
                  }
                  </tbody>
                </table>

      
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
  
  
  
      
    )
  }
  
  export default Reports