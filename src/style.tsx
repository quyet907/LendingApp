import { relative } from "path";
import { StyleSheet, ColorPropType } from "react-native";

// const primary = "#f6c400";
// const dark  = "#12151c";
// const success = "";
// const warning = "";
// const aleart = "";

import * as color from './Color'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background_primary,
        // fontFamily  : '"BinancePlex","Arial","PingFangSC-Regular","Microsoft YaHei","sans-serif"'

    },
    row: {
        flexDirection: "row",
    },
    flex6: {
        flex: 60
    },
    flex5: {
        flex: 50
    },
    flex4: {
        flex: 40
    },
    flex3: {
        flex: 30,
    },
    flex2: {
        flex: 20
    },
    flex1: {
        flex: 10
    },

    fullCeter: {
        justifyContent: "center",
        alignItems: "center"
    },

    img: {
        resizeMode: "contain",
    },
    charHome: {
        width: "100%",
        backgroundColor: color.background,
        borderRadius: color.borderRadius,
        marginTop: 20,
    },

    frLogo: {
        flex: 1,
        alignItems: "center",
        // resizeMode  : "stretch"
    },

    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logoImg: {
        justifyContent: "center",
        resizeMode: "contain",
        height: "200px",
        width: "200px"
    },





    listStatisticalBasic: {
        minHeight: 100,
        width: "100%",
        backgroundColor: color.background,
        padding: 10,
        marginTop: 10,
        justifyContent: "center",
        // alignItems: "center"

    },
    statisticalBasic: {
        width: '100%',

        padding: 10,

    },
    frImgStatisticalBasic: {
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        // alignSelf : "flex-start",
    },
    imgStatisticalBasic: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        margin: 10
    },
    contentStatisticalBasic: {
        justifyContent: 'flex-start',
        padding: 2
    },
    colorWhite: {
        color: color.text,
    },
    listHistoryInterest: {
        minHeight: 100,
        backgroundColor: color.background,
        flex: 1,
        flexShrink: 30,
        padding: 10,
        marginTop: 10,
        borderRadius: color.borderRadius
    },
    HistoryInterest: {
        height: 60,
        width: "100%",
        backgroundColor: color.background,
        borderRadius: color.borderRadius,
        justifyContent: "center",
        padding: 10,
        marginTop: 10

    }
    ,
    iconHistoryInterest: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    leftHistoryInterest: {
        width: 90,
    },
    rightHistoryInterest: {
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    centerHistoryInterest: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentHistoryInterest: {
        // fontWeight : "bold",
        fontSize: 16,
        textTransform: "uppercase",
        alignItems: "center",
        justifyContent: "center"
    },
    inputLogin: {
        borderColor: "#F6C400",
        borderWidth: 1,
        width: "100%",
        color: color.text,
        fontSize: 16,
        borderRadius: color.borderRadius,
        padding: 10


    },
    frInputPass : {
        position : "relative",
        paddingVertical : 20
    },
    iconEyePass : {
        position : "absolute",
        bottom : 0,
        height : "100%",
        right : 20,
        display : "flex",
        justifyContent : "center"
        
    },
    frbuttonLogin: {
        marginTop: 20,
        backgroundColor: color.primary,
        justifyContent: "center",
        borderWidth: 1,
        width: "100%",

        padding: 10,
        borderRadius: color.borderRadius,
        alignItems: "center",

    },

    btnSmall: {
        fontSize: 14,
        padding: "5",
    },

    buttonLogin: {

        justifyContent: "center",
        width: "100%",
        borderRadius: color.borderRadius,


    },
    textButton: {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 13,
    },
    login: {
        width: "80%",

    },
    forgotPassWord: {
        color: color.text,
        textAlign: "right",

    },
    frFotgotPassword: {
        width: "100%",
        height: 30,

        alignItems: "flex-end",
        marginTop: 10
    },
    headerSignUp: {
        color: color.text,
        fontWeight: "400",
        textTransform: "uppercase",


    },

    // bid

    //page list bid
    containerLight: {
        flex: 1,
        backgroundColor: color.background_primary
    },
    ListBidProduct: {
        paddingTop: 16,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    productBid: {
        backgroundColor: color.background,
        flex: 1,
        justifyContent: "center",
        height : 300,
        margin: 10,
        borderRadius: color.borderRadius,
        shadowOffset : {
            width : 0,
            height : 0,
        },
        shadowRadius: 10,
        shadowOpacity : 0.1,
        
    },
    frImgAndPrice: {
        height: 200,
        position: "relative"

    },
    frImgProdcurBid: {
        height: 200,
        overflow : "hidden"
    },
    imgProductBid: {
        height: "100%",
        borderRadius: color.borderRadius,
        resizeMode :"cover",
    },
    frPriceAndTime: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 200,
        borderRadius: color.borderRadius,
        position: 'absolute',
        right: 0,
        bottom: -15,
        backgroundColor: color.background_primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    frStatusAndTime: {
        // padding: 10,
        // flexDirection: "row",
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    
    nameProductBid: {
        color: color.text,
        fontWeight: "700",
        alignItems: "flex-start",
        textTransform: "capitalize",
    },
    frNameandDetailProductBid : {
        alignItems: "flex-start",
        padding : 20,
        overflow : "hidden"
    },
    priceProductBid: {
        fontWeight: "bold",
        backgroundColor: color.primary,
        color : color.background_primary    ,
        padding: 10,
        // borderBottomRightRadius : 10,
        // borderTopRightRadius : 10
    },
    statusProductBid: {
        color: color.text,
        
    },
    timeProductBid: {
        color: color.text_primary,
        fontWeight: "bold",
        paddingLeft : 10,
    },


    //page bid
   btnCloseBid : {
        height : 30,
        width : 30,
        position : "absolute",
        top : 10,
        left : 10,
        zIndex  : 3,
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 50,
   },
    frSliderBid : {
        height: 200
    },
    frPriceAndTimePageBid : {
        width: "80%",
        height: 70,
        flexDirection: "row",
        shadowRadius : 10,
        borderRadius : color.borderRadius,
        marginTop : -35,
        backgroundColor : color.background_primary,
        alignItems : "center",
        display : "flex",
        flexWrap : "wrap"
    },
    childFrPriceAndTimePageBid : {
        padding : 10,
        alignItems : "center",
        justifyContent: "center",
        flex : 1
    },
    nameProductPageBid : {
        padding : 20,
        margin : 5,
        borderRadius: color.borderRadius,
    },
    bidderItem  :{
        flexDirection : "row",
        alignItems : "center",
        justifyContent  : "space-between",
        padding : 10,
        margin : 2,
        backgroundColor : color.background_primary,
        borderRadius : color.borderRadius
    },
    lastBidderItem : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent  : "space-between",
        padding : 10,
        margin : 2,
        backgroundColor : color.inactive,
        borderRadius : color.borderRadius
    },
    headerBidder : {
        fontSize : 20,
        fontWeight : "500",
        color : color.text,
        paddingBottom : 10
    },
    frListBidder : {
        backgroundColor : color.background,
        paddingHorizontal : 10,
        paddingVertical : 10,
        flex  : 1,
        borderRadius: color.borderRadius
    },
    frButtonBid : {
        backgroundColor : color.background_primary,
        alignItems : "center",
        padding : 10
    },
    buttonBid : {
        margin: 20,
        backgroundColor: color.primary,
        justifyContent: "center",
        borderWidth: 1,
        width: "100%",

        padding: 10,
        borderRadius: color.borderRadius,
        alignItems: "center",
    },
    avtBidder : {
        height : 30,
        width : 30,
        borderRadius: color.borderRadius
    },
    textNameBidderItem : {
        fontWeight: "400",
        color : color.text
    },
    priceBidderItem  :{
        height : 40,
        width : 60,
        // borderRadius: color.borderRadius,
        // backgroundColor: color.primary,
        alignItems : "center",
        justifyContent : "center"
    },
    textPriceBidderItem :{
        color : color.primary,
        fontWeight : "bold",
    }



})