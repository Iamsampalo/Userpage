import React from 'react'
import  { useState, useEffect } from 'react';
import Details from './Details'
import { Link } from 'react-router-dom';

function Homepage () {
  
   const [users, setUsers] = useState([]);
 
   
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched users:", data); // Debugging log
          setUsers(data);
        })
        .catch((err) => console.error("Error fetching users:", err));
    }, []);
    

  return (
    <div className="container mx-auto p-4">
    <h1 className=" text-3xl font-extrabold text-red-300  text-center mb-6">User List</h1>
     <ul className="space-y-2 list-none">
      {users ? users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between  items-center p-4 border rounded shadow-sm hover:shadow-lg transition"
        >
          <span className="text-lg font-medium">{user.name}</span>
          <Link to={`/user/${user.id}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                 View Details
             </button>
           </Link>
        </li>
      )):'null'}
    </ul>
   
  </div> 
  );
};



export default Homepage