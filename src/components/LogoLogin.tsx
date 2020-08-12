import React, { Component } from 'react'
import { View , Text, Image} from 'react-native'
import myStyle from "../style"
export default class LogoLogin extends Component {
    render() {
        return (
            <View style={[myStyle.frLogo]}>
                <View
                    style={[myStyle.logo]}
                >
                    <Image
                        style={[myStyle.logoImg]}
                        source={require("../assets/log.png")}
                    />
                </View>
            </View>
        )
    }
}

