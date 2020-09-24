import { Finance as f } from "@StockAfiCore/model/lending/Finance"
import { IncomeService } from "../services/IncomeService"
let dataFinance: f = {
    totalAmount: 0,
    investedAmout: 0,
    remainAmount: 0,
    referalIncomeAmout: 0
}

IncomeService.getFinance().then(res => {
    dataFinance = { ...res }
})



const Finance = (state: any = dataFinance, action: any) => {
    switch (action.type) {
        case "GET_FINANCE": {
            return {
                ...state
                // result: action.payload
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default Finance;