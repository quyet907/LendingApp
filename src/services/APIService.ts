import axios from "axios";
import { useSelector } from "react-redux";
import { Actions } from "react-native-router-flux"
import { UserService } from "./UserService";
import * as action from "../Action/ActionPopup"
import * as actionLoadding from "../Action/ActionLoadding"
import { config } from "../config/Config";
axios.interceptors.request.use(
    res => {
        actionLoadding.setLoad(90)
        return res
    },
    err => {

    }
);
axios.interceptors.response.use(
    res => {
        actionLoadding.setLoad(0)
        return res;
    },
    err => {
        actionLoadding.setLoad(0)

        if (err.message == "Network Error") {
            action.showMessage("Network Error");
        }
        if (err.response.status == 404) {
            action.showMessage("Have error when processing")
        }
        if (err.response.status == 401) {
            // UserService.getJWT().then(res => {
            // })
            UserService.setJWT("").then(res => {
                Actions.login();
            })
            return Promise.reject(err);
        }
        if(err.response.status == 500){
            if(err.response.message){
                action.showMessage(err.response.message)
            }
            if(err.response.data && err.response.data.message){
                action.showMessage(err.response.data.message)
            }
            else {
                action.showMessage("Have error when processing")
            }
        }
    }
)
export const getAxios = async () => {
    var jwt = await UserService.getJWT();
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
    return axios;
}

// export const customPOST=(api : string, data : any) : Promise<any> => {
//     return  getAxios().then((axios) =>
//     axios({
//       method: "POST",
//       url: `${config.api.lendingAPI}/${api}`,
//       data: data,
//     })
//       .then((res) => {
//           return res
//       })
//       .catch((err)=>{
//         action.showMessage("Have error")
//       })
//   );
// }

// export const customGet=(api : string, params : any) : Promise<any> => {
//     return  getAxios().then((axios) =>
//     axios({
//       method: "GET",
//       url: `${config.api.lendingAPI}/${api}`,
//       data: {
//           params : params
//       },
//     })
//       .then((res) => {
//           return res
//       })
//       .catch((err)=>{
//         action.showMessage("Have error with get")
//       })
//   );
// }



export default getAxios();