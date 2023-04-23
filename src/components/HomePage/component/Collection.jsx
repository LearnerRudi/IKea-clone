import React from "react";
import { Box, Image, Grid, Text } from "@chakra-ui/react"; 

const Collection = () => {

  return (
    <Box ml={91} mt={90} mr={35}>
       <Text fontSize='2xl' as='b'>Collections in focus</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Box>
          <Image src="https://www.ikea.com/images/c6/d0/c6d0f1e93ef961e700b92595f84a2eb0.jpg?f=xs" alt="Image 1" objectFit="cover" />
        </Box>
        <Box>
          <Image src="https://www.ikea.com/images/b3/fd/b3fd62e8f4fdeda0bc61c43cabc23a09.jpg?f=xs" alt="Image 2" objectFit="cover" />
        </Box>
        <Box>
          <Image src="https://www.ikea.com/images/c3/90/c3902cb5b9f1d62262609aa38f979fcc.jpg?f=xs" alt="Image 3"  objectFit="cover" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Collection;
