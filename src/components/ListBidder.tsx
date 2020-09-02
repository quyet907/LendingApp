import React, { Component } from 'react'
import { View , FlatList, ScrollView} from 'react-native'
import myStyle from "../style"
import BidderItem from './BidderItem'
export default class ListBidder extends Component<props , state> {
    constructor(props: any){
        super(props),
        this.state = {

        }
    }
    render() {
        return (
            <ScrollView style={[]}>
                <FlatList
                    data = {this.props.bidders}
                    renderItem={({ item }) =>{
                        return (
                            <BidderItem
                            bidder = {item}
                            ></BidderItem>
                        )
                    }}
                    keyExtractor = {(item)=>  item.id!= undefined ? item.id :"null"}
                />
            </ScrollView>
        )
    }
}

type props = {
    bidders : Array<any>
}
type state = {

}
