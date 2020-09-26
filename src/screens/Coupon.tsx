import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import myStyle from '../style'
import * as Color from '../Color'
import { CouponService } from '../services/CouponService';
import * as actionPopup from "../Action/ActionPopup";
import { UserCoupon } from '@StockAfiCore/model/user/UserCoupon';
import { Paging } from '@Core/controller/Paging';
import CouponHistories from '../components/coupon/CouponHistories';
export default class Giftcode extends React.Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            code: '',
            couponHistories: []
        }
    }

    componentDidMount() {
       this.getDataToState()
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.background_primary }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 40, paddingVertical: 20, backgroundColor: Color.background, justifyContent: 'center' }}>

                    <View style={{ flex: 0.55, width: '100%', justifyContent: 'flex-end' }}>


                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../icons/gift-box.svg')}
                            />
                            <Text style={[styles.whiteText, styles.title]}>Enter the Giftcode</Text>
                            <Text style={[styles.whiteText]}></Text>
                        </View>

                        <View style={{ height: 40, width: '100%', marginTop: 40 }}>
                            <TextInput
                                // style={{ flex: 1, borderColor: 'gray', borderBottomWidth: 3, color: '#fff' }}
                                style={styles.inputLogin}
                                defaultValue={this.state.code}
                                onSubmitEditing={()=> this.check()}
                                onChangeText={(text) => {
                                    this.setState({
                                        code: text
                                    })
                                }}
                                placeholder={"Enter giftcode"}

                            />
                        </View>
                    </View>


                    <View style={{ flex: 0.45, width: '100%' }}>


                        <View style={{ height: 40, width: '100%', marginTop: 40 }}>
                            <TouchableOpacity
                                style={styles.btnSubmit}
                                activeOpacity={0.7}
                                
                                onPress={this.check}
                            >
                                <Text style={[myStyle.textButton]}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <CouponHistories
                    couponHistories={this.state.couponHistories} />
            </ScrollView>
        )
    }

    check = () => {
        if (this.state.code) {
            CouponService.postCoupon(this.state.code).then((userCoupon: UserCoupon)=>{
                if(userCoupon && userCoupon.coupon && userCoupon.coupon.prize){
                    actionPopup.showMessage(`You got ${ userCoupon.coupon.prize} points!`)
                }
                const getHistories = this.state.couponHistories;
                getHistories.push(userCoupon);
                this.setState({
                    couponHistories : getHistories
                })
            })
        } else {
            actionPopup.showMessage("Please enter giftcode!")
        }
    }
    getDataToState = () => {
        CouponService.getCouponHistories().then((couponPaging: Paging<UserCoupon>) => {
            const data = couponPaging.rows;
            this.setState({
                couponHistories : couponPaging.rows
            })
        })
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    logo: {
        width: 66,
        height: 58,
    },
    btnSubmit: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: Color.primary,
        borderRadius: 5,

    },
    whiteText: {
        color: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputLogin: {
        borderColor: "#F6C400",
        borderWidth: 1,
        width: "100%",
        color: Color.text,
        fontSize: 16,
        borderRadius: Color.borderRadius,
        padding: 10,
        outlineWidth: 0
    },
});

type Props = {

}

type State = {
    code: string
    couponHistories: UserCoupon[]
}