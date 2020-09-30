import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import * as color from '../../Color'
import { UserCoupon } from '@StockAfiCore/model/user/UserCoupon';
import CouponDetail from './CouponDetail';
import I18n from "../../i18n/i18n";

export default class CouponHistories extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
       
    }
    // componentWillReceiveProps(prev: Props) {
    //     if (prev.isFocused) {
    //         this.getDataToState();
    //     }
    // }

    componentDidMount() {
        // this.getDataToState();

    }

    render() {
        return (
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15,  fontSize: 17, fontWeight: "500" }}>My Bid</Text>
                    <Separator /> */}
                    <FlatList
                        data={this.props.couponHistories}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    // onPress={() => }
                                >
                                    <CouponDetail
                                        title={item.coupon?.code || 'undefined'}
                                        time={item.receiveAt || 'undefined'}
                                        coin={item.coupon?.prize || 0}
                                        type={true}
                                        typeLabel={I18n.t('screens.coupon.couponHistories.prize')}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item: UserCoupon, index: number) => item._id || index.toString()}
                    />
                </View>
        )
    }

    // getDataToState() {
    //     CouponService.getCouponHistories().then((couponPaging: Paging<UserCoupon>) => {
    //         const data = couponPaging?.rows;
    //         this.setState({
    //             coupons: data
    //         })
    //     })
    // }



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
    couponHistories: UserCoupon[]
}

type State = {
    

}

