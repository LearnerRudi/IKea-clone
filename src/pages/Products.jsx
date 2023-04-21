import React from 'react';
import {Box} from "@chakra-ui/react"
import Appliances from '../components/ProductsPage/Appliances';
import ProductsGrid from '../components/ProductsPage/ProductsGrid';

function Products(props) {
    return (
        <Box m="auto" p="20px" >
            <Appliances />
            <ProductsGrid />
        </Box>
    );
}

export default Products;