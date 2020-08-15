import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";

export class UserService{
    public static login (user:string , pass : string  ) :Promise <BaseUserWithJwt> {
        throw new Error("this function is not implement");
    }
    
}