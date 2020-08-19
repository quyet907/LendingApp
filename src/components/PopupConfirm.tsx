import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard, CheckBox, Alert } from 'react-native';
import Separator from './Separator'




export default class PopupConfirm extends React.Component<Props, {}>{
    render() {
        return (
            <View style={this.props.confirmModal ? styles.confirmModalActive : { display: 'none' }}>
                <View style={{ position: 'absolute', zIndex: 5, backgroundColor: '#fff', width: '80%', height: '20%', flexDirection: 'column', padding: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
        <Text> {this.props.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text>{this.props.message}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 , alignItems: 'center'}}>
                        {this.props.hideBtnCancel ? null : <Button title='Cancel' onPress={() => this.props.buttonCancel()}></Button>}
                        
                        <Text style={{ marginHorizontal: 5 }}></Text>
                        <Button title='OK'  onPress={() => {
                            this.props.buttonOK()
                        }
                        }></Button>
                    </View>

                </View>

            </View>
        )
    }
    buttonOK = () =>{

    }

    buttonCancel = () =>{
        
    }

}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        backgroundColor: '#1e2126'
    },


    confirmModalActive: {
        width: '100%', height: '100%', backgroundColor: '#181f29', position: 'absolute', zIndex: 3, justifyContent: 'center', alignItems: 'center'

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

}


