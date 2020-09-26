import {getAxios } from "./APIService"
import {config} from "../config/Config"
import * as action from "../Action/ActionAll"
export class ConfigService{
    public static getConfig(): Promise<any>{
        return getAxios().then((axios : any) =>{
            return axios({
                method : "GET",
                url : `${config.api.lendingAPI}/configAPI`
            }).then((res : any)=>{
                action.setConfig(res.data);
            })
            .catch((err : any )=>{
                console.error(err);
                return "fuck errr";
            })
        })
    }
}