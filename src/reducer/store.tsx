import rootReducer from "../reducer/index";
import {createStore, applyMiddleware} from "redux"



const store = createStore(rootReducer,applyMiddleware())
export default store;
