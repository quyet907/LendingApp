import { Finance } from "@StockAfiCore/model/lending/Finance"
import store from "../reducer/store"


export const reload = () => {
    return {
        type: "RELOAD",
        payload: null
    }
}

export const setFinance = (finance  : Finance)=>{
    return {
        type : "FINANCE",
        payload : finance = {
            
        }
    }
}