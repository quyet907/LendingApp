const initAll = {
    reload: true
}

const all = (state: any = initAll, action: any) => {
    
    switch (action.type) {

        case "RELOAD": {
            console.log(state.reload+ "");
            state.reload = !state.reload;
            console.log(state.reload);
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