const initAll = {
    reload: true,
    reloadPageHome : true,
    
}

const all = (state: any = initAll, action: any) => {
    switch (action.type) {
        case "RELOAD": {
            state.reload = !state.reload;
            return {
                ...state
            }
        }
        case "RELOADPAGEHOME": {
            state.reloadPageHome = !state.reloadPageHome;
            return {
                ...state
            }
        }

        case "SETCONFIG" : {
            let getState = {...state};
            getState.config = action.payload
            return {...getState}
        }
        default: {
            return { ...state }
        }
    }
}


export default all