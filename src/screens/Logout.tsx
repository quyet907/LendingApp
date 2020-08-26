import React, { Component } from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import myStyle from "../style"
import { UserService } from '../services/UserService'
import { Actions } from "react-native-router-flux"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Logout extends Component <props , state> {
    constructor(props : any ){
        super(props)
        this.state = {
            getPhone : ""
        }
    }
    componentDidMount(){
        UserService.getMe().then(res=>{
            console.log(res);
            if(res!=null) {
                if(res.username != null){
                    this.setState({getPhone : res.username ||""})
                }


            }
        })
    }

    render() {
        return (


            <View style={myStyle.container}>
                <View style={[myStyle.flex1, myStyle.fullCeter]}>
                    <View style={[myStyle.flex6, myStyle.fullCeter]}>
                        <Image
                            style={[styles.avt]}
                            source={require('../icons/avt.png')}
                        ></Image>
                    </View>
                    <View style={[myStyle.flex3]}>
                        <Text style={styles.inforUser}>{this.state.getPhone}</Text>
                    </View>
                </View>
                <View style={myStyle.flex1}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => {
                                UserService.setJWT("").then(res => {
                                    Actions.login()
                                }
                                )
                            }}
                    >
                        <View style={[myStyle.row, { paddingLeft: 20 }]}>

                            <View style={[{ justifyContent: "flex-end" }, myStyle.flex1]}>
                                <Text style={styles.contentButton}>Logout</Text>
                            </View>
                            <View style={[{ justifyContent: "flex-end", alignItems: "center", paddingRight: 20 }]}>
                                <Icon name={"logout"} size={20} color={"white"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}
type props  = {

}

type state = {
    getPhone : string 
}

const styles = StyleSheet.create({
    inforUser: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18
    },

    avt: {
        height: 100,
        width: 100,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#f2c73a",
        backgroundColor: "#12151c",
    },
    button: {
        backgroundColor: "#1e2126",
        height: 50,
        width: "100%",
        justifyContent: "center",
        // paddigLeft: 20
    },
    contentButton: {
        // paddingLeft: 20,
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",

    }
})
