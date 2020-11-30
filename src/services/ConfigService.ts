import { getAxios } from "./APIService";
import { config } from "../config/Config";
import * as action from "../Action/ActionAll";
import { QuestionAndAnswer } from "@StockAfiCore/model/user/QuestionAndAnswer";
export class ConfigService {
  public static getConfig(): Promise<any> {
    return getAxios().then((axios: any) => {
      return axios({
        method: "GET",
        url: `${config.api.lendingAPI}/public/user/configAPI`,
      })
        .then((res: any) => {
          console.log(res.data.timeServer);
          let getDateService: Date = new Date(res.data.timeServer);
          res.data.deviation = getDateService.getTime() - new Date().getTime();
          action.setConfig(res.data);
        })
        .catch((err: any) => {
          return null;
        });
    });
  }
  public static getQAs(): Promise<QuestionAndAnswer[]> {
    return getAxios().then((axios: any) => {
      return axios({
        method: "GET",
        url: `${config.api.lendingAPI}/public/user/QAs?pageSize=100`,
      })
        .then((res: any) => {
          return res.data.rows;
        })
        .catch((err: any) => {
          return null;
        });
    });
  }
}
