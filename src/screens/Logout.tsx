import React, { Component } from 'react'
import { View, Button } from 'react-native'
import myStyle from "../style"
import { UserService } from '../services/UserService'
import {Actions} from "react-native-router-flux"

export default class Logout extends Component {
    render() {
        return (
            <View style={myStyle.container}>
                <Button
                    title = "logout"
                    onPress = {() =>{
                        UserService.setJWT("jkjdklaJDKASL").then(res=>{
                            Actions.home()
                        })
                    }}
                ></Button>

                
            </View>
        )
    }
}
