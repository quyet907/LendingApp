const initAll = {
    reload: true
}

const all = (state: any, action: any) => {
    switch (action.type) {
        case "RELOAD": {
            let getValueReload = !state.reload
            return {
                ...state,

            }
        }


        default : {
            return {...state}
        }
    }
}


export default all