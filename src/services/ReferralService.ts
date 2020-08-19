import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { Referal } from "../share/base-ale/model/user/Referal";
import { Paging } from "@Core/controller/Paging";
import Axios from "axios";

const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNiNDNiOTU3YzRlZGEwZGQzNmQzMzkiLCJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInVzZXJuYW1lIjoiMDk4OTMyMDk2MCIsInBhc3N3b3JkIjoiYjU5YzY3YmYxOTZhNDc1ODE5MWU0MmY3NjY3MGNlYmEiLCJyZWZlcmFsRnJvbVVzZXJJZCI6IjVmM2IzY2VjZGI4NTZmZjQzYmY5YWZkMiIsIm90cENvZGUiOiIxMjM0IiwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xOFQwMjo1ODowMS41NTZaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xOFQwMjo1ODowMS41NTZaIiwiY3JlYXRlZEJ5IjpudWxsLCJ1cGRhdGVkQnkiOm51bGwsInN0YXR1cyI6ImFjdGl2ZWQiLCJpYXQiOjE1OTc4MDczNDV9.V6O26z87vpUPSnJyDOsAHq2eA6xPT5u9oLUR8TOboA8'

export class ReferralService  {
    public static getReferral(): Promise<Paging<Referal>> {
        
        return Axios({
            method: 'GET',
            url: 'http://localhost:4001/referal?page=1&pageSize=30',
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        }).then((res) => { return res.data; })
            .catch((err) => console.log(err));
        //throw new Error("this function is not implement");

    }

}