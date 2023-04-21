import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let authStatus = useSelector((state)=>{return state.authReducer.isAuth})
    
    if(authStatus){
        return children
    }
    
    return (
        <Navigate to="/login" />
    );
}

export default PrivateRoute;