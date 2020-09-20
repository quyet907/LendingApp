import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {connect}from "react-redux";
import * as action from "../Action/ActionPopup"




class PopupShow extends React.Component<Props, {}>{
    render() {
        return (
            <View style={this.props.showPopup ? styles.confirmModalActive : { display: 'none' }}>
                <View style={styles.backgroundPopup}>

                </View>
                <View style={styles.popup}>
                    
                    <View style={styles.textContent}>
                        <Text style={{ color: 'white', alignItems: "center" }}>{this.props.content}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center' }}>



                        <TouchableOpacity
                            style={(this.props.typeConfirm) ? styles.buttonCancel : {display: 'none'}}
                            onPress={() => {
                                this.props.onShowPopup(false);
                                this.props.onResult(false);
                            }}
                        >
                            <Text style = {{color:"black"}} >Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonOK}
                            onPress={() => {
                                // this.props.onShowPopup(false);
                                action.setShowPopup(false); 
                                // this.props.onResult(true);
                            }}
                        >
                            <Text>OK</Text>
                        </TouchableOpacity>



                    </View>

                </View>

            </View>
        )
    }
    buttonOK = () => {

    }

    buttonCancel = () => {

    }

}


const styles = StyleSheet.create({

    buttonOK: {
        backgroundColor: "#F0B90B",
        height: 40,
        width: 100,
        margin : 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 5,
    },

    buttonCancel: {
        backgroundColor: "white",
        height: 40,
        width: 100,
        margin : 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 5,
    },

    textContent: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },


    confirmModalActive: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(24, 31, 41,)',
        position: 'absolute', zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'

    },

    backgroundPopup: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(120, 120, 120,0.8)',
        position: 'absolute', zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    popup: {
        position: 'absolute',
        zIndex: 5,
        backgroundColor: '#181f29',
        width: '80%',
        // height: 155,
        borderRadius : 5,
        flexDirection: 'column',
        padding: 15,

    },

    confirmModalInactive: {
        display: 'none'

    }


})



type Props = {
    showPopup : boolean,
    content : string,
    typeConfirm : boolean,
    onShowPopup(show : boolean) : void,
    onResult(result : boolean) : void

}

function mapStateToProps(state : any){
    return {
        showPopup : state.PopupReducer.showPopup,
        content : state.PopupReducer.contentShow,
        typeConfirm : state.PopupReducer.typeCofirm
    }
}

function mapDispatchToProps(dispatch :any , props : any ){
    return {
        onShowPopup(show : boolean) {
            dispatch(action.showPopup(show))
        },
        onResult(result : boolean){
            dispatch(action.Result(result))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupShow)



