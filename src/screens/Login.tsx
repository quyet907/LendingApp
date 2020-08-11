import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import myStyle from "../style"


export default class Login extends Component {
    render() {
        return (
            <View style={myStyle.container}>
                <View style={[myStyle.flex3]}>
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[myStyle.logo]}
                        >
                            <Image
                                style = {[myStyle.logoImg]}
                                source={require("../../assets/log.png")}
                            />
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex3, myStyle.buttonLogin]}>
                    <View style={[myStyle.loginWithFacebook]}>
                        <Button
                            color = {"#454794"}
                            title = {"Login with Facebook"}
                            onPress = {()=>{}}
                        />
                    </View>
                    <View style={[myStyle.loginWithGoogle]}>
                        <Button
                            color = {"#FF0001"}
                            title = {"Login with Google"}
                            onPress = {()=>{}}
                        />
                    </View>

                </View>
                
            </View>
        )
    }
}
