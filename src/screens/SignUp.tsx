import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, TouchableOpacity,CheckBox} from 'react-native'
import myStyle from "../style"
import LogoLogin from '../components/LogoLogin'






export default class Login extends Component<props , state> {
    constructor(props : any ){
        super(props)
        this.state = {
            checkbox : false
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, {alignItems : "center"}]}>
                <View style={[myStyle.flex2]}>
                    <LogoLogin></LogoLogin>
                </View>

                <View style={[myStyle.flex5, myStyle.login]}>

                    
                    <View style={[]}>
                        <TextInput
                            style = {[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder = {"Your Name"}
                        />
                    </View>

                    <View >
                        <TextInput
                             style = {[myStyle.inputLogin]}
                             placeholder = {"Number Phone"}
                        />
                    </View>

                    <View >
                        <TextInput
                             style = {[myStyle.inputLogin]}
                             placeholder = {"Pass Word"}
                             secureTextEntry={true}
                        />
                    </View>


                    <View style = {[myStyle.row, { marginTop : 10}]}>
                        <CheckBox
                            value = {this.state.checkbox}
                            onChange = {()=>{this.setState({checkbox : !this.state.checkbox})}}
                        />
                        <Text style = {[myStyle.colorWhite,{marginLeft : 10, fontSize : 12, color : "gray"}]} 
                            onPress = {()=>{this.setState({checkbox : !this.state.checkbox})}}
                        >I agree with điều khoản của their :D</Text>

                    </View>
                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}>
                            <Text style = {[myStyle.textButton]}>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                    
                    <View style = {[myStyle.row,{marginTop : 10, justifyContent : "center"} ] }>
                        <Text style = {[{marginRight: 10, color : "gray"}]}>You have account?</Text>
                        <TouchableOpacity>
                            <Text style = {[myStyle.colorWhite]}>Go to login</Text>
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
    checkbox : boolean
}