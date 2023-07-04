import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { Authentication } from './Auth';

const PrivateElement = ({ children }) => {
    let location = useLocation();
    return Authentication.isAuthenticated ? (
      children
    ) : (
      <Navigate to="/SignIn" state={{ from: location }} />
    );
  };
  
 
export default PrivateElement