import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'


import { Actions } from 'react-native-router-flux';
import { UserService } from '../services/UserService';
import { IncomeService } from '../services/IncomeService';




export default class Login extends Component<props, state> {
    constructor(props : any){
        super(props);
        this.state= {
            user : "",
            password : ""
        }
        

        
    }

    checkLogin =()=>{
        var user = this.state.user;
        var password = this.state.password;
        console.log(user + " " + password);
        let getJwtToken = UserService.login(user, password).then(infoLogin =>{
            if(infoLogin.jwt ===  undefined){
                console.log("thoong baos sai")
            }
            else { 

                Actions.confirmOTP(infoLogin);         
            }
            
        })

        

    }

    render() {
        
        return (
            <KeyboardAvoidingView style={[myStyle.container, { alignItems: "center" }]}>
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
                                onPress = {Actions.enterPhone}
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
                            onPress ={
                                Actions.signUp
                            }
                        >
                            <Text style = {[{color : "#F8C400"}]}  onPress = {Actions.signUp}>Create new account</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>
        )
    }
}

type  props = {

}

type state = {
    user : any,
    password: any
}