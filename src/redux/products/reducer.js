
const initialState = {
    products:[{
        "id":1,
        "brand":"SNURRAD",
        "name":"storage turntable",
        "price":2900,
        "rating":4.5,
        "reviews":7,
        "thumb":"https://www.ikea.com/in/en/images/products/snurrad-storage-turntable-transparent__1012819_pe829032_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/snurrad-storage-turntable-transparent__1012822_pe829033_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":2,
        "brand":"TILLREDA",
        "name":"Portable induction hob",
        "price":3990,
        "rating":4,
        "reviews":4,
        "thumb":"https://www.ikea.com/in/en/images/products/tillreda-portable-induction-hob-1-zone-white__0965512_pe809593_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/tillreda-portable-induction-hob-1-zone-white__0965760_pe809597_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":3,
        "brand":"TILLREDA",
        "name":"Brackets for microwave oven",
        "price":1200,
        "rating":5,
        "reviews":1,
        "thumb":"https://www.ikea.com/in/en/images/products/tillreda-brackets-for-microwave-oven__0237340_pe376720_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/tillreda-brackets-for-microwave-oven__0237340_pe376720_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":4,
        "brand":"LAGAN",
        "name":"Integrated dishwasher, 60 cm (23 1/2 \")",
        "price":41990,
        "rating":0,
        "reviews":0,
        "thumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854669_pe780720_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/lagan-integrated-dishwasher__0854673_pe780723_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":5,
        "brand":"FÖRBRÄNNA",
        "name":"Gas hob",
        "price":9990,
        "rating":5,
        "reviews":2,
        "thumb":"https://www.ikea.com/in/en/images/products/foerbraenna-gas-hob-black__0781353_pe760702_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/foerbraenna-gas-hob-black__0781352_pe760687_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":6,
        "brand":"FÖRGYLLA",
        "name":"Gas hob",
        "price":21990,
        "rating":5,
        "reviews":1,
        "thumb":"https://www.ikea.com/in/en/images/products/foergylla-gas-hob-black__0781363_pe760696_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/foergylla-gas-hob-black__0781362_pe760695_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":7,
        "brand":"LAGAN",
        "name":"Gas hob",
        "price":4290,
        "rating":5,
        "reviews":1,
        "thumb":"https://www.ikea.com/in/en/images/products/lagan-gas-hob-black__0781369_pe760700_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/lagan-gas-hob-black__0781372_pe760688_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":8,
        "brand":"NYTTIG",
        "name":"Hob separator for drawer",
        "price":1300,
        "rating":0,
        "reviews":0,
        "thumb":"https://www.ikea.com/in/en/images/products/nyttig-hob-separator-for-drawer-white__0755142_pe748278_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/nyttig-hob-separator-for-drawer-white__0755142_pe748278_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":9,
        "brand":"MATÄLSKARE",
        "name":"Forced air oven",
        "price":33990,
        "rating":0,
        "reviews":0,
        "thumb":"https://www.ikea.com/in/en/images/products/mataelskare-forced-air-oven-stainless-steel__0754910_pe748167_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/mataelskare-forced-air-oven-stainless-steel__0869528_pe670391_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":10,
        "brand":"NYTTIG TUB 125",
        "name":"Flexible pipe for fan",
        "price":1800,
        "rating":0,
        "reviews":0,
        "thumb":"https://www.ikea.com/in/en/images/products/nyttig-tub-125-flexible-pipe-for-fan__0755146_pe748282_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/nyttig-tub-125-flexible-pipe-for-fan__0755146_pe748282_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":11,
        "brand":"UTRUSTA",
        "name":"Bracket for oven",
        "price":1600,
        "rating":4,
        "reviews":7,
        "thumb":"https://www.ikea.com/in/en/images/products/utrusta-bracket-for-oven-galvanised__0755148_pe748284_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/utrusta-bracket-for-oven-galvanised__0755148_pe748284_s5.jpg?f=xxs",
        "quantity":1
    },{
        "id":12,
        "brand":"FÖRDJUPA",
        "name":"Gas hob",
        "price":14990,
        "rating":1,
        "reviews":1,
        "thumb":"https://www.ikea.com/in/en/images/products/foerdjupa-gas-hob-black-stainless-steel__0781358_pe760692_s5.jpg?f=xxs",
        "hoverThumb":"https://www.ikea.com/in/en/images/products/foerdjupa-gas-hob-black-stainless-steel__0781357_pe760691_s5.jpg?f=xxs",
        "quantity":1
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
            if(state.loved.some(e => e.id === action.payload.id)){
                let removeLoved = state.loved.filter((elem)=>{
                    return elem.id != action.payload.id
                })
                return {
                    ...state,
                    loved:[...removeLoved]
                }
            }
            return {
                ...state,
                loved:[...state.loved,action.payload]
            }
        case "inc":
            let arr1=[]
            for (let index = 0; index < state.cart.length; index++) {
                if(action.payload.id===state.cart[index].id){
                    state.cart[index].quantity=state.cart[index].quantity+1;
                    arr1.push(state.cart[index]);
                    continue;
                }
                arr1.push(state.cart[index])
            }
             return {
                ...state,
                cart:[...arr1]
             }
        case "dec":
            let arr=[]
            for (let index = 0; index < state.cart.length; index++) {
                if(action.payload.id===state.cart[index].id){
                    state.cart[index].quantity=state.cart[index].quantity-1;
                    if(state.cart[index].quantity===0){
                        continue
                    }
                    arr.push(state.cart[index]);
                    continue;
                }
                arr.push(state.cart[index])
            }
             return {
                ...state,
                cart:[...arr]
             }
            
        default:
            return state
    }
}

export {productsReducer}