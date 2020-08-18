import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"

import { Actions } from 'react-native-router-flux';



export default class Login extends Component <props, state> {
    constructor(props : any ){
        super(props)
        this.state = {
            codeOTP : ""
        }
    }

    componentDidMount(){
        if(this.props.username !=null){
            console.log(this.props.username)
            if(this.props.jwt){
                console.log("co jwt")
            }
        }
    }

    confrimOTP(){

    }

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
                            <Text style ={[myStyle.headerSignUp ]}>Enter OTP code</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>

                    
                    <View style={[]}>
                        <TextInput
                            style = {[myStyle.inputLogin, {marginTop : 30}]}
                            selectionColor='red'
                            placeholder = {"enter otp"}
                            // keyboardType={'numeric'}
                            value = {this.state.codeOTP}
                            onChange={(event )=>{
                                this.setState({
                                    codeOTP: event.target.value
                                })
                            } }
                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, {marginTop : 30}]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress = {Actions.password}
                        >
                            <Text style  ={[myStyle.textButton]}>
                                confirm
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style = {[myStyle.row,{marginTop : 10, justifyContent : "center"} ] }>
                        <Text style = {[{marginRight: 5,color  : "white" }]}>Do you have OTP?</Text>
                        <TouchableOpacity
                            onPress  = {Actions.enterPhone}
                        >
                            <Text style = {[myStyle.colorWhite,, {color : "#F8C400"}]}>Enter my phone again</Text>
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
    codeOTP : string;
}