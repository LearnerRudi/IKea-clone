

function addToCart(item,quantity=1){
    return (dispath,state)=>{
        item.quantity=quantity

        dispath({
            type:"ADD_TO_CART",
            payload:item
        })
    }
}

function addToLoved(item){
    return (dispatch)=>{
        dispatch({
            type:"ADD_TO_LOVED",
            payload:item
        })
    }
}
const incquantity =(product)=>{
    return(dispatch)=>{
        try {
            dispatch({
                type:"inc",
                payload:product
            })
        } catch (error) {
            
        }

    }
}

const decquantity =(product)=>{
    return(dispatch)=>{
        try {
           
            dispatch({
                type:"dec",
                payload:product
            })
        } catch (error) {
            
        }

    }
}


export {addToCart,addToLoved,incquantity,decquantity}