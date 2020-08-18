import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Lending } from "@StockAfiCore/model/lending/Lending";
import axios from 'axios'


export class LendingService {
    public static createLending(lending: Lending) {
        const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInBob25lbnVtYmVyIjoiMDk4OTMyMDk1NSIsInVzZXJuYW1lIjoiMDk4OTMyMDk1NSIsIl9pZCI6IjU3NzMxZmI4LWExM2EtNDc2Yi1iMjIzLTlkNDlmZDJkN2YyYyIsImlhdCI6MTU5NzIwMTEzM30.yyGtAPG-Hp_nt-HTtb9tGRFuATwVymCMsbwK7u_2rl8'

        return axios.get('http://localhost:4001/lending', {
            data: lending,
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log(err));
    }
}