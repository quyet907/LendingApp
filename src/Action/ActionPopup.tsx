import store from "../reducer/store";

export const showMessage = (content : string)=>{
    store.dispatch(showPopup(true));
    
    store.dispatch(Content(content));

    store.dispatch(typeConfirm(false));

}

export const showConfirm =(content : string)=>{
    store.dispatch(showPopup(true));

    store.dispatch(Content(content));
    store.dispatch(typeConfirm(true))
}

export const settypeConfirm = (type : boolean)=>{
    store.dispatch(typeConfirm(type))    
}

export const typeConfirm=(type : boolean)=>{
    return {
        type : "TYPE_COMFIRM",
        payload : type 
    }
}

export const setContent = (content: string)=>{
    store.dispatch(Content(content))    
}

export const Content=(content :string)=>{
    return {
        type  : "CONTENT_POPUP",
        payload : content
    }
}

export const setShowPopup = (show: boolean)=>{
    store.dispatch(showPopup(show))    
}
export const showPopup=(show :boolean)=>{
    return {
        type  : "SHOW_POPUP",
        payload : show
    }
}


export const getResult =() =>{
    return store.getState
}
export const Result=(result : boolean)=>{
    return {
        type  :"SET_RESULT",
        payload : result
    }
}

