import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"

import { Actions } from 'react-native-router-flux';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import { UserService } from '../services/UserService';
import { connect } from "react-redux";
import * as action from "../Action/ActionLogin"
import PopupConfirm from '../components/PopupConfirm';


class ConfirmOTP extends Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            content : "",
            check : false,
            getValue : ""
        }
    }


    checkData=()=>{
        var getValue = this.state.getValue;

        var regex = /[0-9]$/;

        var check : boolean = regex.test(getValue);
   
            this.setState({
                check :check
            })


    }
 





    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>

                <View style={[myStyle.flex2]}>
                    <View style={[myStyle.frLogo]}>
                        <View
                            style={[{
                                flex: 1,
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }]}
                        >
                            <Text style={[myStyle.headerSignUp]}>Check</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>


                    <View style={[]}>
                        <TextInput
                            style={[myStyle.inputLogin, { marginTop: 30 }]}
                            selectionColor='red'
                            placeholder={"enter otp"}
                            // keyboardType={'numeric'}
                            value={this.state.getValue}
                            onChange={(event) => {
                                this.setState({
                                    getValue: event.target.value
                                })
                                this.checkData()

                            }}
                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, { marginTop: 30 }]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={(event) => {
                                
                            }}
                        >
                            <Text style={[myStyle.textButton]}>
                                Check
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[myStyle.row, { marginTop: 10, justifyContent: "center" }]}>
                        <Text style={[{ marginRight: 5, color: "white" }]}>{this.state.check.toString()}</Text>
                        <TouchableOpacity
                            onPress={()=>{}}
                        >
                            <Text style={[myStyle.colorWhite, , { color: "#F8C400" }]}>{this.state.content}</Text>
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
    check : boolean,
    content : string,
    getValue : string
}



export default (ConfirmOTP)