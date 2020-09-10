
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { Paging } from "@Core/controller/Paging";
import { BidProduct } from "@StockAfiModel/bid/BidProduct";

export class BidService {
    public static getBidInfo(id: string): Promise<BidProduct> {
        return getAxios().then((axios) =>
            axios({
                method: "GET",
                url: `${config.api.lendingAPI}/bid_product/getId`,
                params: {
                    bid_productId: id
                }
            }).then((res) => {
                    return res.data;
                })
                .catch((err) => console.log(err))
        );
    }
    public static BidAction(id : string ) : Promise<BidProduct> {
        return getAxios().then((axios) =>{
            return axios({
                method : "POST",
                url : `${config.api.lendingAPI}/bid_product/bid`,
                data : {bid_productId : id}
            })
            .then((res)=>{
                console.log(res);
                return res.data
            })
            .catch(err=>{
                return err;
            })
        })
    }

    public static getListBidComming() : Promise<BidProduct[]>{
        return getAxios().then((axios) =>{
            return axios({
                method : "GET",
                url : `${config.api.lendingAPI}/bid_product/getComming`,
            })
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                return err;
            })
        })
    }

    public static getListBidding() : Promise<BidProduct[]>{
        return getAxios().then((axios) =>{
            return axios({
                method : "GET",
                url : `${config.api.lendingAPI}/bid_product/getBidding`,
            })
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                return err;
            })
        })
    }

    public static roundingMoney = (money: number): string => {
        let moneyString: string = "";
        if (money >= 0 && money < 1e3) {
            moneyString = money.toFixed(2).toString();
        }
        else if (money >= 1e3 && money < 1e6) {
            moneyString = `${(money / 1e3).toFixed(2).toString()}K`;
        }
        else if (money >= 1e6 && money < 1e9) {
            moneyString = `${(money / 1e6).toFixed(2).toString()}M`;
        }
        else if (money >= 1e9 && money < 1e12) {
            moneyString = `${(money / 1e9).toFixed(2).toString()}B`;
        }
        else if (money >= 1e12 && money < 1e15) {
            moneyString = `${(money / 1e12).toFixed(2).toString()}KB`;
        }
        else if (money >= 1e15 && money < 1e18) {
            moneyString = `${(money / 1e15).toFixed(2).toString()}MB`;
        }

        return `$${moneyString}`;
    }

    public static calcTime(Time: Date): number {
        Time = new Date(Time);
        let Calc: number = (Time.getTime() + 10 * 1000) - (new Date().getTime());
        return Math.round(Calc / 1000);
    }

    public static checkBidding(Time: number): boolean {
        return Time <= 10 && Time >= 0 ? true : false;
    }

    public static changeTextButton(calcTime: number): string {
        if (calcTime < 0) {
            return `Finished`
        }
        if (calcTime > 10) {
            return "Upcoming"
        }
        return `Place A Bid`;
    }

    

    public static changeTextTime(calcTime: number): string {
        if (calcTime < 0) {
            return `Finished`
        }
        if (calcTime > 10) {
            return `${BidService.getTimeStart(calcTime)}`
        }
        return `${calcTime}S`;
    }


    public static changeTextStatus(calcTime: number): string {

        if (calcTime < 0) {
            return `${BidService.getTimeFinsh(Math.abs(calcTime))}`
        }
        if (calcTime > 10) {
            return "Upcoming"
        }
        return "Happing";
    }

    public static getTimeStart(calcTime: number): string {
        calcTime -= 10;
        const minutes = 60;
        const hours = minutes * 60;
        const day = hours * 24;


        let getDay = Math.floor(calcTime / day);
        calcTime = calcTime % day;
        let getHours = Math.floor(calcTime / hours);
        calcTime = calcTime % hours;
        let getMinutes = Math.floor(calcTime / minutes);
        calcTime = calcTime % minutes;

        let dayBeautifull = BidService.beautifullTime(getDay);
        let hourBeautifull = BidService.beautifullTime(getHours);
        let minuteBeautifull = BidService.beautifullTime(getMinutes);
        let secondBeautifull = BidService.beautifullTime(calcTime);

        return `${dayBeautifull}:${hourBeautifull}:${minuteBeautifull}:${secondBeautifull}`;

    }
    public static beautifullTime(time: number): string {
        return time.toString().length == 1 ? `0${time}` : time.toString()
    }

    public static getTimeFinsh(calcTime: number): string {
        if (calcTime < 60) {
            // return `${Math.round(calcTime)} second ago`
            return "Few seconds ago"
        }
        else if (calcTime < 60 * 60) {
            return `${Math.floor(calcTime / 60)} minute ago`
        }
        else if (calcTime <= 60 * 60 * 24) {
            return `${Math.floor(calcTime / (60 * 60))} hour ago`
        }
        else if (calcTime > 60 * 60 * 24) {
            return `${Math.floor(calcTime / (60 * 60 * 24))} day ago`
        }
        return "ông cố nội mày"
    }
}
