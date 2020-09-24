const initAll = {
    reload: true,
    finance : {
        lendingProfitReceived : 300
    }
}

const all = (state: any = initAll, action: any) => {
    switch (action.type) {

        case "RELOAD": {
            state.reload = !state.reload;
            return {
                ...state
            }
        }
        case "FINANCE": {
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}


export default all