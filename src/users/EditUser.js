import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditUser = () => {

    let navigate = useNavigate();

    const {id} = useParams()

    const [user, setUser]=useState({
        userNane:"",
        email:"",
        password:"",
        address:"",
        admin:""

    })

    const {userNane, email,password, address, admin} = user
    const onInputChange=(e) => {
        setUser({...user,[e.target.name]:e.target.value})

    };

    useEffect(()=> {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/clients/${id}`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/clients");
        } catch (error) {
            console.error("There was an error updating the user!", error);
        }
    };

    const loadUser =async() =>{
        const result = await axios.get(`http://localhost:8081/clients/${id}`)
        setUser(result.data)
    }
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="ID" className="form-label">
                    ID
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="id"
                value = {id}
                onChange={(e) => onInputChange(e)}/>
        </div>
            <div className="mb-3">
                <label htmlFor="UserName" className="form-label">
                    UserName
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="userNane"
                value = {userNane}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    E-mail
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value = {email}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                    Password
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value = {password}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Address" className="form-label">
                    Address
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value = {address}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Admin" className="form-label">
                    Admin
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="admin"
                value = {admin}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <button type = "submit" className="btn btn-outline-primary">Submit</button>
        <button type = "submit" className="btn btn-outline-danger mx-2">Cancel</button>
        </form>
    </div>
    </div>
  </div>
  )
}
