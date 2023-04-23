import React from 'react';
import {Routes,Route} from "react-router-dom"
import Products from '../pages/Products'
import NotFound from "../pages/NotFound"
import PrivateRoute from "../routes/PrivateRoute"
import HomePage from "../pages/HomePage"


import Login from '../pages/Login'
import Cart from '../pages/Cart';
function Router() {
    return (
        <>
         
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product/:id" element={<Products />} />
            <Route path='/payment' element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
        </>
      
    );
}

export default Router;