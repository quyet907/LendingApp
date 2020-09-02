import React, { Component } from "react";
import { View, FlatList } from "react-native";
import ProductBid from "./ProductBid";
import myStyle from "../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Actions } from "react-native-router-flux"
export default class ListBid extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
          {    
              id: "1",
              name : "Con gà",
              img : "https://vanluongg.github.io/vanluong/img/home/img-product/0.jpg",
              price : 400,
              status : "Doing",
              time :"10"
          },
          {
            id: "2",
            name : "Con heo",
            img : "https://vanluongg.github.io/vanluong/img/home/img-product/1.jpg",

            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id: "3",
            name : "Con vịt",
            img : "https://vanluongg.github.io/vanluong/img/home/img-product/2.jpg",
            price : 200,
            status : "Doing",
            time :"10"
        },
        {
            id: "4",
            name : "Con vượn",
            img : "https://vanluongg.github.io/vanluong/img/home/img-product/3.jpg",
            price : 100,
            status : "Doing",
            time :"10"
        },
        {
            id : "6",
            name : "Con khỉ",
            img : "https://vanluongg.github.io/vanluong/img/home/img-product/4.jpg",
            price : 1000,
            status : "Doing",
            time :"10"
        },
        {
            id: "5",
            name : "Con sư tử",
            img : "https://vanluongg.github.io/vanluong/img/home/img-product/5.jpg",
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
              onPress={()=>{
                Actions.bid()
              }}
            >
            <ProductBid 
            name = {item.name}
            img = {item.img}
            price = {item.price}
            status = {item.status}
            time = {item.time}
          />
          </TouchableOpacity  >

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
