import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "../components/bid/ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import { BidService } from "../services/BidService";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { ScreenName } from "./ScreenName";
import { config } from "../config/Config";
import { useIsFocused } from "@react-navigation/native";
import { ListItemText } from "@material-ui/core";
import ProductBidHistory from "../components/bid/ProductBidHistory";

var autoReload: any;
class ListHistoryBid extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      bidProducts: [],
      reload: true,
    };

    this.getListBidHistory();
  }

  componentWillUnmount() {
    clearInterval(autoReload);
    this.setState({
      bidProducts: [],
    });
  }
  componentDidMount() {
    // this.getListComming();
    autoReload = setInterval(() => {
      this.setState({
        reload: !this.state.reload,
      });
    }, 1000);
  }
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isFocused) {
      this.getListBidHistory();
    }
  }

  getListBidHistory() {
    BidService.getListBidHistory().then((bidProducts: BidProduct[]) => {
      this.setState({
        bidProducts: bidProducts,
      });
    });
  }

  render() {
    const bidProducts = this.state.bidProducts;
    console.log(bidProducts?.length);
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={bidProducts}
          extraData={this.state.reload}
          contentContainerStyle={myStyle.ListBidProduct}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(ScreenName.BidProduct, {
                    bidProductId: item._id,
                  });
                }}
              >
                <ProductBidHistory bidProduct={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => (item._id != undefined ? item._id : "null")}
        />
      </View>
    );
  }
}

type Props = {
  navigation: any;
  isFocused: boolean;
};
type state = {
  bidProducts: BidProduct[];
  reload: boolean;
};

export default function (props: Props) {
  return <ListHistoryBid {...props} isFocused={useIsFocused()} />;
}
