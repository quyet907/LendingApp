import store from "../reducer/store";

export const showMessage = (content : string)=>{
    console.log("dong 1");
    store.dispatch(showPopup(true));
    console.log("dong 2");
    
    store.dispatch(Content(content));
    console.log("dong 3");

    store.dispatch(typeConfirm(false));
    console.log("dong 4");

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
    console.log(store.getState)
    return store.getState
}
export const Result=(result : boolean)=>{
    return {
        type  :"SET_RESULT",
        payload : result
    }
}

