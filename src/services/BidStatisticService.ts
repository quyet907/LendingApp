import { Paging } from "@Core/controller/Paging";
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { BidStatistic } from "@StockAfiCore/model/bid/BidStatistic";

export class BidStatisticService {
  public static getBidStatistic(): Promise<BidStatistic[]> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/bid_history/statistic`,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log("err"))
    );
    //throw new Error("this function is not implement");
  }
}
