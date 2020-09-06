import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import Separator from '../Separator'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { Referal } from '@Core/model/user/Referal';
import { ReferralService } from '../../services/ReferralService';
import * as color from '../../Color'
import BidDetail from './BidDetail';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BidProductHistoryService } from '../../services/BidProductHistoryService';
import { BidProductHistory } from '@StockAfiCore/model/bid/BidProductHistory';
export default class MyBidWin extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            winBidList: []
        }
    }

    componentDidMount() {
        BidProductHistoryService.getBidHistory().then((res) => {
            this.setState({
                winBidList: res.rows
            })
        })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15,  fontSize: 17, fontWeight: "500" }}>My Bid</Text>
                    <Separator /> */}
                    {/* <FlatList
                        data={this.state.winBidList}
                        renderItem={({ item }) => {
                            return (
                                <BidDetail
                                    imgURL={item.product?.thumbImagesUrl}
                                    name={item.product.name}
                                    bidAt={item.product?.createdAt }
                                    bidClick=number
                                    startPrice= number
                                    endPrice= number
                                />
                            )
                        }}
                        keyExtractor={(item) => item.id != undefined ? item.id : "null"}
                    /> */}


                </View>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        borderWidth: 1,
        borderColor: '#868685',
        // paddingBottom: 5,
        backgroundColor: '#1e2126'
    },
    container2: {
        // paddingHorizontal: 20,

        //borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        paddingTop: 10,

    },

})

type Props = {

}

type State = {
    winBidList: Array<BidProductHistory>

}