import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import myStyle from "../style";
import ChartHome from "../components/ChartHome";
import ListStatisticalBasic from "../components/ListStatisticalBasic";
import ListHistoryInterest from "../components/ListHistoryInterest";
import { FlatList } from "react-native-gesture-handler";
import HistoryInterest from "../components/HistoryInterest";
import { LendingProfitHistoryService } from "../services/LendingProfitHistoryService";
import { ProfitHistory } from "@StockAfiCore/model/lending/LendingProfitHistory";
import axios from "axios";
import { UserService } from "../../src/services/UserService";

export default class Home extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    LendingProfitHistoryService.getLendingProfit().then((res) => {
      this.setState(
        {
          data: res != undefined ? res.rows : [],
        }
      );
    });
  }

  render() {
    return (
      <ScrollView
        style={[myStyle.container]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[myStyle.container]}>
          <View style={[myStyle.charHome]}>
            <ChartHome></ChartHome>
          </View>
          <View style={myStyle.listStatisticalBasic}>
            <ListStatisticalBasic></ListStatisticalBasic>
          </View>

          <View>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <HistoryInterest
                  createAt={item.createdAt?.toString().substr(0, 10) || "null"}
                  profits={item.profitAmount || 0}
                  amount={item.loanAmount || 0}
                  daysLeft={this.getDaysLeft(
                    item.lending ? item.lending.createdAt : undefined
                  )}
                />
              )}
              keyExtractor={(item) => item._id || "null"}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  getDaysLeft = (createAt: Date | undefined): number => {
    const secondCurrent = Date.now();

    if (createAt) {
      if (typeof createAt == "string") {
        createAt = new Date(createAt);
        const endDate = createAt.setMonth(createAt.getMonth() + 1);

        const daysLeft = Math.floor(
          (endDate - secondCurrent) / (1000 * 60 * 60 * 24)
        );


        return daysLeft;
      }
      //endDate.setMonth(endDate.getMonth()+1)
    }
    return 0;
  };
}

type props = {};
type state = {
  data: ProfitHistory[];
};
