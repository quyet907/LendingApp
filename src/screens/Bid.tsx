import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import myStyle from "../style"
import Carousel from 'react-native-snap-carousel';
import ListBidder from '../components/bid/ListBidder';
import * as color from "../Color"
import { BidProduct } from '@StockAfiCore/model/bid/BidProduct';
import { BidService } from '../services/BidService';
import { Product } from '@StockAfiCore/model/product/Product';
import { BidHistory } from '@StockAfiCore/model/bid/BidHistory';
import { Paging } from '@Core/controller/Paging';
import { FormatService } from '../services/FormatService';
import { firebase } from "../../FirebaseConfig";
import { BaseUser } from '@Core/model/user/BaseUser';

// pageBid.render();
var timeahihi;
var bidProductId = "";
class Bid extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            bidProduct: {},
            timeBid: 10,

        }

        bidProductId = this.props.route.params.bidProductId;
    }

    listenOnChange() {
        var copyBidProduct: BidProduct = this.state.bidProduct;
        var fireStoreFirebase = firebase.firestore();
        var getBidProductFirebase = fireStoreFirebase.collection("bidProduct").doc(bidProductId);
        var self = this;
        getBidProductFirebase.onSnapshot({
            includeMetadataChanges: true
        }, function (doc) {
            if (doc) {
                var firebaseBidProduct = doc.data();
                if (firebaseBidProduct) {
                    copyBidProduct.endPrice = firebaseBidProduct.endPrice;
                    let checkUniqueHistory = copyBidProduct?.listHistoryBid?.find((index) => index._id == firebaseBidProduct?.lastHistoryId)
                    if (!checkUniqueHistory) {
                        var createObjectBidHistory: BidHistory = {};
                        var createUser: BaseUser = {
                            username: firebaseBidProduct.latestBidUser
                        };
                        createObjectBidHistory.user = createUser;
                        createObjectBidHistory._id = firebaseBidProduct.lastHistoryId;
                        createObjectBidHistory.bidPrice = copyBidProduct.stepPrice;
                        copyBidProduct.listHistoryBid?.unshift(createObjectBidHistory);
                    }
                    if (firebaseBidProduct.latestBidAt) {
                        copyBidProduct.latestBidAt = new Date(firebaseBidProduct.latestBidAt.seconds * 1000);
                    }
                    self.renderDataBid(copyBidProduct);
                }
            }

        });
    }


    componentDidMount() {
        BidService.getBidInfo(bidProductId).then((bidProduct: BidProduct) => {
            bidProduct.listHistoryBid?.reverse();
            this.renderDataBid(bidProduct);
            this.listenOnChange();
        })

        timeahihi = setInterval(
            () => {
                this.setState({
                    timeBid: BidService.getTimeCountBid(this.state.bidProduct),
                })
            },
            500
        );
    }



    renderDataBid(bidProduct: BidProduct) {
        this.setState({
            bidProduct: bidProduct,
        })
    }



    render() {
        return (
            <View style={[myStyle.containerLight]}>
                {/* <View style={[myStyle.btnCloseBid]}>
                    <TouchableOpacity style={[]}
                        onPress={() => {
                            Actions.home();
                        }}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={[{ alignItems: "center" }]}>

                    <Carousel
                        layout={'tinder'}
                        style={[]}
                        data={this.state?.bidProduct?.product?.thumbImagesUrl}

                        renderItem={(item: any) => {
                            return (
                                <View style={[myStyle.frImgProdcurBid, { height: 300 }]}>
                                    <Image
                                        style={[myStyle.imgProductBid]}
                                        source={{ uri: `${item.item}` }}
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
                                {FormatService.roundingMoney(BidService.getPriceBidProduct(this.state.bidProduct))}</Text>
                            <Text style={{ color: color.inactive, textDecorationLine : "line-through" }}>{FormatService.roundingMoney(this.state.bidProduct.startPrice||0)}</Text>
                        </View>
                    </View>
                </View>

                <View style={[myStyle.nameProductPageBid]}>
                    <Text style={{ fontSize: 20, color: color.text, fontWeight: "500" }}>{`${BidService.getNameBidProduct(this.state.bidProduct)}`}</Text>
                </View>


                <View style={[myStyle.frListBidder]}>
                    <Text style={[myStyle.headerBidder]}>Bidder</Text>
                    <ListBidder
                        bidders={this.state?.bidProduct?.listHistoryBid || []}
                    ></ListBidder>
                </View>

                <View
                    style={[myStyle.frButtonBid]}
                >
                    <TouchableOpacity
                        style={BidService.checkBidding(this.state.timeBid) ? [myStyle.buttonBid] : [myStyle.buttonBid, myStyle.ButtonBidDisabled]}
                        onPress={(event) => {
                            BidService.BidAction(bidProductId)
                        }}
                        disabled={!BidService.checkBidding(this.state.timeBid)}
                    >
                        <Text
                            style={[myStyle.btnSmall]}
                        >{BidService.changeTextButton(this.state.bidProduct)}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

type props = {
    route: any
}

type state = {
    bidProduct: BidProduct
    timeBid: number,
}

export default function (props: any) {
    return <Bid {...props} />;
}