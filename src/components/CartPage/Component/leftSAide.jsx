import { Flex, Text, Heading, Box, Spacer } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LeftSAide({ total }) {
  const data = useSelector((store) => {
    return store.productsReducer.cart;
  });
  const navigate=useNavigate();
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["sm"];
  return (
    <div>
      <Heading size="sm" color="#484848">
        Order summary
      </Heading>

      <Flex marginTop="40px" textAlign="left">
        <Box marginRight="10px">
          <Text size="sm" color="#484848">
            Total delivery cost
          </Text>
        </Box>
        <Spacer />
        <Box textAlign="end">
          <Text size="sm" color="#484848">
            This subtotal doesn’t include the delivery cost
          </Text>
        </Box>
      </Flex>
      <hr />
      <Flex marginTop="10px">
        <Box>
          <Heading size="sm" marginTop="20px" color="#484848">
            Subtotal
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <div>
            <Heading size="md"> Rs.{total} </Heading>
          </div>
        </Box>
      </Flex>

      <>
        <>
          {sizes.map((size) => (
            <Button
              onClick={() => handleClick(size)}
              key={size}
              m={4}
              colorScheme="blue"
              padding="70px 60px"
              textAlign="end"
              marginTop="60px"
              marginLeft="-10px"
            >
              <Heading size="sm">View delevery and pickup option </Heading>
              <ArrowForwardIcon marginLeft="10px" />
            </Button>
          ))}

          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading size="lg" marginTop="70px">
                  How would you like to receive your order?
                </Heading>
              </DrawerHeader>
              <DrawerBody>
                <Button padding="70px 170px" mb={12}  onClick={()=>{navigate('/payment')}}>
                  {" "}
                  Delivery
                </Button>
                <Button padding="70px 175px" onClick={()=>{navigate('/payment')}}>Collect</Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </>

      <Heading size="sm" marginTop="40px">
        {/* <Text marginLeft="-270px" as={"u"} color="#484848">
          Our Return Policy
        </Text> */}
      </Heading>
      <Heading size="sm" marginTop="40px">
        {/* <Text marginLeft="-90px" as={"u"} color="#484848">
          Secure shopping with SSL data encryption
        </Text> */}
      </Heading>
    </div>
  );
}
