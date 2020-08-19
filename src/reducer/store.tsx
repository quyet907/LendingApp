import rootReducer from "../reducer/index";
import {createStore} from "redux"


const store = createStore(rootReducer)
console.log(store.getState())
export default store;
