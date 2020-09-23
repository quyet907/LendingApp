import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import myStyle from "../style";
import ChartHome from "../components/home/ChartHome";
import ListStatisticalBasic from "../components/home/ListStatisticalBasic";
import ListHistoryInterest from "../components/home/ListHistoryInterest";
import { FlatList } from "react-native-gesture-handler";
import HistoryInterest from "../components/home/HistoryInterest";
import { ProfitHistory } from "@StockAfiCore/model/lending/LendingProfitHistory";
import axios from "axios";
import { UserService } from "../../src/services/UserService";
import { IncomeService } from "../services/IncomeService";
import { Finance } from "@StockAfiCore/model/lending/Finance";
import { useIsFocused } from "@react-navigation/native";
import Lending from "./Lending";
import { LendingService } from "../services/LendingService";
import { Income } from "@StockAfiCore/model/lending/Income";
import { Paging } from "@Core/controller/Paging";
// import { Income } from "@StockAfiCore/model/lending/Income";
var uuid = require('react-native-uuid');
class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataProfit: [],
      index: 0,
      dataChart: [],
      dataFinance: {}
    };

  }

  componentDidMount() {
    this.getData();
  };

  componentWillReceiveProps(previousProps: Props) {
    if (previousProps.isFocused) {
      this.getData();

    }
  }


  

  async getData() {
    let getDataFinance : Finance= await IncomeService.getFinance()

    let getDataChart: any = await IncomeService.getListCharIncome()

    let getDataLendingProfit: Paging<ProfitHistory> = await LendingService.getLendingProfit()

    this.setState({
      dataProfit : getDataLendingProfit ? getDataLendingProfit.rows : [],
      dataFinance : getDataFinance ? getDataFinance:{} ,
      dataChart : getDataChart ? getDataChart :[]


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
              data={this.state.dataProfit}
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
  dataProfit: ProfitHistory[],
  index: number,
  dataChart: any,
  dataFinance: Finance
};


export default function (props: Props) {
  const isFocused = useIsFocused();

  return <Home {...props} isFocused={isFocused} />;
}