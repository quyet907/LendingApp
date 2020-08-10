import React, { Component } from 'react'
import { View, Text, Image } from "react-native";
import myStyle from "../style"
export default class StatisticalBasic extends Component <props, state>{
    constructor(props : any ){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={[myStyle.flex3, myStyle.row]}>
                <View style={[myStyle.flex3, myStyle.frImgStatisticalBasic]}>
                    <Image
                        source={require("../assets/icons8_transaction_70px_2.png")}
                        style={[myStyle.imgStatisticalBasic]}
                    />
                </View>
                <View style={[myStyle.flex3]}>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>Tổng Tiền</Text>
                    </View>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>200,000</Text>
                    </View>

                </View>
            </View>
        )
    }
}

type props = {

}
type state = {

}