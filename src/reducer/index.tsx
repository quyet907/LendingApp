import LoginReducer from "./LoginReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    
    LoginReducer : LoginReducer
})



export default rootReducer;