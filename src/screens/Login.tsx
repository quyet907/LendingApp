import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'






export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
                <View style={[myStyle.flex2]}>
                    <LogoLogin></LogoLogin>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={"Number Phone"}
                            maxLength = {15}

                        />
                    </View>

                    <View >
                        <TextInput
                            style={[myStyle.inputLogin]}
                            placeholder={"Pass Word"}
                            secureTextEntry={true}
                            maxLength = {60}
                        />
                    </View>

                    <View style={[myStyle.frFotgotPassword]}>
                        <TouchableOpacity>
                            <Text style={[myStyle.forgotPassWord]}
                            >Quên mật khẩu</Text>
                        </TouchableOpacity>

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

                    <View style = {[myStyle.row,{marginTop : 10, justifyContent : "center"} ] }>
                        <Text style = {[{marginRight: 10, color : "gray"}]}>You haven't acount</Text>
                        <TouchableOpacity>
                            <Text style = {[myStyle.colorWhite]}>Create new account</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>
        )
    }
}
