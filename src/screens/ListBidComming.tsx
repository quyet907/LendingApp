import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "../components/bid/ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux"
import { BidService } from "../services/BidService";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { ScreenName } from "./ScreenName";
import { config } from "../config/Config";
import { useIsFocused } from "@react-navigation/native";

var autoReload: any;
 class ListBidComming extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      bidCommings: [],
      reload: true,
    };

    this.getListComming();

  }

  componentWillUnmount() {
    // console.log("on wil unmount on list bid comming");

    clearInterval(autoReload);
    this.setState({
      bidCommings: []
    })
  }
  componentDidMount() {
    // this.getListComming();
    autoReload = setInterval(
      () => {
        this.setState({
          reload: !this.state.reload
        })
      },
      1000
    );
  }
  componentWillReceiveProps(nextProps: Props){
    if(nextProps.isFocused){
      this.getListComming();
    }
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
          extraData = {this.state.reload}
          contentContainerStyle={myStyle.ListBidProduct}
          renderItem={({ item }) => {
            if (BidService.getTimeCountBid(item)  > config.api.timeLimit) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate(ScreenName.BidProduct, {
                      bidProductId: item._id
                    });


                  }}
                >
                  <ProductBid
                    bidProduct={item}
                    reload={this.state.reload}
                  />
                </TouchableOpacity  >
              )
            } else {
              var index = this.state.bidCommings.indexOf(item);
              this.setState({
                bidCommings : this.state.bidCommings.splice(index, 1)
              })
            }

          }



          }
          keyExtractor={(item) => (item._id != undefined ? item._id : "null")}
        />
      </View>
    );
  }
}

type Props = {
  navigation: any,
  isFocused : boolean
};
type state = {
  bidCommings: BidProduct[],
  reload: boolean

};


export default function (props: Props) {
  console.log(useIsFocused())

  return <ListBidComming {...props} isFocused={useIsFocused()} />;
}

