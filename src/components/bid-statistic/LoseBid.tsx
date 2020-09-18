import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import * as color from '../../Color'
import BidDetail from './BidDetail';
import { BidStatisticService } from "../../services/BidStatisticService"
import { BidStatistic } from "@StockAfiModel/bid/BidStatistic";
import { BidStatus } from '../../share/base-stock-afi/model/bid/BidStatus';
import { v4 as uuidv4 } from 'uuid';
import { useIsFocused } from '@react-navigation/native';
import { BidProduct } from '@StockAfiCore/model/bid/BidProduct';
import { ScreenName } from '../../screens/ScreenName';
class LoseBid extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            loseBidList: []
        }
    }

    componentWillReceiveProps(prev: Props) {
        if (prev.isFocused) {
            this.getDataToState();
        }
    }

    componentDidMount() {
        this.getDataToState();
    }



    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15,  fontSize: 17, fontWeight: "500" }}>My Bid</Text>
                    <Separator /> */}
                    <FlatList
                        data={this.state.loseBidList}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate(ScreenName.BidProduct, {
                                        bidProductId: item._id
                                    })}
                                >
                                    <BidDetail
                                        imgURL={item.bidProduct && item.bidProduct.product && item.bidProduct.product.thumbImagesUrl ? item.bidProduct.product.thumbImagesUrl[0] : 'null'}
                                        name={item.bidProduct?.product?.name || "undefined"}
                                        bidAt={this.getTime(item.bidProduct?.latestBidAt) || "undefined"}
                                        bidClick={item.count || 0}
                                        startPrice={item.bidProduct?.startPrice || 0}
                                        endPrice={item.bidProduct?.endPrice || 0}
                                    />
                                </TouchableOpacity>

                            )
                        }}
                        keyExtractor={(item: BidStatistic, index: number) => item.bidProductId || index.toString()}
                    />


                </View>

            </ScrollView>
        )
    }

    getDataToState() {
        BidStatisticService.getBidStatistic().then((bidStatistics: BidStatistic[]) => {
            const bid = bidStatistics.filter(bidStatistic => bidStatistic.bidStatus == BidStatus.lose);
            this.setState({
                loseBidList: bid
            })
        })
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
    isFocused: boolean,
    navigation: any
}

type State = {
    loseBidList: BidStatistic[]

}

export default function (props: Props) {
    const isFocused = useIsFocused();

    return <LoseBid {...props} isFocused={isFocused} />;
}