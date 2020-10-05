import React, { Component } from 'react'
import { View, ActivityIndicator , StyleSheet} from 'react-native'
import myStyle from "../style"
import  { connect} from "react-redux"
import { ProgressBar, Colors } from 'react-native-paper';
import * as color from "../Color"
class Loadding extends Component <Props , state>{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
    
    }
    render() {
        return (
            
            <View style={[(this.props.valueLoad>0) ? styles.frameLoadding : {display: "none"}]}>
                <ProgressBar color={color.primary} indeterminate />
                {/* <View style={styles.background}></View>
                <View style={myStyle.fullCeter}>
                <ActivityIndicator size="large" color="#00ff00" />
                </View> */}
            </View>
        )
    }
}




const styles = StyleSheet.create({
    frameLoadding: {
        // width: '100%',
        // height: '100%',
        // backgroundColor: 'rgba(24, 31, 41,)',
        position: 'absolute', zIndex: 3,
        top : 0,
        left : 0,
        width : '100%',
        height : 5
        // justifyContent: 'center',
        // alignItems: 'center'
        

    },

    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(155, 155, 155,0.8)',
        position: 'absolute', zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

type Props = {
    valueLoad : number,
}

type state = {

}


function mapStateToProps(state : any ){
    return {
        valueLoad: state.LoadingReducer.valueLoad,
    }
}
function mapDispatchToProps(dispatch: any, props: any) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loadding)