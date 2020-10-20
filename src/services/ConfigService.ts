import { getAxios } from "./APIService"
import { config } from "../config/Config"
import * as action from "../Action/ActionAll"
export class ConfigService {
    public static getConfig(): Promise<any> {
        return getAxios().then((axios: any) => {
            return axios({
                method: "GET",
                url: `${config.api.lendingAPI}/configAPI`
            }).then((res: any) => {
                console.log(res.data.timeServer)
                let getDateService: Date = new Date(res.data.timeServer);
                res.data.deviation = getDateService.getTime() - new Date().getTime();
                action.setConfig(res.data);
            })
                .catch((err: any) => {

                    return null;
                })
        })
    }
}