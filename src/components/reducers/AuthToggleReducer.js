const AuthToggleReducer = (state="LOGIN", action)=>{

    switch(action.type){
        case "LOGIN" : 
            return "SIGNUP";
        case "SIGNUP" : 
            return "LOGIN"; 
        default : 
            return state;
    }
}
 
export default AuthToggleReducer;