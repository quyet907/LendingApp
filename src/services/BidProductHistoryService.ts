import { Paging } from "@Core/controller/Paging";
import {getAxios} from "./APIService";
import {config} from "../config/Config"
import { BidHistory } from "@StockAfiCore/model/bid/BidHistory";
export class BidProductHistoryService {
    public static getStatistic(idBidProduct : string ): Promise<BidHistory[]>{
        return getAxios().then((axios) =>{
           return axios({
                method : "GET",
                url : `${config.api.lendingAPI}/bid_history/byIdProduct`,
                params : {
                    bidProductId: idBidProduct
                }
            }).
            then(res =>{
                return res.data;
            })
            .catch(err =>{
                return err;
            })
        })
    }
    public static async  getTimeBidToday( ): Promise<number>{
        return getAxios().then((axios) =>{
           return axios({
                method : "GET",
                url : `${config.api.lendingAPI}/bid_history/time-bid-today`
            }).
            then(res =>{
                return res.data;
            })
        })
    }
}
