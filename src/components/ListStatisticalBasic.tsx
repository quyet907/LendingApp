import React, { Component } from 'react'
import {View, Image, Text} from "react-native";
import myStyle from "../style"
import StatisticalBasic from './StatisticalBasic';
import { Income } from '@StockAfiCore/model/lending/Income';
import { IncomeService } from '../services/IncomeService';
import { Finance } from '@StockAfiCore/model/lending/Finance';

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

                <View style = {[myStyle.row]}>
                    <StatisticalBasic
                        img  = {"../assets/icons8_average_2_75px.png"}
                        content = {"Tổng Tiền"}
                        money = {this.state.dataFinance.totalAmount || 0}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        img  = {"../assets/icons8_transaction_70px_2.png"}
                        content = {"Đầu tư"}
                        money = {this.state.dataFinance.investedAmout || 0}
                    ></StatisticalBasic>

                </View>
                <View style={[myStyle.row]}>
                    <StatisticalBasic
                        img  = {"../assets/icons8_rating_70px.png"}
                        content = {"Giới thiệu"}
                        money = {this.state.dataFinance.referalIncomeAmout || 0}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        img  = {"../assets/icons8_wallet_70px.png"}
                        content = {"Số dư"}
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
