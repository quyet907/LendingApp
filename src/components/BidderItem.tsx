import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import myStyle from "../style"
import { BidProductHistory } from '@StockAfiCore/model/bid/BidProductHistory'
export default class BidderItem extends Component <props , state> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style = {[myStyle.bidderItem]}>
                {/* <View>
                    <Image
                        style = {[myStyle.avtBidder]}
                        source ={
                            {uri : "https://ds1.static.rtbf.be/article/image/370x208/f/1/5/8cedb6d8a46047b5725a91c8a33f6c6574bafb8c.jpg"}
                        }
                    />
                </View> */}

                <View style={{flex : 1, paddingHorizontal : 10}}>
            <Text style={[myStyle.textNameBidderItem]}>{this.props.bidder.userId}</Text>
                </View>

                <View style={[myStyle.priceBidderItem]}>
            <Text style={[myStyle.textPriceBidderItem]}>{this.props.bidder.bidPrice}</Text>
                </View>
            </View>
        )
    }
}

type props = {
    bidder : BidProductHistory
}
type state = {

}