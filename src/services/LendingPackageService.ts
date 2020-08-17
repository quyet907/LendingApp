import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import { LendingPackage } from "../share/base-stock-afi/model/lending/LendingPackage";
import axios from 'axios'
import { Paging } from "@Core/controller/Paging";
export class LendingPackageService  {
    public static getLendingPackage() :Promise <Paging<LendingPackage>> {
        const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblR5cGUiOiJwaG9uZW51bWJlciIsInBob25lbnVtYmVyIjoiMDk4OTMyMDk1NSIsInVzZXJuYW1lIjoiMDk4OTMyMDk1NSIsIl9pZCI6IjU3NzMxZmI4LWExM2EtNDc2Yi1iMjIzLTlkNDlmZDJkN2YyYyIsImlhdCI6MTU5NzIwMTEzM30.yyGtAPG-Hp_nt-HTtb9tGRFuATwVymCMsbwK7u_2rl8'

          return axios.get('http://localhost:4001/lending_package', {
             headers: {
                'Authorization': `Bearer ${access_token}`
             }
         })
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log(err));
        
        //throw new Error("this function is not implement");
       
    }
}