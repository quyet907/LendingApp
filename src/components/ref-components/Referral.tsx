import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import Separator from '../Separator'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import RefAbout from './RefAbout';
import HistoryDetail from './HistoryDetail';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";



const user = {
    urlRef: 'http://lendinggame.com/ref=?83587345435345',
    amountRef: 19,
    profits: 19000,
    ref: [
        { id: '71287482734892', time: '2020-08-15 15:12' },
        { id: '43675434534535', time: '2020-08-15 15:12' },
        { id: '86746325345645', time: '2020-08-15 15:12' },
        { id: '71287482734892', time: '2020-08-15 15:12' },
        { id: '43675434534535', time: '2020-08-15 15:12' },
        { id: '86746325345645', time: '2020-08-15 15:12' },
        { id: '71287482734892', time: '2020-08-15 15:12' },
        { id: '43675434534535', time: '2020-08-15 15:12' },
        { id: '86746325345645', time: '2020-08-15 15:12' }
    ]
};


export default class Referral extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#151A1D' }}>
                <FlashMessage position="center" />
                <View style={styles.container}>
                    <Text style={styles.textLabel}>REFERRAL</Text>
                    <Text style={{ textAlign: 'justify', color: '#fff' }}>The Lending game referral program is a great way to read the word of this great service and to earn even more money with your friend! Refer friends and receive 1000 COIN of their earnings for life!</Text>
                    <View style={{
                        flexDirection: 'row',
                        padding: 20,
                        marginVertical: 10
                    }}>
                        <TextInput
                            defaultValue={user.urlRef}
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

                    <Separator />

                    <View style={styles.refAbout}>
                        <RefAbout
                            label='Tổng cộng'
                            amount={user.amountRef}
                            urlIcon='../../assets/icons8_user_groups_80px_1.png'
                        ></RefAbout>
                        <RefAbout
                            label='Tiền thưởng'
                            amount={user.profits}
                            urlIcon='../../assets/icons8_user_groups_80px_1.png'
                        ></RefAbout>

                    </View>


                </View>
                <View style={styles.container2}>
                    <Text style={{ paddingBottom: 15, color: '#fff', fontSize: 17, fontWeight: 500 }}>My Referrals</Text>
                    <Separator />
                    <FlatList data={user.ref}
                        renderItem={({ item }) => <HistoryDetail title={item.id} time={item.time} coin={1000} />}
                        keyExtractor={item => item.id} />




                </View>

            </ScrollView>
        )
    }
    copyToClipboard = () => {
        Clipboard.setString(user.urlRef)
        showMessage({
            message: "Copied!",
            type: "success",
            hideOnPress: true,
            // backgroundColor: "purple", // background color
            color: "#fff",
            duration: 500
        });
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        backgroundColor: '#191F28'
    },
    container2: {
        marginTop: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: '#191F28'
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
        outline: 'none',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 10,
        fontWeight: "500",
        color: '#fff'
    },
    copy: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#FB8C00',
        borderColor: '#fff',
        borderWidth: 1.5,
        outline: 'none',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: 0
    },
    copyText: {
        fontSize: 14,
        fontWeight: "700",
        color: '#fff'
    },
    refAbout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20

    },
    textLabel: {
        paddingBottom: 15,
        color: '#fff',
        fontSize: 17,
        fontWeight: 500
    }

})