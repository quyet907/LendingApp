import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"





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
                            <Text style = {{color : "white", fontWeight : "bold", fontSize : 30 }}>Enter your phone</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>

                    
                    <View style={[]}>
                        <TextInput
                            style = {[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder = {"Submit"}
                            

                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                        >
                            <Text style  ={[myStyle.textButton]}>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                    


                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
