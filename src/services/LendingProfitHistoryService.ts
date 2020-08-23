import { Lending } from "./../share/base-stock-afi/model/lending/Lending";
import { Paging } from "@Core/controller/Paging";
import { ProfitHistory } from "@StockAfiCore/model/lending/LendingProfitHistory";
import { getAxios } from "./APIService";
import { UserService } from "./UserService";
import { Actions } from "react-native-router-flux";
import { config } from "../config/Config";

export class LendingProfitHistoryService {
  public static getLendingProfit(): Promise<Paging<ProfitHistory>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.apiGateway.lending}/lending_profit`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log("err"))
    );
  }
}
