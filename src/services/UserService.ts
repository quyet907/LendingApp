import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";
import axios from "axios";
export class UserService{

    public static login (user:string , pass : string  ) :Promise <BaseUserWithJwt>|null {
        
        axios.get(`http://localhost:4001/lending_package`)
        .then(res => {

          console.log(res.data)
        })
        .catch(error => console.log(error));

        return null;
    }

    public static test=()=>{
        console.log("on test");
    }

    public static sendPhone(phone : string ) : Promise<any>{
        throw new Error("this function is not implement");
    }

    public static sendOTP(OTP : string ) : Promise<boolean> {
        throw new Error("this function is not implement");

    }

    public static createPass(pass : string , againpass : string ) : Promise<boolean>{
        throw new Error("this function is not implement");
    }


    
}