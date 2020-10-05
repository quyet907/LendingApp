import React, { Component } from 'react'
import {View, Image, Text, ColorPropType} from "react-native";
import myStyle from "../../style"
import StatisticalBasic from './StatisticalBasic';
import { Finance } from '@StockAfiCore/model/lending/Finance';
import * as color from '../../Color';
import I18n from '../../i18n/i18n';
export default class ListStatisticalBasic extends Component<Props, State> {
    constructor(props:any){
        super(props)
        this.state = {
            dataFinance : {}
        }

    }

    componentDidMount(){
        

        
    }

    render() {
        
        return (

            <View style = {[myStyle.listStatisticalBasic]}>
                {/* FontAwesome5 */}
                <View style = {[myStyle.row, {width: "100%"}]}>
                    <StatisticalBasic
                        icon = "coins"
                        color = "#FB8C00"
                        content = {I18n.t('screens.dashboard.finance.total')}
                        money = {this.props.dataFinance.totalAmount || 0}
                    ></StatisticalBasic>
                    <StatisticalBasic
                        icon = "piggy-bank"
                        color = {color.success}
                        content = {I18n.t('screens.dashboard.finance.lending')}
                        money = {this.props.dataFinance.investedAmout || 0}
                    ></StatisticalBasic>

                </View>
                <View style={[myStyle.row, {width: "100%"}]}>
                   
                    <StatisticalBasic
                       icon = "wallet"
                        color = "#FC3135"
                        content = {I18n.t('screens.dashboard.finance.remaining')}
                        money = {this.props.dataFinance.remainAmount || 0}
                    ></StatisticalBasic>
                     <StatisticalBasic
                        icon = "star"
                        color = "#4FC3F7"
                        content = {I18n.t('screens.dashboard.finance.referral')}
                        money = {this.props.dataFinance.referalIncomeAmout || 0}
                    ></StatisticalBasic>
                </View>

            </View>
        )
    }
}

type Props ={
    dataFinance : Finance
}

type State = {
    
}
