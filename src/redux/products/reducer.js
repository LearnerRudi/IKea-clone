
const initialState = {
    products:[],
    loved:[],
    cart:[]
}

function productsReducer(state=initialState,action){
    switch (action.type) {
        default:
            return state
    }
}

export {productsReducer}