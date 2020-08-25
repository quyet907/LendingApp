import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Lending } from "@StockAfiCore/model/lending/Lending";
import { Paging } from "@Core/controller/Paging";
import { ProfitHistory } from "../share/base-stock-afi/model/lending/LendingProfitHistory";
import { getAxios } from "./APIService";
import { config } from "../config/Config";

export class LendingService {
  public static createLending(lending: Lending): Promise<any> {
    console.log(lending);
    return getAxios().then((axios) =>
      axios({
        method: "POST",
        url: `${config.apiGateway.lending}/lending`,
        data: lending,
      })
        .then((res) => {
        })
        .catch((err)=>{})
    );
  }

  public static getMyInvest(): Promise<Paging<Lending>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.apiGateway.lending}/lending`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err))
    );
  }

  public static getListProfitHistory(): Promise<Paging<ProfitHistory>> {
    return getAxios().then((axios) =>
      axios
        .get(`${config.apiGateway.lending}/lending_profit`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
        })
    );
  }
}
