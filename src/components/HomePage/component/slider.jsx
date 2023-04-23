import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, IconButton, Image,Text} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Slider = () => {
  const images = [
    "https://www.ikea.com/images/99/ee/99eef67d8d368ee38593082ebb3392f6.png?f=xxs",
    "https://www.ikea.com/images/a9/ec/a9ec0017756bbd2df5cc2a6f1b17b411.png?f=xxs",
    "https://www.ikea.com/images/97/6f/976f5540f0fb571e190df97d734360fb.png?f=xxs",
    "https://www.ikea.com/images/c1/a1/c1a1a821197fb5a64d8be22d9d665391.png?f=xxs",
    "https://www.ikea.com/images/7b/64/7b64454ce071d6d6b1f8cc63451770c6.png?f=xxs",
    "https://www.ikea.com/images/82/0d/820d94784d4cf4fb1ca75deabcb5ab31.png?f=xxs",
    "https://www.ikea.com/images/83/1a/831a4daa7a37e8519d1c6f61cef4d36f.jpg?f=xxs",
    "https://www.ikea.com/images/ee/f2/eef2ead534992b9105c54e755f46d087.png?f=xxs",
    "https://www.ikea.com/images/31/91/3191c174b6b865de4f955dcd2a705716.png?f=xxs",
    "https://www.ikea.com/images/27/8b/278b486fe35aedddf6d4d966e4273790.png?f=xxs"
   
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
    <Text fontSize='2xl' as='b' mt={6} ml={92}>Categories for affordable changes</Text>
   
    <Flex ml={92} mt={6} mr={35}>
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
    </>
  );
};

export default Slider;
