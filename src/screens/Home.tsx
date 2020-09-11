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
import { IncomeService } from "../services/IncomeService";
import { Finance } from "@StockAfiCore/model/lending/Finance";
import { useIsFocused } from "@react-navigation/native";
// import { Income } from "@StockAfiCore/model/lending/Income";
var uuid = require('react-native-uuid');
class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      index: 0,
      dataChart: [],
      dataFinance: {}
    };

  }

  componentDidMount() {
    this.getDataChart();
      this.getDataFinance();
      this.getDataProfit()
  };

  componentWillReceiveProps(previousProps: Props) {
    if (previousProps.isFocused) {
      this.getDataChart();
      this.getDataFinance();
      this.getDataProfit()
    }
  }


  getDataProfit() {
    LendingProfitHistoryService.getLendingProfit().then((res) => {
      this.setState(
        {
          data: res != undefined ? res.rows : [],
        }
      );
    });
  };

  getDataChart() {
    IncomeService.getListCharIncome().then((incomes: any) => {
      console.log(incomes);
      if (incomes != undefined) {

        this.setState({
          dataChart: incomes
        })
      }

    })
  }

  getDataFinance() {
    IncomeService.getFinance().then((finance: Finance) => {
      this.setState({
        dataFinance: finance
      })
    })
  };

  render() {
    return (
      <ScrollView
        style={[myStyle.container]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[myStyle.container]}>
          <View style={[myStyle.charHome]}>
            <ChartHome
              dataChart={this.state.dataChart}
            ></ChartHome>
          </View>
          <View style={myStyle.listStatisticalBasic}>
            <ListStatisticalBasic
              dataFinance={this.state.dataFinance}
            ></ListStatisticalBasic>
          </View>

          <View>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <HistoryInterest
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
        </View>
      </ScrollView>
    );
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

type Props = {
  isFocused: boolean

};
type State = {
  data: ProfitHistory[],
  index: number,
  dataChart: any,
  dataFinance: Finance
};


export default function (props: Props) {
  const isFocused = useIsFocused();

  return <Home {...props} isFocused={isFocused} />;
}