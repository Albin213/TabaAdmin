// "use client"

// import React , { useState, useEffect } from 'react'
// import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
// import { RiImageAddFill } from "react-icons/ri";
// import axios from 'axios';

// function ExecutiveCommittee() {

//   const [updatePresident, setUpdatePresident] = useState(false);

//   const [data, setData] = useState([]);

//   const [updateData, setUpdate] = useState({
//     name: "",
//     image: "",
//     description: ""
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/about`);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
  

//    const presidentArray = data.filter((member) => member.description === "President");
//    const president = presidentArray[0];
//    console.log(president);
   

//    const secretaryArray = data.filter((member) => member.description === "Secretary");
//    const secretary = secretaryArray[0];
//    console.log(secretary);

//    const librarianArray = data.filter((member) => member.description === "Librarian");
//    const librarian = librarianArray[0];
//    console.log(librarian);





//    function handlePresidentChange(event) {
//     const {name,image, description} = event.target
//       setUpdateData((prevValue) => {
//        return {...prevValue, [name]:value}
//     }
//     ) 
//    }





//   async function handleSubmit() {
    
//       event.preventDefault();
//       const { name, image, description } = updateData;
  
//       if(name && image && description) {
//           console.log(JSON.stringify(data));
//           await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/update-about/${president._id}`, updateData)
//           .then(res =>{
//               console.log(res.data);
//               alert(res.data.message);
//               setTimeout(() => {
//                   window.location.href = "/admin/executiveCommittee";    
//               }, 1000);
//           })
//           .catch(err => {
//               console.log('error',err.response.data);
//               alert(err.response.data.message);
//           })
      

//   }
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
//         <div className="bg-admin w-[80%] h-full p-8 pe-10 overflow-y-auto">
//           <div className='w-full bg-[hsla(0,0%,0%,0.4)] text-white'><h1 className='text-3xl p-2'>Executive Committee</h1></div>

//           <div className='flex justify-between h-[350px] mt-5'>

//             {/* -----------President Card---------- */}
//             {
//               !updatePresident ? 

//               <div className="w-[25%] h-full p-3 bg-[#ffffffc9] text-center border-white border-[0.5px] rounded-[12px]">
//                 <p className=" text-2xl">{president && president.description}</p>
//                 <div className="w-[70%] h-[200px] mx-auto">
//                   <img className="w-full h-full" src={president && "data:image/png;base64," + president.image }/>
//                 </div>
//                 <p className="text-xl mt-1">{president && president.name}</p>
//                 <button 
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => setUpdatePresident(true)}
//                 >Update</button>
//               </div>

//               :

//               <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
//                 {/* <p className=" text-2xl">{president && president.description}</p> */}
//                 <input 
//                   className="h-5 w-full p-2 mt-1 text-2xl text-center" 
//                   type="text" 
//                   placeholder="President"
//                   name="description"
//                   value={updateData.description ? updateData.description : president.description }
//                   onChange={handlePresidentChange}
//                 />
//                 <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
//                   <label htmlFor="presidentImage">
//                     <RiImageAddFill className="text-8xl" />
//                     <input 
//                       className="w-full h-full"
//                       type="file"
//                       id="presidentImage"
//                       name= "image"
//                       accept="image/*"
//                       hidden
//                       placeholder="+ Add Image"
//                       onChange={handlePresidentChange}
//                       value={updateData.image}
//                     />
//                   </label>
//                 </div>
//                 <input 
//                   className="h-8 p-2 text-sm mt-1 border-black border-2" 
//                   type="text" 
//                   placeholder="President's name" 
//                   name="name"
//                   value={updateData.name}
//                   onChange={handlePresidentChange}
//                 />
//                 <button 
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => {setUpdatePresident(false); handleSubmit()}}
//                 >Submit</button>
//               </div>
          
//             }

            










//             <div className="w-[25%] h-full p-3 bg-[#ffffff80] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className=" text-2xl">{secretary && secretary.description}</p>
//               <div className="w-[70%] h-[200px] mx-auto">
//                 <img className="w-full h-full" src={secretary && "data:image/png;base64," + secretary.image }/>
//               </div>
//               <p className=" text-xl mt-1">{secretary && secretary.name}</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px] rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[200px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>
                
//          </div>


//         <div className="w-full mt-10 bg-[hsla(0,0%,0%,0.4)] text-white">
//             <h2 className="text-3xl p-2">Executive Members</h2>    
//         </div>

//         <div className="w-full mt-10 flex flex-wrap justify-evenly">
            
//             <div className="w-[20%] h-[300px] p-2 me-10 mb-5 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[20%] h-[300px] p-2 me-10 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[20%] h-[300px] p-2 me-10 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[20%] h-[300px] p-2 me-10 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[20%] h-[300px] p-2 me-10 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

//             <div className="w-[20%] h-[300px] p-2 me-10 bg-[hsla(0,0%,0%,0.6)] text-center border-white border-[0.5px] rounded-[12px]">
//               <p className="text-white text-2xl">Librarian</p>
//               <div className="w-[70%] h-[150px] mx-auto">
//                 <img className="w-full h-full" src='/profile_dummy.jpeg'/>
//               </div>
//               <p className="text-white text-xl mt-1">Jasmin John</p>
//               <button className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-white border-[0.5px] text-white rounded-md font-bold hover:bg-slate-300 hover:text-black">Update</button>
//             </div>

            

//         </div>



//         </div>
//       </div>
//     </div>
//   )
// }

// export default ExecutiveCommittee











// "use client"
// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
// import { RiImageAddFill } from "react-icons/ri";
// import axios from "axios";

// function ExecutiveCommittee() {


//   const [updatePresident, setUpdatePresident] = useState(false);
//   const [data, setData] = useState([]);
//   const [updateData, setUpdateData] = useState({
//     name: "",
//     image: null,
//     description: "",
//   });


//   console.log(updateData.image);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/about`
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const presidentArray = data.filter(
//     (member) => member.description === "President"
//   );
//   const president = presidentArray[0];

//   function handlePresidentChange(event) {
//     const { name, value, files } = event.target;
//     setUpdateData((prevValue) => ({
//       ...prevValue,
//       [name]: name === "image" ? files[0] : value,
//     }));
//   }

//   const secretaryArray = data.filter(
//     (member) => member.description === "secretary"
//   );
//   const secretary = presidentArray[0];

//   // function handlePresidentChange(event) {
//   //   const { name, value, files } = event.target;
//   //   setUpdateData((prevValue) => ({
//   //     ...prevValue,
//   //     [name]: name === "image" ? files[0] : value,
//   //   }));
//   // }

//   async function handleSubmit() {
//     const formData = new FormData();
//     formData.append("name", updateData.name);
//     formData.append("description", updateData.description);
//     if (updateData.image) {
//       formData.append("image", updateData.image);
//     }

//     try {
//       const res = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/update-about/${president._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
      

//       // Update the state with the new values
//       setUpdateData({
//         ...updateData,
//         name: res.data.name, // Update with the new name
//         image: res.data.image, // Update with the new image URL
//       });

//       alert(res.data.message);

//       setTimeout(() => {
//         window.location.href = "/admin/executiveCommittee";
//       }, 1000);
//     } catch (err) {
//       console.log("error", err.response.data);
//       alert(err.response.data.message);
//     }
//   }

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10%]  bg-slate-950">
//         <Navbar />
//       </div>
//       <div className="w-full h-[90%] flex">
//         <div className="w-[20%] h-full bg-slate-950">
//           <Sidebar />
//         </div>
//         <div className="bg-admin w-[80%] h-full p-8 pe-10 overflow-y-auto">
//           <div className="w-full bg-[hsla(0,0%,0%,0.4)] text-white">
//             <h1 className="text-3xl p-2">Executive Committee</h1>
//           </div>

//           <div className="flex justify-between h-[350px] mt-5">
//             {/* -----------President Card---------- */}
//             {!updatePresident ? (
//               <div className="w-[25%] h-full p-3 bg-[#ffffff90] text-center border-white border-[0.5px] rounded-[12px]">
//                 <p className="text-2xl">
//                   {president && president.description}
//                 </p>
//                 <div className="w-[70%] h-[200px] mx-auto">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={
//                       president &&
//                       `data:image/png;base64,${president.image}`
//                     }
//                     alt="President"
//                   />
//                 </div>
//                 <p className="text-xl mt-1">{president && president.name}</p>
//                 <button
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => setUpdatePresident(true)}
//                 >
//                   Update
//                 </button>
//               </div>
//             ) : (
//               <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
//                 <input
//                   className="h-5 w-full p-2 mt-1 text-2xl text-center"
//                   type="text"
//                   placeholder="President"
//                   name="description"
//                   value={
//                     updateData.description
//                       ? updateData.description
//                       : president.description
//                   }
//                   onChange={handlePresidentChange}
//                 />
//                 <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
//                   <label htmlFor="presidentImage">
//                     {
//                       updateData.image ? (
//                         <img
//                           className="w-full h-full object-cover"
//                           src={updateData.image}
//                           accept="image/*"
//                           alt="President"
//                         />
//                       ) : (
//                         <RiImageAddFill className="text-8xl" />
//                       )
//                     }
//                     <input
//                       className="w-full h-full"
//                       type="file"
//                       id="presidentImage"
//                       name="image"
//                       accept="image/*"
//                       hidden
//                       onChange={handlePresidentChange}
//                     />
//                   </label>
//                 </div>
//                 <input
//                   className="h-8 p-2 text-sm mt-1 border-black border-2"
//                   type="text"
//                   placeholder="President's name"
//                   name="name"
//                   value={updateData.name}
//                   onChange={handlePresidentChange}
//                 />
//                 <button
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => {
//                     setUpdatePresident(false);
//                     handleSubmit();
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExecutiveCommittee;






// "use client"
// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
// import { RiImageAddFill } from "react-icons/ri";
// import axios from "axios";

// function ExecutiveCommittee() {
//   const [updatePresident, setUpdatePresident] = useState(false);
//   const [data, setData] = useState([]);
//   const [updateData, setUpdateData] = useState({
//     name: "",
//     image: null,
//     description: "",
//     imagePreview: null,
//     imageWidth: null,
//     imageHeight: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/about`
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const presidentArray = data.filter(
//     (member) => member.description === "President"
//   );
//   const president = presidentArray[0];

//   function handlePresidentChange(event) {
//     const { name, value, files } = event.target;
//     if (name === "image") {
//       const selectedImage = files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         const img = new Image();
//         img.src = reader.result;
//         img.onload = () => {
//           const width = img.width;
//           const height = img.height;
//           setUpdateData((prevValue) => ({
//             ...prevValue,
//             [name]: selectedImage,
//             imagePreview: URL.createObjectURL(selectedImage),
//             imageWidth: width,
//             imageHeight: height,
//           }));
//         };
//       };
//       reader.readAsDataURL(selectedImage);
//     } else {
//       setUpdateData((prevValue) => ({
//         ...prevValue,
//         [name]: value,
//       }));
//     }
//   }

//   async function handleSubmit() {
//     const formData = new FormData();
//     formData.append("name", updateData.name);
//     formData.append("description", updateData.description);
//     if (updateData.image) {
//       formData.append("image", updateData.image);
//     }

//     try {
//       const res = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/update-about/${president._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setUpdateData({
//         ...updateData,
//         name: res.data.name,
//         image: res.data.image,
//       });

//       alert(res.data.message);

//       setTimeout(() => {
//         window.location.href = "/admin/executiveCommittee";
//       }, 1000);
//     } catch (err) {
//       console.log("error", err.response.data);
//       alert(err.response.data.message);
//     }
//   }

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10%]  bg-slate-950">
//         <Navbar />
//       </div>
//       <div className="w-full h-[90%] flex">
//         <div className="w-[20%] h-full bg-slate-950">
//           <Sidebar />
//         </div>
//         <div className="bg-admin w-[80%] h-full p-8 pe-10 overflow-y-auto">
//           <div className="w-full bg-[hsla(0,0%,0%,0.4)] text-white">
//             <h1 className="text-3xl p-2">Executive Committee</h1>
//           </div>

//           <div className="flex justify-between h-[350px] mt-5">
//             {!updatePresident ? (
//               <div className="w-[25%] h-full p-3 bg-[#ffffff90] text-center border-white border-[0.5px] rounded-[12px]">
//                 <p className="text-2xl">{president && president.description}</p>
//                 <div className="w-[70%] h-[200px] mx-auto">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={president && `data:image/png;base64,${president.image}`}
//                     alt="President"
//                   />
//                 </div>
//                 <p className="text-xl mt-1">{president && president.name}</p>
//                 <button
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => setUpdatePresident(true)}
//                 >
//                   Update
//                 </button>
//               </div>
//             ) : (
//               <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
//                 <input
//                   className="h-5 w-full p-2 mt-1 text-2xl text-center"
//                   type="text"
//                   placeholder="President"
//                   name="description"
//                   value={updateData.description ? updateData.description : president.description}
//                   onChange={handlePresidentChange}
//                 />
//                 <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
//                   <label htmlFor="presidentImage">
//                     {updateData.imagePreview ? (
//                       <img
//                         className="w-[120px]  object-cover"
//                         src={updateData.imagePreview}
                        
//                         alt="President"
//                       />
//                     ) : (
//                       <RiImageAddFill className="text-8xl" />
//                     )}
//                     <input
//                       className="w-full h-full "
//                       type="file"
//                       id="presidentImage"
//                       name="image"
//                       accept="image/*"
//                       hidden
//                       onChange={handlePresidentChange}
//                     />
//                   </label>
//                 </div>
//                 <input
//                   className="h-8 p-2 text-sm mt-1 border-black border-2"
//                   type="text"
//                   placeholder="President's name"
//                   name="name"
//                   value={updateData.name}
//                   onChange={handlePresidentChange}
//                 />
//                 <button
//                   className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
//                   onClick={() => {
//                     setUpdatePresident(false);
//                     handleSubmit();
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExecutiveCommittee;





// nnnnnnnnnnnnnnneeeeeeeeeeeeeeeewwwwwwwwwwwww
















"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { RiImageAddFill } from "react-icons/ri";
import axios from "axios";

function ExecutiveCommittee() {
  const [updatePresident, setUpdatePresident] = useState(false);
  const [updateSecretary, setUpdateSecretary] = useState(false);
  const [updateLibrarian, setUpdateLibrarian] = useState(false);
  const [updateExecMember,setUpdateExecMember] = useState(false)
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    name: "",
    image: null,
    description: "",
    imagePreview: null,
    imageWidth: null,
    imageHeight: null,
  });

  const [editableMember, setEditableMember] = useState(null);

  const [loggedIn, setLoggedIn] = useState("");




  useEffect(() => {

    setLoggedIn(localStorage.getItem("isLoggedIn"));

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/about`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const presidentArray = data.filter(
    (member) => member.description === "President"
  );
  const president = presidentArray[0];

  const secretaryArray = data.filter(
    (member) => member.description === "Secretary"
  );
  const secretary = secretaryArray[0];

  const librarianArray = data.filter(
    (member) => member.description === "Librarian"
  );
  const librarian = librarianArray[0];

  const execMembersArray = data.filter(
    (member) => member.description === "Executive member"
  );
  // const Executive_members = execMemberArray[0];
  // console.log(execMembersArray[0]);

  function handleMemberChange(event, member) {
    const { name, value, files } = event.target;
    if (name === "image") {
      const selectedImage = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          setUpdateData((prevValue) => ({
            ...prevValue,
            [name]: selectedImage,
            imagePreview: URL.createObjectURL(selectedImage),
            imageWidth: width,
            imageHeight: height,
          }));
        };
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setUpdateData((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(member) {
    const formData = new FormData();
    formData.append("name", updateData.name);
    formData.append("description", updateData.description);
    if (updateData.image) {
      formData.append("image", updateData.image);
    }

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/update-about/${member._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUpdateData({
        ...updateData,
        name: res.data.name,
        image: res.data.image,
      });

      alert(res.data.message);

      setTimeout(() => {
        window.location.href = "/admin/executiveCommittee";
      }, 1000);
    } catch (err) {
      // console.log("error", err.response.data);
      alert(err.response.data.message);
    }
  }

  return (

    <>
    
      {
        loggedIn === "true" ? 
        (
          <div className="w-full h-[100vh]">
          <div className="w-full h-[10%]  bg-slate-950">
            <Navbar />
          </div>
          <div className="w-full h-[90%] flex">
            <div className="w-[20%] h-full bg-slate-950">
              <Sidebar />
            </div>
            <div className="bg-admin w-[80%] h-full p-8 pe-10 overflow-y-auto">
              <div className="w-full bg-[hsla(0,0%,0%,0.4)] text-white">
                <h1 className="text-3xl p-2">Executive Committee</h1>
              </div>
    
              <div className="flex justify-between h-[350px] mt-5">
                {/* President Card */}
                {!updatePresident ? (
                  <div className="w-[25%] h-full p-3 bg-zinc-300 text-center border-white border-[0.5px] rounded-[12px]">
                    <p className="text-2xl">{president && president.description}</p>
                    <div className="w-[70%] h-[200px] mx-auto">
                      <img
                        className="w-full h-full object-cover"
                        src={president && `data:image/png;base64,${president.image}`}
                        alt="President"
                      />
                    </div>
                    <p className="text-xl mt-1">{president && president.name}</p>
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[#ffffffc1] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => setUpdatePresident(true)}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
                    <input
                      className="h-5 w-full p-2 mt-1 text-2xl text-center"
                      type="text"
                      placeholder="President"
                      name="description"
                      value={updateData.description ? updateData.description : president.description}
                      onChange={(event) => handleMemberChange(event, president)}
                    />
                    <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
                      <label htmlFor="presidentImage">
                        {updateData.imagePreview ? (
                          <img
                            className="w-[120px]  object-cover"
                            src={updateData.imagePreview}
                            
                            alt="President"
                          />
                        ) : (
                          <RiImageAddFill className="text-8xl" />
                        )}
                        <input
                          className="w-full h-full"
                          type="file"
                          id="presidentImage"
                          name="image"
                          accept="image/*"
                          hidden
                          onChange={(event) => handleMemberChange(event, president)}
                        />
                      </label>
                    </div>
                    <input
                      className="h-8 p-2 text-sm mt-1 border-black border-2"
                      type="text"
                      placeholder="President's name"
                      name="name"
                      value={updateData.name}
                      onChange={(event) => handleMemberChange(event, president)}
                    />
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => {
                        setUpdatePresident(false);
                        handleSubmit(president);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}
    
                {/* Secretary Card */}
                {!updateSecretary ? (
                  <div className="w-[25%] h-full p-3 bg-zinc-300 text-center border-white border-[0.5px] rounded-[12px]">
                    <p className="text-2xl">{secretary && secretary.description}</p>
                    <div className="w-[70%] h-[200px] mx-auto">
                      <img
                        className="w-full h-full object-cover"
                        src={secretary && `data:image/png;base64,${secretary.image}`}
                        alt="Secretary"
                      />
                    </div>
                    <p className="text-xl mt-1">{secretary && secretary.name}</p>
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[#ffffffc1] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => setUpdateSecretary(true)}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
                    {/* Add input fields, image upload, and submit button for secretary */}
                    <input
                      className="h-5 w-full p-2 mt-1 text-2xl text-center"
                      type="text"
                      placeholder="Secretary"
                      name="description"
                      value={updateData.description ? updateData.description : secretary.description}
                      onChange={(event) => handleMemberChange(event, secretary)}
                    />
                    {/* Add image preview */}
                    <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
                      <label htmlFor="secretaryImage">
                        {updateData.imagePreview ? (
                          <img
                            className="w-[120px]  object-cover"
                            src={updateData.imagePreview}
                            
                            alt="Secretary"
                          />
                        ) : (
                          <RiImageAddFill className="text-8xl" />
                        )}
                        <input
                          className="w-full h-full"
                          type="file"
                          id="secretaryImage"
                          name="image"
                          accept="image/*"
                          hidden
                          onChange={(event) => handleMemberChange(event, secretary)}
                        />
                      </label>
                    </div>
                    {/* Add input field for name */}
                    <input
                      className="h-8 p-2 text-sm mt-1 border-black border-2"
                      type="text"
                      placeholder="Secretary's name"
                      name="name"
                      value={updateData.name}
                      onChange={(event) => handleMemberChange(event, secretary)}
                    />
                    {/* Add submit button */}
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => {
                        setUpdateSecretary(false);
                        handleSubmit(secretary);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}
    
                {/* Librarian Card */}
                {!updateLibrarian ? (
                  <div className="w-[25%] h-full p-3 bg-zinc-300 text-center border-white border-[0.5px] rounded-[12px]">
                    <p className="text-2xl">{librarian && librarian.description}</p>
                    <div className="w-[70%] h-[200px] mx-auto">
                      <img
                        className="w-full h-full object-cover"
                        src={librarian && `data:image/png;base64,${librarian.image}`}
                        alt="Librarian"
                      />
                    </div>
                    <p className="text-xl mt-1">{librarian && librarian.name}</p>
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[#ffffffc1] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => setUpdateLibrarian(true)}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
                    {/* Add input fields, image upload, and submit button for librarian */}
                    <input
                      className="h-5 w-full p-2 mt-1 text-2xl text-center"
                      type="text"
                      placeholder="Librarian"
                      name="description"
                      value={updateData.description ? updateData.description : librarian.description}
                      onChange={(event) => handleMemberChange(event, librarian)}
                    />
                    {/* Add image preview */}
                    <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
                      <label htmlFor="librarianImage">
                        {updateData.imagePreview ? (
                          <img
                            className="w-[120px]  object-cover"
                            src={updateData.imagePreview}
                            
                            alt="Librarian"
                          />
                        ) : (
                          <RiImageAddFill className="text-8xl" />
                        )}
                        <input
                          className="w-full h-full"
                          type="file"
                          id="librarianImage"
                          name="image"
                          accept="image/*"
                          hidden
                          onChange={(event) => handleMemberChange(event, librarian)}
                        />
                      </label>
                    </div>
                    {/* Add input field for name */}
                    <input
                      className="h-8 p-2 text-sm mt-1 border-black border-2"
                      type="text"
                      placeholder="Librarian's name"
                      name="name"
                      value={updateData.name}
                      onChange={(event) => handleMemberChange(event, librarian)}
                    />
                    {/* Add submit button */}
                    <button
                      className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                      onClick={() => {
                        setUpdateLibrarian(false);
                        handleSubmit(librarian);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
    
    
              <div className="w-full mt-4 bg-[hsla(0,0%,0%,0.4)] text-white">
                <h1 className="text-3xl p-2">Executive Members</h1>
              </div>
    
    
              <div className="w-full mt-10 flex flex-wrap justify-evenly">
    
                {
                  execMembersArray.map((execMember, index) => {
                    return (
                      !updateExecMember  ? (
                        <div className="w-[23%] h-[350px] p-3 mb-3 bg-zinc-300 text-center border-white border-[0.5px] rounded-[12px]">
                          <p className="text-2xl">Executive Member</p>
                          <div className="w-[70%] h-[200px] mx-auto">
                            <img
                              className="w-full h-full object-cover"
                              src={execMember && `data:image/png;base64,${execMember.image}`}
                              alt="Secretary"
                            />
                          </div>
                          <p className="text-xl mt-1">{execMember && execMember.name}</p>
                          <button
                            className="w-[65%] h-[40px] mt-3 bg-[#ffffffc1] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                            onClick={() => {setUpdateExecMember(true); setEditableMember(execMember._id)}}
                          >
                            Update
                          </button>
                        </div>
                      ) : (
    
                        editableMember === execMember._id &&
                        
                        <div className="w-[25%] h-full p-3 bg-[hsla(0,0%,100%,1)] text-center border-white border-[0.5px] rounded-[12px]">
                          {/* Add input fields, image upload, and submit button for secretary */}
                          <input
                            className="h-5 w-full p-2 mt-1 text-2xl text-center"
                            type="text"
                            placeholder="Executive_member"
                            name="description"
                            value="Executive Member"
                            onChange={(event) => handleMemberChange(event, execMember)}
                          />
                          {/* Add image preview */}
                          <div className="w-[70%] h-[200px] mx-auto flex justify-center items-center">
                            <label htmlFor="execMemberImage">
                              {updateData.imagePreview ? (
                                <img
                                  className="w-[90px]  object-cover"
                                  src={updateData.imagePreview}
                                  
                                  alt="Executive member"
                                />
                              ) : (
                                <RiImageAddFill className="text-8xl" />
                              )}
                              <input
                                className="w-full h-full"
                                type="file"
                                id="execMemberImage"
                                name="image"
                                accept="image/*"
                                hidden
                                onChange={(event) => handleMemberChange(event, execMember)}
                              />
                            </label>
                          </div>
                          {/* Add input field for name */}
                          <input
                            className="h-8 p-2 text-sm mt-1 border-black border-2"
                            type="text"
                            placeholder="member name"
                            name="name"
                            value={updateData.name}
                            onChange={(event) => handleMemberChange(event, execMember)}
                          />
                          {/* Add submit button */}
                          <button
                            className="w-[65%] h-[40px] mt-3 bg-[hsla(0,0%,100%,0.2)] border-black border-[0.5px]  rounded-md font-bold hover:bg-slate-300 hover:text-black"
                            onClick={() => {
                              setUpdateExecMember(false);
                              handleSubmit(execMember);
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      )
                    );
                  })
                }
              
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

export default ExecutiveCommittee;







//  with out six member ----------------------------------..................>>>>>>>>>>>>.



