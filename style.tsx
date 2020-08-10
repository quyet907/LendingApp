import {StyleSheet} from "react-native";

const background = "#1F1F1D";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#1F1F1D"
        
    },
    row:{
        flexDirection : "row",
        backgroundColor : "#1F1F1D"
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
    frImgStatisticalBasic : {
        justifyContent : 'center',
        alignItems : "center",
    },
    imgStatisticalBasic : {
        height : 50,
        width : 50,
        resizeMode : "contain"
    },
    contentStatisticalBasic : {
        justifyContent : 'center',
        alignItems : 'center'
        
        
    },
    colorWhite : {
        color : "#ffffff"
    }

    


    
    


})