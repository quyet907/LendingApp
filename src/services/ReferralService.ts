import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Referal } from "../share/base-ale/model/user/Referal";
import { Paging } from "@Core/controller/Paging";
import { UserService } from "./UserService";
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import * as actionAll from "../Action/ActionAll"
export class ReferralService {
  public static getReferral(): Promise<Paging<Referal>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/referal?page=1&pageSize=30`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => [])
    );
    //throw new Error("this function is not implement");
  }

  public static getMe(): Promise<BaseModel> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.userAPI}/user/me`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => null)
    );
    //throw new Error("this function is not implement");
  }

  public static calcMoneyReferral(countPeople  : number ) : number{
      let configIncomReFerral : number = actionAll.getConfig().incomeFromReferal;
      return countPeople * configIncomReFerral;
  }
}
