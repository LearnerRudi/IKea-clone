import React, { useEffect ,useState} from "react";
import { Flex, Spacer, Box, Heading, Button, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  Image,
  Stack,
  Text,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import LeftSAide from "../components/CartPage/Component/leftSAide";
import Slider from "../components/CartPage/Component/Slider";
import Buttons from "../components/CartPage/Component/buttons";
import { Navbar } from "../components/HomePage/component/Navbar";
import Footer from "../components/HomePage/component/Footer";

export default function Cart() {

  const data = useSelector((store) => {
    return store.productsReducer.cart;
  });
  const [total,setTotal] =useState(0);
 useEffect(()=>{
  let sum=0;
  for (let index = 0; index < data.length; index++) {
   sum+=data[index].price *data[index].quantity;
  }
console.log(sum)
setTotal(sum)

 },[data])

 
  return (
    <div>
      <Navbar />
      {data.length > 0 ? (
        <Flex>
          <Box w="65%" marginLeft="10%" marginRight="8%" p={12}>
            <Flex>
              <Box>
                <Heading as="h3" size="xl">
                  Shopping bag
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Center>
                  <Button colorScheme="gray" bg="white" borderRadius="100%">
                    <Heading size="md" textalign="center">
                      ...
                    </Heading>
                  </Button>
                </Center>
              </Box>
            </Flex>

            <Box marginTop="50px">
              {data.map((e) => {
                return (
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src={e.thumb}
                      alt="Caffe Latte"
                    />

                    <Stack>
                      <CardBody>
                        <Heading size="md">{e.brand}</Heading>
                        <Heading size="md">{e.price}</Heading>

                        <Text py="2" textAlign="center">
                          {e.name}
                        </Text>
                      </CardBody>

                      <CardFooter>
                        <Buttons quantity={e.quantity} element={e} />
                      </CardFooter>
                    </Stack>
                  </Card>
                );
              })}
            </Box>
          </Box>

          <Box w="35%" marginRight="30px">
            <LeftSAide total={total}/>
          </Box>
        </Flex>
      ) : (
        <Heading marginTop="60px">Your bag is empty</Heading>
      )}

      <hr />
      <Slider />
      <Footer />
    </div>
  );
}
