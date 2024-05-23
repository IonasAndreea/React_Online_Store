import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"

export const Home = () => {

    const [users, setUsers] = useState([]);

    const {id} = useParams()


    useEffect(() => {
       loadUsers();
    }, []);

    const loadUsers = async () => {
      try {
          const result = await axios.get("http://localhost:8081/clients");
          setUsers(result.data);
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };

  const deleteUser = async(id) => {
      try {
          await axios.delete(`http://localhost:8081/clients/${id}`);
          loadUsers();
      } catch (error) {
          console.error("Error deleting user:", error);
      }
  };
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>CLIENTS:</h1>
        <table class="table border shadow"> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">Admin</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((users, index) =>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{users.userNane}</td>
            <td>{users.email}</td>
            <td>{users.password}</td>
            <td>{users.address}</td>
            <td>{users.isAdmin ? 'Yes' : 'No'}</td> 
            <td>
                <Link className="btn btn-outline-primary mx-2"
                  to={`/edituser/${users.id}`}>
                  Edit</Link>
                <button className="btn btn-danger mx-2"
                  onClick = {()=> deleteUser(users.id)}>
                  Delete</button>
            </td>
        </tr>

        ))
    }
    
  </tbody>
</table>

        </div>
    </div>
  )
}
