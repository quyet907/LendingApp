import store from "../reducer/store"

export const setLoad=(load: boolean) =>{
    store.dispatch(Onload(load))
}


export const Onload=(load : boolean) =>{
    return {
        type :  "ON_LOAD",
        payload : load
    }
}