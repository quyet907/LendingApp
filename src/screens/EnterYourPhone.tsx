import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"


import {  Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import {connect} from "react-redux";
import * as action from "../Action/ActionLogin"

class EnterYourPhone extends Component<props, state> {
    constructor(props: any){
        super(props)
        this.state = {
            numberPhone : ""
        }
    }

    componentDidMount(){
        console.log(this.props.typeAction)
        
        
    }
    checkPhone(){
        Actions.ConfirmOTP
        UserService.sendOTP(this.state.numberPhone).then((res)=>{
            // xiu nua se thay the dieu dien cua kiem tra so dien thoai
            if(true){
                this.props.onPhone(this.state.numberPhone);
                Actions.confirmOTP()
            }
        })
    }
    render() {

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
                                this.checkPhone()
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
    onPhone(numberPhone : string) : void,
    typeAction : any
}
type state = {
    numberPhone : string,
}
function mapDispatchToProps(dispatch : any , props : any ){
    return {
        onPhone(numnerPhone : string){
            dispatch(action.setNumberPhone(numnerPhone))
        }
    }
}

function mapStateToProps(state : any ){
    return {
        typeAction : state.LoginReducer.actionType
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterYourPhone)