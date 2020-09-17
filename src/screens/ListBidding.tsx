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
import { firebase } from "../../FirebaseConfig";
import { useIsFocused } from "@react-navigation/native";


var autoReload: any;
class ListBidding extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      biddings: [],
      reload: true
    };

    this.getListBidding();
  }




  componentWillUnmount() {
    // console.log("on wil unmount on list bidding");
    clearInterval(autoReload);
    this.setState({ biddings: [] })
  }

  componentDidMount() {

    firebase.firestore().collection("bidProduct")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docChanges().length);

        snapshot.docChanges().forEach((change) => {
          if (change.type === "added" || change.type === "modified") {
              // console.log("New: ", change.doc.data());
            const bidProductChange = change.doc.data();
            console.log("Modified: ", bidProductChange);
            let biddings = [...this.state.biddings];
            
            
            const bidIndex = biddings.findIndex(bidding => bidding._id == change.doc.id)
            if (bidIndex >= 0){
              biddings[bidIndex].latestBidAt = new Date(bidProductChange.latestBidAt.seconds);
              console.log(biddings[bidIndex]);
            }

            this.setState({
              biddings: biddings
            })
            

            // let newList = listBidding.map
            // this.setState({biddings: this.state.biddings.map(bd)})
          }
          // if (change.type === "removed") {
          //     console.log("Removed: ", change.doc.data());
          // }
        });
      });
    // this.getListBidding()
    // autoReload = setInterval(
    //   () => {
    //     this.setState({
    //       reload: !this.state.reload
    //     })

    //   },
    //   500
    // );
  }
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.isFocused) {
      this.getListBidding();
    }
  }

  getListBidding() {
    BidService.getListBidding().then((bidProducts: BidProduct[]) => {
      this.setState({
        biddings: bidProducts
      })

    })
  }


  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.biddings}
          extraData={this.state.reload}
          contentContainerStyle={myStyle.ListBidProduct}
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
                    reload={this.state.reload}
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
  console.log(useIsFocused())
  return <ListBidding {...props} isFocused={useIsFocused()} />
}