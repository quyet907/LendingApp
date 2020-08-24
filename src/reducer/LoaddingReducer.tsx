const initLoadding = {
    showLoad  : false,
}

const LoadingReducer = (state: any= initLoadding, action: any)=>{
    switch (action.type){
        case "ON_LOAD" : {
            return {...state, showLoad : action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default LoadingReducer