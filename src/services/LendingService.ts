import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Lending } from "@StockAfiCore/model/lending/Lending";
import { Paging } from "@Core/controller/Paging";
import { ProfitHistory } from "../share/base-stock-afi/model/lending/LendingProfitHistory";
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { LendingPackage } from "@StockAfiCore/model/lending/LendingPackage";

export class LendingService {
  public static createLending(lending: Lending): Promise<any> {
    return getAxios().then((axios) =>
      axios({
        method: "POST",
        url: `${config.api.lendingAPI}/lending`,
        data: lending,
      })
        .then((res) => {
        })
        .catch((err) => { })
    );
  }

  public static getMyInvest(): Promise<Paging<Lending>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/lending`,
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
        .get(`${config.api.lendingAPI}/lending_profit`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
        })
    );
  }


  public static getLendingPackage(): Promise<Paging<LendingPackage>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/lending_package`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err))
    );
    //throw new Error("this function is not implement");
  }

  public static getLendingProfit(): Promise<Paging<ProfitHistory>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/lending_profit`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err))
    );
  }

  public static getConfirmReceived(idProfit: string): Promise<any> {
    return getAxios().then(axios => {
      return axios({
        method: "POST",
        url: `${config.api.lendingAPI}/lending_profit/confirmReceived`,
        data: {
          profitId: idProfit
        }
      })
        .then(res => res.data)
        .catch(err => err)
    })
  }

}
