
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logIn } from "../redux/auth/actions";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import {  Grid,
    GridItem,
    Image,
    Flex,Box, Button, FormLabel, Heading, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";

import { HiOutlineArrowLeft } from 'react-icons/hi';

const Login = () => {
    const navigate= useNavigate();
    const toast=useToast();
    const authData=useSelector((state)=>{
      return state.authReducer.users;
    })
    console.log(authData);
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [otp, setOtp] = useState("");
  
    const dispatch = useDispatch();
  
    const handleEmailOrMobileChange = (e) => {
        setEmailOrMobile(e.target.value);
      };
    
      const handleOtpChange = (e) => {
        setOtp(e.target.value);
      };

      const handleSubmit = () => {
        let arr=authData.filter((e)=>{
          return (emailOrMobile === e.email && otp===e.password )
        })
       if(arr.length>0){
        dispatch(logIn());
        navigate("/")
        toast({
          title: 'Logged In',
          description: `Welocme ${arr[0].name}`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       }else{
        toast({
          title: 'User not found.',
          description: "Please enter valid Details.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
       }
        
      };
  return (
    
    <Grid templateColumns={'40% 60%' } gap={4} overflowX={"hidden"} >
      <GridItem bg={"#0058A3"} p={"20px"}>
        <Box h="100%"  justify={"space-between"} alignItems="center" >
          <Flex>
          <Box mt={4}>
            <HiOutlineArrowLeft size={24} color="white" />
          </Box>
          <Box mt={4} ml={7}>
          <Image src='https://in.accounts.ikea.com/resources/static/logo.svg' alt='logo' />
          </Box>
          </Flex>
          <Box mt={160} ml={12} width={"70%"}>
          <Text as="b" fontSize="3xl" textAlign="center" color="white" >
              <Text as="span" color="#FBD914">
                Login
              </Text>{' '}
              to your IKEA account.
            </Text>
            <Text mt={4} textAlign="left" color="white" w={500}>
  Too many passwords?<br/>
  You can now login with an OTP we will send on your email <br/> address or verified mobile number.
      <br/><br/> 
  Access your IKEA account using your email<br/> address to add and verify your mobile number.
</Text>

            <Box mt={139} textAlign="center" >
              <Text fontSize="sm" color={"white"}>
                IKEA.in - Cookie Policy and Privacy Policy
                <br />
                © Inter IKEA Systems B.V. 1999-2023
              </Text>
            </Box>
          </Box>
        </Box>
      </GridItem>
      <GridItem p={"20px"}>
       
<Box w="60%" ml={36}>
  <VStack spacing={4} align={"center"}>
    
  <Heading textAlign="left">Email or Verified Mobile Number</Heading>
        <FormLabel htmlFor="otp" fontSize="lg" textAlign="left">
          Login with an OTP
        </FormLabel>
        <Input type="text" id="otp" value={emailOrMobile} onChange={handleEmailOrMobileChange} />
        <FormLabel htmlFor="password" fontSize="lg" textAlign="left">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type="password" id="password" value={otp} onChange={handleOtpChange} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* Continue button */}
        <Button bg={"#0058A3"} size="lg" w={"70%"} fontSize="sm" borderRadius="full" p={6} onClick={handleSubmit}>
          Continue
        </Button>
  
    <Text fontSize="md" textAlign="left">
      Do not have an IKEA account? Create one now:
    </Text>
    <Box >
    <Button
  w={"70%"}
  variant="ghost"
  fontSize="sm"
  borderRadius="full"
  borderColor="gray.300"
  borderWidth="1px"
  _hover={{ borderColor: "black" }}
  p={6}
 mb={6}
 ml={16}
>
      I'm buying for my home
    </Button>
    <Button variant="ghost"
    w={"70%"}  fontSize="sm"
  borderRadius="full"
  borderColor="gray.300"
  borderWidth="1px"
  _hover={{ borderColor: "black" }}
  p={6}
  ml={16}
>
      I'm buying for my company
    </Button>
    </Box>
  </VStack>
</Box>
      </GridItem>
    </Grid>
  );
};

export default Login;
