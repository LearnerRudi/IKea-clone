import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, IconButton, Image,Text,Link,Divider} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const CardSlider = () => {
  const images = [
   {image:"https://www.ikea.com/images/45/8f/458f8528feea3be360d7e8e38c1664b9.jpg?f=xs",title:"Your home. Your way.",content:"Enrich the elegance, coziness, and comfort of your home by adding storage, decorating the guest room with a range of things that fit your budget, and creating a more welcoming vibe for your guests.",color:"#E5BFB4"},
   {image:"https://www.ikea.com/images/cd/99/cd991361fe575d1f8c5c99603e5fe79f.jpg?f=xs",title:"Prepare for celebrations",content:"Celebrating with your loved ones is something to always treasure. Start off right with our curated product ranges. Our selection of fun and useful helpers is just right for all types of celebrations with your friends and family.",color:"#F5C869"},
   {image:"https://www.ikea.com/images/26/1a/261a21be328ae2ccc06f37505c4cd310.jpg?f=xs",title:"Products under Rs.199",content:"You dont't need a big wallet to afford high-quality products",color:"#99AEA0"},
   {image:"https://www.ikea.com/images/8c/0c/8c0cb89e0bc4ac16cdee8b02430fe453.jpg?f=xs",title:"Affordable Sets - Living Room",content:"Everyone deserves a first-class living room, no matter how big or small their budget is. Here’s how to make this multifunctional space that meets all your needs without breaking the bank.",color:"#BFB9B9"},
   {image:"https://www.ikea.com/images/33/54/335453591e5b55937d252201351a0625.jpg?f=xs",title:"Last chance to buy!",content:"These products will be out of the range soon.",color:"#D7D1B8"},
   {image:"https://www.ikea.com/images/f9/59/f959aedb81d7804710fa4fa48e648ef5.jpg?f=xs",title:"Furniture under Rs.2,999",content:"We think that everyone should be able to afford good home furnishings. When we design a product, we first create the price tag. This means that we always try to find the best materials and avoid waste during production.",color:"#D5C995"},
   {image:"https://www.ikea.com/images/04/60/0460689f3d33b4073b65995fb7ef53af.jpg?f=xs",title:"Affordable Sets - Bedroom",content:"Your bedroom is where you recharge after a long day. Why not match your bed to other furniture in the room for a cohesive look? We offer timeless, rustic, elegant, modern, and contemporary furniture at affordable prices with nothing but creativity at your disposal.",color:"#D5C995"},
   
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
    <Flex ml={91} mt={90} mr={35} >
      {showLeftButton && (
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={handleLeftClick}
          ml={6}
          mt={280}
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

{images.map((ele, index) => (

<Box key={index}  width="100%" minWidth="31.33%" position="relative" bg={ele.color} m={3} >
  <Box >
    <Image src={ele.image} alt={ele.title}  objectFit="cover" width={"100%"}/>
    <Box mt={4} h={300} p={4}>
      <Link fontWeight="bold" fontSize={"2xl"}>{ele.title}</Link>
      <Text mt={2}>{ele.content}</Text>
      
    </Box>
    <Box  bottom={0} left={0} p={3} >
      <BsFillArrowRightCircleFill />
     </Box>
  </Box>
  
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
          mt={280}
          borderRadius="50%"
          boxShadow="md"
          zIndex="1"
        />
      )}
    </Flex>
    <Divider mt={10} borderColor="gray.300" ml={92} width="91%" mb={70}/>
    </>
  );
};

export default CardSlider;