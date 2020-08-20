import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"


import { Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import { connect } from "react-redux";
import * as action from "../Action/ActionLogin"
import PopupConfirm from '../components/PopupConfirm';

class EnterYourPhone extends Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            numberPhone: "",
            showPopup: false,
            contentPopup: ""
        }
    }

    componentDidMount() {
        console.log(this.props.typeAction)


    }
    checkPhone() {
        UserService.sendOTP(this.state.numberPhone).then((res) => {
            // xiu nua se thay the dieu dien cua kiem tra so dien thoai
            let error = UserService.checkValidatePhone(this.state.numberPhone);
            if(error!= null) {
                this.setState({
                    showPopup : true,
                    contentPopup : error
                })
            }
            else {
                if (true) {
                    this.props.onPhone(this.state.numberPhone);
                    Actions.confirmOTP()
                }
            }
        })
    }
    render() {

        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
                <PopupConfirm
                    hideBtnCancel={false}
                    confirmModal={this.state.showPopup}
                    buttonOK={() => this.setState({ showPopup: false })}
                    buttonCancel={() => this.setState({ showPopup: false })}
                    title='Confirm'
                    message={this.state.contentPopup}
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
                            <Text style={[myStyle.headerSignUp]}>Enter your phone</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[{ marginTop: 30 }]}>
                        <TextInput
                            style={[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder={"enter your phone"}
                            value={this.state.numberPhone}
                            onChange={(event) => {
                                this.setState({
                                    numberPhone: event.target.value
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
                                submit
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[myStyle.row, { marginTop: 10, justifyContent: "center" }]}>
                        <TouchableOpacity
                            onPress={Actions.login}
                        >
                            <Text style={[myStyle.colorWhite, , { color: "#F8C400" }]}>Back to Login</Text>
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
    showPopup: boolean,
    contentPopup: string
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