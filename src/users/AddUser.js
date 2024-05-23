import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {

    let navigate = useNavigate()

    const [user, setUser]=useState({
        userNane:"",
        email:"",
        password:"",
        address:""

    })

    const {userNane, email,password, address} = user
    const onInputChange=(e) => {
        setUser({...user,[e.target.name]:e.target.value})

    };

    const onSubmit=async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/clients/insertClient", user)
        navigate("/")

    };
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
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
        <button type = "submit" className="btn btn-outline-primary">Submit</button>
        <button type = "submit" className="btn btn-outline-danger mx-2">Cancel</button>
        </form>
    </div>
    </div>
  </div>
  )
}
