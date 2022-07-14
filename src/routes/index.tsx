import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate,
  } from "react-router-dom";
import Home from '../pages/Home';
import NewUser from '../pages/user/NewUser';
import ProductList from '../pages/product/ProductList';
import User from '../pages/user/User';
import UserList from '../pages/user/UserList';
import Product from '../pages/product/Product';
import NewProduct from '../pages/product/NewProduct';
import AppRoutes from './app.routes';
import { useSelector } from 'react-redux';
import Login from '../pages/login/Login';
import LoginRoutes from './login.routes';


const Routers: React.FC = (): any => {

    // const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).user).currentUser;
    const user = useSelector((state: any) => state.user.currentUser);
    
    
    return (
        user ?          
        <AppRoutes/>
        : 
        <LoginRoutes/>
    );
};

export default Routers;