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
    componentWillReceiveProps(previousProps: Props){
        if(previousProps.isFocused){
            this.getDataReferal();
        }
    }

    getDataReferal(){
        ReferralService.getReferral().then(res => {
            this.setState({ myReferral: res.rows })
        })
        ReferralService.getMe().then(res => {
            this.setState({ myID: res._id || "null" })
        })
    }
    

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <FlashMessage position="center" />
                <View style={styles.container}>
                    <Text style={styles.textLabel}>REFERRAL</Text>
                    <Text style={{ textAlign: 'justify', color: '#fff' }}>
                        The Lending game referral program is a great way to read the word of this great service and to earn even more money with your friend! Refer friends and receive 1000 COIN of their earnings for life!
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
                            <Text style={styles.copyText}>Copy</Text>
                        </TouchableOpacity >
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={styles.separator} />
                    </View>


                    <View style={styles.refAbout}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                            <View style={styles.containerIcon}>
                                <FontAwesome5 name='user-friends' size={40} color='#00C4F8' />
                            </View>
                            <View style={styles.subContainer}>
                                <Text style={{ color: color.inactive, fontSize: 12 }}>Total</Text>
                                <Text style={styles.amount}>{this.state.myReferral.length}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.containerIcon}>
                                <FontAwesome5 name='coins' size={40} color={color.primary} />
                            </View>
                            <View style={styles.subContainer}>
                                <Text style={{ color: color.inactive, fontSize: 12 }}>Reward</Text>
                                <Text style={styles.amount}>{this.state.myReferral.length * 1000}</Text>
                            </View>
                        </View>
                    </View>


                </View>
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15, color: '#fff', fontSize: 17, fontWeight: "500" }}>My Referrals</Text> */}
                    <FlatList data={this.state.myReferral}
                        renderItem={({ item }) =>
                            <HistoryDetail
                                type={true}
                                typeLabel='EARNED'
                                title={item.toUser?.username}
                                time={this.getTime(item.createdAt)}
                                coin={1000}
                            />}
                        keyExtractor={item => item._id || 'null ID'} />
                </View>

            </ScrollView>
        )
    }
    copyToClipboard = () => {
        Clipboard.setString(this.getLinkRef())
        showMessage({
            message: "Copied!",
            type: "success",
            hideOnPress: true,
            // backgroundColor: "purple", // background color
            color: "#fff",
            duration: 500
        });
    }


    getTime = (date: Date | undefined): String => {
        if (date !== undefined) return date.toString().substring(0, 10)
        else return 'null'
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
        flexGrow: 1,
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
        // justifyContent: 'center',
        paddingVertical: 20

    },
    textLabel: {
        paddingBottom: 15,
        color: '#fff',
        fontSize: 17,
        fontWeight: "500"
    },
    subContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logoRef: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    amount: {
        fontSize: 26,
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
    isFocused : boolean;
}

type State = {
    myReferral: Array<Referal>,
    myID: String
}

export default function (props: Props) {
    const isFocused = useIsFocused();
  
    return <Referral {...props} isFocused={isFocused} />;
  }