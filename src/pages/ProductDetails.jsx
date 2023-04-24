import React,{useState} from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  IconButton,
  useToast
} from '@chakra-ui/react';
import {FiTruck} from 'react-icons/fi'
import {RiAddFill} from 'react-icons/ri'
import {Navbar} from '../components/HomePage/component/Navbar'
import Footer from '../components/HomePage/component/Footer'
import { addToCart ,incquantity} from '../redux/products/actions';
import {useDispatch,useSelector} from "react-redux"
import { useParams } from 'react-router-dom';
const ProductDetails= (elem) => {
  const [q,setQ]=useState(1)
  const { id } = useParams();
  const dispatch = useDispatch()
  const cartToast = useToast()
 
  let storeProducts = useSelector((state)=>{return state.productsReducer.products})
  
  const detail= storeProducts.filter((ele) => {
    console.log(ele.id)
    return ele.id==id;
  });
  console.log({detail});
  const incq = () => {
    setQ(prev=>(prev+1));
    
  };

  return (
    <>
    <Navbar/>
    <Flex align="center" maxW="800px" mx="auto" my="12" overflowX={"hidden"}>
      <Box flex="1">
        <Image src={detail[0].thumb} alt="Product Image" />
      </Box>
      <Box flex="1" ml="4">
        <Text  mb="4">
          {detail[0].name}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Rs. {detail[0].price}
        </Text>
        <Text fontSize="md" color="gray.600" mb="4">
          Price incl. of all taxes
          
        </Text>
       
        <Flex align="center">
      <IconButton
        icon={<FiTruck />}
        aria-label="Shipping"
        mr={4}
        bg="none"
        borderRadius="full"
      />
      {/* <Text fontSize="sm" ml={4}>We are currently not delivering to your area.</Text> */}
    </Flex>
    <Flex justify={"space-around"} mt={12}>
    <Button  variant="ghost"
         size="lg" 
  fontSize="sm"
  borderRadius="full"
  borderColor="gray.300"
  borderWidth="1px"
  onClick={incq}
  _hover={{ borderColor: "black" }} ml={4}>
        {q} {"  "}<RiAddFill/>
        </Button>
        <Button colorScheme="blue" size="lg" w="40%" borderRadius={"full"} onClick={()=>{
                                dispatch(addToCart(detail[0],q))
                                    cartToast({
                                        title: 'Added to cart.',
                                        description: "Product has been added to the cart.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })

                            }} >
          Add to bag
        </Button>
    </Flex>
      </Box>
    </Flex>
    <Footer/>
    </>
  );
};

export default ProductDetails;
