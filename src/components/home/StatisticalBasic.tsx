import React, { Component } from 'react'
import { View, Text, Image } from "react-native";
import myStyle from "../../style"
import * as color from '../../Color'
import Icon from "react-native-vector-icons/FontAwesome5"
import { FormatService } from '../../services/FormatService';

export default class StatisticalBasic extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            img: "../assets/icons8_average_2_75px.png"
        }
    }
    render() {


        return (
            <View style={[ myStyle.flex1]}>
                <View style={[myStyle.statisticalBasic, myStyle.row]}>
                    <View style={[myStyle.fullCeter, myStyle.row]}>
                        <View style={{ }}>
                            <Icon name={this.props.icon} size={35} color={this.props.color} />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 15 }}>
                            <View style={[myStyle.contentStatisticalBasic, myStyle.flex1]}>
                                <Text style={[{ color: color.inactive, fontSize: 12 }]}>{this.props.content}</Text>
                            </View>
                            <View style={[myStyle.contentStatisticalBasic, myStyle.flex1]}>
                                <Text style={[myStyle.colorWhite]}>{FormatService.roundingMoney(this.props.money)} COIN</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

type props = {
    icon: string,
    color: string,
    money: number,
    content: string
}
type state = {
    img: string
}