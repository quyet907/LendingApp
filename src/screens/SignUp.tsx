import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView, CheckBox} from 'react-native'
import myStyle from "../style"






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
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[myStyle.logo]}
                        >
                            <Image
                                style = {[myStyle.logoImg]}
                                source={require("../assets/log.png")}
                            />
                        </View>
                    </View>
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
                    <View  style = {[myStyle.frbuttonLogin]}>
                        <View style = {[myStyle.buttonLogin]}>
                            <Button
                                
                                title = {"Login"}
                                onPress = {()=> {}}
                                color = "rgb(246, 196, 0)"
                                
                            />
                        </View>
                    </View>
                    
                    <View>
                        <Button
                            title="I have account"
                            color = "none"
                            
                            onPress = {()=>{}}
                        />
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