import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import myStyle from "../style";
import Actions from "react-native-router-flux"
import * as color from "../Color"
export default class ProductBid extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[myStyle.productBid]}>
                <View>
                    <View style={[myStyle.frImgAndPrice]}>
                        <View style={[myStyle.frImgProdcurBid]}>
                            <Image
                                style={[myStyle.imgProductBid]}
                                source={{ uri: `${this.props.img}` }}
                            />
                        </View>
                        <View style={[myStyle.frPriceAndTime]}>
                            
                            <View style={[myStyle.frStatusAndTime]}>
                                <View>
                                    <Text style={[myStyle.statusProductBid]}>{this.props.status}</Text>
                                </View>
                                <View>
                                    <Text style={[myStyle.timeProductBid]}>{this.props.time}S</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[myStyle.priceProductBid]}>${this.props.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style = {[myStyle.frNameandDetailProductBid]}>
                        <Text style={[myStyle.nameProductBid]}>{this.props.name}</Text>
                        <Text style = {{color : color.inactive}}>This is human</Text>
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
