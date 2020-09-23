
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
                .catch((err) => err)
        );
    }
    public static BidAction(id: string): Promise<BidProduct> {
        return getAxios().then((axios) => {
            return axios({
                method: "POST",
                url: `${config.api.lendingAPI}/bid_product/bid`,
                data: { bid_productId: id }
            })
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    return err;
                })
        })
    }

    public static getListBidComming(): Promise<BidProduct[]> {
        return getAxios().then((axios) => {
            return axios({
                method: "GET",
                url: `${config.api.lendingAPI}/bid_product/getComming`,
            })
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                })
        })
    }

    public static getListBidding(): Promise<BidProduct[]> {
        return getAxios().then((axios) => {
            return axios({
                method: "GET",
                url: `${config.api.lendingAPI}/bid_product/getBidding`,
            })
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                })
        })
    }

    public static getTimeCountBid(bidProduct: BidProduct): number {
        let calcTime: number = 0;
        if (bidProduct.latestBidAt) {
            calcTime = BidService.calcTime(bidProduct.latestBidAt)
            
        } else if (bidProduct.startBidAt) {
            calcTime = BidService.calcTime(bidProduct.startBidAt)
        }
        return calcTime;
    }

    public static getImgFirtBidProduct(bidProduct : BidProduct) : string{
        if (bidProduct.product && bidProduct.product.thumbImagesUrl)
            return bidProduct.product.thumbImagesUrl[0];
        return ""
    }
    public static getPriceBidProduct(bidProduct : BidProduct) : number{
        if (bidProduct.endPrice)    return  bidProduct.endPrice;
        if(bidProduct.endPrice==0) return 0;
        if (bidProduct.startPrice)  return  bidProduct.startPrice;
        return 0;
    }

    public static getNameBidProduct(bidProduct : BidProduct) : string{
        if(bidProduct.product && bidProduct.product.name)
            return bidProduct.product.name
        return "Product of Afi"
        
    }

    public static getNameUserWin(bidProduct : BidProduct) : string{
        if(bidProduct.latestBidUser && bidProduct.latestBidUser.username){
            return `User win : ${bidProduct.latestBidUser.username}`
        }
        return "No one has won yet"
    }



    public static calcTime(Time: Date | undefined): number {
        if (Time) {
            Time = new Date(Time);
            let Calc: number = (Time.getTime() + config.api.timeLimit * 1000) - (new Date().getTime());
            return Math.round(Calc / 1000);
        }
        return 0;
    }

    public static checkBidding(Time: number): boolean {
        return Time <= config.api.timeLimit && Time >= 0 ? true : false;
    }

    public static changeTextButton(calcTime: number): string {
        if (calcTime < 0) {
            return `Finished`
        }
        if (calcTime > config.api.timeLimit) {
            return "Upcoming"
        }
        return `Place A Bid`;
    }



    public static changeTextTime(calcTime: number): string {
        if (calcTime < 0) {
            return `Finished`
        }
        if (calcTime > config.api.timeLimit) {
            return `${BidService.getTimeStart(calcTime)}`
        }
        return `${calcTime}S`;
    }


    public static changeTextStatus(calcTime: number): string {

        if (calcTime < 0) {
            return `${BidService.getTimeFinsh(Math.abs(calcTime))}`
        }
        if (calcTime > config.api.timeLimit) {
            return "Upcoming"
        }
        return "Happing";
    }

    public static getTimeStart(calcTime: number): string {
        calcTime -= config.api.timeLimit;
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
