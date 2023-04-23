import { useState } from "react";
import {
Box,
Flex,
IconButton,
Input,
InputGroup,
InputLeftElement,
useDisclosure,
Drawer,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
DrawerHeader,
DrawerBody,
DrawerFooter,
InputRightElement,
Image,
Button,
Grid,
GridItem,
VStack,
Link,
Icon,
Text,

} from "@chakra-ui/react";
import {
FaBars,
FaSearch,

FaChevronRight,
FaGlobe,


} from "react-icons/fa";
import { BiUser,BiCamera } from 'react-icons/bi';
import {FiTruck,FiHeart} from 'react-icons/fi'
import {TbShoppingBag} from 'react-icons/tb'
import {RxCross2} from 'react-icons/rx'
import SubNavBar from "./SubNavBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate =useNavigate()
const {
isOpen: isDrawerOpen,
onOpen: onDrawerOpen,
onClose: onDrawerClose,
} = useDisclosure();
const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

const handleSearchDrawerOpen = () => setIsSearchDrawerOpen(true);
const handleSearchDrawerClose = () => setIsSearchDrawerOpen(false);

const handleLoginDrawerOpen = () => setIsLoginDrawerOpen(true);
const handleLoginDrawerClose = () => setIsLoginDrawerOpen(false);

const handleMenuDrawerOpen = () => setIsMenuDrawerOpen(true);
const handleMenuDrawerClose = () => setIsMenuDrawerOpen(false);

return (
<Box py={4} mt={8}>
<Flex justify="space-around" align="center" px={4} mx="auto" maxW="8xl" ml={3}>
<Box>
<IconButton
icon={<FaBars bg='none'/>}
aria-label="Open menu"
onClick={handleMenuDrawerOpen}
bg="none"
borderRadius="full"
/>
<p>Menu</p>

</Box>
<Box ml={6} onClick={()=>{navigate('/')}}>
<Image src='https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' alt='logo' />
</Box>

{/* search box */}
<Box flex="1" ml={30} mr={70}>
  <InputGroup>
    <InputLeftElement pointerEvents="none" children={<FaSearch />} />
    <Input type="text" placeholder="What are you looking for?" pr="3rem" borderRadius="full" />
    <InputRightElement width="3.5rem">
      <IconButton
        icon={<BiCamera />}
        aria-label="Open search"
        onClick={handleSearchDrawerOpen}
        bg="none"
        borderRadius="full"
        p={4}
      />
    </InputRightElement>
  </InputGroup>
</Box>

<Button
  leftIcon={<BiUser />}
  aria-label="Wishlist"
  mr={4}
  onClick={onDrawerOpen}
  bg="none"
  borderRadius="full"
>
  Hej! Login or Sign Up
</Button>
    <IconButton
      icon={<FiTruck />}
      aria-label="Shipping"
      mr={4}
      bg="none"
      borderRadius="full"
    />

    <IconButton
      icon={<FiHeart />}
      aria-label="Wishlist"
      mr={4}
      // onClick={onDrawerOpen}
      bg="none"
      borderRadius="full"
    />

    <IconButton
      icon={<TbShoppingBag />}
      aria-label="Cart"
       onClick={()=>{navigate('/cart')}}
      bg="none"
      mr={6}
      borderRadius="full"
    />

<Drawer
  isOpen={isDrawerOpen}
  placement="right"
  onClose={onDrawerClose}
  size={"md"}
>
  <DrawerOverlay />
  <DrawerContent boxShadow="lg" bg="#0058A3">
    <DrawerCloseButton _hover={{ bg: "white", borderRadius: "full" }}
  bg="white"
  borderRadius="full"
  size="md"
  position="absolute"
  top={4}
  right={4}
  zIndex={1}/>
    <DrawerHeader mb={12}></DrawerHeader>

    <DrawerBody bg="#0058A3" p={0} overflow={"hidden"}>
      <Box p={4} borderBottom="1px solid white" m={4}>
        <Grid templateColumns="80% 20%" gap={4}>
          <Box>
            <Text fontWeight="bold" color="white" fontSize={"3xl"}>
              Hej!
            </Text>
          </Box>
          <Box>
            <Button
              variant="solid"
              bg="white"
              borderRadius="full"
              size="md"
              mb={4}
              onClick={()=>{ navigate("/login")}}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Box>

      <Box p={4} borderBottom="1px solid white"  m={4}>
        <Grid templateColumns="80% 20%" gap={4}>
          <Box>
            <Link fontWeight={"bold"}  color="white">
              JOIN IKEA FAMILY
            </Link>
            
          </Box>
          <Box>
            <Button
              variant="outline"
              colorScheme="white"
              borderRadius="full"
              size="md"
              bg="white"
              color="#0058A3"
            >
              <Icon as={FaChevronRight} />
            </Button>
          </Box>
        </Grid>
      </Box>

      <Box p={4}  borderBottom="1px solid white" width={"100%"} m={4}>
        <Grid templateColumns="80% 20%" gap={4}>
          <Box>
            <Link fontWeight={"bold"} color="white">
              JOIN IKEA BUSINESS NETWORK
            </Link>
            
          </Box>
          <Box>
            <Button
              variant="outline"
              colorScheme="white"
              borderRadius="full"
              size="md"
              bg="white"
              color="#0058A3"
              ml={-6}
            >
              <Icon as={FaChevronRight} />
            </Button>
          </Box>
        </Grid>
      </Box>

      <VStack alignItems={"flex-start"}  bg={"white"} p={4} 
      h={290}  >
        
          <Link>Purchase history</Link>
          <Link>Shopping list</Link>
          <Link>Planners</Link>
   
      </VStack>
    </DrawerBody>

    
  </DrawerContent>
</Drawer>


  
<Drawer
  isOpen={isSearchDrawerOpen}
  placement="right"
  onClose={handleSearchDrawerClose}
  size={'md'}
>
  <DrawerOverlay />
  <DrawerContent bg="white" boxShadow="lg">
    <DrawerCloseButton />
    <center>
      <DrawerHeader fontSize={'sm'}>
        Search IKEA products using a photo
      </DrawerHeader>
    </center>

    {/* Search Bar */}
    <DrawerBody>
      {/* Button for Taking or Uploading a Photo */}
      <Box bg="black" borderRadius={"full"} color={"white"} px={4}> 
      
      <IconButton
        icon={<BiCamera />}
        bg={"black"}
      />
        text Take or upload a photo
      </Box>

      <Text mb={4} fontSize={"sm"} w={"95%"} textAlign={"center"}>
        Your privacy is important to us! Please don't upload images with people
        in them. Images will only be used to improve search quality.
      </Text>

   
      <Text fontWeight="bold" mb={2} w={"90%"} p={4} fontFamily={12} textAlign={"center"}>
        Or try it out by clicking one of the images below
      </Text>

      {/* Grid of Images */}
      <Grid templateColumns="repeat(2, 1fr)" gap={4} p={10}>
            {/* Content for first column */}
            <Box  h="100%">
              <Box h="40%" mb={7}>
              <Image
              src="https://www.ikea.com/in/en/search/visual/visual1.jpg"
              alt="shop Now"
              
            />
              </Box>
              <Box h="60%">
              <Image
              src="https://www.ikea.com/in/en/search/visual/visual4.jpg"
              alt="shop Now"
            />
              </Box>
            </Box>
            {/* Content for second column */}
            <Box  h="100%">
            <Box h="60%" mb={-4}>
              <Image
              src="https://www.ikea.com/in/en/search/visual/visual2.jpg"
              alt="shop Now"
              
            />
              </Box>
              <Box h="40%">
              <Image
              src="https://www.ikea.com/in/en/search/visual/visual3.jpg"
              alt="shop Now"
            />
              </Box>
            </Box>
          </Grid>

  
      <Box>
        <Image src="https://www.ikea.com/in/en/search/images/visual-search-placeholder.svg" alt="Additional Image" mb={4} />
        <Text>
          This is an additional section with an image and paragraph describing
          the content.
        </Text>
      </Box>
    </DrawerBody>

    <DrawerFooter>
    
    </DrawerFooter>
  </DrawerContent>
</Drawer>

   <Drawer
     isOpen={isMenuDrawerOpen}
     placement="left"
     onClose={handleMenuDrawerClose}
     size={'sm'}
   >
     <DrawerOverlay />
     <DrawerContent bg="white" boxShadow="lg">
      
       <DrawerHeader>
       <Grid templateColumns="20% 70%" gapx="16%">
          <GridItem>
            <Box>
              <RxCross2 onClick={handleMenuDrawerClose} cursor="pointer" />
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image src='https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' alt='logo' />
            </Box>
          </GridItem>
        </Grid>
       </DrawerHeader>

       
       <DrawerBody>
       <Grid templateColumns="20% 70%" gapx="10%">
       <GridItem>
            {/* Left column is blank */}
          </GridItem>
          <GridItem>
            <VStack align="start" p={4}>

              <Link fontWeight="bold" fontSize={"4xl"} py={2} lineHeight={10}>   Products
Rooms
New at IKEA
Offers</Link>
              <Link fontWeight="bold" >Handpicked combinations for a new fresh look</Link>
              <Link fontWeight="bold">We have lowered our prices</Link>
              <Link fontWeight="bold">Affordable accessories for everyday life</Link>
              <Link fontWeight="bold">Tips and inspirations</Link>
              <Link fontWeight="bold">Currently at IKEA</Link>
              <Link fontWeight="bold">Track your order</Link>
              <Box mt={12}>
              <VStack align="start" >
              <Link >IKEA Family</Link>
              <Link >IKEA Business</Link>
              <Link>IKEA Restaurant</Link>
              <Link>Our stores</Link>
              <Link>Design your room</Link>
              <Link>Customer service</Link>
              <Link>Download the IKEA app</Link>
              </VStack>
              </Box>
            
            </VStack>
          </GridItem>
          <GridItem>
            {/* Left column is blank */}
          </GridItem>
          <GridItem mt={20}>
          <Button
  leftIcon={<Icon as={FaGlobe} />}
  variant="ghost"
  fontSize="sm"
  borderRadius="full"
  borderColor="gray.300"
  borderWidth="1px"
  _hover={{ borderColor: "black" }}
  p={4}
>
  Change Country
</Button>
          </GridItem>
       </Grid>
       </DrawerBody>

       <DrawerFooter>
       
       </DrawerFooter>
     </DrawerContent>
   </Drawer>
 </Flex>
 <SubNavBar/>
</Box>
);
};

export {Navbar};