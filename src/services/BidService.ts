
import { getAxios } from "./APIService";
import { config } from "../config/Config";
import { Paging } from "@Core/controller/Paging";
import { BidProduct } from "@StockAfiModel/bid/BidProduct";
import { MyFormat } from "../Helper/MyFormat";
import * as actionAll from "../Action/ActionAll"
import { UserService } from "./UserService";
import { isBuffer } from "util";
import { BaseUser } from "@Core/model/user/BaseUser";
import I18n from '../i18n/i18n'
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

    public static receiveReward(id: string): Promise<BidProduct> {
        return getAxios().then((axios) => {
            return axios({
                method: "POST",
                url: `${config.api.lendingAPI}/bid_product/receiveBid`,
                data: { bidProductId: id }
            })
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    return null;
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

    public static getImgFirtBidProduct(bidProduct: BidProduct): string {
        if (bidProduct.product && bidProduct.product.thumbImagesUrl)
            return bidProduct.product.thumbImagesUrl[0];
        return ""
    }
    public static getPriceBidProduct(bidProduct: BidProduct): number {
        if (bidProduct.endPrice) return bidProduct.endPrice;
        if (bidProduct.endPrice == 0) return 0;
        if (bidProduct.startPrice) return bidProduct.startPrice;
        return 0;
    }

    public static getNameBidProduct(bidProduct: BidProduct): string {
        if (bidProduct.product && bidProduct.product.name)
            return bidProduct.product.name
        return "Product of Afi"

    }

    public static getNameUserWin(bidProduct: BidProduct): string {
        if (bidProduct.latestBidUser && bidProduct.latestBidUser.username) {
            return `${I18n.t('screens.listBidding.winner')}: ${bidProduct.latestBidUser.username}`
        }
        return I18n.t('screens.listBidding.noOneHasWon')
    }



    public static calcTime(Time: Date | undefined): number {
        if (Time) {
            Time = new Date(Time);
            let Calc: number = (Time.getTime() + actionAll.getConfig().timeBid * 1000) - (new Date().getTime());
            return Math.round(Calc / 1000);
        }
        return 0;
    }

    public static checkBidding(Time: number): boolean {
        return Time <= actionAll.getConfig().timeBid && Time >= 0 ? true : false;
    }

    // public static changeTextButton(bidProduct: BidProduct): string {
    //     let getStepPrice = bidProduct.stepPrice ||0
    //     return `Bid with ${MyFormat.roundingMoney(getStepPrice) } COIN`
    // }

    public static checkComming(bidProduct: BidProduct): boolean {
        let getTimeCount = BidService.getTimeCountBid(bidProduct);
        return (getTimeCount > actionAll.getConfig().timeBid)
    }



    public static changeTextTime(calcTime: number): string {
        if (calcTime < 0) {
            return I18n.t('screens.bidDetail.finish')
        }
        if (calcTime > actionAll.getConfig().timeBid) {
            return `${BidService.getTimeStart(calcTime)}`
        }
        return `${calcTime}S`;
    }


    public static changeTextStatus(calcTime: number): string {

        if (calcTime < 0) {
            return `${BidService.getTimeFinsh(Math.abs(calcTime))}`
        }
        if (calcTime > actionAll.getConfig().timeBid) {
            return I18n.t('screens.listBidding.upcoming')
        }
        return I18n.t('screens.listBidding.happening');
    }

    public static getTimeStart(calcTime: number): string {
        calcTime -= actionAll.getConfig().timeBid;
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
            return I18n.t('screens.listBidding.fewSecondsAgo')
        }
        else if (calcTime < 60 * 60) {
            return `${Math.floor(calcTime / 60)} ${I18n.t('screens.listBidding.minuteAgo')}`
        }
        else if (calcTime <= 60 * 60 * 24) {
            return `${Math.floor(calcTime / (60 * 60))} ${I18n.t('screens.listBidding.hourAgo')}`
        }
        else if (calcTime > 60 * 60 * 24) {
            return `${Math.floor(calcTime / (60 * 60 * 24))} ${I18n.t('screens.listBidding.dayAgo')}`
        }
        return "getTimeFinish() error"
    }

    //check biddig and revreceive reward
    public static checkButtonBid(bidProduct: BidProduct): boolean {
        let getTime = BidService.getTimeCountBid(bidProduct);
        if (getTime < 0) {
            return true;
        }
        if (getTime > actionAll.getConfig().timeBid) {
            return false;
        }
        return true;
    }

    public static changTextButtonBid(bidProduct: BidProduct, user: BaseUser): string {
        let getStepPrice = bidProduct.stepPrice || 0
        let getTime = BidService.getTimeCountBid(bidProduct);
        if (getTime < 0) {
            if (user && user._id && bidProduct) {
                if (user._id == bidProduct.latestBidUserId) {
                    return (bidProduct.receivedAt) ? `${I18n.t('screens.editProfile.editButton')} ${MyFormat.formatDate(bidProduct.receivedAt)}` : "Nhận thưởng"
                }
                return I18n.t('screens.bidDetail.finish')
            }
            return I18n.t('screens.bidDetail.finish')/// không tìm thấy thông tin
        }
        if (getTime > actionAll.getConfig().timeBid) {
            return I18n.t('screens.listBidding.upcoming');
        }
        return `${I18n.t('screens.bidDetail.bidWith')} ${MyFormat.roundingMoney(getStepPrice)} COIN`;
    }


    public static checkMeWin(bidProduct: BidProduct, user: BaseUser): boolean {
        if (user && user._id && bidProduct)
            return (user._id == bidProduct.latestBidUserId) ? true : false;
        return false;
    }

    public static checkReceive(bidProduct: BidProduct): boolean {
        return (bidProduct && bidProduct.receivedAt) ? true : false;
    }

    public static checkButton(bidProduct : BidProduct, user: BaseUser) : boolean {
        let getTime = BidService.getTimeCountBid(bidProduct);
        if(getTime > actionAll.getConfig().timeBid){
            return false;
        }
        if(getTime < 0){
            return (BidService.checkMeWin(bidProduct, user) && !BidService.checkReceive(bidProduct))
        }
        return true;
        
    }


    // public static checkWin(userWinId  : string) : Promise<boolean>{
    //     return  UserService.getMe().then((me : any )=>{
    //         return me._id == userWinId ? true : false;
    //     })
    // }
}

