import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Referal } from "../share/base-ale/model/user/Referal";
import { Paging } from "@Core/controller/Paging";
import Axios from './auth';
import { UserService } from "./UserService";


export class ReferralService {
    public static getReferral(): Promise<Paging<Referal>> {
            return Axios({
                method: 'GET',
                url: 'http://localhost:4001/referal?page=1&pageSize=30'
              
            }).then((res) => { return res.data; })
                .catch((err) => console.log(err));
            //throw new Error("this function is not implement");
    }

    public static getMe(): Promise<BaseModel> {
            return Axios({
                method: 'GET',
                url: 'http://localhost:4000/user/me'
           
            }).then((res) => { return res.data; })
                .catch((err) => console.log(err));
            //throw new Error("this function is not implement");
    }



}