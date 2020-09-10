import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import myStyle from "../style"
import Carousel from 'react-native-snap-carousel';
import ListBidder from '../components/ListBidder';
import * as color from "../Color"
import { Actions } from "react-native-router-flux"
import { BidProduct } from '@StockAfiCore/model/bid/BidProduct';
import { BidService } from '../services/BidService';
import { Product } from '@StockAfiCore/model/product/Product';
import { BidProductHistory } from '@StockAfiCore/model/bid/BidProductHistory';
import { BidProductHistoryService } from '../services/BidProductHistoryService';
import { Paging } from '@Core/controller/Paging';
import { FormatService } from '../services/FormatService';

var bidProductId = "";
export default class Bid extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            product: {},
            bidProduct: {},
            bidders: [],
            timeBid: 10,
            priceBid: 0,

        }
        console.log(this.props);
        bidProductId = this.props.data;
        BidService.getBidInfo(bidProductId).then((bidProduct: BidProduct) => {
            this.renderDataBid(bidProduct);

            

        })

    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    timeBid: this.state.timeBid - 1,
                })
            },
            1000
        );

        // BidProductHistoryService.getListById(bidProductId)
        //     .then((listBidder: BidProductHistory[]) => {
        //         console.log(listBidder);
        //         if (listBidder) {
        //             let list: Array<BidProductHistory> = listBidder;
        //             this.setState({
        //                 bidders: list
        //             })
        //         }
        //     })

        

    }

    renderDataBid(bidProduct : BidProduct) {
        

        this.setState({
            bidProduct: bidProduct,
            product: bidProduct.product || {},
            bidders: bidProduct.listHistoryBid || []
        })
        let calcTime: number = 0;
        if (bidProduct.latestBidAt) {
            calcTime = BidService.calcTime(bidProduct.latestBidAt)
        } else if (bidProduct.startBidAt) {
            calcTime = BidService.calcTime(bidProduct.startBidAt)
        }

        this.setState({
            timeBid: calcTime,
            priceBid: bidProduct.endPrice || bidProduct.startPrice || 0
        })

        
    }

    render() {
        return (
            <View style={[myStyle.containerLight]}>
                <View style={[myStyle.btnCloseBid]}>
                    <TouchableOpacity style={[]}
                        onPress={() => {
                            Actions.home();
                        }}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ alignItems: "center" }]}>

                    <Carousel
                        layout={'tinder'}
                        style={[]}
                        data={this.state.product.thumbImagesUrl}

                        renderItem={({ item }) => {
                            return (
                                <View style={[myStyle.frImgProdcurBid, { height: 300 }]}>
                                    <Image
                                        style={[myStyle.imgProductBid]}
                                        source={{ uri: `${item}` }}
                                    />
                                </View>
                            )
                        }}
                        sliderWidth={window.innerWidth}
                        itemWidth={window.innerWidth}
                    />

                    <View style={[myStyle.frPriceAndTimePageBid]}>
                        <View style={[myStyle.childFrPriceAndTimePageBid]}>
                            <Text style={{ color: color.warning, fontWeight: "bold", fontSize: 20, }}>{BidService.changeTextTime(this.state.timeBid)}</Text>
                            <Text style={{ color: color.inactive }}>{BidService.changeTextStatus(this.state.timeBid)}</Text>
                        </View>
                        <View style={[myStyle.childFrPriceAndTimePageBid]}>
                            <Text style={{ color: color.text_primary, fontWeight: "bold", fontSize: 20, }}>
                                {FormatService.roundingMoney(this.state.priceBid)}</Text>
                            <Text style={{ color: color.inactive }}>Price bid</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.nameProductPageBid]}>
                    <Text style={{ fontSize: 20, color: color.text, fontWeight: "500" }}>{`${this.state.product.name}`}</Text>
                </View>


                <View style={[myStyle.frListBidder]}>
                    <Text style={[myStyle.headerBidder]}>Bidder</Text>
                    <ListBidder
                        bidders={this.state.bidders}
                    ></ListBidder>
                </View>

                <View
                    style={BidService.checkBidding(this.state.timeBid) ? [myStyle.frButtonBid] : { display: "none" }}
                >
                    <TouchableOpacity
                        style={[myStyle.buttonBid]}
                        onPress={(event) => {
                            BidService.BidAction(bidProductId).then((bidProduct: BidProduct) => {
                                this.renderDataBid(bidProduct);
                            })
                        }}
                    >
                        <Text
                            style={[myStyle.btnSmall]}
                        >{BidService.changeTextButton(this.state.timeBid)}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

type props = {
}

type state = {
    bidProduct: BidProduct
    product: Product
    bidders: Array<BidProductHistory>
    timeBid: number,
    priceBid: number
}