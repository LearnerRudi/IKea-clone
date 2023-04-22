import React from 'react';
import {Routes,Route} from "react-router-dom"
import Products from '../pages/Products'
import NotFound from "../pages/NotFound"
import PrivateRoute from "../routes/PrivateRoute"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Products />} />
            <Route path='/payment' element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;