import React, { Component } from 'react'
import {View, Image, Text} from "react-native";
import myStyle from "../style"
import StatisticalBasic from './StatisticalBasic';

export default class ListStatisticalBasic extends Component {
    render() {
        return (
            <View style = {[myStyle.container]}>

                <View style = {[myStyle.flex3,myStyle.row]}>
                    <StatisticalBasic></StatisticalBasic>
                    <StatisticalBasic></StatisticalBasic>

                </View>




                <View style={[myStyle.flex3,myStyle.row, myStyle.bg1]}>
                    <StatisticalBasic></StatisticalBasic>
                    <StatisticalBasic></StatisticalBasic>
                </View>

            </View>
        )
    }
}
