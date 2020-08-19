import LoginReducer from "./LoginReducer"
import {combineReducers} from "redux"
console.log(LoginReducer);
const rootReducer = combineReducers({
    
    LoginReducer : LoginReducer
})

export default rootReducer;