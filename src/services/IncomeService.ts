import { Income } from "../share/base-stock-afi/model/lending/Income";

export class IncomeService{
    public static getIncome(): Promise<Income>{
        //thiếu modal income
        throw new Error("this function is not implement");
    }
    
    public static getListCharIncome() : Promise<Income> {
        // dùng để lấy list để hiển thị char
        throw new Error("this function is not implement");
    }

    public static test=()=>{
        console.log("on test");
    }
    

}