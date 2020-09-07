import { Paging } from "@Core/controller/Paging";
import {getAxios} from "./APIService";
import {config} from "../config/Config"
import { BidProductHistory } from "@StockAfiCore/model/bid/BidProductHistory";
export class BidProductHistoryService {
    public static getListById(idBidProduct : string ): Promise<BidProductHistory[]>{
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
}
