import { Finance } from "@StockAfiCore/model/lending/Finance"
import store from "../reducer/store"


export const reload = () => {
    return {
        type: "RELOAD",
        payload: null
    }
}

export const reloadPageHome = () => {
    return {
        type: "RELOADPAGEHOME",
        payload: null
    }
}

export const setConfig = (config: any) => {
    store.dispatch(Config(config));

}

export const getConfig = () => {
    return store.getState().Allreducer.config;
}

export const Config = (config: any) => {
    return {
        type: "SETCONFIG",
        payload: config
    }
}