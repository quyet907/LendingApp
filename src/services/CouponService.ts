import { UserCoupon } from "@StockAfiCore/model/user/UserCoupon";
import { config } from "../config/Config";
import { getAxios } from "./APIService";

export class CouponService {
    public static postCoupon(code: string): any {
        return getAxios().then(axios => {
            axios({
                method: 'POST',
                url: `${config.api.lendingAPI}/confirmCoupon`,
                data: code
            })
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    console.log('err');
                    return err;
                })
        })
    }
}