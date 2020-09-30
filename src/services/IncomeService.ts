import { Income } from "../share/base-stock-afi/model/lending/Income";
import axios, { getAxios } from "./APIService";
import { UserService } from "./UserService";
import { Finance } from "@StockAfiCore/model/lending/Finance";
import { config } from "../config/Config";

export class IncomeService {
  public static getListCharIncome(): Promise<Income[]> {
    return getAxios().then((axios) =>
      axios
        .get(`${config.api.userAPI}/user/income?page=1&pageSize=100`)
        .then((res) => {
          if (res != null) {
            return res.data;
          }
          return null;
        })
        .catch((err) => {
        })
    );
  }

  public static getDayDataChar(listDay: Income[]): Array<string> {
    let ArrayDate = new Array();
    if(listDay){
      for (let index = 0; index < listDay.length; index++) {
        let getDateString: any = listDay[index].incomeAt;
        let getDate: Date = new Date(getDateString);
        let dayString:string = getDate.getDate().toString();
        let MonthString:string = (getDate.getMonth()+1).toString();
        if(dayString.length==1){
          dayString = `0${dayString}`
        }
        if(MonthString.length==1){
          MonthString = `0${MonthString}`
        }

        ArrayDate.push(`${dayString}/${MonthString}`);
      }
    }
    return ArrayDate;
  }

  

  public static createDataChart(listAll: Income[]): Array<number> {
    let ArrayValue = new Array();
    if(listAll){
      for (let i = 0; i < listAll.length; i++) {
        let getValue = listAll[i].amount;
        
        ArrayValue.push(getValue);

      }
    }


    return ArrayValue;
  }

  public static getFinance(): Promise<Finance> {
    return getAxios().then((axios) =>
      axios.get(`${config.api.userAPI}/user/finance`).then((res) => {
        console.log(res)
        return (res) ?  res.data : null;
      })
      .catch(err => null)
    );
  }
}
