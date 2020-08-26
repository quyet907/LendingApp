import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"

import { Actions } from 'react-native-router-flux';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import { UserService } from '../services/UserService';
import { connect } from "react-redux";
import * as action from "../Action/ActionLogin"
import PopupConfirm from '../components/PopupConfirm';

import * as actionPopup from "../Action/ActionPopup"


class ConfirmOTP extends Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            getCodeOTP: "",
            baseUser: {},


        }
    }

    componentDidMount() {

    }

    checkOTP() {

        UserService.verifyOTP(this.state.getCodeOTP, this.props.NumeberPhone).then((res) => {
            if(res == null) {
                if(this.props.typeAction == "login"){
                    Actions.home()
                }
                else {
                    this.props.onCodeOTP(this.state.getCodeOTP)
                    Actions.password();
                }
            }
            else{
                actionPopup.showMessage(res);
            }
        })

    }



    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container,myStyle.fullCeter, { alignItems: "center" }]}>

                <View style={[]}>
                    <View style={[myStyle.frLogo]}>
                        <View
                            style={[{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }]}
                        >
                            <Text style={[myStyle.headerSignUp]}>Enter OTP code</Text>
                        </View>
                    </View>
                </View>

                <View style={[, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            style={[myStyle.inputLogin, { marginTop: 30 }]}
                            selectionColor='red'
                            placeholder={"Enter OTP"}
                            keyboardType='numeric'
                            // keyboardType={'numeric'}
                            value={this.state.getCodeOTP}
                            onChange={(event) => {
                                this.setState({
                                    getCodeOTP: event.target.value
                                })

                            }}
                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, { marginTop: 30 }]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={(event) => {
                                this.checkOTP()
                            }}
                        >
                            <Text style={[myStyle.textButton]}>
                                Confirm
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[myStyle.row, { marginTop: 10, justifyContent: "center" }]}>
                        <Text style={[{ marginRight: 5, color: "white" }]}>Do you have OTP?</Text>
                        <TouchableOpacity
                            onPress={Actions.enterPhone}
                        >
                            <Text style={[myStyle.colorWhite, , { color: "#F8C400" }]}>Enter my phone again</Text>
                        </TouchableOpacity>
                    </View>



                </View>

            </KeyboardAvoidingView>
        )
    }
}
type props = {
    onCodeOTP(code: string): void;
    typeAction: string,
    NumeberPhone: string
}

type state = {
    getCodeOTP: string;
    baseUser: BaseUserWithJwt;
}

function mapStateToProps(state: any) {
    return {
        typeAction: state.LoginReducer.actionType,
        NumeberPhone: state.LoginReducer.numberPhone
    }
}
function mapDispatchToProps(dispatch: any, props: any) {
    return {
        onCodeOTP(code: string) {
            dispatch(action.setCodeOTP(code));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOTP)