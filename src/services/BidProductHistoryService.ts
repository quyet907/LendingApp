import { Paging } from "@Core/controller/Paging";
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { BidProductHistory } from "@StockAfiCore/model/bid/BidProductHistory";

export class BidProductHistoryService {
  public static getBidProductStatistic(): Promise<Paging<BidProductHistory>> {
    return getAxios().then((axios) =>
      axios({
        method: "GET",
        url: `${config.api.lendingAPI}/bid_product_history?page=1&pageSize=30`,
      })
        .then((res) => {
          return res.data;
        })
    );
    //throw new Error("this function is not implement");
  }
}
