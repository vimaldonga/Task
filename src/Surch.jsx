import React, { useState, useEffect, useRef } from 'react';
import Select from "react-select";

const Surch = () => {
  const options = [
    { value: "vimal", label: "donga" },
    { value: "rutvik", label: "ambreliya" },
    { value: "umesh", label: "panseriya" },
    { value: "brijesh", label: "kyada" },
    { value: "nirav", label: "lakhani" },
    { value: "yagnik", label: "thummat" },
    { value: "vimay", label: "paghadal" },
  ];

  


  return (
    
   <>
    <div className="container">
      <div className="mt-5 m-auto w-50">
      <Select options={options}/>
       </div>
    </div>

   </>
  )
};

export default Surch;


// import React, { useState, useEffect, useRef } from 'react';

// const Surch = () => {
//   const data = [
//     { name: "vimal", surname: "donga" },
//     { name: "rutvik", surname: "ambreliya" },
//     { name: "umesh", surname: "panseriya" },
//     { name: "brijesh", surname: "kyada" },
//     { name: "nirav", surname: "lakhani" },
//     { name: "yagnik", surname: "thummat" },
//     { name: "vimay", surname: "paghadal" },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//     filterData(value);
//   };

//   const filterData = (value) => {
//     const filtered = data.filter(item =>
//       // item.name.toLowerCase().includes(value.toLowerCase()) || 
//       item.surname.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleOptionClick = (name, surname) => {
//     setSearchTerm(`${name} ${surname}`);
    
//   };

//   return (
//     <div>
//     <label>Enter Name : </label>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
      
//         <ul>
//           {filteredData.map((item, index) => (
//             <li 
//               key={index} 
//               onClick={() => handleOptionClick(item.name, item.surname)}
//               style={{ cursor: 'pointer' }}
//             >
//               {item.name} {item.surname}
//             </li>
//           ))}
//         </ul>
    
//     </div>
//   );
// };

// export default Surch;






// import React, { useState } from 'react';

// const Surch = () => {
//   const data = [
//     { name: "vimal", surname: "donga" },
//     { name: "rutvik", surname: "ambreliya" },
//     { name: "umesh", surname: "panseriya" },
//     { name: "brijesh", surname: "kyada" },
//     { name: "nirav", surname: "lakhani" },
//     { name: "yagnik", surname: "thummat" },
//     { name: "vimay", surname: "paghadal" },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//     filterData(value);
//   };

//   const filterData = (value) => {
//     const filtered = data.filter(item =>
//       item.name.toLowerCase().includes(value.toLowerCase()) || 
//       item.surname.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <select>
//       <option value="">select name</option>
//         {filteredData.map((item, index) => (
//           <option key={index} value={item.surname}>
//             {item.name} {item.surname}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Surch;





// import React, { useState } from 'react';

// const Surch = () => {
//   const array = [
//     { name: "vimal", surname: "donga" },
//     { name: "rutvik", surname: "ambreliya" },
//     { name: "umesh", surname: "panseriya" },
//     { name: "brijesh", surname: "kyada" },
//     { name: "nirav", surname: "lakhani" },
//     { name: "yagnik", surname: "thummat" },
//     { name: "ajay", surname: "paghadal" },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = () => {
//     // Here you can perform any action with the search term
//     // For now, let's log it to the console
//     console.log('Search submitted:', searchTerm);
//   };

//   const filteredArray = array.filter(person =>
//     person.surname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="main">
//         <h1>hello welcome task 1</h1>
//         <input
//           type="text"
//           placeholder="Search by surname..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button onClick={handleSearchSubmit}>Submit</button>
//         <div>
//           {filteredArray.map((person, index) => (
//             <div key={index}>
//               {person.name} {person.surname}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Surch;
