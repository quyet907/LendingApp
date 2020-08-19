import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { LendingPackage } from "../share/base-stock-afi/model/lending/LendingPackage";
import axios from 'axios'
import { Paging } from "@Core/controller/Paging";

const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNiNDNiOTU3YzRlZGEwZGQzNmQzMzkiLCJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInVzZXJuYW1lIjoiMDk4OTMyMDk2MCIsInBhc3N3b3JkIjoiYjU5YzY3YmYxOTZhNDc1ODE5MWU0MmY3NjY3MGNlYmEiLCJyZWZlcmFsRnJvbVVzZXJJZCI6IjVmM2IzY2VjZGI4NTZmZjQzYmY5YWZkMiIsIm90cENvZGUiOiIxMjM0IiwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xOFQwMjo1ODowMS41NTZaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xOFQwMjo1ODowMS41NTZaIiwiY3JlYXRlZEJ5IjpudWxsLCJ1cGRhdGVkQnkiOm51bGwsInN0YXR1cyI6ImFjdGl2ZWQiLCJpYXQiOjE1OTc3MTk0OTR9.nbgApeGoXHaP2eT07GXCxfn3api5wlgW-foXsfQlJaw'

export class LendingPackageService {
    public static getLendingPackage(): Promise<Paging<LendingPackage>> {
        
        return axios({
            method: 'GET',
            url: 'http://localhost:4001/lending_package',
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        }).then((res) => { return res.data; })
            .catch((err) => console.log(err));
        //throw new Error("this function is not implement");

    }


}