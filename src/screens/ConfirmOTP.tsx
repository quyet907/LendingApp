import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import myStyle from "../style"

import { Actions } from 'react-native-router-flux';
import { BaseUserWithJwt } from '@Core/model/user/BaseUser';
import { UserService } from '../services/UserService';



export default class Login extends Component <props, state> {
    constructor(props : any ){
        super(props)
        this.state = {
            getCodeOTP : "",
            baseUser : {}
        }
    }

    componentDidMount(){

        console.log(this.props);
        // let getDataProps : BaseUserWithJwt = this.props.infoLogin;

        // if(getDataProps){
        //     this.setState({
        //         baseUser : getDataProps
        //     })
         
        // }
        
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
                            value = {this.state.getCodeOTP}
                            onChange={(event )=>{
                                this.setState({
                                    getCodeOTP: event.target.value
                                })
                                
                            } }
                        />
                    </View>

                    <View style={[myStyle.frbuttonLogin, {marginTop : 30}]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress = {(event)=>{
                                let getOTPForm = this.state.getCodeOTP;
                                let getPhone = this.state.baseUser.username;
                                if(getPhone!=undefined){
                                    UserService.verifyOTP(getOTPForm, getPhone).then((res)=>{
                                        if(res){

                                            if(this.state.baseUser.jwt!=""){
                                                console.log("on jwt ");
                                                Actions.enterPhone 
                                            }
                                        }
                                    })
                                }
                            }}
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
    getCodeOTP : string;
    baseUser : BaseUserWithJwt;
}