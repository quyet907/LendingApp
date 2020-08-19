export const setData=(typeAciton : string, jwt : string , numberPhone : string , codeOTP : string)=>{
    return {
        type : "",
        payload : {
            typeAciton,
            jwt ,
            numberPhone,
            codeOTP
        }
    }
}