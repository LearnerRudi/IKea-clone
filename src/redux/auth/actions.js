

function addNewUser(userData){
    return (dispatch)=>{
        dispatch({
            type:"NEW_USER",
            payload:userData
        })
    }
}

function logIn(){
    return (dispatch)=>{
        dispatch({
            type:"LOGIN"
        })
    }
}

export {addNewUser,logIn}