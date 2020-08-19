

export const setTypeAction=(typeAction : string)=>{
    return {
        
        type : "SET_ACTION",
        payload : typeAction
    }
}

export const setJWT=(JWT : string)=>{
    return {
        type : "SET_JWT",
        payload : JWT
    }
}
export const setNumberPhone=(numberPhone : string)=>{

    return {
        type : "SET_NUMBER_PHONE",
        payload : numberPhone,
    }
}

export const setCodeOTP=(codeOTP : string)=>{
    return {
        type : "SET_CODE_OTP",
        payload : codeOTP
    }
}