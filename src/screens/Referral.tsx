import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { Referal } from '@Core/model/user/Referal';
import * as color from '../Color'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ReferralService } from '../../src/services/ReferralService';
import { config } from '../config/Config';
import HistoryDetail from '../components/ref/HistoryDetail';
import { useIsFocused } from '@react-navigation/native';
import MyReferrals from '../components/ref/MyReferrals';
import { MyFormat } from '../Helper/MyFormat';
import I18n from "../i18n/i18n";

class Referral extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            myReferral: [],
            myID: ""
        }

    }

    componentDidMount() {
        this.getDataReferal();

    }
    componentWillReceiveProps(previousProps: Props) {
        if (previousProps.isFocused) {
            this.getDataReferal();
        }
    }

    getDataReferal = () => {
        ReferralService.getMe()
            .then(infoMe => {
                this.setState({ myID: infoMe._id || "undefined" })
            })
            .catch(err => this.setState({ myID: "undefined" }))

        ReferralService.getReferral()
            .then(res => {
                this.setState({ myReferral: res.rows })
            })
            .catch(err => this.setState({ myReferral: [] }))
    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <FlashMessage position="center" />
                <View style={styles.container}>
                    <Text style={styles.textLabel}>{I18n.t('screens.referral.refTitle')}</Text>
                    <Text style={{ textAlign: 'justify', color: '#fff' }}>
                        {'\t'}{I18n.t('screens.referral.introText')}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        padding: 20,
                        marginVertical: 10
                    }}>
                        <TextInput
                            value={this.getLinkRef()}
                            style={styles.urlRef}
                            editable={false}
                            textContentType={'URL'}

                        />
                        <TouchableOpacity
                            style={styles.copy}
                            onPress={() => this.copyToClipboard()}
                        >
                            <Text style={styles.copyText}>{I18n.t('screens.referral.copyButton')}</Text>
                        </TouchableOpacity >
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={styles.separator} />
                    </View>


                    <View style={styles.refAbout}>
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <View style={styles.containerIcon}>
                                <FontAwesome5 name='user-friends' size={35} color='#00C4F8' />
                            </View>
                            <View style={styles.subContainer}>
                                <Text style={{ color: color.inactive, fontSize: 12 }}>{I18n.t('screens.referral.totalRefTitle')}</Text>
                                <Text style={styles.amount}>{MyFormat.roundingMoney(this.state.myReferral.length)}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                            <View style={styles.containerIcon}>
                                <FontAwesome5 name='coins' size={35} color={color.primary} />
                            </View>
                            <View style={styles.subContainer}>
                                <Text style={{ color: color.inactive, fontSize: 12 }}>{I18n.t('screens.referral.rewardRefTitle')}</Text>
                                <Text style={styles.amount}>{MyFormat.roundingMoney(this.state.myReferral.length)} </Text>
                            </View>
                        </View>
                    </View>


                </View>
                {/* <View style={styles.container2}> */}
                {/* <Text style={{ paddingBottom: 15, color: '#fff', fontSize: 17, fontWeight: "500" }}>My Referrals</Text> */}
                <MyReferrals myReferrals={this.state.myReferral} />

                {/* </View> */}

            </ScrollView>
        )
    }
    copyToClipboard = () => {
        Clipboard.setString(this.getLinkRef())
        showMessage({
            message: I18n.t('screens.referral.copyNotification'),
            type: "success",
            hideOnPress: true,
            backgroundColor: color.background_primary, // background color
            color: "#fff",
            duration: 300
        });
    }


    getTime = (date: Date | undefined): String => {
        if (date !== undefined) return date.toString().substring(0, 10)
        else return 'undefined'
    }

    getLinkRef = () => {
        return `${config.api.domain}/?ref=${this.state.myID}`
    }
}

const styles = StyleSheet.create({
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    container: {
        padding: 20,
        paddingBottom: 5,
        backgroundColor: color.background
    },
    container2: {
        paddingBottom: 10,
        paddingTop: 10,
        // backgroundColor: color.backgound
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },
    urlRef: {
        flex: 1,
        width: '80%',
        borderColor: '#fff',
        borderWidth: 1.5,
        // outline: 'none',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 12,
        fontWeight: "500",
        color: '#fff'
    },
    copy: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: color.primary,
        borderColor: '#fff',
        borderWidth: 1.5,
        // outline: 'none',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: 0
    },
    copyText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "700",
    },
    refAbout: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20

    },
    textLabel: {
        paddingBottom: 15,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white",
    },
    subContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    logoRef: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    amount: {
        fontSize: 23,
        fontWeight: "600",
        color: '#fff'
    },
    separator: {
        backgroundColor: color.inactive,
        height: 1,
        width: '90%',

    },

})

type Props = {
    isFocused: boolean;
}

type State = {
    myReferral: Array<Referal>,
    myID: String
}

export default function (props: Props) {
    const isFocused = useIsFocused();

    return <Referral {...props} isFocused={isFocused} />;
}