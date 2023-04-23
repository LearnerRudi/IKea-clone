import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Image, Stack ,Flex,Link,Img,useToast} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {addToCart,addToLoved} from '../../../redux/products/actions'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function Slider() {
  const cartToast=useToast();
  const lovedToast=useToast();
  const dispatch =useDispatch();
  const carProducts = useSelector((state) => {
    return state.productsReducer.products;
  });
  const lovedProducts = useSelector((state) => {
    return state.productsReducer.loved;
  });
  return (
    <div>
      <Heading marginLeft="-60%" marginTop="40px">
        Recommended for you
      </Heading>

      <Stack direction="row" marginTop="50px">
        {carProducts.map((elem) => {
          return (
            
              <Flex width="100%" minWidth="20%" p={7} borderBottom={"1px solid lightgray"} paddingBottom={20} cursor={"pointer"} flexDirection={"column"}>
                        <Link to={`/product/${elem.id}`} >
                        <Img src={elem.thumb} />
                        <Heading mt={10} fontSize={15}>{elem.brand}</Heading>
                        <p>{elem.name}</p>
                        <Box><Text fontSize={10} fontWeight={"bold"} as="span">Rs. </Text><Text fontWeight={"bold"} fontSize={20} as="span">{elem.price}</Text></Box>
                        <Flex w={"40%"} alignItems={"center"}  mt={1}>
                            {   
                                elem.rating > 0 ? 
                                [...Array(Math.floor(elem.rating)).keys()].map(()=>{
                                    return <svg style={{"min-height":"20px","height":"20px"}} focusable="false" viewBox="0 0 24 24" class="pip-svg-icon pip-ratings-bar__star pip-ratings-bar__star--filled" aria-hidden="true"><path  d="m12.0025 4 2.8593 4.9091 5.5524 1.2024-3.7852 4.2363L17.2012 20l-5.1987-2.2909L6.8038 20l.5723-5.6522-3.7853-4.2363 5.5524-1.2024L12.0025 4z"></path></svg>
                                }) : null
                            }
                            
                            {elem.rating > 0 ? <Text fontSize={15} >({elem.reviews})</Text> : null}
                            
                        </Flex>
                        </Link>
                        <Flex mt={3}>
                            <Button p={0}  onClick={()=>{
                                dispatch(addToCart(elem))
                                    cartToast({
                                        title: 'Added to cart.',
                                        description: "Product has been added to the cart.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })

                            }}  colorScheme='blue' backgroundColor={"blue.600"} borderRadius={"50%"}><svg focusable="false" viewBox="0 0 24 24" style={{"minWidth":"1.5rem","padding":"7px","fill":"white"}} aria-hidden="true"><path  fill-rule="evenodd" clip-rule="evenodd" d="M10.4372 4h3.1244l.2922.4801 3.3574 5.517h5.0694l-.3104 1.2425L21.5303 13h-2.0615l.2506-1.0029H4.2808l1.3106 5.2426a1 1 0 0 0 .9702.7574H15v2H6.5616c-1.3766 0-2.5766-.9369-2.9105-2.2724L2.03 11.2397l-.3107-1.2426H6.788l3.357-5.517L10.4372 4zm2.0003 2L14.87 9.9971H9.1291L11.5614 6h.8761zm5.5586 10v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></path></svg></Button>
                            <Button onClick={(e)=>{
                                dispatch(addToLoved(elem))
                                lovedProducts.some(ele => ele.id === elem.id) ? lovedToast({
                                    title: 'Removed from loved Items.',
                                        description: "Product has been removed from the wishlist.",
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                }) :
                                lovedToast(
                                    {
                                        title: 'Added to loved Items.',
                                        description: "Product has been added to the wishlist.",
                                        status: 'warning',
                                        duration: 2000,
                                        isClosable: true,
                                    }
                                )
                                //e.target.style.fill = (lovedProducts.some(ele => ele.id === elem.id) ? "black" : "red")
                                
                            }}  ml={5} p={0} colorScheme='white' borderRadius={"50%"} _hover={{"backgroundColor":"lightgray"}}>
                                <svg focusable="false" fill={lovedProducts.some(ele => ele.id === elem.id) ? "red" : "black"} viewBox="0 0 24 24" style={{"width":"1.5rem"}} aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </Button>
                        </Flex>
                        
                    </Flex>
          );
        })}
      </Stack>
    </div>
  );
}
