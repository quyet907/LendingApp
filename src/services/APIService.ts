import axios from "axios";

import { Actions } from "react-native-router-flux"
import { UserService } from "./UserService";





UserService.getJWT().then(res=>{
    axios.defaults.headers.common["Authorization"] = res;

    return `Bearer ${res}`
})



axios.interceptors.request.use(function (config) {
    console.log(config);

    return config;
},
    function (err) {
        console.log(err)
    }
);

axios.interceptors.response.use(function (config) {
    console.log(config)
    console.log("la la las la la")
    return config;;
}, function (err) {
    console.log(err);
    if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    // Actions.login()
    
})

export default axios