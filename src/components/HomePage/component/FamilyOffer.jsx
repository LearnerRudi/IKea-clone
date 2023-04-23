import React from "react";
import { Box, Flex, Divider, Image, Grid,Text } from "@chakra-ui/react";

const FamilyOffer = () => {
  return (
    <>
    <Text fontSize='3xl' as='b' mt={6} ml={92}>IKEA Family offers</Text>
    <Flex ml={92} mr={35} mt={29}>
      <Flex width="100%" gap={5}>
        <Box width="50%" >
        <Box>
        <Image
              src="https://www.ikea.com/ext/ingkadam/m/53518cfbfac41d62/original/PE632935-crop001.jpg?f=m"
              alt="family offer"
              style={{ clipPath: "inset(0 0 12.6% 0)" }}
            />
          </Box>
        </Box>
        <Box width="50%">
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {/* Content for first column */}
            <Box  h="100%">
              <Box h="40%" mb={2}>
              <Image
              src="https://www.ikea.com/images/fe/1f/fe1f9e2e8c482ab3ed653f26248d3564.jpg?f=xxs"
              alt="shop Now"
              
            />
              </Box>
              <Box h="60%">
              <Image
              src="https://www.ikea.com/ext/ingkadam/m/60d3995c84172b3b/original/PE864856-crop001.jpg?f=xxs"
              alt="shop Now"
            />
              </Box>
            </Box>
            {/* Content for second column */}
            <Box  h="100%">
            <Box h="60%" mb={-42}>
              <Image
              src="https://www.ikea.com/ext/ingkadam/m/2ab838690a111097/original/PH162856-crop004.jpg?f=xxs"
              alt="shop Now"
              
            />
              </Box>
              <Box h="40%">
              <Image
              src="https://www.ikea.com/ext/ingkadam/m/4bc0ddba72032e0a/original/CaseStenaFastigheterv1_Static_5x7_HFB003_img7.jpg?f=xxs"
              alt="shop Now"
              style={{ clipPath: "inset(0 0 30% 0)" }}
            />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Flex>
    <Divider mt={-15} borderColor="gray.300" ml={92} width="91%" mb={70}/>
    </>
  );
};

export default FamilyOffer;
