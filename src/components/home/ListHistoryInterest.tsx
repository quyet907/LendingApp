import React, { Component } from 'react'
import { View } from 'react-native'
import HistoryInterest from './HistoryInterest'
import myStyle from "../../style"
import { FlatList } from 'react-native-gesture-handler';
import { ProfitHistory } from '@StockAfiCore/model/lending/LendingProfitHistory';
import uuid from 'uuid';
export default class ListHistoryInterest extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
  
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <View >

                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => (
                        <HistoryInterest
                            _id={item._id || uuid.v4()}
                            createAt={item.createdAt?.toString().substr(0, 10) || "undefined"}
                            profits={item.profitAmount || 0}
                            amount={item.loanAmount || 0}
                            daysLeft={this.getDaysLeft(
                                item.lending ? item.lending.endAt : undefined, item.makeProfitAt
                            )}
                        />
                    )}
                    keyExtractor={(item) => item._id || uuid.v4()}
                />
            </View>
        )
    }

    getDaysLeft = (endAt: Date | undefined, makeAt: Date | undefined): number => {
        const secondCurrent = Date.now();
    
        if (endAt && makeAt) {
          const leftSecond = Date.parse(endAt.toString()) - Date.parse(makeAt.toString());
          const daysLeft = Math.ceil(
            leftSecond / (1000 * 60 * 60 * 24)
          );
          return daysLeft;
        }
        return 0;
      };
}

type props = {
    data: ProfitHistory[];
}
type state = {

}