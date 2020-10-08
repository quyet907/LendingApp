import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import myStyle from "../../style"
import BidderItem from './BidderItem'
import { BidHistory } from '@StockAfiCore/model/bid/BidHistory'
export default class ListBidder extends Component<props, state> {
    constructor(props: any) {
        super(props),
            this.state = {
                firstBidder: "",

            }
    }
    componentDidUpdate() {
        
    }
    render() {
        return (
            <View style={[]}>
                <FlatList
                    data={this.props.bidders}
                    extraData = {this.props}
                    renderItem={({ item }) => {

                        return (
                            <BidderItem
                                firstBidder={this.props.bidders[0]._id || ""}
                                bidder={item}
                            ></BidderItem>

                        )
                    }}
                    keyExtractor={(item) => item._id != undefined ? item._id : "null"}
                />
            </View>
        )
    }
}

type props = {
    bidders: Array<BidHistory>
}
type state = {
    firstBidder: string,
}
