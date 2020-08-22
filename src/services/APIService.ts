import axios from "axios";

import { Actions } from "react-native-router-flux"
import { UserService } from "./UserService";





UserService.getJWT().then(res=>{
    axios.defaults.headers.common["Authorization"] = res;

    return `Bearer ${res}`
})



axios.interceptors.request.use(function (config) {
    return config;
},
    function (err) {
        console.log(err)
    }
);

axios.interceptors.response.use(function (config) {
    return config;;
}, function (err) {
    console.log("err");
   
    // Actions.login()
    
})

export default axios