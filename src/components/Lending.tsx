import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard, CheckBox } from 'react-native';
import Separator from './Separator'
import { TouchableOpacity, ScrollView, FlatList, State } from 'react-native-gesture-handler';
import HistoryDetail from './ref-components/HistoryDetail';
import Package from './Package'


const user = {
    coinBalance: 12000,
    urlRef: 'http://lendinggame.com/ref=?83587345435345',
    amountRef: 19,
    profits: 19000,
    ref: [
        { id: '71287482734892', time: '2020-08-15 15:12' },
        { id: '43675434534535', time: '2020-08-15 15:12' },
        { id: '86746325345645', time: '2020-08-15 15:12' },
        { id: '71287482734892', time: '2020-08-15 15:12' }
    ],
    invest: [
        { name: 'SILVER', coin: 1500 }
    ]
};

const DATA = [
    { id: 1, name: 'SILVER', min: 1000, profits: 10, days: 45 },
    { id: 2, name: 'GOLD', min: 2000, profits: 15, days: 55 },
    { id: 3, name: 'PREMIUM', min: 5000, profits: 30, days: 255 }
];


export default class Lending extends React.Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            initialValue: 0,
            isSelected: false,
            packageSelected: true,
            packageID: 2,

        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#181f29' }}>
                <View style={styles.container}>
                    <Text style={styles.textLabel}>INVEST</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={styles.textLabel}>CHOOSE ONE PACKAGE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {DATA.map((item) => item.id == this.state.packageID ?
                            <Package
                                package={item}
                                setSelection={this.state.packageSelected}
                                isSelected={() => {
                                    this.setState({ packageSelected: this.state.packageSelected })
                                }}
                            /> :
                            <Package
                                package={item}
                                setSelection={!this.state.packageSelected}
                                isSelected={() => {
                                    this.setState({ packageID: item.id })
                                }}
                            />
                        )}
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={styles.textLabel}>Wallet Balance: {user.coinBalance} COIN</Text>
                    </View>

                    <View style={{
                   
                        flexDirection: 'row',
                        height: 35,


                    }}>
                        <View style={{
                                flexGrow: 1,   
                            backgroundColor: '#f2c73a',
                            paddingHorizontal: 10,
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={styles.copyText}>COIN</Text>
                        </View>
                        <TextInput
                            value={this.state.initialValue}
                            keyboardType={'numeric'}
                            style={styles.inputCoin}
                            onChangeText={text => this.onChangeText(text)}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexGrow: 1,   
                                backgroundColor: '#f2c73a',
                                paddingHorizontal: 10,
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => this.allCoin()}
                        >
                            <Text style={styles.copyText}>&lt;ALL</Text>
                        </TouchableOpacity >
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <CheckBox
                            value={this.state.isSelected}
                            onValueChange={() => {
                                this.setState({
                                    isSelected: !this.state.isSelected
                                })
                            }}
                        //style={styles.checkbox}
                        />
                        <Text style={{ color: '#fff', paddingLeft: 10 }}>I have read and understood your terms of use</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#f2c73a',
                                paddingHorizontal: 10,
                                borderRadius: 2,
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => this.invest()}
                        >
                            <Text style={{
                                paddingHorizontal: 10, paddingVertical: 6, fontSize: 16,
                                fontWeight: "700"
                            }}>INVEST</Text>
                        </TouchableOpacity >
                    </View>





                </View>
                <View style={styles.container2}>
                    <Text style={styles.textLabel}>My Investsment</Text>
                    <Separator />
                    <FlatList data={user.ref}
                        renderItem={({ item }) => <HistoryDetail title={item.id} time={item.time} coin={1000} />}
                        keyExtractor={item => item.id} />




                </View>

            </ScrollView>
        )
    }

    invest = () => {
        
    }

    allCoin = () => {
        this.setState({
            initialValue: user.coinBalance
        })

    };

    onChangeText = (text: any) => {
        this.setState({
            initialValue: text
        })
    }
}

type State = {
    initialValue: any,
    isSelected: boolean,
    packageSelected: any,
    packageID: any
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        backgroundColor: '#1e2126'
    },
    container2: {
        marginTop: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: '#1e2126'
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },
    inputCoin: {
       width: '100%',
      
        backgroundColor: '#fff',
        outline: 'none',
        border: 'none',
        paddingHorizontal: 10,
        paddingVertical: 5,

        fontWeight: "500",

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
        fontSize: 16,
        fontWeight: "700",

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
    },


})