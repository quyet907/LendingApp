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
import { firebase } from "../../FirebaseConfig"
export default class ListBidding extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      listBidding: []
    };

    this.getListBidding();
  }



  componentDidMount() {
    // setInterval(
    //   () => {
    //     FormatService.testComponet();
    //     if(new Date().getSeconds()%3==0){
    //       this.getListBidding()
    //     }
    //   },
    //   1000
    // );

    // firebase.firestore().collection("bidProduct").onSnapshot((snapshot) => {
    //   let bid: any[] = [];
    //   querySnapshot.forEach((doc) => {
    //     let bidProduct = doc.data();
    //     bidProduct.id = doc.id;
    //     bid.push(bidProduct)
    //   });
    //   Math.max.apply(Math, bid.map((o) => {
    //     console.log(o);

    //     return o
    //   }))
    //   console.log(bid);

    // });

    firebase.firestore().collection("bidProduct").onSnapshot((snapshot)=> {
        snapshot.docChanges().forEach((change)=> {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });

  }

  getListBidding() {
    BidService.getListBidding().then((bidProducts: BidProduct[]) => {
      this.setState({
        listBidding: bidProducts
      }, () => console.log(this.state.listBidding))
    })
  }


  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.listBidding}
          contentContainerStyle={myStyle.ListBidProduct}
          renderItem={({ item }) =>
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
  listBidding: BidProduct[];
};


