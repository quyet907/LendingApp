import { Paging } from "@Core/controller/Paging";
import { UserCoupon } from "@StockAfiCore/model/user/UserCoupon";
import { config } from "../config/Config";
import { getAxios } from "./APIService";

export class CouponService {
<<<<<<< HEAD
    public static postCoupon(code: string): Promise<UserCoupon> {
=======
    public static postCoupon(code: string): Promise<any> {
>>>>>>> 306b3425613c92d8403a8c24e55ea2e335ec69e3
        return getAxios().then(axios => {
            return axios({
                method: 'POST',
                url: `${config.api.lendingAPI}/confirmCoupon`,
                data: {
                    code: code
                }
            })
                .then(res => { return res.data })
                .catch(err => err)
        })
    }

    public static getCouponHistories(): Promise<Paging<UserCoupon>> {
        return getAxios().then((axios) =>
            axios({
                method: "GET",
                url: `${config.api.lendingAPI}/userCoupon/getListCode`,
            })
                .then(res => { return res.data })
                .catch(err => console.log(err))
        );
    }
}