import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SearchProduct = () => {
  const navigate = useNavigate();
  const [idProduct, setIdProduct] = useState('');
  const [prod, setProd] = useState({
    nameProduct: "",
    description: "",
    price: "",
    stock: ""
  });

  const { nameProduct, description, price, stock } = prod;

  const onInputChange = (e) => {
    setIdProduct(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/products/${idProduct}`);
      setProd(response.data);
    } catch (error) {
      console.error("Error searching for product:", error);
      
      setProd({
        nameProduct: "",
        description: "",
        price: "",
        stock: ""
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
                value={idProduct}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Search</button>
            <Link className="btn btn-outline-danger mx-2"
                  to={`/ProductsOptions`}>
                  Cancel</Link>
          </form>
          <div className="mt-4">
            {nameProduct && (
              <div>
                <h3>{nameProduct}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
