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
var runTimeProductBid:any;
 class ProductBid extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            timeCount: 0,
            img: "",
            price: 0,
            product : {}
        };
    }

    componentDidUnmount(){
        console.log("on will unmount product bid");
        clearInterval(runTimeProductBid);
        console.log(this.props.bidProduct._id)
    }


    componentDidMount() {
        this.setValue();
        runTimeProductBid=  setInterval(
            () => {
                console.log("on run product bid");
                this.setState({
                    timeCount: BidService.getTimeCountBid(this.props.bidProduct),
                })
            },
            500
        );

        
    }



    setValue() {

        let price: number = 0;
        if (this.props.bidProduct.endPrice) {
            price = this.props.bidProduct.endPrice;
        }
        else if (this.props.bidProduct.startPrice) {
            price = this.props.bidProduct.startPrice;
        }
        let product: Product = {}
        let img : string= "";

        if(this.props.bidProduct&&this.props.bidProduct.product){
            product = this.props.bidProduct.product
            if(product.thumbImagesUrl){
                img = product.thumbImagesUrl[0]|| "";
            }
        }

        this.setState({
            price: price,
            product : product,
            img: img
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
                                    <Text style={[myStyle.timeProductBid]}>{BidService.changeTextTime(this.state.timeCount)}</Text>
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
}
type props = {
    bidProduct: BidProduct,
    onReload(): void
};
type state = {
    timeCount: number,
    img: string,
    price: number,
    product : Product
};

function mapDispatchToProps(dispatch: any, props: any) {
    return {
        onReload() {
            dispatch(actionAll.reload())
        }
    }
}


export default connect(null, mapDispatchToProps)(ProductBid)