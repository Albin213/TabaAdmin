// import React from 'react'

// function MemberDetails(props) {
//   return (
    
//     <div className='absolute top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-[1px] z-10 flex justify-center items-center overflow-hidden'>
//         <div className='w-[900px] h-[500px] bg-transparent rounded  flex'>
            
//             {/*---------- left div-------------- */}
//             <div className='bg-white w-[30%] me-[14px] border-blue-900 border-b-2'>
//                 <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//                     <img className=' rounded-full h-[180px] w-[180px] border-4 object-cover'  src={"data:image/png;base64," + props.member.image} alt='Profile photo'/>
//                 </div>
//                 <div className='w-full h-[40%] text-blue-950 text-center pt-10'>
//                     <h1 className='text-xl font-bold'>{props.member.firstName} {props.member.lastName}</h1>
//                     <p className='text-xl'>{props.member.regNo}</p>
//                 </div> 
//             </div>
            

//             {/*---------- right div-------------- */}
//             <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>

//                 <div className='w-full flex'>
//                     <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//                     <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={ () => { props.handleCloseViewMemberDetails() } }>x</button>
//                 </div>
                

//                 <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4'>
//                     <div className='w-full h-full overflow-y-auto'>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Date of Birth</div>
//                             <div>{props.member.DOB}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Email</div>
//                             <div>{props.member.email}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Phone number</div>
//                             <div>{props.member.phone}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Address</div>
//                             <div>{props.member.address}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Office Address</div>
//                             <div>{props.member.officeAddress}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk Name</div>
//                             <div>Jasmine</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk phone</div>
//                             <div>987654323456</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Blood Group</div>
//                             <div>{props.member.bloodGroup}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Welfare member</div>
//                             <div>{props.member.welfareMember}</div>
//                         </div>
//                         <div>
//                             <div>Enrollment Date</div>
//                             <div>{props.member.enrollmentDate}</div>
//                         </div>
//                         <div>
//                             <div>Pincode</div>
//                             <div>{props.member.pincode}</div>
//                         </div>
//                         <div>
//                             <div>District</div>
//                             <div>{props.member.district}</div>
//                         </div>
//                         <div>
//                             <div>State</div>
//                             <div>{props.member.state}</div>
//                         </div>
//                         <div>
//                             <div>Whatsapp No</div>
//                             <div>{props.member.whatsAppno}</div>
//                         </div>
//                         <div>
//                             <div>Paid Amount</div>
//                             <div>6894</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                     </div> 
//                 </div>
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default MemberDetails






// // MemberDetails.js
// import React from 'react';
// import { AiFillDelete } from "react-icons/ai";

// function MemberDetails(props) {
//   const handleCloseDetails = () => {
//     props.handleCloseViewMemberDetails();
//   };
  

//   return (
//     <div className='fixed top-0 left-0 w-full h-full backdrop-blur-[1px] z-10 flex justify-center items-center overflow-hidden'>
//       <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
//         <div className='bg-white w-[30%] border-blue-900 border-b-2'>
//           <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//             <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />
//           </div>
//           <div className='w-full h-[40%] text-blue-950 text-center pt-10'>
//             <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
//             <p className='text-xl'>{props.member.regNo}</p>
//             <div className='mt-12 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer'>
//               <AiFillDelete className="text-2xl me-1"/> Delete Member
//             </div>
//           </div>

//         </div>

//         <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
//           <div className='w-full flex'>
//             <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//             <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
//           </div>

//           <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Date of Birth</div>
//               <div>{props.member.DOB}</div>
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Email</div>
//               <div>{props.member.email}</div>
//             </div>
//             {/* ... (other member details) */}




//             <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Phone number</div>
//                             <div>{props.member.phone}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Address</div>
//                             <div>{props.member.address}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Office Address</div>
//                             <div>{props.member.officeAddress}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk Name</div>
//                             <div>Jasmine</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk phone</div>
//                             <div>987654323456</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Blood Group</div>
//                             <div>{props.member.bloodGroup}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Welfare member</div>
//                             <div>{props.member.welfareMember}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Enrollment Date</div>
//                             <div>{props.member.enrollmentDate}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Pincode</div>
//                             <div>{props.member.pincode}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>District</div>
//                             <div>{props.member.district}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>State</div>
//                             <div>{props.member.state}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Whatsapp No</div>
//                             <div>{props.member.whatsAppno}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Paid Amount</div>
//                             <div>6894</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberDetails;










////////////////// this is the existing code ///////////


// // MemberDetails.js
// import React from 'react';
// import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";


// function MemberDetails(props) {

//   console.log(props.member);


//   const handleCloseDetails = () => {
//     props.handleCloseViewMemberDetails();
//   };

//   const handleDeleteMember = () => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this member?");
//     if (isConfirmed) {
//       const userId = props.member._id; // Adjust this based on your data structure
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/delete/${userId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to delete member: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.message === 'User deleted successfully') {
//           // console.log('Member deleted successfully');
//           handleCloseDetails();
//           window.location.href = "/admin/membersList";
          
//         } else if (data.message === 'User not found') {
//           console.error('User not found');
//         } else {
//           console.error(`Failed to delete member: ${data.message}`);
//         }
//       })
//       .catch(error => {
//         console.error('Error while deleting member:', error);
//       });
//     }
//   };

//   return (
//     <div className='fixed top-0 left-0 w-full h-full bg-[#00000096] backdrop-blur-sm z-10 flex justify-center items-center overflow-hidden'>
//       <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
//         <div className='bg-white w-[30%] border-blue-900 border-b-2'>
//           <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//             <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />
//           </div>
//           <div className='w-full h-[40%] text-blue-950 text-center pt-8'>
//             <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
//             <p className='text-xl'>{props.member.regNo}</p>
//             <div className='mt-8 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer' onClick={handleDeleteMember}>
//               <AiFillDelete className="text-2xl me-1"/> Delete Member
//             </div>
//           </div>
//         </div>

//         <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
//           <div className='w-full flex items-center'>
//             <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//             <p 
//               className="ms-10 flex items-center text-red-400 text-xl cursor-pointer"
//               // onClick={}
//             >
//                 Edit<FaEdit className="ms-2" />
//             </p>
//             <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[300px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
//           </div>

//           <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Date of Birth</div>
//               <div>{props.member.DOB}</div>
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Email</div>
//               <div>{props.member.email}</div>
//             </div>
            
//                   <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Phone number</div>
//                        <div>{props.member.phone}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Address</div>
//                        <div>{props.member.address}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Office Address</div>
//                        <div>{props.member.officeAddress}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Clerk 1 Name</div>
//                        <div>{props.member.clerkName1}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Clerk 1 phone</div>
//                        <div>{props.member.clerkPhone1}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Clerk 2 Name</div>
//                        <div>{props.member.clerkName2}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Clerk 2 phone</div>
//                        <div>{props.member.clerkPhone2}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Blood Group</div>
//                        <div>{props.member.bloodGroup}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Welfare member</div>
//                        <div>{props.member.welfareMember}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Enrollment Date</div>
//                        <div>{props.member.enrollmentDate}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Pincode</div>
//                        <div>{props.member.pincode}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>District</div>
//                        <div>{props.member.district}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>State</div>
//                        <div>{props.member.state}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Whatsapp No</div>
//                        <div>{props.member.whatsAppno}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Paid Amount</div>
//                        <div>{props.member.paidAmount}</div>
//                    </div>
//                    <div className='mb-3'>
//                        <div className='font-bold  text-blue-900'>Due Amount</div>
//                        <div>{props.member.annualFee}</div>
//                    </div>
                   
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberDetails;








/////////////////////////////////////////////////////////////////





// import React, { useState } from 'react';
// import axios from 'axios'; 
// import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";

// function MemberDetails(props) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedMember, setEditedMember] = useState({ ...props.member });
//   console.log(props.member);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedMember((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSaveChanges = async () => {
//     try {
//       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/update-fee/${props.member._id}`, editedMember);
//       console.log('Updated member details:', response.data);
//       setIsEditing(false);
//       // Update the member details in the parent component's state
//       props.onMemberDetailsUpdated(response.data.updatedMember);
//     } catch (error) {
//       console.error('Failed to update member details:', error);
//     }
//   };

//   const handleCloseDetails = () => {
//     props.handleCloseViewMemberDetails();
//   };

//   const handleDeleteMember = () => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this member?");
//          if (isConfirmed) {
//            const userId = props.member._id; // Adjust this based on your data structure
//            fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/delete/${userId}`, {
//              method: 'DELETE',
//              headers: {
//                'Content-Type': 'application/json',
//              },
//            })
//            .then(response => {
//              if (!response.ok) {
//                throw new Error(`Failed to delete member: ${response.statusText}`);
//              }
//              return response.json();
//            })
//            .then(data => {
//              if (data.message === 'User deleted successfully') {
//                // console.log('Member deleted successfully');
//                handleCloseDetails();
//                window.location.href = "/admin/membersList";
              
//              } else if (data.message === 'User not found') {
//                console.error('User not found');
//              } else {
//                console.error(`Failed to delete member: ${data.message}`);
//              }
//            })
//            .catch(error => {
//              console.error('Error while deleting member:', error);
//            });
//          }

//   };

//   return (
//     <div className='fixed top-0 left-0 w-full h-full bg-[#00000096] backdrop-blur-sm z-10 flex justify-center items-center overflow-hidden'>
//       <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
//         <div className='bg-white w-[30%] border-blue-900 border-b-2'>
//           <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//             <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image ? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />


           
//           </div>
//           {/* <div className='w-full h-[40%] text-blue-950 text-center pt-8'>
//             <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
//             <p className='text-xl'>{props.member.regNo}</p> */}



// <div className='w-full h-[40%] text-blue-950 text-center pt-8'>
//   {isEditing ? (
//     <div>
//       <input
//         type="text"
//         name="firstName"
//         className="border-b-2 border-rose-300 w-[220px] outline-none"
//         value={editedMember.firstName}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="regNo"
//         className="border-b-2 border-rose-300 w-[220px] outline-none"
//         value={editedMember.regNo}
//         onChange={handleInputChange}
//       />
//     </div>
//   ) : (
//     <div>
//       <h1 className='text-xl font-bold'>{editedMember.firstName}</h1>
//       <p className='text-xl'>{editedMember.regNo}</p>
//     </div>
//   )}

//           {!isEditing &&
//             <div className='mt-8 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer' onClick={handleDeleteMember}>
//               <AiFillDelete className="text-2xl me-1"/> Delete Member
//             </div>
//              }
//           </div>
//         </div>

//         <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
//           <div className='w-full flex items-center'>
//             <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//             {isEditing ? (
//               <button className='ms-10 w-16 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xl cursor-pointer' onClick={handleSaveChanges}>
//                 Save
//               </button>
//             ) : (
//               <p className="ms-10 flex items-center text-red-300 text-xl cursor-pointer" onClick={handleEditToggle}>
//                 Edit<FaEdit className="ms-2" />

//               </p>
//             )}
//             <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[300px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
//           </div>

//           <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Date of Birth</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="DOB"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.DOB}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.DOB}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Email</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="email"
//                   className="border-b-2 border-rose-300 w-full outline-none"
//                   value={editedMember.email}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.email}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Phone Number</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="phone"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.phone}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.phone}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Address</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="address"
//                   className="border-b-2 border-rose-300 w-full outline-none"
//                   value={editedMember.address}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.address}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Office Address</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="officeAddress"
//                   className="border-b-2 border-rose-300 w-full outline-none"
//                   value={editedMember.officeAddress}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.officeAddress}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Clerk 1 Name </div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="clerkName1"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.clerkName1}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.clerkName1}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Clerk 1 Phone </div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="clerkPhone1"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.clerkPhone1}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.clerkPhone1}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Clerk 2 Name </div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="clerkName2"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.clerkName2}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.clerkName2}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Clerk 2 Phone </div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="clerkPhone2"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.clerkPhone2}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.clerkPhone2}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Blood Group</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="bloodGroup"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.bloodGroup}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.bloodGroup}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Welfare Member </div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="welfareMember"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.welfareMember}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.welfareMember}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Enrollment Date</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="enrollmentDate"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.enrollmentDate}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.enrollmentDate}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Pincode</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="pincode"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.pincode}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.pincode}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>District</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="district"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.district}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.district}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>State</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="state"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.state}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.state}</div>
//               )}
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>WhatsApp Number</div>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="whatsAppno"
//                   className="border-b-2 border-rose-300 w-[220px] outline-none"
//                   value={editedMember.whatsAppno}
//                   onChange={handleInputChange}
//                 />
//               ) : (
//                 <div>{editedMember.whatsAppno}</div>
//               )}
//             </div>
                  


//             <div className='mb-3'>
//                         <div className='font-bold  text-blue-900'>Paid Amount</div>
//                        <div>{props.member.paidAmount}</div>
//                     </div>
//                     <div className='mb-3'>
//                         <div className='font-bold  text-blue-900'>Due Amount</div>
//                        <div>{props.member.annualFee}</div>
//                          </div>


                       


//             {/* Repeat the above pattern for other details */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberDetails;


import React, { useState } from 'react';
import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function MemberDetails(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMember, setEditedMember] = useState({ ...props.member });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('image', imageFile); // Append the image file to the FormData object
      }
  
      // Append other member details to the FormData object
      Object.entries(editedMember).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/update-fee/${props.member._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Updated member details:', response.data);
      setIsEditing(false);
      // Update the member details in the parent component's state
      props.onMemberDetailsUpdated(response.data.updatedMember);
      
      // Update preview image with edited image data
      if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(imageFile);
      }
    } catch (error) {
      console.error('Failed to update member details:', error);
    }
  };

  const handleDeleteMember = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this member?");
    if (isConfirmed) {
      const userId = props.member._id; // Adjust this based on your data structure
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/delete/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to delete member: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.message === 'User deleted successfully') {
          console.log('Member deleted successfully');
          // Close the member details modal
          props.handleCloseViewMemberDetails();
          // Redirect to the member list page
          window.location.href = "/admin/membersList";
        } else if (data.message === 'User not found') {
          console.error('User not found');
        } else {
          console.error(`Failed to delete member: ${data.message}`);
        }
      })
      .catch(error => {
        console.error('Error while deleting member:', error);
      });
    }
  };
  
  
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#00000096] backdrop-blur-sm z-10 flex justify-center items-center overflow-hidden'>
      <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
        <div className='bg-white w-[30%] border-blue-900 border-b-2'>
          <div className='w-full h-[60%] bg-blue-900 flex flex-col items-center justify-center'>
            {isEditing ? (
              <>
                <label className="rounded-full h-[180px] w-[180px] relative flex justify-center items-center cursor-pointer" htmlFor="profileImage">
                  <img 
                    className='rounded-full h-[180px] w-[180px] border-4 object-cover' 
                    src={previewImage || (editedMember.image ? `data:image/png;base64,${editedMember.image}` : "/profile_dummy.jpeg")} 
                    alt='Profile' 
                  />
                  <div className="w-[120px] h-[40px] absolute bg-[#00000076] text-white hover:scale-110 flex justify-center items-center">+ Add Image</div>
                  <input 
                    className="mt-2"
                    id="profileImage"
                    type="file" 
                    onChange={handleImageChange}
                    hidden
                  />
                </label>
              </>
            ) : (
              <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={previewImage || (editedMember.image ? `data:image/png;base64,${editedMember.image}` : "/profile_dummy.jpeg")} alt='Profile' />
            )}
          </div>
          <div className='w-full h-[40%] text-blue-950 text-center pt-8'>
            {isEditing ? (
              <>
                <input type="text" name="firstName" className="border-b-2 border-rose-300 w-[220px] outline-none" value={editedMember.firstName} onChange={handleInputChange} />
                <input type="text" name="regNo" className="border-b-2 border-rose-300 w-[220px] outline-none" value={editedMember.regNo} onChange={handleInputChange} />
              </>
            ) : (
              <>
                <h1 className='text-xl font-bold'>{editedMember.firstName}</h1>
                <p className='text-xl'>{editedMember.regNo}</p>
              </>
            )}
             {!isEditing &&
             <div className='mt-8 text-[16px] text-red-600 font-light flex justify-center items-center text cursor-pointer' onClick={handleDeleteMember}>
               <AiFillDelete className="text-2xl me-1"/> Delete Member
             </div>
              }
          </div>
        </div>

        <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
          <div className='w-full flex items-center'>
            <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
            {isEditing ? (
              <button className='ms-10 w-16 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xl cursor-pointer' onClick={handleSaveChanges}>Save</button>
            ) : (
              <p className="ms-10 flex items-center text-red-600 text-xl cursor-pointer" onClick={handleEditToggle}>Edit<FaEdit className="ms-2" /></p>
            )}
            <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[300px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={props.handleCloseViewMemberDetails}>x</button>
          </div>


          <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
          <div className='mb-3'>
              <div className='font-bold text-blue-900'>Nick Name</div>
              {isEditing ? (
                <input
                  type="text"
                  name="nickName"
                  className="border-b-2 border-rose-300 w-full outline-none"
                  value={editedMember.nickName}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.nickName}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Date of Birth</div>
              {isEditing ? (
                <input
                  type="text"
                  name="DOB"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.DOB}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.DOB}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Email</div>
              {isEditing ? (
                <input
                  type="text"
                  name="email"
                  className="border-b-2 border-rose-300 w-full outline-none"
                  value={editedMember.email}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.email}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Phone Number</div>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.phone}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Office Number</div>
              {isEditing ? (
                <input
                  type="text"
                  name="officeNo"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.officeNo}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.officeNo}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Address</div>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  className="border-b-2 border-rose-300 w-full outline-none"
                  value={editedMember.address}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.address}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Office Address</div>
              {isEditing ? (
                <input
                  type="text"
                  name="officeAddress"
                  className="border-b-2 border-rose-300 w-full outline-none"
                  value={editedMember.officeAddress}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.officeAddress}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Clerk 1 Name </div>
              {isEditing ? (
                <input
                  type="text"
                  name="clerkName1"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.clerkName1}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.clerkName1}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Clerk 1 Phone </div>
              {isEditing ? (
                <input
                  type="text"
                  name="clerkPhone1"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.clerkPhone1}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.clerkPhone1}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Clerk 2 Name </div>
              {isEditing ? (
                <input
                  type="text"
                  name="clerkName2"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.clerkName2}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.clerkName2}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Clerk 2 Phone </div>
              {isEditing ? (
                <input
                  type="text"
                  name="clerkPhone2"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.clerkPhone2}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.clerkPhone2}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Blood Group</div>
              {isEditing ? (
                <input
                  type="text"
                  name="bloodGroup"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.bloodGroup}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.bloodGroup}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Welfare Member </div>
              {isEditing ? (
                <input
                  type="text"
                  name="welfareMember"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.welfareMember}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.welfareMember}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Enrollment Date</div>
              {isEditing ? (
                <input
                  type="text"
                  name="enrollmentDate"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.enrollmentDate}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.enrollmentDate}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Pincode</div>
              {isEditing ? (
                <input
                  type="text"
                  name="pincode"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.pincode}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.pincode}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>District</div>
              {isEditing ? (
                <input
                  type="text"
                  name="district"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.district}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.district}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>State</div>
              {isEditing ? (
                <input
                  type="text"
                  name="state"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.state}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.state}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>WhatsApp Number</div>
              {isEditing ? (
                <input
                  type="text"
                  name="whatsAppno"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.whatsAppno}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.whatsAppno}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Car Number 1</div>
              {isEditing ? (
                <input
                  type="text"
                  name="carNumber1"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.carNumber1}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.carNumber1}</div>
              )}
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Car Number 2</div>
              {isEditing ? (
                <input
                  type="text"
                  name="carNumber2"
                  className="border-b-2 border-rose-300 w-[220px] outline-none"
                  value={editedMember.carNumber2}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{editedMember.carNumber2}</div>
              )}
            </div>
                  


            <div className='mb-3'>
                        <div className='font-bold  text-blue-900'>Paid Amount</div>
                       <div>{props.member.paidAmount}</div>
                    </div>
                    <div className='mb-3'>
                        <div className='font-bold  text-blue-900'>Due Amount</div>
                       <div>{props.member.annualFee}</div>
                         </div>



          {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;








/////////////////////










// import React, { useState } from 'react';
// import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";

// function MemberDetails(props) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedMember, setEditedMember] = useState({ ...props.member });

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedMember((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSaveChanges = () => {
//     // You can implement the logic to save changes here
//     console.log('Saving changes:', editedMember);
//     setIsEditing(false);
//   };

//   const handleCloseDetails = () => {
//     props.handleCloseViewMemberDetails();
//   };

//   const handleDeleteMember = () => {
//     // Your delete member logic remains the same
//   };

//   return (
//     <div className='fixed top-0 left-0 w-full h-full bg-[#00000096] backdrop-blur-sm z-10 flex justify-center items-center overflow-hidden'>
//       <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
//         <div className='bg-white w-[30%] border-blue-900 border-b-2'>
//           <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//             <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image ? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />
//           </div>
//           <div className='w-full h-[40%] text-blue-950 text-center pt-8'>
//             <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
//             <p className='text-xl'>{props.member.regNo}</p>
//             <div className='mt-8 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer' onClick={handleDeleteMember}>
//               <AiFillDelete className="text-2xl me-1"/> Delete Member
//             </div>
//           </div>
//         </div>

//         <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
//           <div className='w-full flex items-center'>
//             <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//             {isEditing ? (
//               <button className='ms-10 text-red-400 text-xl cursor-pointer' onClick={handleSaveChanges}>
//                 Save
//               </button>
//             ) : (
//               <p className="ms-10 flex items-center text-red-400 text-xl cursor-pointer" onClick={handleEditToggle}>
//                 Edit<FaEdit className="ms-2" />
//               </p>
//             )}
//             <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[300px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
//           </div>

//           <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
//             {Object.entries(props.member).map(([key, value]) => (
//               <div key={key} className='mb-3'>
//                 <div className='font-bold text-blue-900'>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name={key}
//                     className="border-b-2 border-blue-950 w-[400px] outline-none"
//                     value={editedMember[key]}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   <div>{value}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberDetails;


