import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css'; 

const Clients = () => {
  return (
    <div className="containerClients">
      <div className="centerClients">
        <Link className="btn btn-client btn-outline-light" to="/adduser">ADD CLIENT</Link>
      </div>
      <div className="center">
        <Link className="btn btn-client btn-outline-light" to="/clients">SEE ALL CLIENTS</Link>
      </div>
      <div className="center">
        <Link className="btn btn-client btn-outline-light" to="/searchUser">SEARCH CLIENT</Link>
      </div>
      <Link className="btn btn-client btn-outline-danger mx-2"
                  to={`/start`}>
                  Back</Link>
    </div>
  );
};

export default Clients;
