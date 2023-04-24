import { Flex, Heading,Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

function Appliances(props) {
    return (
        <Box>
            <Heading fontSize={"2.25rem"}>Kitchen appliances</Heading>
            <Flex mt="40px" overflow={"auto"} cursor={"pointer"} >
                <Box minW="150px" mr="10px" >
                    <Img w="100%" src='https://www.ikea.com/global/assets/navigation/images/small-kitchen-appliances-700175.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Small Kitchen appliances</Text>
                </Box>
                <Box minW="150px" mr="10px"   cursor={"pointer"}>
                    <Img w="100%" src='https://www.ikea.com/in/en/navigation/images/hobs-20812.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Hobs</Text>
                </Box>
                <Box minW="150px" mr="10px"  cursor={"pointer"} >
                    <Img w="100%" src='https://www.ikea.com/global/assets/navigation/images/extractor-hoods-filters-20819.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Extractor hoods & filters</Text>
                </Box>
                <Box minW="150px" mr="10px"  cursor={"pointer"}>
                    <Img w="100%" src='https://www.ikea.com/in/en/navigation/images/ovens-20810.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Ovens</Text>
                </Box>
                <Box minW="150px" mr="10px"  cursor={"pointer"}>
                    <Img w="100%" src='https://www.ikea.com/in/en/navigation/images/microwave-ovens-microwave-combi-ovens-20815.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Microwave ovens & Microwave combi ovens</Text>
                </Box>
                <Box minW="150px" mr="10px"  cursor={"pointer"}>
                    <Img w="100%" src='https://www.ikea.com/global/assets/navigation/images/dishwashers-20825.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Dishwashers</Text>
                </Box>
                <Box minW="150px" mr="10px"  cursor={"pointer"}>
                    <Img w="100%" src='https://www.ikea.com/global/assets/navigation/images/accessories-for-appliances-49968.jpeg?imwidth=400' />
                    <Text mt="10px" fontSize={".875rem"} fontWeight={400} >Accessories for appliances</Text>
                </Box>
            </Flex>
        </Box>
        
    );
}

export default Appliances;