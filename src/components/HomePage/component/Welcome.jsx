import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const user=useSelector((state)=>{
    return state.authReducer;
  })
  console.log(user)
  return (
    <Box textAlign="left" ml={92}>
      <Text fontSize="4xl" fontWeight="bold">
      {user.isAuth? user.users[0].name:"Hej!"}
      </Text>
      <Text fontSize="sm" mt={2} mb={4}>
        This is how we say "hello" in Swedish
      </Text>
      <Text fontSize="md">
        <Link
          fontWeight="bold"
          color="#0069B8"
        >
          Join IKEA Family
        </Link>{" "}
        to get inspired, claim discounts, and receive rewards.
      </Text>
    </Box>
  );
};

export default Welcome;
