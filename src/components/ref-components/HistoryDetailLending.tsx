import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Separator from '../Separator'
import style from 'src/style';
import * as color from '../../Color'
const timeIcon = <Icon name="access-time" size={13} color='#868685' />;
export default class HistoryDetail extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingVertical: 10 }}>
                    <View>
                        <Image style={styles.logo} source={require('../../icons/icons8_payment_history_30px.png')} />
                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 42 }}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            {timeIcon}<Text style={styles.time}>{this.props.time}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1 }}>
                        <Text style={styles.time}>{this.props.typeLabel}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={this.props.type ? styles.coinGreen : styles.coinRed}>
                                {this.props.type && this.props.typeLabel != 'AMOUNT' ? '+' : (this.props.typeLabel == 'AMOUNT' ? '' : '-')}{this.props.coin} COIN</Text>
                        </View>
                    </View>

                </View>
                <Separator />
            </View>
        )
    }
}

type Props = {
    title: any,
    time: any,
    coin: number,
    type: boolean,
    typeLabel: string
}

const styles = StyleSheet.create({


    subContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 10,

    },
    amount: {
        fontSize: 28,
        fontWeight: 'bold'

    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "600",

    },
    time: {
        color: '#868685',
        fontSize: 10,
        marginLeft: 3
    },
    coinGreen: {
        fontSize: 15,
        color: '#15D02B',
        fontWeight: "600"
    },
    coinRed: {
        fontSize: 15,
        color: color.warning,
        fontWeight: "600"
    }


})

