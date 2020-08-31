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
        backgroundColor: color.dark_primary,
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
        backgroundColor: color.dark,
        borderRadius: 10,
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





    listStatisticalBasic : { 
        minHeight : 100,
        width : "100%",
        backgroundColor : color.dark,
        padding : 10,
        marginTop : 10,
        justifyContent: "center",
        alignItems: "center"

    },
    statisticalBasic : {
        flex : 1,
        width : "100%",
        padding : 10,
        display : "flex",
        justifyContent : "center",
        alignItems: "center"
        
    },
    frImgStatisticalBasic : {
        justifyContent : 'flex-start',
        alignItems : "flex-start",
        // alignSelf : "flex-start",
    },
    imgStatisticalBasic: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        margin: 10
    },
    contentStatisticalBasic : {
        justifyContent : 'flex-start',
        padding : 2
    },
    colorWhite : {
        color : "#ffffff"
    },
    listHistoryInterest : {
        minHeight  : 100,
        backgroundColor : color.dark,
        flex : 1,
        flexShrink : 30,
        padding : 10  ,
        marginTop    : 10,
        borderRadius :10
    },
    HistoryInterest : {
        height : 60,
        width : "100%",
        backgroundColor : color.dark,
        borderRadius : 10,
        justifyContent : "center",
        padding : 10  ,
        marginTop : 10

    }
    ,
    iconHistoryInterest: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    leftHistoryInterest: {
        width: 100,
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
          textTransform : "uppercase",
        alignItems : "center",
        justifyContent : "center"
    },
    inputLogin : {
        borderColor : "#F6C400",
        borderWidth : 1,
        width : "100%",
        marginTop : 20,   
        color : "#FFFFFF",
        fontSize : 16,
        borderRadius :5,
    padding: 10        


    },
    frbuttonLogin : {
        marginTop : 20,
        backgroundColor : color.primary,
        justifyContent : "center",
        borderWidth :1,
        width : "100%",
        
        padding: 10,
        borderRadius: 5,
        alignItems: "center",

    },

    btnSmall: {
        fontSize: 14,
        padding: "5 10",
    },

    buttonLogin: {
        // fontSize : 18,
        // fontWeight : "bold",
        // backgroundColor : primary,
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,


    },
    textButton: {
        textAlign: "center",
        color: "black",
        // fontWeight : "bold",
        textTransform: "uppercase",
        fontSize: 13,
    },
    login: {
        width: "80%",

    },
    forgotPassWord: {
        color: "white",
        textAlign: "right",

    },
    frFotgotPassword: {
        width: "100%",
        height: 30,

        alignItems: "flex-end",
        marginTop: 10
    },
    headerSignUp: {
        color: "white",
        fontWeight: "400",
        textTransform: "uppercase",
        fontSize: 24
    },

    // bid

    //page list bid
    

 
    










})