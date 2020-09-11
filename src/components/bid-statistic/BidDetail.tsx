import * as React from 'react';
import { View, StyleSheet, Text, Image, ImageProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as color from '../../Color'
import { FormatService } from '../../services/FormatService';
const timeIcon = <Icon name="access-time" size={13} color='#868685' />;
export default class BidDetail extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.img} source={{ uri: this.props.imgURL }} />
                    </View>

                    <View style={styles.subContainer2}>
                        <Text style={[{ fontSize: 16, fontWeight: "600" }, styles.fontWhiteColor]}>{this.props.name}</Text>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>

                            <View style={{ justifyContent: 'space-around', paddingTop: 5 }}>
                                <Text style={{ color: color.inactive }}>{this.props.bidAt}</Text>
                                <Text style={[styles.times, styles.fontWhiteColor]}>{`${this.props.bidClick} clicks`}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ color: color.inactive, textDecorationLine: 'line-through' }}>{FormatService.roundingMoney(this.props.startPrice)}</Text>
                                <Text style={[styles.price]}>{FormatService.roundingMoney(this.props.endPrice)}</Text>
                            </View>

                        </View>

                    </View>

                </View>

            </View>
        )
    }
}

type Props = {
    imgURL: string;
    name: string,
    bidAt: string;
    bidClick: number;
    startPrice: number;
    endPrice: number;

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        paddingVertical: 10,

        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,


        marginBottom: 14,
        borderRadius: 5,
        backgroundColor: color.background
    },

    subContainer: {
        flexBasis: 80,
        marginRight: 6,

    },
    subContainer2: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between'
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 10,

    },


    img: {
        width: 70,
        height: 70,
        borderRadius: 5,
        resizeMode: 'cover'
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        color: color.primary
    },
    times: {
        fontSize: 16,
        fontWeight: '600'
    },
    fontWhiteColor: {
        color: 'white'
    }


})

