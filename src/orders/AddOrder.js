import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AddOrder = () => {
    let navigate = useNavigate();

    const [order, setOrder] = useState({
        idOrder: "",
        orderDate: "",
        price: "",
        idProduct: "",
        id: ""
    });

    const [products, setProducts] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));

        axios.get("http://localhost:8081/clients")
            .then(response => setClients(response.data))
            .catch(error => console.error('Error fetching clients:', error));
    }, []);

    const { idOrder, orderDate, price, idProduct, id } = order;

    const onInputChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/oredrs/insertOrder", order);
        navigate("/OrderOptions");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Order</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="idOrder" className="form-label">
                                Order ID
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the order ID"
                                name="idOrder"
                                value={idOrder}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="orderDate" className="form-label">
                                Order Date
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the order date"
                                name="orderDate"
                                value={orderDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the price"
                                name="price"
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productID" className="form-label">
                                Product
                            </label>
                            <select
                                className="form-select"
                                name="idProduct"
                                value={idProduct}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value="">Select a product</option>
                                {products.map(product => (
                                    <option key={product.idProduct} value={product.idProduct}>{product.nameProduct}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="clientID" className="form-label">
                                Client
                            </label>
                            <select
                                className="form-select"
                                name="id"
                                value={id}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value="">Select a client</option>
                                {clients.map(client => (
                                    <option key={client.id} value={client.id}>{client.userNane}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to={`/OrderOptions`}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;







/*import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddOrder = () => {

    let navigate = useNavigate();

    const [order, setOrder] = useState({
        idOrder: "",
        orderDate: "",
        price: "",
        idProduct: "",
        id: ""
    });

    const { idOrder, orderDate, price, idProduct, id } = order;

    const onInputChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/oredrs/insertOrder", order);
        navigate("/orders");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Order</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="idOrder" className="form-label">
                                Order ID
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the order ID"
                                name="idOrder"
                                value={idOrder}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="orderDate" className="form-label">
                                Order Date
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the order date"
                                name="orderDate"
                                value={orderDate}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the price"
                                name="price"
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productID" className="form-label">
                                Product ID
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the product ID"
                                name="idProduct"
                                value={idProduct}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="clientID" className="form-label">
                                Client ID
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the client ID"
                                name="id"
                                value={id}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate("/orders")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};*/


