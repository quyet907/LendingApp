import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'
import PopupConfirm from '../components/PopupConfirm';

import { Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { IncomeService } from '../services/IncomeService';

import {connect} from "react-redux"
import * as action from "../Action/ActionLogin"


class Login extends Component<props, state> {
    constructor(props : any){
        super(props);
        this.state= {
            user : "",
            password : "",
            showPopup: false,
            contentPopup : ""
        }
        

        
    }

    checkLogin =()=>{
        var user = this.state.user;
        var password = this.state.password;
        console.log(user + " " + password);
        let getJwtToken = UserService.login(user, password).then(infoLogin =>{
            if(infoLogin.jwt ===  undefined){
                this.setState({
                    showPopup : {true},
                    contentPopup : "User or password is incorrect"
                })
            }
            else { 
                let type = "OTPLogin"
                this.props.onTypeActon("login")
                Actions.confirmOTP();         
            }
        })

        

    }

    render() {
        
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
                <PopupConfirm
                    hideBtnCancel = {false}
                    confirmModal={this.state.showPopup}
                    buttonOK={() => this.setState({ showPopup: false })}
                    buttonCancel={() => this.setState({ showPopup: false })}
                    title='Confirm'
                    message= {this.state.contentPopup}
                />
                <View style={[myStyle.flex2]}>
                    <LogoLogin></LogoLogin>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            value = {this.state.user}
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={"number phone"}
                            maxLength = {15}
                            onChange = {(event)=>{
                                this.setState({user : event.target.value})
                            }}

                        />
                    </View>

                    <View >
                        <TextInput
                            value = {this.state.password}
                            style={[myStyle.inputLogin]}
                            placeholder={"pass word"}
                            secureTextEntry={true}
                            maxLength = {60}
                            onChange = {(event)=>{

                                this.setState({
                                    password:event.target.value 
                                })
                            }}
                        />
                    </View>

                    <View style={[myStyle.frFotgotPassword]}>
                        <TouchableOpacity>
                            <Text style={[{color : "#F8C400"}]}
                                onPress = {(event)=>{
                                    this.props.onTypeActon("forgotPassword")
                                    Actions.enterPhone()
                                }}
                            >Forgot password</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress ={this.checkLogin}
                        >
                            <Text style  ={[myStyle.textButton]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {[myStyle.row,{marginTop : 10, justifyContent : "center"} ] }>
                        <Text style = {[{marginRight: 10, color : "white"}]}>You haven't acount</Text>
                        <TouchableOpacity
                            onPress ={(event)=>{
                                    this.props.onTypeActon("signUp")
                                    Actions.signUp()
                                }
   
                            }
                        >
                            <Text style = {[{color : "#F8C400"}]} >Create new account</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>
        )
    }
}

type  props = {
    onTypeActon(typeAction : string):void,
    onJWT(JWT :string ) : void
}

type state = {
    user : any,
    password: any,
    showPopup: boolean,
    contentPopup : string
}

function mapDispatchProps(dispatch: any, props : any ){
    return {
        onTypeActon(typeAction : string){
            dispatch(action.setTypeAction(typeAction))
        },
        onJWT(JWT : string) {
            dispatch(action.setJWT(JWT))
        }
    }
}

export default  connect(null, mapDispatchProps)(Login) 