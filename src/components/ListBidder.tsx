import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import myStyle from "../style"
import BidderItem from './BidderItem'
import { BidProductHistory } from '@StockAfiCore/model/bid/BidProductHistory'
export default class ListBidder extends Component<props, state> {
    constructor(props: any) {
        super(props),
            this.state = {
                firtBidder: "",

            }
    }
    componentDidUpdate() {

        if(this.props.bidders!=null &&this.props.bidders.length >0 && this.props.bidders[0]._id){
            if (!this.state.firtBidder) {
                this.setState({
                    firtBidder: this.props.bidders[0]._id
                })
            }
        }
        
    }

    
    render() {
        return (
            <ScrollView style={[]}>
                <FlatList
                    data={this.props.bidders}
                    renderItem={({ item }) => {

                        return (
                            <BidderItem
                                firtBidder={this.state.firtBidder}
                                bidder={item}
                            ></BidderItem>

                        )
                    }}
                    keyExtractor={(item) => item.id != undefined ? item.id : "null"}
                />
            </ScrollView>
        )
    }
}

type props = {
    bidders: Array<BidProductHistory>
}
type state = {
    firtBidder: string,
}
