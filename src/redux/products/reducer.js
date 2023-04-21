
const initialState = {
    products:[{
        "id":1,
        "brand":"SNURRAD",
        "name":"storage turntable",
        "price":2900,
        "rating":4.5,
        "reviews":7,
        "thumb":"https://www.ikea.com/in/en/images/products/snurrad-storage-turntable-transparent__1012819_pe829032_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/snurrad-storage-turntable-transparent__1012822_pe829033_s5.jpg?f=xxs"
    },
    {
        "id":2,
        "brand":"TILLREDA",
        "name":"Portable induction hob",
        "price":3990,
        "rating":4,
        "reviews":4,
        "thumb":"https://www.ikea.com/in/en/images/products/tillreda-portable-induction-hob-1-zone-white__0965512_pe809593_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/tillreda-portable-induction-hob-1-zone-white__0965760_pe809597_s5.jpg?f=xxs"
    },{
        "id":3,
        "brand":"TILLREDA",
        "name":"Brackets for microwave oven",
        "price":1200,
        "rating":5,
        "reviews":1,
        "thumb":"https://www.ikea.com/in/en/images/products/tillreda-brackets-for-microwave-oven__0237340_pe376720_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/tillreda-brackets-for-microwave-oven__0237340_pe376720_s5.jpg?f=xxs"
    },{
        "id":4,
        "brand":"LAGAN",
        "name":"Integrated dishwasher, 60 cm (23 1/2 \")",
        "price":41990,
        "rating":0,
        "reviews":0,
        "thumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854669_pe780720_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854673_pe780723_s5.jpg?f=xxs"
    }],
    loved:[],
    cart:[]
}

function productsReducer(state=initialState,action){
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case "ADD_TO_LOVED":
            return {
                ...state,
                loved:[...state.loved,action.payload]
            }
        default:
            return state
    }
}

export {productsReducer}