import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"

export const HomeOrd = () => {

    const [ord, setOrd] = useState([]);
    const {idOrder} = useParams()


    useEffect(() => {
       loadOrd();
    }, []);

    const loadOrd = async () => {
      try {
          const result = await axios.get("http://localhost:8081/oredrs");
          setOrd(result.data);
      } catch (error) {
          console.error("Error fetching orders:", error);
      }
  };

  const deleteOrd = async(idOrder) => {
    try {
        await axios.delete(`http://localhost:8081/oredrs/${idOrder}`);
        loadOrd();
    } catch (error) {
        console.error("Error deleting orders:", error);
    }
};

  
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>ORDERS:</h1>
        <table class="table border shadow"> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">OrderDate</th>
      <th scope="col">Price</th>
      <th scope="col">Client ID</th>
      <th scope="col">Product IDs</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        ord.map((ord, index) =>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{ord.orderDate}</td>
            <td>{ord.price}</td>
            <td>{ord.client?.id}</td>
            <td>
                                        {ord.product?.map((prod, prodIndex) => (
                                            <span key={prodIndex}>
                                                {prod.idProduct}{prodIndex < ord.product.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                <Link className="btn btn-outline-primary mx-2" 
                    to={`/editorder/${ord.idOrder}`}>
                  Edit</Link>
                <button className="btn btn-danger mx-2" onClick = {()=> deleteOrd(ord.idOrder)}> 
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