import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, Clipboard } from 'react-native';
import Separator from '../Separator'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { Referal } from '@Core/model/user/Referal';
import { ReferralService } from '../../services/ReferralService';
import * as color from '../../Color'
import BidDetail from './BidDetail';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
export default class MyBidLost extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.background_primary }}>
                <View style={styles.container2}>
                    {/* <Text style={{ paddingBottom: 15,  fontSize: 17, fontWeight: "500" }}>My Bid</Text>
                    <Separator /> */}

       
                   

                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        backgroundColor: '#1e2126'
    },
    container2: {
        marginTop: 5,
        // paddingHorizontal: 20,
        //borderWidth: 1,
        borderColor: '#868685',
        paddingBottom: 5,
        paddingTop: 10,
        
    },

  

})

type Props = {

}

type State = {
    myReferral: Array<Referal>,
    myID: String
}