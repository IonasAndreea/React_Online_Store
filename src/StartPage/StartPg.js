import React from 'react';
import { Link } from 'react-router-dom';
import './StartPg.css'; 

const StartPg = () => {
  return (
    <div className="containerSt">
      <div className="centerSt">
        <Link className="btn btn-start btn-outline-light" to="/ClientsOptions">CLIENTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-start btn-outline-light" to="/ProductsOptions">PRODUCTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-start btn-outline-light" to="/OrderOptions">ORDERS</Link>
      </div>
    </div>
  );
};

export default StartPg;
