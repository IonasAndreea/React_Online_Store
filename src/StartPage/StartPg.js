import React from 'react';
import { Link } from 'react-router-dom';
import './StartPg.css'; 

const StartPg = () => {
  return (
    <div className="containerSt">
      <div className="centerSt">
        <Link className="btn btn-start btn-outline-light" to="/clients">CLIENTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-start btn-outline-light" to="/prod">PRODUCTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-start btn-outline-light" to="/addprod">ORDERS</Link>
      </div>
    </div>
  );
};

export default StartPg;
