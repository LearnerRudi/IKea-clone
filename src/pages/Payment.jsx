import React, { useState } from 'react'
import Checkout1 from '../components/paymentPage/payment-checkout/checkOut1'
import Checkout from '../components/paymentPage/payment-checkout/Checkout'
import CardDetails from '../components/paymentPage/payment-checkout/CardDetails'
import ThankYOu from '../components/paymentPage/payment-checkout/thankYou'
function Payment() {
    const [state,setState]=useState(1)

    if(state==1){
        return <Checkout1 setState={setState}/>
    }else if(state==2){
        return <Checkout setState={setState}/>
    }else if(state==3){
        return  <CardDetails setState={setState}/>
    }else if(state==4){
        return <ThankYOu setState={setState}/>
    }


  
}

export default Payment