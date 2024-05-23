import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditOrder = () => {

    let navigate = useNavigate();

    const { idOrder } = useParams();

    const [ord, setOrd] = useState({
        orderDate: "",
        price: "",
        product: [] 
    });

    const { orderDate, price, product } = ord;

    const onInputChange = (e) => {
        setOrd({ ...ord, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadOrd();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/oredrs/${idOrder}`, ord, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/ord");
        } catch (error) {
            console.error("There was an error updating the order!", error);
        }
    };

    const onProductChange = (e, index, field) => {
        const newProducts = [...product];
        newProducts[index] = { ...newProducts[index], [field]: e.target.value };
        setOrd({ ...ord, product: newProducts });
    };

    const loadOrd = async () => {
        const result = await axios.get(`http://localhost:8081/oredrs/${idOrder}`);
        setOrd(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Order</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="ID" className="form-label">ID</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the order ID"
                                name="idOrder"
                                value={idOrder}
                                onChange={(e) => onInputChange(e)}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="OrderDate" className="form-label">Order Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Order Date"
                                name="orderDate"
                                value={orderDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Price" className="form-label">Price</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the price"
                                name="price"
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        {product.map((prod, index) => (
                            <div key={index} className="mb-3">
                                <label htmlFor={`ProductName${index}`} className="form-label">
                                    Product {prod.idProduct} Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={`Enter the name for product ${prod.idProduct}`}
                                    name={`productName${index}`}
                                    value={prod.nameProduct || ''}
                                    onChange={(e) => onProductChange(e, index, 'nameProduct')}
                                />
                                <label htmlFor={`ProductPrice${index}`} className="form-label mt-2">
                                    Product {prod.idProduct} Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={`Enter the price for product ${prod.idProduct}`}
                                    name={`productPrice${index}`}
                                    value={prod.price || ''}
                                    onChange={(e) => onProductChange(e, index, 'price')}
                                />
                            </div>
                        ))}
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate("/ord")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
