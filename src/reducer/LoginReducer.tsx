const initLogin = {
    actionType : "",
    jwt : "",
    numberPhone : "",
    codeOTP : ""

}
const Login = (state: any = initLogin, action : any )=>{
    switch(action.type){
        case "setAction" : {
            ;
            return {...state,
            actionType : action.payload.actionType,
            jwt : action.payload.jwt,
            numberphone : action.payload.numberPhone,
            codeOTP : action.payload.codeOTP
            }
        }

    }
}

export default Login;