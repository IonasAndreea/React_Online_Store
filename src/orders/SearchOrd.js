import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchOrd = () => {
  const navigate = useNavigate();
  const [idOrder, setIdOrder] = useState('');
  const [ord, setOrder] = useState({
    orderDate: "",
  });

  const {orderDate } = ord;

  const onInputChange = (e) => {
    setIdOrder(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/oredrs/${idOrder}`);
      setOrder(response.data);
    } catch (error) {
      console.error("Error searching for order:", error);
      
      setOrder({
        orderDate:""
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Search Order</h2>
          <form onSubmit={onSearch}>
            <div className="mb-3">
              <label htmlFor="ID" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the order ID"
                value={idOrder}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Search</button>
          </form>
          <div className="mt-4">
            {orderDate && (
              <div>
                <h3>{orderDate}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOrd;