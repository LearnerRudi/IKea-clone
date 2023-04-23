import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Heading } from '@chakra-ui/react';
import { decquantity, incquantity } from '../../../redux/products/actions';

export default function Buttons({quantity,element}) {
    const dispatch=useDispatch();
    
    const incq=()=>{
        dispatch(incquantity(element))
        
      }
    
      const decq=()=>{
       dispatch(decquantity(element))
    
      }
  return (
    <Flex>
         <Button variant='solid' colorScheme='blue'onClick={decq}>
       -
      </Button>

         <Heading size='sm' marginRight="15px" marginLeft="15px">  {quantity}  </Heading>  
      <Button variant='solid' colorScheme='blue'onClick={incq}>
       +
      </Button>
      
    </Flex>
  )
}
