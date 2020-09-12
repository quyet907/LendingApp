import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "../components/bid/ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Actions } from "react-native-router-flux"
import { BidService } from "../services/BidService";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { FormatService } from "../services/FormatService";
var autoReload:any;
export default class ListBidComming extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      biddings : []
    };

    this.getListBidding();

  }

  componentWillUnmount(){
    console.log("on wil unmount on list bidding");
    clearInterval(autoReload);
    this.setState({ biddings : []})
  }

  componentDidMount() {
    autoReload = setInterval(
      () => {
        console.log("on run auto reload bidding");
        FormatService.testComponet();
        if(new Date().getSeconds()%3==0){
          this.getListBidding()
        }
      },
      1000
    );
  }

  getListBidding(){
    BidService.getListBidding().then((bidProducts :BidProduct[] )=>{
      this.setState({
        biddings : bidProducts
      })
    })
  }


  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.biddings}
          contentContainerStyle = {myStyle.ListBidProduct}
          renderItem={({ item }) => 
            <TouchableOpacity
              onPress={()=>{
                Actions.bid(item._id);
              }}
            >
            <ProductBid 
              bidProduct = {item}
          />
          </TouchableOpacity  >

        }
          keyExtractor={(item) => (item._id != undefined ? item._id : "null")}
        />
      </View>
    );
  }
}

type props = {

};
type state = {
  biddings: Array<BidProduct>;
};


