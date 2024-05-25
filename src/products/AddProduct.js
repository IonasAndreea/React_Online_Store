import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const AddProduct = () => {

    let navigate = useNavigate()

    const [prod, setProd]=useState({
        nameProduct:"",
        description:"",
        price:"",
        stock:""

    })

    const {nameProduct, description,price, stock} = prod
    const onInputChange=(e) => {
        setProd({...prod,[e.target.name]:e.target.value})

    };

    const onSubmit=async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/products/insertProduct", prod)
        navigate("/prod")

    };
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Product</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="ProductName" className="form-label">
                    ProductName
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the product name"
                name="nameProduct"
                value = {nameProduct}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter a description"
                name="description"
                value = {description}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                    Price
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the price"
                name="price"
                value = {price}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Stock" className="form-label">
                    Stock
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the stock"
                name="stock"
                value = {stock}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <button type = "submit" className="btn btn-outline-primary">Submit</button>
        <Link className="btn btn-outline-danger mx-2"
                  to={`/ProductsOptions`}>
                  Cancel</Link>
        </form>
    </div>
    </div>
  </div>
  )
}
