import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EMAG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
    <Link className="btn btn-outline-light" to="/addprod">Add Product</Link>
    <Link className="btn btn-outline-light" to="/addord">Add Order</Link>
    <Link className="btn btn-outline-light" to="/ord">Order</Link>
    <Link className="btn btn-outline-light" to="/prod">Products</Link>
    <Link className="btn btn-outline-light" to="/clients">Users</Link>
    <Link className="btn btn-outline-light" to="/">LogIn / Sign Up</Link>
  </div>
</nav>




    </div>
  )
}
