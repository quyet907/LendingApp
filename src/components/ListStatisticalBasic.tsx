import React, { Component } from 'react'
import {View, Image, Text} from "react-native";
import myStyle from "../style"
import StatisticalBasic from './StatisticalBasic';
import { Income } from '@StockAfiCore/model/lending/Income';
import { IncomeService } from '../services/IncomeService';

export default class ListStatisticalBasic extends Component<props, state> {
    constructor(props:any){
        super(props)
        this.state = {
            dataIncomLeding : {},
            dataIncomReferal : {},
            dataIncomSurplus : {},
            dataIncomTotal : {}
        }

    }

    componentDidMount(){
        IncomeService.getListCharIncome().then(res =>{
            this.setState({

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
                        money = {"200,000"}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        img  = {"../assets/icons8_transaction_70px_2.png"}
                        content = {"Đầu tư"}
                        money = {"100,000"}
                    ></StatisticalBasic>

                </View>




                <View style={[myStyle.row]}>
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

type props ={

}

type state = {
    dataIncomTotal : Income
    dataIncomLeding : Income
    dataIncomReferal : Income
    dataIncomSurplus : Income
}
