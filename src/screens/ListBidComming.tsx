import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "../components/bid/ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux"
import { BidService } from "../services/BidService";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
var autoReload :any;
export default class ListBidComming extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      bidCommings: []
    };

    this.getListComming();

  }

  componentWillUnmount(){
    // console.log("on wil unmount on list bid comming");
    
    clearInterval(autoReload);
    this.setState({
      bidCommings : []
    })
  }
  componentDidMount() {
    autoReload = setInterval(
      () => {
        // console.log("on run auto reload comming");
        if(new Date().getSeconds()%3==0){
          this.getListComming()
        }
      },
      1000
    );
  }

  getListComming() {
    BidService.getListBidComming().then((bidProducts: BidProduct[]) => {
      this.setState({
        bidCommings: bidProducts
      })
    })
  }




  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.bidCommings}
          contentContainerStyle={myStyle.ListBidProduct}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("bid", {
                  productId: item.id,
                });
              }}
            >
              <ProductBid
                bidProduct={item}
                // time={BidService.calcTime(item.startBidAt || new Date)}
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
  navigation: any
};
type state = {
  bidCommings: BidProduct[];
};


