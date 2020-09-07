import { Paging } from "@Core/controller/Paging";
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { BidProductStatistic } from "@StockAfiCore/model/bid/BidProductStatistic";

export class BidStatisticService {
  public static getBidProductStatistic(): Promise<BidProductStatistic[]> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/bid_product/statistic`,
      })
        .then((res) => {
          return res.data;
        })
    );
    //throw new Error("this function is not implement");
  }
}
