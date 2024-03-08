// import React from 'react'


// function RequestTable(props) {
//   return (
//     <div className='w-full h-full m-0 p-0'>
//         <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//             <div className='w-[85%] h-full flex items-center'>
//               <input type='text' className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded' placeholder ='Search'/>
//               <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700' >Search</button>
//             </div> 
//             <button className='w-[120px] h-full rounded bg-blue-500 text-white  hover:bg-blue-800'>Approve</button>
//         </div>
//         <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//             <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//                 <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '></th>
//                 <th className='sticky top-0 bg-blue-950 text-white '><input type='checkbox' className='w-5 h-5  border-emerald-400 border-4 me-2'/>Select All</th>
//             </tr>

//          </thead>
//             {/* <tr className='border-black border-b-2'>
//                 <td>1.</td>
//                 <td>Krishnadas R</td>
//                 <td>K/687272/1985</td>
//                 <td>view</td>
//                 <td>📈</td>
//             </tr> */}
//             {props.data.map((member, index) => {
//                return(
//                 <tr className='border-black border-b-[1px] h-[55px]'>
//                   <td  className='ps-4'>{index + 1}</td>
//                   <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={()=> {props.handleView()}}>{member.firstName} {member.lastName}</td>
//                   <td>{member.regNo}</td>
//                   <td>
//                     <button className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                       onClick={()=> {props.handleView()}}
//                     >View</button>
//                   </td>
//                   <td><input type='checkbox' className='w-5 h-5  border-emerald-400 border-4'/></td>
//                 </tr>
//                )
//             })}
//         </table>
//         </div>
//     </div>
//   )
// }

// export default RequestTable









// import React, { useState } from 'react';

// function RequestTable(props) {
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleSelectAllChange = () => {
//     setSelectAll(!selectAll);
//     setSelectedRows(selectAll ? [] : props.data.map(() => true));
//   };

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = [...selectedRows];
//     newSelectedRows[index] = !newSelectedRows[index];
//     setSelectedRows(newSelectedRows);
//   };

//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//         <div className='w-[85%] h-full flex items-center'>
//           <input
//             type='text'
//             className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
//             placeholder='Search'
//           />
//           <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700'>
//             Search
//           </button>
//         </div>
//         <button className='w-[120px] h-full rounded bg-blue-500 text-white  hover:bg-blue-800'>
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectAll}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//           {props.data.map((member, index) => {
//             return (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView() }}>{member.firstName} {member.lastName}</td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView() }}
//                   >View</button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index] || false}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;







// "use client"
// // RequestTable.jsx
// import React, { useState } from 'react';

// function RequestTable(props) {
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleSelectAllChange = () => {
//     setSelectAll(!selectAll);
//     setSelectedRows(selectAll ? [] : props.data.map(() => true));
//   };

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = [...selectedRows];
//     newSelectedRows[index] = !newSelectedRows[index];
//     setSelectedRows(newSelectedRows);
//   };

//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//         <div className='w-[85%] h-full flex items-center'>
//           <input
//             type='text'
//             className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
//             placeholder='Search'
//           />
//           <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700'>
//             Search
//           </button>
//         </div>
//         <button className='w-[120px] h-full rounded bg-blue-500 text-white  hover:bg-blue-800'>
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectAll}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((member, index) => (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
//                   {member.firstName} {member.lastName}
//                 </td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView(member) }}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index] || false}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;









// // RequestTable.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// function RequestTable(props) {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = [...selectedRows];
//     newSelectedRows[index] = !newSelectedRows[index];
//     setSelectedRows(newSelectedRows);
//   };

//   const handleSelectAllChange = () => {
//     const selectAll = !selectedRows.every((row) => row);
//     setSelectedRows(props.data.map(() => selectAll));
//   };

//   const handleApprove = async () => {
//     const selectedMembers = props.data.filter((_, index) => selectedRows[index]);

//     // Now you can use `selectedMembers` for your approval logic
//     if (selectedMembers.length > 0) {
//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/validUsers/approve`,
//           {
//             memberIds: selectedMembers.map((member) => member.id),
//           }
//         );

//         console.log('Approval response:', response.data);
//         // Handle success or any additional logic here

//         // Clear selectedRows after approval if needed
//         setSelectedRows([]);
//       } catch (error) {
//         console.error('Error approving members:', error);
//         // Handle error or show a notification to the user
//       }
//     } else {
//       console.warn('No members selected for approval.');
//       // Optionally show a warning to the user
//     }
//   };

//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//         <div className='w-[85%] h-full flex items-center'>
//           <input
//             type='text'
//             className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
//             placeholder='Search'
//           />
//           <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700'>
//             Search
//           </button>
//         </div>
//         <button
//           className='w-[120px] h-full rounded bg-blue-500 text-white hover:bg-blue-800'
//           onClick={handleApprove}
//         >
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectedRows.every((row) => row)}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((member, index) => (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
//                   {member.firstName} {member.lastName}
//                 </td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView(member) }}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index]}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;







// RequestTable.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// function RequestTable(props) {
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleSelectAllChange = () => {
//     setSelectAll(!selectAll);
//     setSelectedRows(selectAll ? [] : props.data.map(() => true));
//   };

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = [...selectedRows];
//     newSelectedRows[index] = !newSelectedRows[index];
//     console.log(newSelectedRows);
//     setSelectedRows(newSelectedRows);
//   };

//   const handleApprove = async () => {
//     const selectedUserIds = props.data
//       .filter((_, index) => selectedRows[index])
//       .map((user) => user._id);
    

//     console.log(selectedUserIds);

//     if (selectedUserIds.length === 0) {
//       alert('Please select at least one user to approve.');
//       return;
//     }

//     try {
//       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/validUsers`, {
//         userIds: selectedUserIds,
//       });

//       console.log('Backend response:', response.data);

//       // Remove approved users from the displayed list
//       const updatedData = props.data.filter((user) => !selectedUserIds.includes(user._id));
//       props.setData(updatedData);

//       // Reset checkbox selection
//       setSelectAll(false);
//       setSelectedRows([]);
//     } catch (error) {
//       console.error('Error during approval:', error);
//     }
//   };

//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//         {/* ... (your search input and buttons) */}
//         <button
//           className='w-[120px] h-full rounded bg-blue-500 text-white hover:bg-blue-800'
//           onClick={handleApprove}
//         >
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectAll}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((member, index) => (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
//                   {member.firstName} {member.lastName}
//                 </td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView(member) }}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index] || false}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;



// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// function RequestTable(props) {
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState({});

//   const handleSelectAllChange = () => {
//     setSelectAll(!selectAll);
//     const newSelectedRows = {};
//     props.data.forEach((_, index) => (newSelectedRows[index] = !selectAll));
//     setSelectedRows(newSelectedRows);
//   };

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = { ...selectedRows };
//     newSelectedRows[index] = !newSelectedRows[index];
    
//     setSelectedRows(newSelectedRows);
//   };

//   const handleApprove = async () => {
//     const selectedUserIds = Object.keys(selectedRows)
//       .filter((index) => selectedRows[index])
//       .map((index) => props.data[index]._id);

//       console.log(selectedUserIds);

//     if (selectedUserIds.length === 0) {
//       alert('Please select at least one user to approve.');
//       return;
//     }

//     try {
//       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/validUsers`, {
//         userIds: selectedUserIds,
//       });

//       console.log('Backend response:', response.data);

//       // Remove approved users from the displayed list
//       const updatedData = props.data.filter((_, index) => !selectedRows[index]);
//       props.setData(updatedData);

//       // Reset checkbox selection
//       setSelectAll(false);
//       setSelectedRows({});
//     } catch (error) {
//       console.error('Error during approval:', error);
//     }
//   };

//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>  <div className='w-[85%] h-full flex items-center'>
//          <input
//            type='text'
//            className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
//            placeholder='Search'
//          />
//          <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700'>
//            Search
//          </button>
//         </div>
//         <button
//           className='w-[120px] h-full rounded bg-blue-500 text-white hover:bg-blue-800'
//           onClick={handleApprove}
//         >
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectAll}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((member, index) => (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
//                   {member.firstName} {member.lastName}
//                 </td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView(member) }}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index] || false}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;






// import React, { useState } from 'react';
// import axios from 'axios';

// function RequestTable(props) {
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedUserIds, setSelectedUserIds] = useState([]);
//   const [searchTerm, setSearchTerm] = useState();

//   const handleSelectAllChange = () => {
//     setSelectAll(!selectAll);
//     const newSelectedRows = Array(props.data.length).fill(!selectAll);
//     setSelectedRows(newSelectedRows);
//     setSelectedUserIds(newSelectedRows.map((selected, index) => selected ? props.data[index]._id : null).filter(Boolean));
//   };

//   const handleRowCheckboxChange = (index) => {
//     const newSelectedRows = [...selectedRows];
//     newSelectedRows[index] = !newSelectedRows[index];
  
//     const newSelectedUserIds = newSelectedRows
//       .map((selected, index) => selected ? props.data[index]._id : null)
//       .filter(Boolean);
  
//     setSelectedRows(newSelectedRows);
//     setSelectedUserIds(newSelectedUserIds);
//   };

//   const handleApprove = async () => {
//     console.log('Selected User IDs:', selectedUserIds);

//     if (selectedUserIds.length === 0) {
//       alert('Please select at least one user to approve.');
//       return;
//     }

//     try {
//       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/validUsers`, {
//         userIds: selectedUserIds,
//       });

//       console.log('Backend response:', response.data);
      

//       // Remove approved users from the displayed list
//       const updatedData = props.data.filter(user => !selectedUserIds.includes(user._id));
//       props.setData(updatedData);

//       // Reset checkbox selection
//       setSelectAll(false);
//       setSelectedRows([]);
//       setSelectedUserIds([]);
//       alert("User validation successfull.")
//     } catch (error) {
//       console.error('Error during approval:', error);
//     }

//   };




//   return (
//     <div className='w-full h-full m-0 p-0'>
//       <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//         <div className='w-[85%] h-full flex items-center'>
//           <input
//             type='text'
//             className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
//             placeholder='Search'
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               props.handleSearch(searchTerm)
//             }}
//           />
//           <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700' onClick={()=> props.handleSearch(searchTerm)}>
//             Search
//           </button>
//         </div>
//         <button
//           className='w-[120px] h-full rounded bg-blue-500 text-white hover:bg-blue-800'
//           onClick={handleApprove}
//         >
//           Approve
//         </button>
//       </div>
//       <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3]'>
//           <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//               <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//               <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//               <th className='sticky top-0 bg-blue-950 text-white '></th>
//               <th className='sticky top-0 bg-blue-950 text-white '>
//                 <input
//                   type='checkbox'
//                   className='w-5 h-5  border-emerald-400 border-4 me-2'
//                   checked={selectAll}
//                   onChange={handleSelectAllChange}
//                 />
//                 Select All
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((member, index) => (
//               <tr className='border-black border-b-[1px] h-[55px]' key={index}>
//                 <td className='ps-4'>{index + 1}</td>
//                 <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
//                   {member.firstName} {member.lastName}
//                 </td>
//                 <td>{member.regNo}</td>
//                 <td>
//                   <button
//                     className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                     onClick={() => { props.handleView(member) }}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <input
//                     type='checkbox'
//                     className='w-5 h-5  border-emerald-400 border-4'
//                     checked={selectedRows[index] || false}
//                     onChange={() => handleRowCheckboxChange(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RequestTable;







"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

function RequestTable(props) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedData, setDisplayedData] = useState(props.data);

  useEffect(() => {
    setDisplayedData(props.data);
    // if(searchTerm === "") {
    //   setDisplayedData(props.data);
    // }
  }, [props.data, searchTerm]);

  const handleSearch = (searchTerm) => {
    const searchedData = props.data.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.regNo}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedData(searchedData);

    setSelectAll(false);
    setSelectedRows([]);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    const newSelectedRows = Array(displayedData.length).fill(!selectAll);
    setSelectedRows(newSelectedRows);
  };

  const handleRowCheckboxChange = (index) => {
    const newSelectedRows = [...selectedRows];
    newSelectedRows[index] = !newSelectedRows[index];
    setSelectedRows(newSelectedRows);
  };

  const handleApprove = async () => {
    const selectedUserIds = displayedData
      .filter((user, index) => selectedRows[index])
      .map(user => user._id);

    if (selectedUserIds.length === 0) {
      alert('Please select at least one user to approve.');
      return;
    }

    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/validUsers`, {
        userIds: selectedUserIds,
      });

      // console.log('Backend response:', response.data);

      const updatedData = displayedData.filter(user => !selectedUserIds.includes(user._id));
      setDisplayedData(updatedData);

      setSelectAll(false);
      setSelectedRows([]);

      alert("User validation successful.");
      window.location = "/admin/memberRequest"
    } catch (error) {
      console.error('Error during approval:', error);
    }
  };



  const handleReject = async (id) => {
      
    const isConfirmed = window.confirm("Are you sure you want to reject this member?");
    if (isConfirmed) {
      const userId = id // Adjust this based on your data structure
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
          // console.log('Member deleted successfully');
          window.location.href = "/admin/memberRequest";
          
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
    <div className='w-full h-full m-0 p-0'>
      <div className='w-full h-[10%] flex justify-between items-center mb-2'>
        <div className='w-[85%] h-full flex items-center'>
          <input
            type='text'
            className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
          />
          <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700' onClick={() => handleSearch(searchTerm)}>
            Search
          </button>
        </div>
        <button
          className='w-[120px] h-full rounded bg-blue-500 text-white hover:bg-blue-800'
          onClick={handleApprove}
        >
          Approve
        </button>
      </div>
      <div className='w-full h-[90%] overflow-y-auto rounded'>
        <table className='w-full max-h-full bg-[#edececa3]'>
          <thead>
            <tr className='text-left h-[60px] w-full'>
              <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
              <th className='sticky top-0 bg-blue-950 text-white '></th>
              <th className='sticky top-0 bg-blue-950 text-white w-[15%]'>
                <input
                  type='checkbox'
                  className='w-5 h-5  border-emerald-400 border-4 me-2'
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                Select All
              </th>
              <th className='sticky top-0 bg-blue-950 text-white w-[5%]'></th>
            </tr>
          </thead>
          <tbody>
            {
              displayedData[0] ? (
            
            displayedData.map((member, index) => (
              <tr className='border-black border-b-[1px] h-[55px]' key={index}>
                <td className='ps-4'>{index + 1}</td>
                <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => { props.handleView(member) }}>
                  {member.firstName}
                </td>
                <td>{member.regNo}</td>
                <td>
                  <button
                    className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
                    onClick={() => { props.handleView(member) }}
                  >
                    View
                  </button>
                </td>
                <td>
                  <input
                    type='checkbox'
                    className='w-5 h-5  border-emerald-400 border-4'
                    checked={selectedRows[index] || false}
                    onChange={() => handleRowCheckboxChange(index)}
                  />
                </td>
                <td>
                  <MdDelete 
                    className='text-3xl text-blue-950 hover:text-red-600 cursor-pointer'
                    onClick={() => {
                      // console.log(member._id);
                      handleReject(member._id);
                    }}
                  />
                </td>
              </tr>
            ))
            
            
              ) : (
                <tr className='w-full h-[100px] flex justify-center items-center'>
                   <p className='w-full ps-3 text-2xl'>No data to display</p>
                </tr>
              )
            
            
            
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestTable;






