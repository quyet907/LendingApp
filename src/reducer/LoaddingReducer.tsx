const initLoadding = {
    valueLoad  : 0,
}

const LoadingReducer = (state: any= initLoadding, action: any)=>{
    switch (action.type){
        case "ON_LOAD" : {
            return {...state, valueLoad : action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default LoadingReducer