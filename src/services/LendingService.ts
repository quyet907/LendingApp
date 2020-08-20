import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Lending } from "@StockAfiCore/model/lending/Lending";
import axios from 'axios'
import { Paging } from "@Core/controller/Paging";
import { ProfitHistory } from "../share/base-stock-afi/model/lending/LendingProfitHistory";
import jwt from './jwt'


export class LendingService {

    public static createLending(lending: Lending): Promise<any> {

        return axios({
            method: 'POST',
            url: 'http://localhost:4001/lending',
            data: lending,
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
            .then((res) => { console.log(res.data) })
            .catch((err) => console.log(err));

    }

    public static getMyInvest(): Promise<Paging<Lending>> {
        return axios({
            method: 'GET',
            url: 'http://localhost:4001/lending',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
            .then((res) => { return res.data })
            .catch((err) => console.log(err))
    }
}