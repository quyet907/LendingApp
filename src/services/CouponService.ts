import { Paging } from "@Core/controller/Paging";
import { UserCoupon } from "@StockAfiCore/model/user/UserCoupon";
import { config } from "../config/Config";
import { getAxios } from "./APIService";

export class CouponService {
    public static postCoupon(code: string): Promise<any> {
        return getAxios().then(axios => {
            axios({
                method: 'POST',
                url: `${config.api.lendingAPI}/confirmCoupon`,
                data: {
                    code : code
                }
            })
                .then(res => {return res.data})
                .catch(err => err)
        })
    }

    public static getCouponHistories(): Promise<Paging<UserCoupon>> {
        return getAxios().then((axios) =>
            axios({
                method: "GET",
                url: `${config.api.lendingAPI}/userCoupon/getListCode`,
            })
                .then(res => {return res.data})
                .catch(err => console.log(err))
        );
    }
}