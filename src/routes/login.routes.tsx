import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Login from '../pages/login/Login';


const LoginRoutes: React.FC = () => {
    const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).user).currentUser;

    const user = useSelector((state: any) => state.user.currentUser);
    // const user = useSelector((state: any) => state.user);
    console.log(user, admin, 'loogin')
    //const user = false

    return (
        <Routes>
            <Route path="/login" element={ user ? <Navigate to='/'/> : <Login/>}/>
        </Routes>            
    );
};

export default LoginRoutes;