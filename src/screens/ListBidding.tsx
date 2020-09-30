import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "../components/bid/ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux"
import { BidService } from "../services/BidService";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { FormatService } from "../services/FormatService";
import { ScreenName } from "./ScreenName";
import { firebase } from "../config/FirebaseConfig";
import { useIsFocused } from "@react-navigation/native";


var autoReload: any;
var getThis: any;

class ListBidding extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      biddings: [],
      reload: true
    };
    getThis = this;


  }

  componentWillUnmount() {
    clearInterval(autoReload);
    this.setState({ biddings: [] })
  }

  componentDidMount() {
    firebase.firestore().collection("bidProduct")
      .onSnapshot((snapshot) => {

        snapshot.docChanges().forEach((change) => {
          if (change.type === "added" || change.type === "modified") {
            const bidProductChange = change.doc.data();
            let biddings = this.state.biddings;
            const bidIndex = biddings.findIndex(bidding => bidding._id == change.doc.id)
            if (bidIndex >= 0) {
              biddings[bidIndex].latestBidAt = new Date(bidProductChange.latestBidAt.seconds*1000);
              biddings[bidIndex].endPrice = bidProductChange.endPrice;
            }

            this.setState({
              biddings: biddings
            })
          }

        });
      });
      this.getListBidding();

    autoReload = setInterval(
      () => {
        this.setState({
          reload: !this.state.reload
        })
      },
      500
    );
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.isFocused) {
      this.getListBidding();
    }
  }

  getListBidding() {
    BidService.getListBidding().then((bidProducts: BidProduct[]) => {
      this.setState({
        biddings: bidProducts,
        reload: !this.state.reload
      })

    })
  }


  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.biddings}
          extraData={this.state}
          contentContainerStyle={myStyle.ListBidProduct}
          refreshing = {true}
          renderItem={({ item }) => {
            if (BidService.getTimeCountBid(item) >= 0) {

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
                  />
                </TouchableOpacity  >
              )
            }
            return (<div></div>)
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
  isFocused: boolean,
};
type state = {
  biddings: Array<BidProduct>;
  reload: boolean
};


export default function (props: Props) {
  return <ListBidding {...props} isFocused={useIsFocused()} />
}