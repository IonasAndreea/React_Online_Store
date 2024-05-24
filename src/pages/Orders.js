import React from 'react';
import { Link } from 'react-router-dom';
import './Orders.css'; 

const Orders = () => {
  return (
    <div className="containerOrders">
      <div className="centerOrders">
        <Link className="btn btn-client btn-outline-light" to="/addord">ADD ORDER</Link>
      </div>
      <div className="center">
        <Link className="btn btn-client btn-outline-light" to="/ord">SEE ALL ORDERS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-client btn-outline-light" to="/searchOrder">SEARCH ORDER</Link>
      </div>
    </div>
  );
};

export default Orders;
