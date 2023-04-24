import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, IconButton, Image,Text,Divider} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const FurnitureSlider = () => {
  const images = [
    "https://www.ikea.com/images/sofa-bed-a3a1790f9c43b63a59a3973073e657d9.jpg?f=xxs",
    "https://www.ikea.com/images/beds-3a37f0453c1946932d8c44554fa9b717.jpg?f=xxs",
    "https://www.ikea.com/images/1e/06/1e067e71362f9593405febbe415da2e3.jpg?f=xxs",
    "https://www.ikea.com/images/d7/4f/d74f92eeb7fd2215fc79646c6b7f2664.jpg?f=xxs",
    "https://www.ikea.com/images/2d/6b/2d6b918803728f28cb6263202f51596c.jpg?f=xxs",
    "https://www.ikea.com/images/d7/4f/d74f92eeb7fd2215fc79646c6b7f2664.jpg?f=xxs",
    "https://www.ikea.com/images/83/1a/831a4daa7a37e8519d1c6f61cef4d36f.jpg?f=xxs",
    "https://www.ikea.com/images/75/9f/759fc4bd0f1a2c7af564ccde5755e5fd.jpg?f=xxs",
    "https://www.ikea.com/images/d7/4e/d74e72bbf58f2fea3c75f8478e943c07.jpg?f=xxs",
    "https://www.ikea.com/images/59/0b/590bfbbb6f3187cf0aa4198b7cf34ec0.jpg?f=xxs"
   
  ];

  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
      setShowRightButton(true);
    }
    if (sliderRef.current.scrollLeft === 0) {
      setShowLeftButton(false);
    }
  };

  const handleRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
      setShowLeftButton(true);
    }
    if (
      sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
      sliderRef.current.scrollWidth
    ) {
      setShowRightButton(false);
    }
  };

  useEffect(() => {
    if (sliderRef.current.scrollWidth <= sliderRef.current.offsetWidth) {
      setShowRightButton(false);
    }
  }, []);

  return (
    <>
    <Text fontSize='3xl' as='b' mt={6} ml={92}>Top furniture categories</Text>
   
    <Flex ml={92} mt={6} mr={35} >
      {showLeftButton && (
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={handleLeftClick}
          ml={6}
          mt={140}
          borderRadius="50%"
          boxShadow="md"
          position="absolute"
          zIndex="1"
        />
      )}
      <Box
        ref={sliderRef}
        display="flex"
        overflowX="scroll"
        width="100%"
        scrollbarWidth="none"
        msOverflowStyle="none"
        css={{
          "&::-webkit-scrollbar": {
            width: "0.5rem",
            height: "0.5rem"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray.300",
            borderRadius: "0.25rem"
          }
        }}
      >
        {images.map((image, index) => (
          <Box key={index} flexShrink={0} minWidth="10%" p={1.5}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "60%", objectFit: "cover" }}
            />
            

          </Box>
        ))}
        
      </Box>
      {showRightButton && (
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon />}
          onClick={handleRightClick}
          position="absolute"
          right={20}
          mt={140}
          borderRadius="50%"
          boxShadow="md"
          zIndex="1"
        />
      )}
    </Flex>
    <Divider mt={-145} borderColor="gray.300" ml={92} width="91%" mb={70}/>
    </>
  );
};

export default FurnitureSlider;
