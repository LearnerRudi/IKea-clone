import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, IconButton, Image,Text,Divider} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Accessories = () => {
  const images = [
   "https://www.ikea.com/images/9d/e3/9de3d03eea95f18ebd530256dc3149a5.jpg?f=xxs",
   "https://www.ikea.com/images/11/68/116851826dda366e88207689dd13a7ef.jpg?f=xxs",
   "https://www.ikea.com/images/66/90/66907646786c8b9980cb3e2c63b5b488.jpg?f=xxs",
   "https://www.ikea.com/images/68/d4/68d4c7ae276281f65758ff0ebe03f0fc.jpg?f=xxs",
   "https://www.ikea.com/images/88/9c/889c4dadb6df980b80db8c6003d06b39.jpg?f=xxs",
   "https://www.ikea.com/images/9d/e3/9de3d03eea95f18ebd530256dc3149a5.jpg?f=xxs"
   
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
    <Text fontSize='3xl' as='b' mt={6} ml={92}>Top accessories categories</Text>
   
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

export default Accessories;
