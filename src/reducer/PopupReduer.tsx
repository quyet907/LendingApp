const  initPopupConfirm = {
    typePopup : "",
    hidden : false,
    showButtonCacel : false,
    contentShow : ""
}

const Popup =(state : any = initPopupConfirm , action : any)=>{
    switch(action.type){
        case "TYPE_POPUP" : {
            return  {
                ...state,
                typePopup : action.payload,
            }
        }
        case "CONTENT_POPUP" : {
            return {
                ...state,
                typePopup : action.payload,
                hidden : true
            }
        }
        case "SHOW_BUTTON_CANCEL" : {
            return  {
                ...state,
                showButtonCacel : action.payload
            }
        }

        default : {
            return {...state}
        }
    }
}

export default Popup;