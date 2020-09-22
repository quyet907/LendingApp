import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import myStyle from '../style'
import * as Color from '../Color'
import { CouponService } from '../services/CouponService';
import * as actionPopup from "../Action/ActionPopup";

export default class Giftcode extends React.Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            code: ''
        }
    }

    componentDidMount() {
        CouponService.getCouponHistories().then((res) => console.log(res.rows))
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1, alignContent: 'center' }}
            >
                <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 40, paddingVertical: 20, backgroundColor: Color.background_primary, justifyContent: 'center' }}>

                    <View style={{ flex: 0.55, width: '100%', justifyContent: 'flex-end' }}>


                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../icons/gift-box.svg')}
                            />
                            <Text style={[styles.whiteText, styles.title]}>Enter the Giftcode</Text>
                            <Text style={[styles.whiteText]}></Text>
                        </View>

                        <View style={{ height: 40, width: '100%', marginTop: 50 }}>
                            <TextInput
                                style={{ flex: 1, borderColor: 'gray', borderBottomWidth: 3, color: '#fff' }}
                                defaultValue={this.state.code}
                                onChangeText={(text) => {
                                    this.setState({
                                        code: text
                                    }, () => {
                                        console.log(this.state.code);
                                    })
                                }}
                                placeholder={"Enter giftcode"}

                            />
                        </View>
                    </View>


                    <View style={{ flex: 0.45, width: '100%' }}>


                        <View style={{ height: 40, width: '100%', marginTop: 60 }}>
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
            </KeyboardAvoidingView>
        )
    }

    check = () => {
        if (this.state.code) {
            CouponService.postCoupon(this.state.code)
        } else {
            actionPopup.showMessage("Please enter giftcode!")
        }
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
    }
});

type Props = {

}

type State = {
    code: string
}