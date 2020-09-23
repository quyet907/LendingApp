import React, { Component } from 'react'
import { View, Text, Image, ColorPropType, StyleSheet } from "react-native"
import myStyle from "../../style";
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as color from '../../Color'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LendingService } from '../../services/LendingService';

export default class HistoryInterest extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: false
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
                                source={require("../../icons/icons8_up_26px.png")}
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
                            source={require("../../icons/icons8_right_26px.png")}
                        />
                        <Text style={[{ color: color.primary, }, myStyle.contentHistoryInterest]}>{this.props.amount + this.props.profits}</Text>
                    </View>

                    <View style={[myStyle.rightHistoryInterest]}>
                        <Text style={[{ color: color.secondary, fontSize: 16, }]}>
                            {this.props.daysLeft} days
                        </Text>
                    </View>

                    <View style={{ justifyContent: 'center', height: "100%" }}>
                        <TouchableOpacity
                            style={this.state.status ? styles.btnGot : styles.btnGet}
                            disabled={this.state.status}
                            onPress={() => {
                                this.setState({
                                    status: true
                                })
                                LendingService.getConfirmReceived(this.props._id)
                            }}
                        >
                            <Text style={{ color: 'black' }} >{this.state.status ? 'Got' : 'Get'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnGet: {
        backgroundColor: color.primary,
        paddingVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 18
    },
    btnGot: {
        backgroundColor: '#333',
        paddingVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 18
    }
})


type props = {
    _id: string,
    createAt: string,
    profits: number,
    amount: number,
    daysLeft: number
}
type state = {
    status: boolean
}