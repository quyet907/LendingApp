import LoginReducer from "./LoginReducer"
import Allreducer from "./AllReducer"
import PopupReducer from "./PopupReducer"
import LoadingReducer from "./LoaddingReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    
    LoginReducer : LoginReducer,
    Allreducer : Allreducer,
    PopupReducer : PopupReducer,
    LoadingReducer : LoadingReducer
})



export default rootReducer;