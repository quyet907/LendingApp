const initAll = {
    reload: true
}

const all = (state: any = initAll, action: any) => {
    
    switch (action.type) {

        case "RELOAD": {
            state.reload = !state.reload;
            return {
                ...state
            }
        }
        default : {
            return {...state}
        }
    }
}


export default all