import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; 

const Products = () => {
  return (
    <div className="containerProducts">
      <div className="centerProducts">
        <Link className="btn btn-Products btn-outline-light" to="/addprod">ADD PRODUCT</Link>
      </div>
      <div className="center">
        <Link className="btn btn-Products btn-outline-light" to="/prod">SEE ALL PRODUCTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-Products btn-outline-light" to="/searchProd">SEARCH PRODUCT</Link>
      </div>
    </div>
  );
};

export default Products;
