import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import * as color from '../Color'
import { useIsFocused } from '@react-navigation/native';
import { ScreenName } from './ScreenName';
import { Coupon } from '@StockAfiCore/model/user/Coupon';
import { UserCoupon } from '@StockAfiCore/model/user/UserCoupon';
import { CouponService } from '../services/CouponService';
import { Paging } from '@Core/controller/Paging';
import CouponDetail from '../components/coupon/CouponDetail';
class CouponHistories extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            coupons: []
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
                        data={this.state.coupons}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate(ScreenName.CouponHistories)}
                                >
                                    <CouponDetail
                                        title={item.coupon?.code || 'undefined'}
                                        time={item.createdAt || 'undefined'}
                                        coin={item.coupon?.prize || 0}
                                        type={true}
                                        typeLabel="PRIZE"
                                    />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item: UserCoupon, index: number) => item.userId || index.toString()}
                    />
                </View>
            </ScrollView>
        )
    }

    getDataToState() {
        CouponService.getCouponHistories().then((couponPaging: Paging<UserCoupon>) => {
            // console.log(bidStatistics);
            const data = couponPaging?.rows;
            this.setState({
                coupons: data
            })
        })
    }

    getTime = (date: Date | undefined): string => {
        if (date) return date.toString().substring(0, 10);
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
    route: any,
    navigation: any
}

type State = {
    coupons: UserCoupon[]

}

export default function (props: Props) {
    const isFocused = useIsFocused();

    return <CouponHistories {...props} isFocused={isFocused} />;
}