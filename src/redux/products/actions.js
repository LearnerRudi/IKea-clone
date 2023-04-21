

function addToCart(item){
    return (dispath,state)=>{
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

export {addToCart,addToLoved}