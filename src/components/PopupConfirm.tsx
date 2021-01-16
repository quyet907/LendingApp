import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';





export default class PopupConfirm extends React.Component<Props, {}>{
    render() {
        return (
            <View style={this.props.confirmModal ? styles.confirmModalActive : { display: 'none' }}>
                <View style={styles.backgroundPopup}>

                </View>
                <View style={styles.popup}>
                    {/* <View style={styles.textContent}>
                        <Text style = {{color: 'white'}}> {this.props.title}</Text>
                    </View> */}
                    <View style={styles.textContent}>
                        <Text style={{ color: 'white', alignItems: "center" }}>{this.props.message}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity
                            style={(this.props.hideBtnCancel) ? styles.buttonCancel : {display: 'none'}}
                            onPress={() => this.props.buttonCancel()}
                        >
                            <Text style = {{color:"black"}}>{this.props.textButtonLeft}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonOK}
                            onPress={() => this.props.buttonOK()}
                        >
                            <Text>{this.props.textButtonRight}</Text>
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
        minWidth: 100,
        margin : 10,
        paddingLeft:10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 5,
    },

    buttonCancel: {
        backgroundColor: "white",
        height: 40,
        minWidth: 100,
        margin : 10,
        paddingLeft:10,
        paddingRight: 10,
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
        backgroundColor: 'rgba(155, 155, 155,0.8)',
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
    confirmModal: boolean,
    buttonOK: any,
    buttonCancel: any,
    hideBtnCancel: boolean,
    title: String,
    message: String
    textButtonLeft: string,
    textButtonRight: string
}


