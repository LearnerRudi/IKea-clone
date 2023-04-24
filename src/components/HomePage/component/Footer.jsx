import React from "react";
import { Box, Flex, Icon, Link, Text,Divider,Button,Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaGlobe} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#F5F5F5" pb={6} pt={20} > 
      <Flex direction="column" ml={24} mr={10}>
        {/* Section 1 */}
    <Flex mb={6} justify={"space-between"} mr={86}>
    <Box width='21%'>
      <Text fontWeight="bold" mb={2}>
        Join IKEA Family
      </Text>
      <Text mb={4}>
        Enjoy guaranteed discounts, special previews, and much more. Sign up today - it’s free and only takes a minute to
        join.
      </Text>
      <Link  mb={4}>
        See more
      </Link>
      <Box>
      <Button
        bg="black"
        borderRadius="full"
        color="white"
        _hover={{ textDecoration: "underline" }}
      >
        Join the club
      </Button>
    </Box>
      <Text fontWeight="bold" mt={8} mb={2}>
        IKEA Business Network
      </Text>
      <Text mb={4}>
        Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy
        member discounts, quick-fix tips, online tutorials and a lot more.
      </Text>
      <Link mb={4}>
        See more
      </Link>
      
      <Box>
      <Button
        bg="black"
        borderRadius="full"
        color="white"
        _hover={{ textDecoration: "underline" }}
      >
        Join Now
      </Button>
    </Box>
    </Box>
    <Box>
      <Text fontWeight="bold" mb={2}>
        IKEA Family
      </Text>
      <Stack spacing={2}>
        <Link >Log in</Link>
        <Link >Join IKEA Family</Link>
        <Link >Member offers</Link>
        <Link >Workshops & Events</Link>
      </Stack>
    </Box>
    <Box  >
          <Text fontWeight="bold" mb={2}>
            Services
          </Text>
          <Stack spacing={2}>
          <Link>
            Design your room
          </Link>
          <Link >
            Delivery Service
          </Link>
          <Link >
            Installation Service
          </Link>
          <Link >
            Assembly Service
          </Link>
          <Link >
            Kitchen Planning
          </Link>
          <Link >
            Measuring Service
          </Link>
          <Link >
            Customer Service
          </Link>
          <Link >
            Recycle Program
          </Link>
          <Link >
            Track Your Order
          </Link>
          <Link >
            Click &amp; Collect
          </Link>
          <Link >
            Personal shopper
          </Link>
          </Stack>
        </Box>
        <Box>
       
          <Text fontWeight="bold"  mb={2}>
            Help
          </Text>
          <Stack spacing={2}>
          <Link>How to shop</Link>
          <Link>Return policy</Link>
          <Link>Prices and price tags</Link>
          <Link>Contact us</Link>
          <Link>FAQ's</Link>
          <Link>Planners</Link>
          <Link>Size guide - Beds & mattresses</Link>
          <Link>Buying guides</Link>
          <Link>Gift Card</Link>
          <Link>Feedback</Link>
        </Stack >
        </Box>
        <Box>
          <Text fontWeight="bold"  mb={2} >
            About IKEA
          </Text>
          <Stack spacing={2}>
          <Link>This is IKEA</Link>
          <Link>Working at IKEA</Link>
          <Link>Newsroom</Link>
          <Link>Sustainability</Link>
          <Link>IKEA Stores</Link>
          <Link>IKEA Restaurant</Link>
          <Link>IKEA for Business</Link>
          </Stack>
        </Box>
      </Flex>

        {/* Section 2 */}
        
       
       <Box display="flex" alignItems="center" justifyContent="space-between">
  <Flex align="left" my={6}>
    <Icon
      as={FaFacebook}
      boxSize={6}
      mx={2}
      _hover={{ borderColor: "black" }}
      borderRadius="full"
      borderWidth="1px"
      borderColor="gray.300"
      p={1}
    />
    <Icon
      as={FaInstagram}
      boxSize={6}
      mx={2}
      _hover={{ borderColor: "black" }}
      borderRadius="full"
      borderWidth="1px"
      borderColor="gray.300"
      p={1}
    />
    <Icon
      as={FaTwitter}
      boxSize={6}
      mx={2}
      _hover={{ borderColor: "black" }}
      borderRadius="full"
      borderWidth="1px"
      borderColor="gray.300"
      p={1}
    />
    <Icon
      as={FaYoutube}
      boxSize={6}
      mx={2}
      _hover={{ borderColor: "black" }}
      borderRadius="full"
      borderWidth="1px"
      borderColor="gray.300"
      p={1}
    />
  </Flex>
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
</Box>
   
<Divider my={6} borderColor="gray.300" />
        {/* Section 3 */}
        <Flex justify="space-between" p={4} >
      
        <Text fontSize="sm" mr={2}>
          © Inter IKEA Systems B.V. 2000-2023
        </Text>
      
      <Flex>
        <Link fontSize="sm" mx={2}>
          Privacy Policy
        </Link>
        <Link fontSize="sm" mx={2}>
          Cookie Policy
        </Link>
        <Link fontSize="sm" mx={2}>
          Cookie Settings
        </Link>
        <Link fontSize="sm" mx={2}>
          Terms and Conditions
        </Link>
      </Flex>
    </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
