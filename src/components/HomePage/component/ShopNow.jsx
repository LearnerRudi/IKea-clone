import React from "react";
import { Box, Flex, Divider, Image, Grid } from "@chakra-ui/react";

const ShopNow = () => {
  return (
    <>
    <Flex ml={92} mr={35} mt={107}>
      <Flex width="100%" gap={5}>
        <Box width="50%" >
        <Box>
        <Image
              src="https://www.ikea.com/images/01/38/01380295769f06cd347e386777678534.jpg?f=m"
              alt="shop Now"
              style={{ clipPath: "inset(0 0 12.6% 0)" }}
            />
          </Box>
        </Box>
        <Box width="50%">
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {/* Content for first column */}
            <Box  h="100%">
              <Box h="40%" mb={7}>
              <Image
              src="https://www.ikea.com/images/d1/b1/d1b1a76d6721db305aeb9e951f4f9587.jpg?f=xxs"
              alt="shop Now"
              
            />
              </Box>
              <Box h="60%">
              <Image
              src="https://www.ikea.com/images/37/67/37671583e153aef6cdf394c34dd2a27a.jpg?f=xxs"
              alt="shop Now"
            />
              </Box>
            </Box>
            {/* Content for second column */}
            <Box  h="100%">
            <Box h="60%" mb={-4}>
              <Image
              src="https://www.ikea.com/images/56/06/560606c237d5d2d91812245d5c373699.jpg?f=xxs"
              alt="shop Now"
              
            />
              </Box>
              <Box h="40%">
              <Image
              src="https://www.ikea.com/images/23/5d/235dbc92f5fd95fc74ea372d57149817.jpg?f=xxs"
              alt="shop Now"
            />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Flex>
    <Divider mt={-12} borderColor="gray.300" ml={92} width="91%" mb={70}/>
    </>
  );
};

export default ShopNow;
