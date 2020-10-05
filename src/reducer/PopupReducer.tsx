const initPopupConfirm = {
    typeCofirm: false,
    showPopup: false,
    contentShow: "Hello Luong",
    result: true
}

const Popup = (state: any = initPopupConfirm, action: any) => {

    switch (action.type) {
        case "TYPE_COMFIRM": {
            return {
                ...state,
                typePopup: action.payload,
            }
        }
        case "CONTENT_POPUP": {
            return {
                ...state,
                contentShow: action.payload
            }
        }

        case "SHOW_POPUP": {
            return {
                ...state,
                showPopup: action.payload
            }
        }

        case "SET_RESULT": {
            return {
                ...state,
                result: action.payload
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default Popup;