import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditProduct = () => {

    let navigate = useNavigate();

    const {idProduct} = useParams()

    const [prod, setProd]=useState({
        nameProduct:"",
        description:"",
        price:"",
        stock:""

    })

    const {nameProduct, description, price, stock} = prod
    const onInputChange=(e) => {
        setProd({...prod,[e.target.name]:e.target.value})

    };

    useEffect(()=> {
        loadProd();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/products/${idProduct}`, prod, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/prod");
        } catch (error) {
            console.error("There was an error updating the product!", error);
        }
    };

    const loadProd =async() =>{
        const result = await axios.get(`http://localhost:8081/products/${idProduct}`)
        setProd(result.data)
    }
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Product</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="ID" className="form-label">
                    ID
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your ID"
                name="idProduct"
                value = {idProduct}
                onChange={(e) => onInputChange(e)}/>
        </div>
            <div className="mb-3">
                <label htmlFor="ProductName" className="form-label">
                    ProductName
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the productName"
                name="nameProduct"
                value = {nameProduct}
                onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                    Description
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the description"
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
                  to={`/prod`}>
                  Cancel</Link>
        </form>
    </div>
    </div>
  </div>
  )
}
