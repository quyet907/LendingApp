import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"


import { Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import { connect } from "react-redux";
import * as action from "../Action/ActionLogin"
import * as actionPopup from "../Action/ActionPopup";
import PopupConfirm from '../components/PopupConfirm';
import store from "../reducer/store"
import I18n from "../i18n/i18n";

class EnterYourPhone extends Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            numberPhone: ""
        }
    }
    checkPhone() {
        if (!this.state.numberPhone) {
            actionPopup.showMessage(I18n.t('error.password.passwordBlank'))
        } else {
            UserService.checkExits(this.state.numberPhone).then((res) => {
                if (res && this.props.typeAction == "signUp") {
                    actionPopup.showMessage(I18n.t('error.password.accountHasBeenRegistered'))
                }
                else if (!res && this.props.typeAction == "forgotPassword") {
                    actionPopup.showMessage(I18n.t('error.password.cantFindAccount'))
                }
                else {
                    this.props.onPhone(this.state.numberPhone);
                    let error = UserService.checkValidatePhone(this.state.numberPhone);
                    if (error) {
                        actionPopup.showMessage(error);
                    }
                    else {
                        UserService.sendOTP(this.state.numberPhone).then((res) => {
                            Actions.confirmOTP()
                        })
                    }
                }

            })
        }
    }
    render() {

        return (
            <KeyboardAvoidingView style={[myStyle.container, myStyle.fullCeter, { alignItems: "center" }]}>

                <View style={[]}>
                    <View style={[myStyle.frLogo]}>
                        <View
                            style={[{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }]}
                        >
                            <Text style={[myStyle.headerSignUp]}>{I18n.t('screens.enterYourPhone.enterYourPhoneTitle')}</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.login]}>


                    <View style={[{ marginTop: 30 }]}>
                        <TextInput
                            autoFocus={true}
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={I18n.t('screens.enterYourPhone.enterYourPhonePlaceholder')}
                            value={this.state.numberPhone}
                            onSubmitEditing={() => this.checkPhone()}
                            onChangeText={(text) => {
                                this.setState({
                                    numberPhone: text
                                })
                            }}

                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, { marginTop: 30 }]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={(event) => {
                                this.checkPhone()
                            }}
                        >
                            <Text style={[myStyle.textButton]}>
                                {I18n.t('screens.enterYourPhone.submitButtonText')}
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[myStyle.row, { marginTop: 10, justifyContent: "center" }]}>
                        <TouchableOpacity
                            onPress={Actions.login}
                        >
                            <Text style={[myStyle.colorWhite, , { color: "#F8C400" }]}>{I18n.t('screens.enterYourPhone.backToLogIn')}</Text>
                        </TouchableOpacity>
                    </View>



                </View>

            </KeyboardAvoidingView>
        )
    }
}

type props = {
    onPhone(numberPhone: string): void,
    typeAction: any
}
type state = {
    numberPhone: string,

}
function mapDispatchToProps(dispatch: any, props: any) {
    return {
        onPhone(numberPhone: string) {
            dispatch(action.setNumberPhone(numberPhone))
        }
    }
}

function mapStateToProps(state: any) {
    return {
        typeAction: state.LoginReducer.actionType
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterYourPhone)