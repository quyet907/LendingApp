import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import * as color from '../../Color'
import BidDetail from './BidDetail';
import { BidStatisticService } from "../../services/BidStatisticService"
import { BidStatistic } from "@StockAfiModel/bid/BidStatistic";
import { BidStatus } from '../../share/base-stock-afi/model/bid/BidStatus';
export default class MyBidWin extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            winBidList: []
        }
    }

    componentDidMount() {
        BidStatisticService.getBidStatistic().then((bidStatistics: BidStatistic[]) => {
            // const bid = bidStatistics.filter(bidStatistic => bidStatistic.bidStatus == BidStatus.win);
            console.log(bidStatistics);
            
            this.setState({
                // winBidList: bidStatistics.filter(bidStatistic => bidStatistic.bidStatus == BidStatus.win)

            })

        })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15,  fontSize: 17, fontWeight: "500" }}>My Bid</Text>
                    <Separator /> */}
                    <FlatList
                        data={this.state.winBidList}
                        renderItem={({ item }) => {
                            return (
                                <BidDetail
                                    imgURL={item.product?.thumbImagesUrl ? item.product.thumbImagesUrl[0] : "null"}
                                    name={item.bidProduct?.product?.name || "undefined"}
                                    bidAt={this.getTime(item.bidProduct?.latestBidAt) || "undefined"}
                                    bidClick={item.bidCount || 0}
                                    startPrice={item.bidProduct?.startPrice || 0}
                                    endPrice={item.bidProduct?.endPrice || 0}
                                />
                            )
                        }}
                        keyExtractor={(item) => item.bidProductId ? item.bidProductId : 'null'}
                    />


                </View>

            </ScrollView>
        )
    }

    getTime = (date: Date | undefined): string => {
        if (date !== undefined) return date.toString().substring(0, 10);
        else return "null";
    };

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
    winBidList: BidStatistic[]

}