import React, { Component } from 'react'
import { View, ActivityIndicator , StyleSheet} from 'react-native'
import myStyle from "../style"
import  { connect} from "react-redux"
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
            <View style={[(this.props.showLoad) ? styles.frameLoadding : {display: "none"}]}>
                <View style={styles.background}></View>
                <View style={myStyle.fullCeter}>
                <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    frameLoadding: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(24, 31, 41,)',
        position: 'absolute', zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'

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
    showLoad : boolean,
}

type state = {

}


function mapStateToProps(state : any ){
    return {
        showLoad: state.LoadingReducer.showLoad,
    }
}
function mapDispatchToProps(dispatch: any, props: any) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loadding)