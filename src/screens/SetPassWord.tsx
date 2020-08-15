import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity , CheckBox} from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'

import { Actions } from 'react-native-router-flux';




export default class Login extends Component <props, state>{
    constructor(props:any ){
        super(props)
        this.state = {
            checkbox : false,
            getPass : "",
            getAgainPass : ""
        }
    }

    checkPassword =()=>{
        var  getPass = this.refs.password;
        var getAgainPass = this.refs.againPassword;
        console.log(getPass+"--"+ getAgainPass)
    }
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
                <View style={[myStyle.flex2]}>
                <View style={[ myStyle.frLogo]}>
                        <View
                            style={[{flex : 1,
                                justifyContent : "flex-end",
                                alignItems : "flex-end",}]}
                        >
                            <Text style = {[myStyle.headerSignUp ]}>Enter your password</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            ref = {"pass"}
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={"password"}
                            maxLength = {60}
                            secureTextEntry={!this.state.checkbox}
                            onChange = {this.checkPassword}
                        />
                    </View>

                    <View >
                        <TextInput
                            ref = {"passAgain"}
                            style={[myStyle.inputLogin]}
                            placeholder={"again password"}
                            secureTextEntry={!this.state.checkbox}
                            maxLength = {60}
                            onChange = {this.checkPassword}
                        />
                    </View>

                    <View style = {[myStyle.row, { marginTop : 10}]}>
                        <CheckBox
                            value = {this.state.checkbox}
                            onChange = {()=>{this.setState({checkbox : !this.state.checkbox})}}
                        />
                        <Text style = {[myStyle.colorWhite,{marginLeft : 10, fontSize : 12}]} 
                            onPress = {()=>{this.setState({checkbox : !this.state.checkbox})}}
                        >Show pass Word</Text>

                    </View>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress = {Actions.login}
                        >
                            <Text style  ={[myStyle.textButton]}>
                                confirm
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>

            </KeyboardAvoidingView>
        )
    }
}

type props = {

}

type state = {
    checkbox : boolean
    getPass : string ,
    getAgainPass : string
}