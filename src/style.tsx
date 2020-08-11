import {StyleSheet} from "react-native";

const background = "#292927";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#292927"
        
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
        backgroundColor  : "#1F1F1D",
        borderRadius : 10,
        marginTop  : 20,
    },

    frLogo: {
        flex : 1,
        alignItems : "center",
        resizeMode  : "stretch"
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


    buttonLogin : {
        justifyContent  : "flex-start",
        alignItems : "center",
    },

    loginWithFacebook :{
        backgroundColor : "#454794",
        justifyContent : "center",
        height : 50,
        margin : 20,
        width : "80%",
        borderRadius : 10

    },
    loginWithGoogle :{
        backgroundColor : "#FF0001",
        height  : 50,
        margin : 20,
        justifyContent : "center",
        width : "80%",
        borderRadius : 10
    },
    listStatisticalBasic : { 
        minHeight : 100,
        width : "100%",
        backgroundColor : "#1F1F1D",
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
        backgroundColor : "#1F1F1D",
        flex : 1,
        flexShrink : 30,
        padding : 10  ,
        marginTop    : 10,
        borderRadius :10
    },
    HistoryInterest : {
        height : 60,
        width : "100%",
        backgroundColor : "#292927",
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
        fontWeight : "bold",
         fontSize: 18,
          textTransform : "uppercase"
    }
    

    


    
    


})