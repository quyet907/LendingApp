import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { LendingPackage } from "../share/base-stock-afi/model/lending/LendingPackage";
import { Paging } from "@Core/controller/Paging";
import { getAxios } from "./APIService";
import { config } from "../config/Config";

export class LendingPackageService {
  public static getLendingPackage(): Promise<Paging<LendingPackage>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.apiGateway.lending}/lending_package`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err))
    );
    //throw new Error("this function is not implement");
  }
}
