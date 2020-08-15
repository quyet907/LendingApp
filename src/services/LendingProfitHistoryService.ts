import { Lending } from './../share/base-stock-afi/model/lending/Lending';
import { ProfitHistoryWithLendingInfo  } from "../share/base-stock-afi/model/lending/LendingProfitHistory";
export class LendingProfitHistoryService {

    public static getListHistory(): Promise<ProfitHistoryWithLendingInfo>{
        throw new Error("this function is not implement");
    }

    public static calculateMoneyOld(loadAmount : number, profitAmount : number) : Promise<number>{
        throw new Error("this function is not implement");
    }

    //trong model thiếu phần số ngày còn lại

    public static getLending(id : string ) : Promise<Lending>{
        throw new Error("this function is not implement");
        //cái này dùng để lấy cái gói trả lãi để tính ngày còn lại
    }

    

}