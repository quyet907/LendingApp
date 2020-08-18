import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";
import axios from "axios";
export class UserService{

    public static login (user:string , pass : string  ) :Promise <BaseUserWithJwt> {

        console.log(user + "--" + pass);
        let getJWT : any = UserService.getJWT();
        let typeLogin : "phonenumber";
        
        let getDataLogin:any ;
        user  = "0989320982";
        pass = "1111";
        
        return axios.post("http://localhost:4000/public/user/login",
        {
            'loginType' : 'phonenumber',
            "username": user,
	        "password": pass
        },{
            headers: {
                'Authorization': `${getJWT}`
            }
        })
        .then(res => {

          return res.data;
        })
        .catch(error => {
            return BaseUserWithJwt
        });
    }

    public static getJWT():string{     
        return 'Bearer ' +'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInBob25lbnVtYmVyIjoiMDk4OTMyMDk1NSIsInVzZXJuYW1lIjoiMDk4OTMyMDk1NSIsIl9pZCI6IjU3NzMxZmI4LWExM2EtNDc2Yi1iMjIzLTlkNDlmZDJkN2YyYyIsImlhdCI6MTU5NzIwMTEzM30.yyGtAPG-Hp_nt-HTtb9tGRFuATwVymCMsbwK7u_2rl8';
    }



    public static sendOTP(phone : string ) : Promise<string>{
        return axios.post("http://localhost:4000/public/user/sendOTP", {"mobile":phone})
        .then(res =>{
            return res.data.code
        })
        .catch(err =>{
            console.log(err);
        })

    }

    public static verifyOTP(OTP : string, phoneNumber : string ) : Promise<boolean> {
        return axios.post("http://localhost:4000/public/user/verifyOTP", 
        {
            "code": OTP,
	        "phonenumber":phoneNumber
        })
        .then(res =>{
            if(res.data.success){
                return true;
            }
            else {
                return false;
            }
        })
    }


    public static setPassword(pass : string , againpass : string ):Promise<boolean>{


        return axios.post("http://localhost:4000/public/user/setPassword",
        {
            "username":"0989320963",
            "password":"1111",
            "otpCode":"1234"
        },
        {
             headers: {
                 "Authorization": `Bearer ${"dsdsds"}`
             }
         }
         
         ).then(res =>{
             if(pass != againpass) return false;
             if(res.data.message){
                 return true
             }
             else { 
                 return false;
             }
         })
         
    }


    
}