"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import MemberCard from '@/app/components/memberCard/MemberCard';
import { FaEdit } from "react-icons/fa";
import axios from 'axios'
import { BiCloudUpload } from "react-icons/bi";



function AboutUs() {
  
    const [loggedIn, setLoggedIn] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [aboutUs, setAboutUs] = useState({});
    const [previewImage, setPreviewImage] = useState();

    console.log(aboutUs);


    useEffect(() => {
  
      setLoggedIn(localStorage.getItem("isLoggedIn"));

      const fetchData = async () => {
        try {
          
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/aboutus`);
            console.log(response.data[0]);
            setAboutUs(response.data[0]);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

      return(() => {
        return;
      })
  
    }, [])


    function handleOnChange(event) {
      event.preventDefault();

      const { name, value } = event.target;

      setAboutUs((prevValue) => {
        return {
          ...prevValue,
          [name] : value
        }
      })
    }

    function handleImageChange(event) {
      const file = event.target.files[0];

      setAboutUs((prevValue) => ({
        ...prevValue,
        image: file
      }));

      setPreviewImage(URL.createObjectURL(file));

    }



    async function handleSaveChange(e) {
      // e.preventDefault();
    
      const id = aboutUs._id
      const {image, description, address, email, phone} = aboutUs;

      const formData = new FormData();
      formData.append('image', image);
      formData.append('description', description);
      formData.append('address', address);
      formData.append('email', email);
      formData.append('phone', phone);

      console.log(formData);

      try {
          
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/update-aboutus/${id}`, formData);
        console.log(response);
        alert(response.data.message);

        setIsEdit(false);

        
      
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
            <div className='w-full h-full p-5 overflow-hidden overflow-y-auto'>
              

               <form className='h-full w-full flex justify-between'>
                 
                        <div className='h-full w-[50%] bg-white rounded-xl '>

                          <h1 className='text-2xl font-bold px-10 pt-10 text-blue-950'>THE ALLEPPEY BAR ASSOCIATION</h1>
                          <p className='ps-10 font-medium text-blue-950'>SINCE  1908    REGD 1941</p>

                          {
                            isEdit ? (
                                <div className='w-[60%] h-[38%] ms-10 mt-5 rounded-xl border-2 border-gray-200'>
                                  <label 
                                    className='w-full h-full rounded-xl relative'
                                    htmlFor="image"
                                  >
                                    {
                                      previewImage ? 
                                      (  
                                         <>
                                             <img className="w-full h-full object-cover rounded-xl" src = { previewImage } alt="office image"/>
                                             <span className="w-full h-full hover:text-lg hover:text-white  hover:bg-[#00000048] rounded-xl absolute top-0 left-0 flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Edit Image</span>
                                         </>
                                      ) : (
                                         <span className="w-full h-full text-lg  rounded-xl flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Upload Image</span>
                                      )
                                    }

                                    <input 
                                      className="rounded-xl"
                                      id="image"
                                      name="image"
                                      type="file" 
                                      accept="image/*" 
                                      onChange={handleImageChange}
                                      hidden
                                    />
                                  </label>

                                </div>

                            ) : (
                              <img 
                                className='w-[60%] h-[38%] ms-10 mt-5 object-cover rounded-xl'
                                src={ `data:image/png;base64,${aboutUs.image}` } 
                                alt=''
                              />
                            )
                          }
                          
                          {
                            isEdit ? (
                              <textarea 
                                className='w-[80%] ms-10 mt-3 p-2 bg-[#00000011] border-2 border-gray-200 rounded-xl outline-none'
                                name="description"
                                value={aboutUs.description} 
                                id=""  
                                rows="7"
                                onChange={handleOnChange} 
                              />
                            ) : (
                              <p className='px-10 mt-3'>{ aboutUs.description }</p>
                            )
                          }


                        </div>

                        <div className='h-full w-[49%] bg-white rounded-xl flex flex-col px-16'>
                          
                          <div className='w-full flex items-start flex-col mt-10'>

                            <div className='w-full'>
                              <p className='font-semibold text-blue-950 '>Address</p>
                              {
                                isEdit ? (
                                  <input 
                                    className='w-full h-[30px] border-b-2 border-gray-400 outline-none'
                                    type="text" 
                                    name="address"
                                    value={aboutUs.address}
                                    id="" 
                                    onChange={handleOnChange}
                                  />
                                ) : (
                                  <p>{ aboutUs.address }</p>
                                )
                              }
                            </div>
                            <div className='w-full pt-5'>
                              <p className='font-semibold text-blue-950'>Phone Number</p>
                              {
                                isEdit ? (
                                  <input 
                                    className='w-full h-[30px] border-b-2 border-gray-400 outline-none'
                                    type="text" 
                                    name="phone"
                                    value={aboutUs.phone}
                                    id="" 
                                    onChange={handleOnChange}
                                  />
                                ) : (
                                  <p>{ aboutUs.phone }</p>
                                )
                              }
                            </div>
                            <div className='w-full pt-5'>
                              <p className='font-semibold text-blue-950 '>Email</p>
                              {
                                isEdit ? (
                                  <input
                                    className='w-full h-[30px] border-b-2 border-gray-400 outline-none'
                                    type="email" 
                                    name="email"
                                    value={aboutUs.email}
                                    id="" 
                                    onChange={handleOnChange}
                                  />
                                ) : (
                                  <p>{ aboutUs.email }</p>
                                )
                              }
                            </div> 

                            {
                              isEdit ? (
                                <button 
                                  className="w-[100px] h-[30px] mt-10 flex justify-center items-center bg-green-600 text-white text-xl rounded hover:scale-105"
                                  onClick={handleSaveChange}
                                >
                                  Save
                                </button>
                              ) : (
                                <button 
                                  className="w-[100px] h-[30px] mt-10 flex justify-center items-center bg-red-600 text-white text-xl rounded hover:scale-105"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsEdit(true);
                                  }}
                                >
                                  Edit
                                  <FaEdit className="ms-2" />
                                </button>
                              )
                            }

                             

                          </div>
                               
                        </div>
               </form>



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
  
  export default AboutUs