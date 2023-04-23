
const data={
    buyProduct:[
        {
            "id":4,
            "brand":"LAGAN",
            "name":"Integrated dishwasher, 60 cm (23 1/2 \")",
            "price":41990,
            "rating":0,
            "reviews":0,
            "thumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854669_pe780720_s5.jpg?f=xxs",
            "hoverThumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854673_pe780723_s5.jpg?f=xxs",
            
        }
    ]
    
}

export const get_cart_product=()=>{
    return (dispatch)=>{
        try{

            dispatch({
                type:"PRODUCT_DATA",
                payload:data.buyProduct
            })

        }
        catch(error){
            console.log(error);

        }
    }
}
