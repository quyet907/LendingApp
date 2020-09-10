import React, { Component } from 'react'
import { View } from 'react-native'
import myStyle from "../style"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ListBidComming from '../components/ListBidComming';
import ListBidding from '../components/ListBidding';
import store from "../reducer/store"
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
                    <Tab.Screen name="Doing" component={ListBidding} key={"bidding"} />
                    <Tab.Screen name="Comming" component={ListBidComming} key= {"comming"}/>
                </Tab.Navigator>
            </View>
        )
    }
}
