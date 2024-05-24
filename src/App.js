import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './layout/Navbar';
import { Home } from "./pages/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddUser } from './users/AddUser';
import { LogInSignUp } from './LogInSignUp/LogInSignUp';
import { EditUser } from './users/EditUser';
import {HomeProd }from "./pages/HomeProd";
import { AddProduct } from './products/AddProduct';
import { EditProduct } from './products/EditProduct';
import StartPg, { StartPage } from './StartPage/StartPg';
import { HomeOrd } from './pages/HomeOrd';
import { EditOrder } from './orders/EditOrder';
import { AddOrder } from './orders/AddOrder';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route export path="/clients" element={<Home/>}/>
        <Route export path="/ord" element={<HomeOrd/>}/>
        <Route export path="/prod" element={<HomeProd/>}/>
        <Route exact path="/" element={<LogInSignUp/>}/>
        <Route exact path="/adduser" element={<AddUser/>}></Route>
        <Route exact path="/addprod" element={<AddProduct/>}></Route>
        <Route exact path="/addord" element={<AddOrder/>}></Route>
        <Route exact path= "/edituser/:id" element ={<EditUser/>}/>
        <Route exact path= "/editprod/:idProduct" element ={<EditProduct/>}/>
        <Route exact path= "/editorder/:idOrder" element ={<EditOrder/>}/>
        <Route exact path= "/start" element ={<StartPg/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
