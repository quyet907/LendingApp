import { Income } from "../share/base-stock-afi/model/lending/Income";
import axios, { getAxios } from "./APIService"
import { UserService } from "./UserService";



export class IncomeService {

    public static getListCharIncome(): Promise<Income[]> {
        return getAxios().then(axios => axios.get("http://localhost:4000/user/income?page=1&pageSize=100",
            ).then(res => {
                console.log(res)
                if(res != null){
                    return res.data
                }
                return null
            }).catch((err) => {
                console.log(err)
            }))
    }

    public static getDayDataChar(listDay: Income[]): Array<string> {

        let ArrayDate = new Array();
        for (let index = 0; index < listDay.length; index++) {
            let getDateString: any = listDay[index].incomeAt;
            let getDate: Date = new Date(getDateString);

            ArrayDate.push(`${getDate.getDate()}/${getDate.getMonth()}`)
        }
        return ArrayDate.reverse();
    }

    public static createDataChart(listAll: Income[]): Array<number> {
        let ArrayValue = new Array();
        for (let i = 0; i < listAll.length; i++) {
            let getValue = listAll[i].amount;
            ArrayValue.push(getValue);

        }
        ArrayValue.reverse();

        return ArrayValue;
    }




}