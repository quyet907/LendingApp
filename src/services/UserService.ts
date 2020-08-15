import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";

export class UserService{
    public static login (user:string , pass : string  ) :Promise <BaseUserWithJwt> {
        throw new Error("this function is not implement");
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