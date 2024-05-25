import React from 'react';
import { Link } from 'react-router-dom';
import './Orders.css'; 

const Orders = () => {
  return (
    <div className="containerOrders">
      <div className="centerOrders">
        <Link className="btn btn-Orders btn-outline-light" to="/addord">ADD ORDER</Link>
      </div>
      <div className="center">
        <Link className="btn btn-Orders btn-outline-light" to="/ord">SEE ALL ORDERS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-Orders btn-outline-light" to="/searchOrder">SEARCH ORDER</Link>
      </div>
      <div><Link className="btn btn-Orders btn-outline-danger mx-2"
                  to={`/start`}>
                  Back</Link></div>
    </div>
  );
};

export default Orders;
