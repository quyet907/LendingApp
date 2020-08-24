import axios from "axios";
import { useSelector } from "react-redux";
import { Actions } from "react-native-router-flux"
import { UserService } from "./UserService";
import * as action from "../Action/ActionPopup"
import * as actionLoadding from "../Action/ActionLoadding"
axios.interceptors.request.use(
    res => {
        actionLoadding.setLoad(true)
        return res
    },
    err => {
        console.log(err.response)
    }
);


axios.interceptors.response.use(
    res => {
        actionLoadding.setLoad(false)
        return res;
    },
    err => {
        actionLoadding.setLoad(false)

        console.log(err.message);
        if (err.message == "Network Error") {
            action.showMessage("Network Error");
        }

        if (err.response.status == 404) {
            action.showMessage("Error 404")
        }
        if (err.response.status == 401) {
            UserService.getJWT().then(res => {
                console.log(res);
            })

            UserService.setJWT("").then(res => {

                Actions.login();

            })
            return Promise.reject(err);
        }
    }
)
export const getAxios = async () => {
    var jwt = await UserService.getJWT();
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
    return axios;
}



export default getAxios();