import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import myStyle from "../style"
<<<<<<< HEAD
export default class BidderItem extends Component<props, state> {
=======
import { BidProductHistory } from '@StockAfiCore/model/bid/BidProductHistory'
export default class BidderItem extends Component <props , state> {
>>>>>>> e760a1d28785d651e6e9392be56230cae7e8abd8
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
<<<<<<< HEAD
            <View style={[myStyle.bidderItem]}>
                <View>
=======
            <View style = {[myStyle.bidderItem]}>
                {/* <View>
>>>>>>> e760a1d28785d651e6e9392be56230cae7e8abd8
                    <Image
                        style={[myStyle.avtBidder]}
                        source={
                            { uri: "https://ds1.static.rtbf.be/article/image/370x208/f/1/5/8cedb6d8a46047b5725a91c8a33f6c6574bafb8c.jpg" }
                        }
                    />
                </View> */}

<<<<<<< HEAD
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text style={[myStyle.textNameBidderItem]}>Hieu Ho</Text>
=======
                <View style={{flex : 1, paddingHorizontal : 10}}>
            <Text style={[myStyle.textNameBidderItem]}>{this.props.bidder.userId}</Text>
>>>>>>> e760a1d28785d651e6e9392be56230cae7e8abd8
                </View>

                <View style={[myStyle.priceBidderItem]}>
            <Text style={[myStyle.textPriceBidderItem]}>{this.props.bidder.bidPrice}</Text>
                </View>
            </View>
        )
    }
}

type props = {
<<<<<<< HEAD
    bidder: any
=======
    bidder : BidProductHistory
>>>>>>> e760a1d28785d651e6e9392be56230cae7e8abd8
}
type state = {

}