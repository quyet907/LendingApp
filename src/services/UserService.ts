import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";
import axios from "axios";
export class UserService {

    public static login(user: string, pass: string): Promise<BaseUserWithJwt> {

        console.log(user + "--" + pass);
        let getJWT: any = UserService.getJWT();
        let typeLogin: "phonenumber";

        let getDataLogin: any;
        user = "0989320982";
        pass = "1111";

        return axios.post("http://localhost:4000/public/user/login",
            {
                'loginType': 'phonenumber',
                "username": user,
                "password": pass
            }, {
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

    public static register(userName: string, password: string, codeOTP: string): Promise<string> {
        return axios.post("http://localhost:4000/public/user/register",
            {
                "loginType": "phonenumber",
                "username": userName,
                "password": password,
                "referalFromUserId": "5f3b3cecdb856ff43bf9afd2",
                "otpCode": codeOTP
            })
            .then(res => {
                if (res.data.name = "Error") {
                    return res.data.message
                }
                else {
                    return "success"
                }
            })
            .catch(error => {
                return "An error occurred"
            })

    }

    public static getJWT(): string {
        return 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNiNGZiZjE1NDNiYzRkY2Y2OWNlOTkiLCJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInVzZXJuYW1lIjoiMDk4OTMyMDk2MCIsInBhc3N3b3JkIjoiYjU5YzY3YmYxOTZhNDc1ODE5MWU0MmY3NjY3MGNlYmEiLCJyZWZlcmFsRnJvbVVzZXJJZCI6IjVmM2IzY2VjZGI4NTZmZjQzYmY5YWZkMiIsIm90cENvZGUiOiIxMjM0IiwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xOFQwMzo0OToxOS4wODNaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xOFQwMzo0OToxOS4wODNaIiwiY3JlYXRlZEJ5IjpudWxsLCJ1cGRhdGVkQnkiOm51bGwsInN0YXR1cyI6ImFjdGl2ZWQiLCJpYXQiOjE1OTc3MjI1NzZ9.zctjaERsg72VsZKTfthSmYODQZ-m6Noqj8O0CHcRse4';
    }



    public static sendOTP(phone: string): Promise<string> {
        return axios.post("http://localhost:4000/public/user/sendOTP", { "mobile": phone })
            .then(res => {
                return res.data.code
            })
            .catch(err => {
                console.log(err);
            })

    }

    public static verifyOTP(OTP: string, phoneNumber: string): Promise<boolean> {
        return axios.post("http://localhost:4000/public/user/verifyOTP",
            {
                "code": OTP,
                "phonenumber": phoneNumber
            })
            .then(res => {
                if (res.data.success) {
                    return true;
                }
                else {
                    return false;
                }
            })
    }


    public static setPassword(username: string, password: string, codeOTP : string): Promise<boolean> {
        return axios.post("http://localhost:4000/public/user/setPassword",
            {
                "username": username,
                "password": password,
                "otpCode":  codeOTP
            }
        ).then(res => {
            if (res.data.message) {
                return true
            }
            else {
                return false;
            }
        })

    }

    public static checkValidate=(pass:string, AgainPass:string):string|null =>{
        if(pass != AgainPass){
            return "Those passwords didn't match"
        }
        if(pass.length <6){
            return "Use 6 character or more for your password"
        }
        return null;
    }



}