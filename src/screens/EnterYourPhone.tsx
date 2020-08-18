import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"


import { Actions, Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';


export default class Login extends Component<props, state> {
    constructor(props: any){
        super(props)
        this.state = {
            typeAction : "",
            numberPhone : ""
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.setState({
            typeAction : (this.props.typeAction == "singUp") ? "singUp" : "forgotPassword"
        })
        
    }
    checkPhone(){
        Actions.ConfirmOTP
        UserService.sendOTP(this.state.numberPhone).then((res)=>{
            // xiu nua se thay the dieu dien cua kiem tra so dien thoai
            if(true){
                let userBase: BaseUserWithJwt = {};
                userBase.mobile = this.state.numberPhone;
                Actions.ConfirmOTP({
                    typeAction : this.state.typeAction,
                    data : userBase
                })

            }
        })
    }
    render() {
        console.log(this.state.typeAction);
        return (
            <KeyboardAvoidingView style={[myStyle.container, {alignItems : "center"}]}>
                <View style={[myStyle.flex2]}>
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[{flex   : 1,
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
                            value = {this.state.numberPhone}
                            onChange = {(event)=>{
                                this.setState({
                                    numberPhone : event.target.value
                                })
                            }}

                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, {marginTop : 30}]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress = {(event)=>{
                                this.checkPhone
                            }}
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

type props = {

}
type state = {
    numberPhone : string,
    typeAction : string,
}