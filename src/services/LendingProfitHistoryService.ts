import { Lending } from './../share/base-stock-afi/model/lending/Lending';
import { Paging } from '@Core/controller/Paging';
import { ProfitHistory } from '@StockAfiCore/model/lending/LendingProfitHistory';
import Axios from './APIService';
import { UserService } from './UserService';
import authService from './auth';
import { Actions } from 'react-native-router-flux';



export class LendingProfitHistoryService {


    public static getLendingProfit(): Promise<Paging<ProfitHistory>> {
        return Axios({
            method: 'GET',
            url: 'http://localhost:4001/lending_profit'

        })
            .then((res) => { return res.data })
            .catch((err) => console.log("err"))
    }



}