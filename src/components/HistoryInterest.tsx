import React, { Component } from 'react'
import { View, Text, Image, ColorPropType } from "react-native"
import myStyle from "../style";
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as color from '../Color'

export default class HistoryInterest extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <View style={myStyle.HistoryInterest}>
                <View style={[myStyle.row]}>
                    <View style={[myStyle.leftHistoryInterest]}>
                        <View style={[myStyle.row]}>
                            <Icon name="access-time" size={11} color='#575959' />
                            <Text style={[{ color: color.inactive, fontSize: 10 }]}>
                                {this.props.createAt}
                            </Text>
                        </View>

                        <View style={[myStyle.row, { marginTop: 10 }]}>
                            <Image
                                style={[myStyle.iconHistoryInterest]}
                                source={require("../icons/icons8_up_26px.png")}
                            />

                            <Text style={[myStyle.contentHistoryInterest, { color: color.success, alignSelf: "center", justifyContent: "center", marginLeft: 10 },]}>{this.props.profits}</Text>


                        </View>
                    </View>

                    <View style={[myStyle.row, myStyle.centerHistoryInterest]}>
                        <Text style={[{ color: color.inactive }, myStyle.contentHistoryInterest]}>
                            {this.props.amount}
                        </Text>
                        <Image
                            style={[myStyle.iconHistoryInterest, { margin: 10 }]}
                            source={require("../icons/icons8_right_26px.png")}
                        />
                        <Text style={[{ color: color.primary, }, myStyle.contentHistoryInterest]}>{this.props.amount + this.props.profits}</Text>
                    </View>

                    <View style={[myStyle.rightHistoryInterest]}>
                        <Text style={[{ color: color.secondary, fontSize: 16, }]}>
                            {this.props.daysLeft} days
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

type props = {
    createAt: string,
    profits: number,
    amount: number,
    daysLeft: number

}
type state = {

}