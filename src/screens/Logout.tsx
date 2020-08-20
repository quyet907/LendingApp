import React, { Component } from 'react'
import { View, Button } from 'react-native'
import myStyle from "../style"
import { UserService } from '../services/UserService'

export default class Logout extends Component {
    render() {
        return (
            <View style={myStyle.container}>
                <Button
                    title = "logout"
                    onPress = {() =>{
                        UserService.setJWT("").then(res=>{
                            UserService.getJWT().then(res=>{
                                
                            })
                        })
                    }}
                ></Button>
            </View>
        )
    }
}
