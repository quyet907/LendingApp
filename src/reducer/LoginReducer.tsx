const initLogin = {
    actionType : "",
    jwt : "",
    numberPhone : "",
    codeOTP : "",
    referalCode : "",
    
}
const Login = (state: any = initLogin, action : any )=>{
    switch(action.type){
        case "SET_ACTION" : {       
            return {...state,
            actionType : action.payload,
            }
        }

        case "SET_JWT" : {
            return {...state,
            jwt : action.payload,
            }
        }

        case "SET_NUMBER_PHONE" : {
            return {...state,
            numberPhone : action.payload,
            }
        }

        case "SET_CODE_OTP" : {
            return {...state,
            codeOTP : action.payload,
            }
        }
        case "SET_REFERRAL" : {
            console.log(action.payload);
            return {...state,
                referalCode : action.payload,
            }
        }


        default : {
            return {...state}
        }

    }
}

export default Login;