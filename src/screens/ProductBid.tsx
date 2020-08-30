import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import myStyle from "../style";
import Actions from "react-native-router-flux"

export default class ProductBid extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[myStyle.productBid]}
                
            >
                <View style = {[myStyle.frImgProdcurBid]}>
                    <Image
                        style={[myStyle.imgProductBid]}
                        source={{ uri: `${this.props.img}` }}
                    />
                </View>
                <View>
                    <View>
                        <Text style={[myStyle.nameProductBid]}>{this.props.name}</Text>
                    </View>
                    <View>
                        <Text style={[myStyle.priceProductBid]}>{this.props.price} VND</Text>
                    </View>
                    <View style={[myStyle.row]}>
                        <View>
                            <Text style={[myStyle.statusProductBid]}>{this.props.status}</Text>
                        </View>
                        <View>
                            <Text style={[myStyle.timeProductBid]}>: {this.props.time}S</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
type props = {
    name: string;
    img: string;
    price: number;
    status: string;
    time: string;
};
type state = {};
