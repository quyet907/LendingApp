import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView} from 'react-native'
import myStyle from "../style"





export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, {alignItems : "center"}]}>
                <View style={[myStyle.flex2]}>
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[myStyle.logo,]}
                        >
                            <Text style = {{color : "white", fontWeight : "bold" }}>Enter your phone</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>

                    
                    <View style={[]}>
                        <TextInput
                            style = {[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder = {"Number Phone"}
                            

                        />
                    </View>





                    <View  style = {[myStyle.frbuttonLogin]}>
                        <View style = {[myStyle.buttonLogin]}>
                            <Button
                                
                                title = {"Login"}
                                onPress = {()=> {}}
                                color = "rgb(246, 196, 0)"
                                
                            />
                        </View>
                    </View>
                    


                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
