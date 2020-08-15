import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"


import { Actions } from 'react-native-router-flux';


export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, {alignItems : "center"}]}>
                <View style={[myStyle.flex2]}>
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[{flex : 1,
                                justifyContent : "flex-end",
                                alignItems : "flex-end",}]}
                        >
                            <Text style = {[myStyle.headerSignUp ]}>Enter your phone</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>

                    
                    <View style={[{marginTop : 30}]}>
                        <TextInput
                            style = {[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder = {"enter your phone"}
                            

                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, {marginTop : 30}]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress = {Actions.confirmOtp}
                        >
                            <Text style  ={[myStyle.textButton]}>
                                submit
                            </Text>
                        </TouchableOpacity>

                    </View>
                    


                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
