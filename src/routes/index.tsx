import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from '../pages/Home';
import NewUser from '../pages/user/NewUser';
import ProductList from '../pages/product/ProductList';
import User from '../pages/user/User';
import UserList from '../pages/user/UserList';
import Product from '../pages/product/Product';


const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/product" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newProduct" element={<NewUser/>}/>
        </Routes>            
    );
};

export default Routers;