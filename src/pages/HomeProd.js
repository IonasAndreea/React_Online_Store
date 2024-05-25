import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"

export const HomeProd = () => {

    const [prods, setProds] = useState([]);
    const {idProduct} = useParams()


    useEffect(() => {
       loadProds();
    }, []);

    const loadProds = async () => {
      try {
          const result = await axios.get("http://localhost:8081/products");
          setProds(result.data);
      } catch (error) {
          console.error("Error fetching products:", error);
      }
  };

  const deleteProd = async(idProduct) => {
    try {
        await axios.delete(`http://localhost:8081/products/${idProduct}`);
        loadProds();
    } catch (error) {
        console.error("Error deleting products:", error);
    }
};

  
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>PRODUCTS:</h1>
        <Link className="btn btn-outline-danger mx-2"
                  to={`/ProductsOptions`}>
                  Back</Link>
        <table class="table border shadow"> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NameProduct</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        prods.map((prods, index) =>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{prods.nameProduct}</td>
            <td>{prods.description}</td>
            <td>{prods.price}</td>
            <td>{prods.stock}</td>
            <td>
                <Link className="btn btn-outline-primary mx-2"
                  to={`/editprod/${prods.idProduct}`}>
                  Edit</Link>
                <button className="btn btn-danger mx-2"
                 onClick = {()=> deleteProd(prods.idProduct)}> 
                 Delete</button>
            </td>
        </tr>

        ))
    }
    
  </tbody>
</table>

        </div>
    </div>
  )
}