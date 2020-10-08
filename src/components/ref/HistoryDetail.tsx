import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as color from '../../Color'
import { MyFormat } from '../../Helper/MyFormat';
import { ReferralService } from '../../services/ReferralService';
import I18n from "../../i18n/i18n"
const timeIcon = <Icon name="access-time" size={12} color='#868685' />;
export default class HistoryDetail extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View >
                <View style={styles.container}>
                    <View style={{ marginRight: 15 }}>
                        <FontAwesome5 name='user-circle' size={35} color={color.success} />
                    </View>

                    <View style={{ justifyContent: 'space-between', height: "100%" }}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            {timeIcon}<Text style={styles.time}>{this.props.time}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-evenly', height: '100%', flex: 1, paddingTop: 3 }}>
                        <Text style={styles.time}>{this.props.typeLabel}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={this.props.type ? styles.coinGreen : styles.coinRed}>
                                {this.props.type && this.props.typeLabel != 'AMOUNT' ? '+' : (this.props.typeLabel == 'AMOUNT' ? '' : '-')}{MyFormat.roundingMoney(ReferralService.calcMoneyReferral(1))} {I18n.t('system.money')}</Text>
                        </View>
                    </View>

                </View>

            </View>
        )
    }
}

type Props = {
    title: any,
    time: any,
    type: boolean,
    typeLabel: string
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: color.background
    },
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
        textTransform: 'uppercase'
    },
    time: {
        color: color.inactive,
        fontSize: 10,
        marginLeft: 3
    },
    coinGreen: {
        fontSize: 15,
        color: color.success,
        fontWeight: "600"
    },
    coinRed: {
        fontSize: 15,
        color: color.warning,
        fontWeight: "600"
    }


})

