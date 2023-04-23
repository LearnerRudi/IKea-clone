import React, { useState } from 'react';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Image,
  DrawerHeader,
  DrawerBody,
  Grid,
  GridItem,
  Link,
  Text,
  VStack,
  Divider
} from '@chakra-ui/react';

import { RxCross2} from 'react-icons/rx'
import { AiOutlineArrowLeft} from 'react-icons/ai'
 

// Main component to render the nav bar menu
const SubNavBar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isRoomsOpen, setRoomsOpen] = useState(false);

  // Function to handle opening the Products drawer
  const handleProductsOpen = () => {
    setProductsOpen(true);
  };

  // Function to handle closing the Products drawer
  const handleProductsClose = () => {
    setProductsOpen(false);
  };

  // Function to handle opening the Rooms drawer
  const handleRoomsOpen = () => {
    setRoomsOpen(true);
  };

  // Function to handle closing the Rooms drawer
  const handleRoomsClose = () => {
    setRoomsOpen(false);
  };

  return (
    <Box as="nav" ml={92} mt={6}>
      {/* Link components for the menu items */}
      <Link fontWeight="bold" onClick={handleProductsOpen} mr={4} cursor="pointer">
        Products
      </Link>
      <Link fontWeight="bold" onClick={handleRoomsOpen} mr={4} cursor="pointer">
        Rooms
      </Link>
      <Link fontWeight="bold" as="a" href="/new" mr={4}>
        New at Ikea
      </Link>
      <Link fontWeight="bold" as="a" href="/offers">
        Offers
      </Link>

      {/* Drawer for Products */}
      <Drawer
  placement="left"
  isOpen={isProductsOpen}
  onClose={handleProductsClose}
  size={'md'}
>
  <DrawerOverlay>
    <DrawerContent>
      <DrawerHeader>
        <Grid templateColumns="20% 70%" gapx="16%">
          <GridItem>
            <Box>
              <RxCross2 onClick={handleProductsClose} cursor="pointer" />
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
        {/* Content of the drawer for Products */}
        <Grid templateColumns="20% 70%" gapx="10%">
          {/* First section */}
          <GridItem>
            <Box p={4} fontSize={20} color={'black'}>
              <AiOutlineArrowLeft />
            </Box>
          </GridItem>
          {/* Second section */}
          <GridItem>
            
            <Box pt={2}>
              <Text fontWeight="bold" fontSize={20}>Product</Text>
            </Box>
          </GridItem>
          {/* Third section */}
          <GridItem>
            {/* Left column is blank */}
          </GridItem>
          <GridItem>
            <VStack align="start" p={4}>
              <Text fontWeight="bold">Sustainable living</Text>
              <Link fontWeight="bold">Handpicked combinations for a new fresh look</Link>
              <Link fontWeight="bold">Sustainable living</Link>
              <Link >Product guides</Link>
              <Link >Storage & organisation</Link>
              <Link>Furniture</Link>
              <Link>Home Textiles</Link>
              <Link>Decoration</Link>
              <Link>Lighting</Link>
              <Link href='/products'>Kitchen & appliances</Link>
              <Link>Smart Home</Link>
              <Link>Beds & mattresses</Link>
              <Link>Baby & children</Link>
              <Link>Bathroom products</Link>
              <Link>Outdoor products</Link>
              <Link>Working from home</Link>
              <Link>More</Link>
            </VStack>
          </GridItem>
          {/* Fourth section */}
          <GridItem>
            {/* Left column is blank */}
          </GridItem>
          <GridItem mt={20}>
            <Box >
              <Text fontWeight="bold">Recently viewed</Text>
              <Image width={100} height={100} src='https://www.ikea.com/in/en/images/products/rinnig-cleaning-gloves-green__0930407_pe790749_s5.jpg?f=xxxs' alt='Recently viewed' />
            </Box>
          </GridItem>
        </Grid>
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>

      {/* Drawer for Rooms */}
      <Drawer
  placement="left"
  isOpen={isRoomsOpen}
  onClose={handleRoomsClose}
  size={'md'}
>
  <DrawerOverlay>
    <DrawerContent>
      <DrawerHeader>
        <Grid templateColumns="20% 70%" >
          <GridItem>
            <Box>
              <RxCross2 onClick={handleRoomsClose} cursor="pointer" />
            </Box>
          </GridItem>
          <GridItem>
            <Box >
              <Image src='https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' alt='logo' />
            </Box>
          </GridItem>
        </Grid>
      </DrawerHeader>
      <DrawerBody>
        {/* Content of the drawer for Rooms */}
        <Grid templateColumns="20% 70%" gapx="10%">
          {/* First section */}
          <GridItem>
            <Box p={4} fontSize={20} color={'black'}>
              <AiOutlineArrowLeft />
            </Box>
          </GridItem>
          {/* Second section */}
          <GridItem>
            <Box pt={2}>
              <Text fontWeight="bold" fontSize={20}>Rooms</Text>
            </Box>
          </GridItem>
          {/* Third section */}
          <GridItem>
           
          </GridItem>
          <GridItem>
           
            <Grid templateColumns="50% 50%" gap={5} mt={7}>
     
              <GridItem>
                <Box borderWidth="1px">
                 
                  <Image src="https://www.ikea.com/images/a-blue-blakullen-bed-with-corner-headboard-in-a-bright-room--a96b30df3a5d0fc6aacc7ac66604dc61.jpg?f=xxxs" alt="Image 1" />
                  
                </Box>
                <Link>Bedroom</Link>
              </GridItem>
             
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Living Rooms</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/a-bedroom-with-a-kura-reversible-bed-and-another-bed-paralle-2e66ab0bad65e50092be14cf43bc687b.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Children's Rooms</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px">
                  
                  <Image src="https://www.ikea.com/images/a-colourful-room-with-a-workspace-centred-around-a-white-tro-2623e9c04d7e384b20c6f291ca946779.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Home office</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px">
                  
                  <Image src="https://www.ikea.com/images/a-metod-kitchen-in-white-with-stairs-to-the-side-and-a-landi-29ded8d41b2bdc456bd69c0a1e313869.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Kitchen</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/a-light-kitchen-with-aelvsta-rattan-seat-and-black-frame-cha-b3d791d36d2c081be8302c8a4793dd1e.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Dining Room</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/a-hemnes-mirror-cabinet-in-white-with-bathroom-items-on-the--a59784ae57d8595cc51ea2e5216023b3.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Bathroom</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/a-lush-outdoor-space-with-a-dark-grey-viholmen-dining-furnit-a95542e7baeb5dd2b77e4a9e6e17d7e8.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Outdoors</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
                 
                  <Image src="https://www.ikea.com/images/two-white-hemnes-shoe-cabinets-with-4-compartments-are-in-a--17dc23d43ce8044db4a9132eeac3ea56.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Hailways</Link>
              </GridItem>
              <GridItem>
                <Box borderWidth="1px" >
               
                  <Image src="https://www.ikea.com/images/a-woman-working-at-a-bekant-sit-stand-desk-beside-a-large-wi-f4cad67bb46bc9cf859279a9800e3c85.jpg?f=xxxs" alt="Image 2" />
                  
                </Box>
                <Link>Business Place</Link>
              </GridItem>
            
            </Grid>
          </GridItem>
        </Grid>
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>
<Divider my={2} borderColor="gray.300" />
    </Box>
  );
};

export default SubNavBar;
