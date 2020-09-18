import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import myStyle from "../../style";
import * as color from "../../Color"
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { BidService } from "../../services/BidService";
import { FormatService } from "../../services/FormatService";


export default class ProductBid extends Component<Props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
    }

    // onListenFirebase() {
    //     let seft = this;
    //     let fireStoreFirebase = firebase.firestore();
    //     let getBidProductFirebase = fireStoreFirebase.collection("bidProduct").doc(this.props.bidProduct._id);
    //     getBidProductFirebase.onSnapshot({
    //         includeMetadataChanges : true
    //     }, (doc)=>{
    //          if(doc.data()){
    //             let getDataDoc:any =  doc.data(); 
    //             let duplicateProduct = seft.props.bidProduct;
    //             if(getDataDoc.endPrice){
    //                 duplicateProduct.endPrice = getDataDoc.endPrice;
    //             }
    //             if(getDataDoc.latestBidAt){
    //                 duplicateProduct.latestBidAt = new Date(getDataDoc.latestBidAt.seconds * 1000);
    //             }   
    //             seft.props.onChangeBid(duplicateProduct);
    //          }
    //     })
    // }

    
    render() {
        return (
            
            <View style={[myStyle.productBid]}>
                <View>
                    <View style={[myStyle.frImgAndPrice]}>
                        <View style={[myStyle.frImgProdcurBid]}>
                            <Image
                                style={[myStyle.imgProductBid]}
                                source={{ uri: `${BidService.getImgFirtBidProduct(this.props.bidProduct)}` }}
                            />
                        </View>
                        <View style={[myStyle.frPriceAndTime]}>

                            <View style={[myStyle.frStatusAndTime]}>
                                <View>
                                    <Text style={[myStyle.timeProductBid]}>{BidService.changeTextTime(BidService.getTimeCountBid(this.props.bidProduct))}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[myStyle.priceProductBid]}>{FormatService.roundingMoney(BidService.getPriceBidProduct(this.props.bidProduct))}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[myStyle.frNameandDetailProductBid]}>
                        <Text style={[myStyle.nameProductBid]}>{BidService.getNameBidProduct(this.props.bidProduct)}</Text>
                        <Text style={{ color: color.inactive }}>This is a monkey beautifull</Text>
                    </View>
                </View>
            </View>
        );
    }
}
type Props = {
    bidProduct: BidProduct,
};
type state = {

};



