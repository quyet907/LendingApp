import React, { Component } from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import myStyle from "../style"
import { UserService } from '../services/UserService'
import { Actions } from "react-native-router-flux"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import * as Color from "../Color"
export default class Logout extends Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            getPhone: ""
        }
    }
    componentDidMount() {
        UserService.getMe().then(res => {
            if (res != null) {
                if (res.username != null) {
                    this.setState({ getPhone: res.username || "" })
                }


            }
        })
    }

    render() {
        return (


            <View style={[myStyle.container]}>
                <View style={[styles.header]}>
                    <Text style={[styles.contentHeader]}>Account</Text>
                </View>
                <View style={[myStyle.row, styles.layoutAccout]}>

                        <FontAwesome name={"user"} size={30} color={"white"} />

                        <Text style={[styles.contentAccount]}>{this.state.getPhone}</Text>

                </View>
                <View>
                    <TouchableOpacity style={[styles.buttonLogout]} >
                        <Text style={[styles.contentButtonLogout]}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
type props = {

}

type state = {
    getPhone: string
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        // backgroundColor : Color.dark,
    },
    contentHeader: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
        color : "white"
    },
    layoutAccout: {
        padding: 20,
        // justifyContent: "center",
        
        marginLeft : 20,
        marginRight : 20,
        borderRadius : 5,
        backgroundColor : Color.dark
    },
    contentAccount: {
        justifyContent: "center",
        color : "white",
        paddingLeft : 20
        
    },
    buttonLogout: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderWidth: 1,
        borderRadius : 5,
        borderColor : Color.primary,
        margin : 20
    },
    contentButtonLogout: {
        fontSize: 16,
        color : Color.primary,
        textTransform : "uppercase",
    }
})
