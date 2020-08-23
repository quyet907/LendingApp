import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, CheckBox } from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'

import { Actions } from 'react-native-router-flux';

import * as action from "../Action/ActionLogin";
import { connect } from "react-redux"
import { UserService } from '../services/UserService';
import PopupConfirm from '../components/PopupConfirm';



class setPassword extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            checkbox: false,
            getPass: "",
            getAgainPass: "",
            showPopup: false,
            contentPopup : "",
            
        }
    }
    componentDidMount(){
        console.log(this.props.codeReferal);
        console.log(this.props.phoneNumber);
    }

    checkSetPassword = () => {
        var getPass: any = this.state.getPass;
        var getAgainPass: any = this.state.getAgainPass;
        var error = UserService.checkValidate(getPass, getAgainPass);
        console.log(this.props.phoneNumber + "--" + this.props.codeOTP + "--" + this.props.typeAction)

  
        if (error!= null) {
            this.setState({
                contentPopup : error,
                showPopup : true
                
            })
        }
        
        else {
            if (this.props.typeAction == "signUp") {
                var getReferral = this.props.codeReferal;

                console.log(this.props.phoneNumber);
                UserService.register(this.props.phoneNumber, getPass, this.props.codeOTP, getReferral).then(res => {
                        this.setState({
                            contentPopup : res,
                            showPopup : true  
                        })
                })
            }
            else {
                UserService.setPassword(this.props.phoneNumber, getPass, this.props.codeOTP).then(res => {
                    this.setState({
                        contentPopup : res,
                        showPopup : true 
                    })
                })
            }
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
                <PopupConfirm
                    hideBtnCancel = {false}
                    confirmModal={this.state.showPopup}
                    buttonOK={() => {
                        if(this.state.contentPopup == "success"){
                            Actions.login()
                        }
                        this.setState({ showPopup: false })}
                        
                    }
                    buttonCancel={() => this.setState({ showPopup: false })}
                    title='Confirm'
                    message= {this.state.contentPopup}
                />
                <View style={[myStyle.flex2]}>
                    <View style={[myStyle.frLogo]}>
                        <View
                            style={[{
                                flex: 1,
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }]}
                        >
                            <Text style={[myStyle.headerSignUp]}>Enter your password</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            ref={"pass"}
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={"password"}
                            maxLength={60}
                            secureTextEntry={!this.state.checkbox}
                            value={this.state.getPass}
                            onChange={(event) => {
                                this.setState({
                                    getPass: event.target.value
                                })
                            }}
                        />
                    </View>

                    <View >
                        <TextInput
                            ref={"passAgain"}
                            style={[myStyle.inputLogin]}
                            placeholder={"again password"}
                            secureTextEntry={!this.state.checkbox}
                            maxLength={60}
                            onChange={(event) => {
                                this.setState({
                                    getAgainPass: event.target.value
                                })
                            }}
                        />
                    </View>

                    <View style={[myStyle.row, { marginTop: 10 }]}>
                        <CheckBox
                            value={this.state.checkbox}
                            onChange={() => { this.setState({ checkbox: !this.state.checkbox }) }}
                        />
                        <Text style={[myStyle.colorWhite, { marginLeft: 10, fontSize: 12 }]}
                            onPress={() => { this.setState({ checkbox: !this.state.checkbox }) }}
                        >Show pass Word</Text>

                    </View>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={(event) => {
                                this.checkSetPassword()
                            }}
                        >
                            <Text style={[myStyle.textButton]}>
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
    typeAction: string,
    phoneNumber: string,
    codeOTP: string,
    codeReferal : string
}

type state = {
    checkbox: boolean
    getPass: string,
    getAgainPass: string,
    showPopup: boolean,
    contentPopup : string
}

function mapStateToProps(state: any) {
    return {
        typeAction: state.LoginReducer.actionType,
        phoneNumber: state.LoginReducer.numberPhone,
        codeOTP: state.LoginReducer.codeOTP,
        codeReferal : state.LoginReducer.referalCode
    }
}

function mapDispatchToProps(dispatch: any, props: any) {
    return null
}

export default connect(mapStateToProps, mapDispatchToProps)(setPassword)