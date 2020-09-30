import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HistoryBidScreen from "./HistoryBidScreen";
import Logout from "./Logout";
import * as color from '../Color'
import PageBid from "./PageBid";
import Referral from "./Referral";
import BidStack from "./BidStack";
import ProductBid from "../components/bid/ProductBid";
import { ScreenName } from "./ScreenName";
import Bid from "./Bid";
import Giftcode from "./Coupon";
import Coupon from "./Coupon";
import Profile from "./Profile";
const Stack = createStackNavigator();

export default class LogoutScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
                <Stack.Navigator initialRouteName={ScreenName.Profile}>
                    <Stack.Screen name={ScreenName.Profile} component={Logout} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.EditProfile} component={Profile}
                        options={{
                            title: 'Profile',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: color.background
                            },
                        }}
                    />
                    <Stack.Screen name={ScreenName.ListBid} component={BidStack}
                        options={{
                            title: 'Bid',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: color.background
                            },
                        }}
                    />
                    <Stack.Screen name={ScreenName.BidStatistic} component={HistoryBidScreen}
                        options={{
                            title: 'Bid Statistic',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: color.background
                            },
                        }}

                    />
                    <Stack.Screen name={ScreenName.BidProduct} component={Bid}
                        options={{
                            title: 'Detail',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: color.background
                            },
                        }}
                    />
                    <Stack.Screen name={ScreenName.Coupon} component={Coupon}
                        options={{
                            title: 'Giftcode',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: color.background
                            },
                        }}
                    />

                </Stack.Navigator>
        )
    }
}
type Props = {};

type State = {

};

