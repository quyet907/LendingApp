import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard, CheckBox, Alert } from 'react-native';
import Separator from './Separator'
import { TouchableOpacity, ScrollView, FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import HistoryDetail from './ref-components/HistoryDetail';
import Package from './Package'
import { LendingPackageService } from '../services/LendingPackageService';
import { LendingPackage } from '@StockAfiCore/model/lending/LendingPackage';
import { LendingService } from '../services/LendingService';
import { Lending as LendingModel } from "@StockAfiCore/model/lending/Lending";
import { ProfitHistory } from '@StockAfiCore/model/lending/LendingProfitHistory';
import PopupConfirm from './PopupConfirm';


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





export default class Lending extends React.Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            initialValue: 0,
            isSelected: false,

            packageSelected: true,
            packageID: "",
            packages: [],

            minInvestment: 1,
            maxInvestment: 1000,

            buttonInvest: false,
            confirmModal: false,

            myInvest: []

        }
        LendingService.getMyInvest().then(res => {
            this.setState({ myInvest: res.rows })
        })

        LendingPackageService.getLendingPackage().then(pagingLendingPackages => {
            console.log(pagingLendingPackages.rows)
            this.setState({
                packages: pagingLendingPackages.rows,
                packageID: pagingLendingPackages.rows[0]._id,
                minInvestment: typeof pagingLendingPackages.rows[0].minInvestment == 'number' ? pagingLendingPackages.rows[0].minInvestment : 0,
                maxInvestment: typeof pagingLendingPackages.rows[0].maxInvestment == 'number' ? pagingLendingPackages.rows[0].maxInvestment : 0,
            })
            console.log(this.state);
        })


    }

    componentDidMount() {
    }

    // componentDidMount(){
    //    this.setState({
    //        dataPackage: LendingPackageService.getLendingPackage()

    //    })
    //    console.log(this.state.dataPackage)


    // }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#181f29' }}>
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>INVEST</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={styles.textLabel}>CHOOSE ONE PACKAGE</Text>
                        </View>

                        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            {this.state.packages.map((item: any) => item._id == this.state.packageID ?
                                <Package
                                    package={item}
                                    setSelection={this.state.packageSelected}
                                    isSelected={() => {
                                        this.setState({
                                            packageSelected: this.state.packageSelected,
                                            minInvestment: item.minInvestment
                                        })
                                    }}
                                /> :
                                <Package
                                    package={item}
                                    setSelection={!this.state.packageSelected}
                                    isSelected={() => {
                                        this.setState({ packageID: item._id })
                                    }}
                                />
                            )}
                        </ScrollView>

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
                                keyboardType={'number-pad'}
                                style={styles.inputCoin}
                                onChangeText={text => {
                                    this.setState({
                                        initialValue: parseInt(text),
                                    }, () => {
                                        console.log(this.state);
                                        console.log(this.state.initialValue >= this.state.minInvestment);
                                        this.setState({
                                            buttonInvest: (this.state.initialValue >= this.state.minInvestment) && (this.state.initialValue <= this.state.maxInvestment)
                                        })
                                    })

                                }
                                }

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
                                style={this.state.buttonInvest ? styles.buttonActive : styles.buttonInactive}
                                disabled={!this.state.buttonInvest}
                                onPress={() => this.setState({ confirmModal: true })}
                            >
                                <Text style={{
                                    paddingHorizontal: 10, paddingVertical: 6, fontSize: 16,
                                    fontWeight: "700"
                                }}>INVEST</Text>
                            </TouchableOpacity >


                            {/* <Button
                            onPress={() => Alert.alert('Cannot press this one')}
                            title="INVEST"
                            color="#f2c73a"
                            accessibilityLabel="Learn more about this purple button"
                            
                        /> */}



                        </View>








                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.textLabel}>My Investsment</Text>
                        <Separator />
                        <FlatList data={this.state.myInvest}
                            renderItem={({ item }) =>
                                <HistoryDetail
                                    title={item.lendingPackage?.name || "undefined"}
                                    type={true}
                                    typeLabel="AMOUNT"
                                    time={this.getTime(item.createdAt) + "   |   " + this.getDaysLeft(item.createdAt) + "/30 days"}
                                    coin={item.loanAmount || 0}
                                />
                            }
                            keyExtractor={item => item._id != undefined ? item._id : 'null'} />




                    </View>


                </ScrollView>
                <PopupConfirm
                    confirmModal={this.state.confirmModal}
                    hideBtnCancel={false}
                    buttonOK={() => {
                        console.log('button ok')
                        this.invest()
                        this.setState({ confirmModal: false })
                    }}
                    buttonCancel={() => {
                        this.setState({ confirmModal: false })
                        //console.log('cancel');

                    }}
                    title='Confirm'
                    message='Are you sure want to invest?'
                />
            </View>
        )
    }

    getTime = (date: Date | undefined): String => {
        if (date !== undefined) return date.toString().substring(0, 10)
        else return 'null'
    }

    getDaysLeft = (startDate: Date | undefined): number => {
        const currentDate: Date = new Date();
        
        if (startDate) {
            const daysLeft = Math.floor((Date.parse(currentDate.toJSON().substr(0,10)) - Date.parse(startDate.toString().substr(0,10))) / (1000 * 60 * 60 * 24)
            )
            return daysLeft > 30 ? 30 : daysLeft 
        }
        return 0
    }

    profits = (amount: number, getDaysLeft: number, profitsPerDay: number): number => {
        let profit: number = (amount * (1 + profitsPerDay / 100) * getDaysLeft) - amount;
        return Math.ceil(profit);
    }

    invest = () => {
        const lending: LendingModel = {
            lendingPackageId: this.state.packageID,
            loanAmount: this.state.initialValue,
        }
        LendingService.createLending(lending)

    }


    allCoin = () => {
        this.setState({
            initialValue: user.coinBalance
        })


    };

    onChangeText = (text: any) => {




    }
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
        fontWeight: "500"
    },
    buttonActive: {
        backgroundColor: '#f2c73a',
        paddingHorizontal: 10,
        borderRadius: 2,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonInactive: {
        backgroundColor: '#ddd',
        paddingHorizontal: 10,
        borderRadius: 2,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmModalActive: {
        width: '100%', height: '100%', backgroundColor: '#181f29', position: 'absolute', zIndex: 3, justifyContent: 'center', alignItems: 'center'

    },
    confirmModalInactive: {
        display: 'none'

    }


})



type Props = {

}

type State = {
    initialValue: any,
    isSelected: boolean,

    packageSelected: any,
    packageID: any,
    packages: LendingPackage[],
    minInvestment: number,
    maxInvestment: number,
    buttonInvest: boolean,
    confirmModal: boolean,

    myInvest: Array<LendingModel>
}