import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchUser = () => {
  const navigate = useNavigate();
  const [id, setIdUser] = useState('');
  const [user, setUser] = useState({
    userNane: "",
    email: "",
    address: "",
  });

  const {userNane, email, address } = user;

  const onInputChange = (e) => {
    setIdUser(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/clients/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error searching for user:", error);
      
      setUser({
        userNane: "",
        email: "",
        address: ""
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Search Product</h2>
          <form onSubmit={onSearch}>
            <div className="mb-3">
              <label htmlFor="ID" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the product ID"
                value={id}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Search</button>
          </form>
          <div className="mt-4">
            {userNane && (
              <div>
                <h3>{userNane}</h3>
                <p>Email address: {email}</p>
                <p>Address: {address}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
