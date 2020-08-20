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


export default class Home extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
        LendingProfitHistoryService.getLendingProfit().then(res => {
            console.log(res.rows)
            this.setState({
                data: res.rows
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
                    <View style={[]}>
                        <FlatList data={this.state.data}
                            renderItem={({ item }) =>
                                <HistoryInterest
                                    createAt={item.createdAt?.toString().substr(0,10) || 'null'}
                                    profits={item.profitAmount || 0}
                                    amount={item.loanAmount || 0}
                                    daysLeft={26}

                                />
                            }
                            keyExtractor={item => item._id || 'null'} />
                    </View>
                    <View style={[]}>
                        <ListHistoryInterest></ListHistoryInterest>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

type props = {

}
type state = {
    data: Array<ProfitHistory>
}