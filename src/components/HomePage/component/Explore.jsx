import React from 'react';
import { Box, Button, Flex, Image,Text} from '@chakra-ui/react';

const TwoColumnLayout = () => {
  return (
    <Flex ml={92} mt={0} mr={35}>
      <Box flex="65%"   >
        <Box >
          <Image src="https://www.ikea.com/images/eabd6c-e042ea2d915e8efd197049238a5abb14.png?f=m" alt="Image" maxW="100%" w="100%" />
        </Box>
      </Box>
      <Box flex="35%">
        
        <Box p={10} bg={"#900C3F"} color={"white"} h={448}>
          <Text  fontSize='2xl' as='b' p={7} >All things wedding!</Text>
          <Text p={7} fontSize={"sm"}>This is the season for love! Getting ready for that life-changing event can be overwhelming with invitations, festive decor, and much more. Find out how you can create a festive, relaxed, vibrant mood and a special day with relatively little effort.</Text>
          <Button ml={7} mt={2} borderRadius="full" bg={"white"} p={5} color={"black"} fontSize={12}>Explore</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default TwoColumnLayout;
