import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import myStyle from "../style"
import ChartHome from '../components/ChartHome';
import ListStatisticalBasic from '../components/ListStatisticalBasic';
import ListHistoryInterest from '../components/ListHistoryInterest';
import { FlatList } from 'react-native-gesture-handler';
import HistoryInterest from '../components/HistoryInterest';
import { LendingProfitHistoryService } from '../services/LendingProfitHistoryService';
import { ProfitHistory } from '@StockAfiCore/model/lending/LendingProfitHistory';
import axios from 'axios'
import { UserService } from '../../src/services/UserService';

export default class Home extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }


        LendingProfitHistoryService.getLendingProfit().then(res => {
           
            this.setState({
                data:  res != undefined ? res.rows : []
            })
        })
    }

    render() {
        return (
            <ScrollView style={[myStyle.container]} showsVerticalScrollIndicator={false}>
                <View style={[myStyle.container]}>
                    <View style={[myStyle.charHome]}>
                        <ChartHome ></ChartHome>
                    </View>
                    <View style={myStyle.listStatisticalBasic}>
                        <ListStatisticalBasic></ListStatisticalBasic>
                    </View>

                    <View style={[]}>
                        <FlatList data={this.state.data}
                            renderItem={({ item }) =>
                                <HistoryInterest
                                    createAt={item.createdAt?.toString().substr(0,10) || 'null'}
                                    profits={item.profitAmount || 0}
                                    amount={item.loanAmount || 0}
                                    daysLeft={this.getDaysLeft(item.lending?.createdAt)}

                                />
                            }
                            keyExtractor={item => item._id || 'null'} />
                    </View>
                    

                </View>
            </ScrollView>
        )
    }

    getDaysLeft = (endDate: Date | undefined): number => {
        const currentDate: Date = new Date();
       
        
        if (endDate) {
           
            const daysLeft = Math.floor((-Date.parse(endDate.toString().substr(0,10)) + Date.parse(currentDate.toJSON().substr(0,10))) / (1000 * 60 * 60 * 24)
            )
            return daysLeft 
        }
        return 0
    }
}

type props = {

}
type state = {
    data: Array<ProfitHistory>
}