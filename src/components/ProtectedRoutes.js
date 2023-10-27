import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';
const ProtectedRoutes = ({component}) => {
    // localStorage.clear();
    const jwt_token = localStorage.getItem("jwtToken");
    // console.log(jwt_token);
    
  return jwt_token?(component) : (
        // <Navigate to={"/login"} replace/>
        <Login/>
  )
}

export default ProtectedRoutes