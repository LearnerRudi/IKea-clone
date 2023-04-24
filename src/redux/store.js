import {legacy_createStore as createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { productsReducer } from "./products/reducer"
import { authReducer } from "./auth/reducer"

let combinedReducers = combineReducers({
    productsReducer,
    authReducer
})

let store = createStore(combinedReducers,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

export {store}