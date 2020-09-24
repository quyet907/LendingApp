import LoginReducer from "./LoginReducer"
import Allreducer from "./AllReducer"
import PopupReducer from "./PopupReducer"
import LoadingReducer from "./LoaddingReducer"
import {combineReducers} from "redux"
import FinanceReducer from "./FinanceReducer"

const rootReducer = combineReducers({
    
    LoginReducer : LoginReducer,
    Allreducer : Allreducer,
    PopupReducer : PopupReducer,
    LoadingReducer : LoadingReducer,
    FinanceReducer: FinanceReducer,
})



export default rootReducer;