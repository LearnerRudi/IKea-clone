
const initialState = {
    isAuth:false,
    users:[
        {
            email:"masai@gmail.com",
            name:"Ankur",
            password:"ankur123",
        }
    ]
}

function authReducer(state=initialState,action){
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuth:true
            }
        case "NEW_USER":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        case "LOGOUT":
            return {
                ...state,
                isAuth:false
            }
        default:
            return state
    }
}

export {authReducer}