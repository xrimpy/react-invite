import { Link, useNavigate, Navigate } from "react-router-dom";
import React, { useState, useEffect} from "react";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const data = { name: "John", age: 30 };
    if (!token) {
        return <Navigate to="/?message=Please Login" replace={true}  />;
    }

    return children;
      
  }
export default PrivateRoute;
  
  