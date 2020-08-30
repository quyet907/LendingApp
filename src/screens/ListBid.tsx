import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "./ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ListBid extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
          {    
              id: "1",
              name : "Con gà",
              img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
              price : 100,
              status : "Doing",
              time :"10"
          },
          {
            id: "2",
            name : "Con heo",
            img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",

            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id: "3",
            name : "Con vịt",
            img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id: "4",
            name : "Con vượn",
            img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id : "6",
            name : "Con khỉ",
            img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id: "5",
            name : "Con sư tử",
            img : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg",
            price : 100,
            status : "Doing",
            time :"10"
        }
      ],
    };
  }
  render() {
    return (
      <View style={myStyle.containerLight}>
        <FlatList
          data={this.state.data}
          contentContainerStyle = {myStyle.ListBidProduct}
          renderItem={({ item }) => 
          <TouchableOpacity
          style={[{padding: 10, flex:1 }]}
          >
            <ProductBid 
            name = {item.name}
            img = {item.img}
            price = {item.price}
            status = {item.status}
            time = {item.time}
          />
          </TouchableOpacity>  
        }
          keyExtractor={(item) => (item.id != undefined ? item.id : "null")}
        />
      </View>
    );
  }
}

type props = {};
type state = {
  data: Array<any>;
};
