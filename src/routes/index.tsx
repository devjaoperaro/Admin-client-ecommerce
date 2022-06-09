import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from '../pages/Home';
import User from '../pages/User';
import UserList from '../pages/UserList';


const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
        </Routes>            
    );
};

export default Routers;