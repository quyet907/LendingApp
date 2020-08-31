import React, { Component } from 'react'
import {View, Image, Text, ColorPropType} from "react-native";
import myStyle from "../style"
import StatisticalBasic from './StatisticalBasic';
import { Income } from '@StockAfiCore/model/lending/Income';
import { IncomeService } from '../services/IncomeService';
import { Finance } from '@StockAfiCore/model/lending/Finance';
import * as color from '../Color'
export default class ListStatisticalBasic extends Component<props, state> {
    constructor(props:any){
        super(props)
        this.state = {
            dataFinance : {}
        }

    }

    componentDidMount(){
        IncomeService.getFinance().then(res =>{
            this.setState({
                dataFinance : res
            })
        })

        
    }

    render() {
        
        return (

            <View style = {[myStyle.listStatisticalBasic]}>
                {/* FontAwesome5 */}
                <View style = {[myStyle.row]}>
                    <StatisticalBasic
                        icon = "coins"
                        color = "#FB8C00"
                        content = {"Total"}
                        money = {this.state.dataFinance.totalAmount || 0}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        icon = "piggy-bank"
                        color = {color.success}
                        content = {"Invested"}
                        money = {this.state.dataFinance.investedAmout || 0}
                    ></StatisticalBasic>

                </View>
                <View style={[myStyle.row]}>
                    <StatisticalBasic
                        icon = "star"
                        color = "#4FC3F7"
                        content = {"Referal Income"}
                        money = {this.state.dataFinance.referalIncomeAmout || 0}
                    ></StatisticalBasic>
                    <StatisticalBasic
                       icon = "wallet"
                        color = "#FC3135"
                        content = {"Remain"}
                        money = {this.state.dataFinance.remainAmount || 0}
                    ></StatisticalBasic>
                </View>

            </View>
        )
    }
}

type props ={

}

type state = {
    dataFinance : Finance
}
