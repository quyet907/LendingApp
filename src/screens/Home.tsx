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
import { connect, useStore } from 'react-redux'

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

  componentWillReceiveProps(nextProps: Props) {
    
    if(this.props.confirmReload != nextProps.confirmReload || nextProps.isFocused){
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

            <ListHistoryInterest
              data={this.state.dataProfit} />

          </View>
        </View>
      </ScrollView>
    );
  }


}

type Props = {
  isFocused: boolean,
  Finance : Finance,
  confirmReload : any

};
type State = {
  dataProfit: ProfitHistory[],
  index: number,
  dataChart: any,
  dataFinance : Finance
};


const home = function (props: Props) {
  // const store = useStore()
  // const getStore = store.getState();
  // const getConfirmReload : boolean = getStore.Allreducer.reload
  const isFocused = useIsFocused();
  
  return <Home {...props} isFocused={isFocused} confirmReload = {props.confirmReload} />;
}

const mapStateToProps = (state : any, Props : any ) => {
  return {
      confirmReload : state.Allreducer.reload
  }
}

const mapDispatchToProps = (dispatch : any , ownProps:any) => {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(home)