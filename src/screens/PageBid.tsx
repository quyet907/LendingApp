import React, { Component } from 'react'
import { View } from 'react-native'
import myStyle from "../style"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ListBid from '../components/ListBid';
import Bid from './Bid';
import * as color from "../Color"
const Tab = createMaterialTopTabNavigator();

export default class PageBid extends Component {
    render() {
        return (
            <View style={[{ backgroundColor: color.background, flex: 1 }]}>
                <Tab.Navigator tabBarOptions={{
                        style : {
                            backgroundColor : color.background
                        },
                        activeTintColor: color.primary,
                        inactiveTintColor: color.text,
                        indicatorStyle: {
                            backgroundColor: color.primary,
                        },


                }}>
                    <Tab.Screen name="Doing" component={ListBid} />
                    <Tab.Screen name="Sap" component={ListBid} />
                </Tab.Navigator>
            </View>
        )
    }
}
