import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import myStyle from "../../style"
import { BidHistory } from '@StockAfiCore/model/bid/BidHistory'
import { MyFormat } from '../../Helper/MyFormat';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Icon from "react-native-vector-icons/FontAwesome5"
import * as color from "../../Color";
export default class BidderItem extends Component <props , state> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style = {this.props.firstBidder==this.props.bidder._id ?[myStyle.lastBidderItem] : [myStyle.bidderItem]}>
                <View>
                    {/* <Image
                        style={[myStyle.avtBidder]}
                        source={
                            { uri: "https://ds1.static.rtbf.be/article/image/370x208/f/1/5/8cedb6d8a46047b5725a91c8a33f6c6574bafb8c.jpg" }
                        }
                    /> */}
                    {/* <EmojiEmotionsIcon style={this.props.firstBidder == this.props.bidder._id ? {fill :color.primary} : {fill :color.background_primary} }></EmojiEmotionsIcon> */}
                    <Icon name = "chess-queen" size = {12} color = {this.props.firstBidder == this.props.bidder._id ? color.primary :  color.background_primary}></Icon>
                </View>
                <View style={{flex : 1, paddingHorizontal : 10}}>
            <Text style={[myStyle.textNameBidderItem]}>{this.props.bidder.user?.username}</Text>
                </View>

                <View style={[myStyle.priceBidderItem]}>
            <Text style={[myStyle.textPriceBidderItem]}>{MyFormat.roundingMoney(this.props.bidder.bidPrice||0)}</Text>
                </View>
            </View>
        )
    }
}

type props = {
    bidder : BidHistory,
    firstBidder : string
}
type state = {
    
}