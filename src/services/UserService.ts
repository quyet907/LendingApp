import { BaseUser, BaseUserWithJwt } from "../share/base-ale/model/user/BaseUser";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { Actions } from 'react-native-router-flux';
export class UserService {

    public static login(user: string, pass: string): Promise<BaseUserWithJwt> {

        console.log(user + "--" + pass);
        // let getJWT: any = UserService.getJWT();
        let typeLogin: "phonenumber";

        let getDataLogin: any;


        return axios.post("http://localhost:4000/public/user/login",
            {
                'loginType': 'phonenumber',
                "username": user,
                "password": pass
            })
            .then(res => {

                return res.data;
            })
            .catch(error => {
                return BaseUserWithJwt
            });
    }


    //futer sign up
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
                if (res.data.name == "Error") {
                    return "error"
                }
                else {
                    return "success"
                }
            })
            .catch(error => {
                return "An error occurred"
            })

    }

    public static checkJWT = (jwt: string) :Promise<boolean | null> =>{
        return axios.get("http://localhost:4000/user/me", {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        .then(res =>{
            if(res.message != null){
                console.log(res.message)
                return false;
            }
            else {
                return true;
            }
        })
        .catch(error =>{
            console.log(error);
            return false;
        })
    }


    public static getJWT = (): Promise<string | null> => {
        return AsyncStorage.getItem('jwt').then(jwt => {return jwt;});
    }


    public static setJWT = async (jwt: string):Promise<void> => {
            return AsyncStorage.setItem('jwt', jwt);
    }



    //send OTP to server
    public static sendOTP(phone: string): Promise<string> {
        return axios.post("http://localhost:4000/public/user/sendOTP", { "mobile": phone })
            .then(res => {
                return res.data.code
            })
            .catch(err => {
                console.log(err);
            })

    }


    // function check OTP 
    public static verifyOTP(OTP: string, phoneNumber: string): Promise<string | null> {
        return axios.post("http://localhost:4000/public/user/verifyOTP",
            {
                "code": OTP,
                "phonenumber": phoneNumber
            })
            .then(res => {
                if (res.data.success) {
                    return null;
                }
                else {
                    return "insuccess";
                }
            })
            .catch(err => {
                return "error with server"
            })
    }



    // backpup password when user forot password
    public static setPassword(username: string, password: string, codeOTP: string): Promise<string> {
        return axios.post("http://localhost:4000/public/user/setPassword",
            {
                "username": username,
                "password": password,
                "otpCode": codeOTP
            }
        ).then(res => {
            if (res.data.message != null) {
                return "fail"
            }
            else {
                return "success";
            }
        })

    }


    //check validate of password
    public static checkValidate = (pass: string, AgainPass: string): string | null => {
        if (pass != AgainPass) {
            return "Those passwords didn't match"
        }
        if (pass.length < 6) {
            return "Use 6 character or more for your password"
        }
        return null;
    }


    //check validate phone
    public static checkValidatePhone = (phone: string): string | null => {
        phone.trim();
        if (phone.length == 0) {
            return "number phone is not null";
        }
        if (phone.length < 10 || phone.length > 11) {
            return "lenght number phone is 10-11"
        }
        var regex_Phone = /\d/
        if (!regex_Phone.test(phone)) {
            return "is not a valid phone number";
        }
        return null;
    }


}