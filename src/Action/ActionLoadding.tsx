import store from "../reducer/store"

export const setLoad=(value: number) =>{
    store.dispatch(Onload(value))
}


export const Onload=(value : number) =>{
    return {
        type :  "ON_LOAD",
        payload : value
    }
}