import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import myStyle from "../../style";
import Actions from "react-native-router-flux"
import * as color from "../../Color"
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { BidService } from "../../services/BidService";
import { connect } from "react-redux";
import * as actionAll from "../../Action/ActionAll"
import store from "../../reducer/store"
import { FormatService } from "../../services/FormatService";
import { Product } from "@StockAfiCore/model/product/Product";
import { firebase } from "../../../FirebaseConfig";


var runTimeProductBid: any;
class ProductBid extends Component<Props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            img: "",
            price: 0,
            product: {}
        };
    }

    componentDidUnmount() {
        clearInterval(runTimeProductBid);
    }


    componentDidMount() {
        // console.log(this.props.navigation.getParam('id', 'default'));
        this.setValue();
        // runTimeProductBid=  setInterval(
        //     () => {
        //         // console.log("on run product bid");
        //         this.setState({
        //             timeCount: BidService.getTimeCountBid(this.props.bidProduct),
        //         })
        //     },
        //     500
        // );

    }
    componentWillReceiveProps(nextProps: Props) {
        if (!nextProps.bidProduct === this.props.bidProduct) {
            this.setValue();
        }

    }

    setValue() {
        if (this.props.bidProduct.product && this.props.bidProduct.product.thumbImagesUrl) {
            this.setState({
                img: this.props.bidProduct.product.thumbImagesUrl[0]
            })
        }
        let price: number = 0;
        if (this.props.bidProduct.endPrice) {
            price = this.props.bidProduct.endPrice;
        }
        else if (this.props.bidProduct.startPrice) {
            price = this.props.bidProduct.startPrice;
        }
        let product: Product = {}
        let img: string = "";

        if (this.props.bidProduct && this.props.bidProduct.product) {
            product = this.props.bidProduct.product
            if (product.thumbImagesUrl) {
                img = product.thumbImagesUrl[0] || "";
            }
        }
        
        this.onListenFirebase();
        this.setState({
            price: price,
            product: product,
            img: img
        })
    }

    onListenFirebase() {
        var fireStoreFirebase = firebase.firestore();
        var getBidProductFirebase = fireStoreFirebase.collection("bidProduct").doc(this.props.bidProduct._id);
        getBidProductFirebase.onSnapshot({
            includeMetadataChanges : true
        }, (doc)=>{
            //  console.log(doc.data());
        })

    }

    render() {
        return (
            <View style={[myStyle.productBid]}>
                <View>
                    <View style={[myStyle.frImgAndPrice]}>
                        <View style={[myStyle.frImgProdcurBid]}>
                            <Image
                                style={[myStyle.imgProductBid]}
                                source={{ uri: `${this.state.img}` }}
                            />
                        </View>
                        <View style={[myStyle.frPriceAndTime]}>

                            <View style={[myStyle.frStatusAndTime]}>
                                {/* <View>
                                    <Text style={[myStyle.statusProductBid]}>{this.props.status}</Text>
                                </View> */}
                                <View>
                                    <Text style={[myStyle.timeProductBid]}>{BidService.changeTextTime(BidService.getTimeCountBid(this.props.bidProduct))}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[myStyle.priceProductBid]}>{FormatService.roundingMoney(this.state.price)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[myStyle.frNameandDetailProductBid]}>
                        <Text style={[myStyle.nameProductBid]}>{this.state.product.name}</Text>
                        <Text style={{ color: color.inactive }}>This is a monkey beautifull</Text>
                    </View>

                </View>
            </View>
        );
    }

    logProduct = () => {
        console.log(this.props.bidProduct.product?.name);

    }
}
type Props = {
    bidProduct: BidProduct,
    onChangeBid(): BidProduct
};
type state = {
    img: string,
    price: number,
    product: Product
};



export default connect(null, null)(ProductBid)