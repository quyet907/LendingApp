import LoginReducer from "./LoginReducer"
import Allreducer from "./AllReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    
    LoginReducer : LoginReducer,
    Allreducer : Allreducer
})



export default rootReducer;