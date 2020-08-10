import React, { Component } from 'react'
import {View, Image, Text} from "react-native";
import myStyle from "../style"
import StatisticalBasic from './StatisticalBasic';

export default class ListStatisticalBasic extends Component {
    render() {
        
        return (

            <View style = {[myStyle.container]}>

                <View style = {[myStyle.flex3,myStyle.row]}>
                    <StatisticalBasic
                        img  = {"../assets/icons8_average_2_75px.png"}
                        content = {"Tổng Tiền"}
                        money = {"200,000"}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        img  = {"../assets/icons8_transaction_70px_2.png"}
                        content = {"Đầu tư"}
                        money = {"100,000"}
                    ></StatisticalBasic>

                </View>




                <View style={[myStyle.flex3,myStyle.row, myStyle.bg1]}>
                    <StatisticalBasic
                        img  = {"../assets/icons8_rating_70px.png"}
                        content = {"Giới thiệu"}
                        money = {"150,000"}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        img  = {"../assets/icons8_wallet_70px.png"}
                        content = {"Số dư"}
                        money = {"140,000"}
                    ></StatisticalBasic>
                </View>

            </View>
        )
    }
}
