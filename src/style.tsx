import {StyleSheet} from "react-native";

const background = "#292927";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#12151c",
        // fontFamily  : '"BinancePlex","Arial","PingFangSC-Regular","Microsoft YaHei","sans-serif"'
        
    },
    row:{
        flexDirection : "row",
    },
    flex6 : {
        flex : 60
    },
    flex5 : {
        flex : 50
    },
    flex4 : {
        flex : 40
    },
    flex3 : {
        flex : 30,
    },
    flex2 : {
        flex : 20
    },
    flex1 : {
        flex : 10
    },

    
    
    img :{
        resizeMode : "contain",  
    },
    bg1 :{
        backgroundColor : "red"
    },
    bg2 :{
        backgroundColor : "blue"
    }, 
    bg3 :{
        backgroundColor : "yellow"
    },  
    bg4 :{
        backgroundColor : "green"
    },   
    charHome : {
        width : "100%",
        backgroundColor  : "#1e2126",
        borderRadius : 10,
        marginTop  : 20,
    },

    frLogo: {
        flex : 1,
        alignItems : "center",
        // resizeMode  : "stretch"
    },

    logo : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        // justifyItems : "center"
    },

    logoImg : {
        justifyContent  : "center",
        resizeMode : "contain",  
        height : "200px",
        width :"200px"
    },





    listStatisticalBasic : { 
        minHeight : 100,
        width : "100%",
        backgroundColor : "#1e2126",
        padding : 10,
        marginTop : 10,
        borderRadius : 10

    },
    statisticalBasic : {
        width : "50%",
        justifyContent : "center",
        alignItems : "center"
        
    },
    frImgStatisticalBasic : {
        justifyContent : 'center',
        alignItems : "center",
    },
    imgStatisticalBasic : {
        height : 50,
        width : 50,
        resizeMode : "contain",
        margin: 10
    },
    contentStatisticalBasic : {
        justifyContent : 'center',
        alignItems : 'flex-start',
    },
    colorWhite : {
        color : "#ffffff"
    },
    listHistoryInterest : {
        minHeight  : 100,
        backgroundColor : "#1e2126",
        flex : 1,
        flexShrink : 30,
        padding : 10  ,
        marginTop    : 10,
        borderRadius :10
    },
    HistoryInterest : {
        height : 60,
        width : "100%",
        backgroundColor : "#12151c",
        borderRadius : 10,
        justifyContent : "center",
        padding : 10  ,
        marginTop : 10

    }
    , 
    iconHistoryInterest  : {
        height : 25,
        width   : 25, 
        resizeMode : "contain"
    },
    leftHistoryInterest : {
        width : 100,
    },
    rightHistoryInterest : {
        width : 100,
        alignItems : "center",
        justifyContent : "center"
    },
    centerHistoryInterest : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    contentHistoryInterest : {
        // fontWeight : "bold",
         fontSize: 16,
          textTransform : "uppercase",
        alignItems : "center",
        justifyContent : "center"
    },
    inputLogin : {
        borderBottomColor : "#F6C400",
        borderBottomWidth : 2,
        height : 50,
        width : "100%",
        marginTop : 20,   
        color : "#FFFFFF",
        fontSize : 18,
        paddingLeft : 10,
        


    },
    frbuttonLogin : {
        marginTop : 20,
        backgroundColor : "rgb(246, 196, 0)",
        justifyContent : "center",
        width : "100%",
        height : 50,
        borderRadius : 10,
        alignItems : "center",

    },
    
    buttonLogin : {
        // fontSize : 18,
        // fontWeight : "bold",
        backgroundColor : "rgb(246, 196, 0)",
        justifyContent : "center",
        height :"99%",
        width : "96%",
        borderRadius : 10,
        

    },
    textButton : {
        textAlign : "center",
        color : "black",
        // fontWeight : "bold",
        textTransform : "uppercase",
        fontSize : 13,
    },
    login : {
        width : "80%",

    },
    forgotPassWord : {
        color : "white",
        textAlign : "right",

    },
    frFotgotPassword : {
       width : "100%",
       height : 30,

       alignItems : "flex-end",
       marginTop  : 10
    },
    headerSignUp : {
        color : "white",
         fontWeight : "bold", 
         fontSize : 24 
    }
    

    


    
    


})