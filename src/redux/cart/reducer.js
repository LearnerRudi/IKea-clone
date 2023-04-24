const initial_data={
    product:[],
    quantity:1
}

export const reducer=(state=initial_data, action)=>{
    if(action.type==="PRODUCT_DATA"){
        return{
            ...state, product:action.payload
        }
        
    }
    else if(action.type==="inc"){
        return{
            ...state, quantity:action.payload + state.quantity
        }
    }
    else if(action.type==="dec"){
        return{

            ...state, quantity: state.quantity-action.payload

    }
    }
    

    return state
}