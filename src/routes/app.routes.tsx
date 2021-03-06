import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home';
import NewUser from '../pages/user/NewUser';
import ProductList from '../pages/product/ProductList';
import User from '../pages/user/User';
import UserList from '../pages/user/UserList';
import Product from '../pages/product/Product';
import NewProduct from '../pages/product/NewProduct';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/product" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>            
    );
};

export default AppRoutes;