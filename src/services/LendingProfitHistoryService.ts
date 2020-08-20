import { Lending } from './../share/base-stock-afi/model/lending/Lending';
import { Paging } from '@Core/controller/Paging';
import { ProfitHistory } from '@StockAfiCore/model/lending/LendingProfitHistory';
import Axios from 'axios';
import jwt from './jwt';

export class LendingProfitHistoryService {


    public static getLendingProfit(): Promise<Paging<ProfitHistory>> {
        return Axios({
            method: 'GET',
            url: 'http://localhost:4001/lending_profit',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
            .then((res) => { return res.data })
            .catch((err) => console.log(err))
    }

    

}