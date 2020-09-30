import {
    BaseUser,
    BaseUserWithJwt,
} from "../share/base-ale/model/user/BaseUser";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import { config } from "../config/Config";
import I18n from '../i18n/i18n'
import { User } from "@StockAfiCore/model/user/User";
import { getAxios } from "./APIService";
import { BankUser } from "@StockAfiCore/model/user/BankUser";

export class UserService {


    public static login(user: string, pass: string): Promise<BaseUserWithJwt> {

        // let getJWT: any = UserService.getJWT();
        let typeLogin: "phonenumber";

        let getDataLogin: any;


        return axios.post(`${config.api.userAPI}/public/user/login`,
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
    public static register(userName: string, password: string, codeOTP: string, codeReferal: string): Promise<string> {
        return axios.post(`${config.api.userAPI}/public/user/register`,
            {
                "loginType": "phonenumber",
                "username": userName,
                "password": password,
                "referalFromUserId": codeReferal,
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

    public static checkJWT = (jwt: string): Promise<boolean | null> => {
        return axios.get(`${config.api.userAPI}/user/me`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then((res: any) => {
                if (res && res.message) {
                    return false;
                }
                else {
                    return true;
                }
            })
            .catch(error => {
                return false;
            })
    }


    public static getJWT = (): Promise<string | null> => {
        return AsyncStorage.getItem('jwt').then(jwt => { console.log("jwt"); return (jwt) ? jwt : "" })
            .catch(err => { console.log("lỗi"); return null });
    }


    public static setJWT = async (jwt: string): Promise<void> => {
        return AsyncStorage.setItem('jwt', jwt);
    }



    //send OTP to server
    public static sendOTP(phone: string): Promise<string> {
        return axios.post(`${config.api.userAPI}/public/user/sendOTP`, { "mobile": phone })
            .then(res => {
                return res.data.code
            })
            .catch(err => {
            })

    }


    // function check OTP 
    public static verifyOTP(OTP: string, phoneNumber: string): Promise<string | null> {
        return axios.post(`${config.api.userAPI}/public/user/verifyOTP`,
            {
                "code": OTP,
                "phonenumber": phoneNumber
            })
            .then(res => {
                if (res.data.success) {
                    return null;
                }
                else {
                    return I18n.t('error.OTP.insuccessOTP');
                }
            })
            .catch(err => {
                return I18n.t('error.OTP.errServer')
            })
    }

    public static getMe(): Promise<BaseUserWithJwt | null> {
        return axios.get(`${config.api.userAPI}/user/me`,)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return null;
            })
    }


    public static checkExits(phone: string): Promise<boolean> {
        return axios.get(`${config.api.userAPI}/public/user/checkExist`, {
            params: {
                username: phone
            }
        }).then(res => {

            if (res.data.isExist) {
                return true
            }
            return false;
        }).catch(err => {
            return false;
        })


    }



    // backpup password when user forot password
    public static setPassword(username: string, password: string, codeOTP: string): Promise<string> {
        return axios.post(`${config.api.userAPI}/public/user/setPassword`,
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
    public static checkValidate = (
        pass: string,
        AgainPass: string
    ): string | null => {
        if (pass != AgainPass) {
            return I18n.t('error.password.repeatPasswordDontMatch');
        }
        if (pass.length < 6) {
            return I18n.t('error.password.passwordLessThan6Characters');
        }
        if (pass.length > 32) {
            return I18n.t('error.password.passwordMoreThan32Characters');
        }
        // var regex_Phone = /[0-32]$/;
        // if (!regex_Phone.test(pass)) {
        //   return "Password contains only numbers";
        // }
        return null;
    };

    //check validate phone
    public static checkValidatePhone = (phone: string): string | null => {
        phone.trim();
        if (phone.length == 0) {
            return I18n.t('error.password.passwordBlank');
        }
        if (phone.length < 10 || phone.length > 11) {
            return I18n.t('error.numberPhone.invalidMobile');
        }
        var regex_Phone = /[0-9]$/;
        if (!regex_Phone.test(phone)) {
            return I18n.t('error.numberPhone.incorredPhoneFormat');
        }
        return null;
    };


    public static updateInfoUser = (user: User): Promise<any> => {
        return getAxios().then((axios) =>
            axios({
                method: "POST",
                url: `${config.api.lendingAPI}/user/infoUser`,
                data: user,
            })
                .then((res) => res)
                .catch((err) => err)
        );
    }
    public static getInfoBank(): Promise<BankUser[]> {
        return getAxios().then((axios) => {
            return axios({
                method: "GET",
                url: `${config.api.lendingAPI}/user_bank`,
            }).then(res => { return res ? res.data : [] })
                .catch(err => console.error(err))
        })
    }

    public static updateInfoBank(bankInfo: BankUser): Promise<BankUser> {
        return getAxios().then((axios) => {
            return axios({
                method: "POST",
                url: `${config.api.lendingAPI}/user_bank`,
                data: { banks: bankInfo }
            })
                .then(res => res ? res.data : null)
                .catch(err => null)
        })
    }
}
