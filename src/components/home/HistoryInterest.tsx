import React, { Component } from 'react'
import { View, Text, Image, ColorPropType, StyleSheet } from "react-native"
import myStyle from "../../style";
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as color from '../../Color'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LendingService } from '../../services/LendingService';
import { MyFormat } from '../../Helper/MyFormat';
import { connect } from "react-redux";
import * as  actionAll from "../../Action/ActionAll"
import { Finance } from '@StockAfiCore/model/lending/Finance';
import I18n from '../../i18n/i18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const timeIcon = <MaterialIcons name="access-time" size={12} color={color.inactive} />;

class HistoryInterest extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: false
        }
    }


    render() {
        return (
            <View >
                <View style={styles.container}>

                    <View style={{ marginRight: 17 }}>
                        <FontAwesome5 name='coins' size={35} color={color.success} />
                    </View>

                    <View style={{ justifyContent: 'space-between', height: '100%', flex: 1  }}>
                        <Text style={styles.title}>
                            <FontAwesome5 name='caret-up' size={16} color={color.success} style={{ paddingTop: 4 }} /> {MyFormat.roundingMoney(this.props.profits)} COIN
                            </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            {timeIcon}<Text style={styles.time}>{this.props.createAt}</Text>
                        </View>
                    </View>

                    <View style={{ flexBasis: 80 }}>
                        <Text style={[{ color: color.secondary, fontSize: 16 }]}>
                            {this.props.daysLeft} {I18n.t('screens.dashboard.interestRateHistories.remainDays')}
                        </Text>
                    </View>


                    <View style={{ justifyContent: 'center', height: "100%" }}>
                        <TouchableOpacity
                            style={this.state.status ? styles.btnGot : styles.btnGet}
                            disabled={this.state.status}
                            onPress={() => {
                                this.setState({
                                    status: true
                                })
                                LendingService.getConfirmReceived(this.props._id)
                                    .then((res) => {
                                        this.props.onReload()
                                    })
                            }}
                        >
                            <Text style={{ color: 'black', textTransform: 'uppercase' }} >{this.state.status ? I18n.t('screens.dashboard.interestRateHistories.gotButton') : I18n.t('screens.dashboard.interestRateHistories.getButton')}</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            // <View style={myStyle.HistoryInterest}>
            //     <View style={[myStyle.row]}>
            //         <View style={[myStyle.leftHistoryInterest]}>
            //             <View>
            //                 <FontAwesome5 name='coins' size={35} color={color.success} />
            //             </View>
            //             <View style={[myStyle.row]}>
            //                 <Icon name="access-time" size={11} color='#575959' />
            //                 <Text style={[{ color: color.inactive, fontSize: 10 }]}>
            //                     {this.props.createAt}
            //                 </Text>
            //             </View>

            //             <View style={[myStyle.row, { marginTop: 10 }]}>
            //                 <Image
            //                     style={[myStyle.iconHistoryInterest]}
            //                     source={require("../../icons/icons8_up_26px.png")}
            //                 />

            //                 <Text style={[myStyle.contentHistoryInterest, { color: color.success, alignSelf: "center", justifyContent: "center", marginLeft: 10 },]}>{this.props.profits}</Text>
            //             </View>
            //         </View>

            //         {/* <View style={[myStyle.row, myStyle.centerHistoryInterest]}> */}
            //         {/* <Text style={[{ color: color.inactive }, myStyle.contentHistoryInterest]}>
            //                 {MyFormat.roundingMoney(this.props.amount)}
            //             </Text>
            //             <Image
            //                 style={[myStyle.iconHistoryInterest, { margin: 10 }]}
            //                 source={require("../../icons/icons8_right_26px.png")}
            //             />
            //             <Text style={[{ color: color.primary, }, myStyle.contentHistoryInterest]}>{MyFormat.roundingMoney(this.props.amount + this.props.profits)}</Text>
            //          */}
            //         {/* </View> */}

            //         <View style={[myStyle.rightHistoryInterest]}>
            //             <Text style={[{ color: color.secondary, fontSize: 16, }]}>
            //                 {this.props.daysLeft} {I18n.t('screens.dashboard.interestRateHistories.remainDays')}
            //             </Text>
            //         </View>

            //         <View style={{ justifyContent: 'center', height: "100%" }}>
            //             <TouchableOpacity
            //                 style={this.state.status ? styles.btnGot : styles.btnGet}
            //                 disabled={this.state.status}
            //                 onPress={() => {
            //                     this.setState({
            //                         status: true
            //                     })
            //                     LendingService.getConfirmReceived(this.props._id)
            //                         .then((res) => {
            //                             // console.log(this.props._id);
            //                             this.props.onReload()
            //                         })
            //                 }}
            //             >
            //                 <Text style={{ color: 'black', textTransform: 'uppercase' }} >{this.state.status ? I18n.t('screens.dashboard.interestRateHistories.gotButton') : I18n.t('screens.dashboard.interestRateHistories.getButton')}</Text>
            //             </TouchableOpacity>
            //         </View>
            //     </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 25,
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
        marginRight: 15,

    },
    amount: {
        fontSize: 28,
        fontWeight: 'bold'

    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: color.success,

    },
    time: {
        color: '#868685',
        fontSize: 10,
        marginLeft: 3,
        textTransform: 'uppercase'
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
    },
    btnGet: {
        backgroundColor: color.primary,
        paddingVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 18
    },
    btnGot: {
        backgroundColor: '#333',
        paddingVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 18
    }

})




type props = {
    _id: string,
    createAt: string,
    profits: number,
    amount: number,
    daysLeft: number,
    onReload(): void
}
type state = {
    status: boolean
}

function mapStateToProps(state: any, props: any) {

}

function mapDispatchToProps(dispatch: any, props: any) {
    return {
        onReload(finance: Finance) {
            dispatch(actionAll.reloadPageHome())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryInterest)