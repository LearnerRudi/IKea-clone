import React from 'react';
import {Box} from "@chakra-ui/react"
import Appliances from '../components/ProductsPage/Appliances';
import ProductsGrid from '../components/ProductsPage/ProductsGrid';
import {Navbar} from '../components/HomePage/component/Navbar'
import Footer from '../components/HomePage/component/Footer'
function Products(props) {
    return (
        <>
        <Navbar/>
        <Box m="auto" p="20px" >
            <Appliances />
            <ProductsGrid />
        </Box>
        <Footer/>
        </>
        
    );
}

export default Products;