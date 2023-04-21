import { Box, Button, ButtonGroup, Flex, Text, Select, Switch, useDisclosure,Drawer,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,Input,DrawerFooter } from '@chakra-ui/react';
import React, { useState } from 'react';

function ProductsGrid(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = React.useRef()
    let [border,setBorder] = useState(false)

    return (
        <Box mt='80px'>
            <Flex mt='20px' alignItems={"center"} justifyContent={"flex-end"}>
                <Text mr='20px'>0 items</Text>
                <ButtonGroup isAttached variant='outline'>
                    <Button _hover={{"border":"1px solid gray"}} border={border ? "1px solid lightgray" : null}  colorScheme='black' onClick={()=>{
                        setBorder(false)
                    }}  >product</Button>
                    <Button _hover={{"border":"1px solid gray"}} border={border ? null : "1px solid lightgray"} onClick={()=>{
                        setBorder(true)
                    }} colorScheme='black'  >Room</Button>
                </ButtonGroup>
            </Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} mt='20px' overflow={"auto"} gap={20} >
                <Flex>
                <Select variant='filled' borderRadius={25} mr={5}  fontWeight={"semibold"} w={120} placeholder='Sort' >
                    <option>Best match</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                    <option>Customer rating</option>
                    <option>Name</option>
                    <option>Most Popular</option>
                    <option>Width</option>
                    <option>Height</option>
                    <option>Depth</option>
                </Select>
                <Select variant='filled' borderRadius={25} mr={5}  fontWeight={"semibold"} w={120} placeholder='Category'>
                    <option>Accessories for appliances</option>
                    <option>Extractor hoods & filters</option>
                    <option>Hobs</option>
                    <option>Ovens</option>
                </Select>
                <Select variant='filled' borderRadius={25} mr={5}  fontWeight={"semibold"} w={120} placeholder='Material'>
                    <option>Wood</option>
                </Select>
                <Select variant='filled' borderRadius={25} mr={5}  fontWeight={"semibold"} w={120} placeholder='Price' >
                    <option>0-4,999</option>
                </Select>
                <Button ref={btnRef} onClick={onOpen} borderRadius={25} >All Filters</Button>
                </Flex>
                <Box>
                    <Flex alignItems={"center"}>
                        <Text mr='20px'>Compare</Text>
                        <Switch w={'50px'} />
                    </Flex>
                </Box>
            </Flex>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent borderStartRadius={"8px"} >
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} p='20px' fontSize={15} fontWeight={"bold"} borderBottom={"1px solid lightgray"} >Filter and sort</DrawerHeader>

          <DrawerBody>
            <Select>
                <option>Best Match</option>
            </Select>
          </DrawerBody>
                    <Flex justifyContent={"space-evenly"}>
                    <Button paddingY='30px' w={"40%"} borderRadius={30} backgroundColor={"black"} color='white' _hover={{"backgroundColor":"gray.700"}} mr={3} onClick={onClose}>
              View
            </Button>
            <Button paddingY='30px' borderRadius={30} w={"40%"} color='gray.500' colorScheme='gray'>Clear all</Button>
                    </Flex>
          <DrawerFooter>
            
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Box>
    );
}

export default ProductsGrid;