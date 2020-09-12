import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WinBid from '../components/bid-statistic/WinBid';
import LoseBid from '../components/bid-statistic/LoseBid';
import * as color from '../Color'
import { title } from 'process';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductBid from '../components/bid/ProductBid';
import ListBidComming from './ListBidComming';
import ListBidding from './ListBidding';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class BidStack extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: {backgroundColor: color.primary},
                    activeTintColor: '#fff',
                    style: { backgroundColor: color.background }
                }}>
                <Tab.Screen name='Doing' component={ListBidding} options={{ tabBarLabel: 'Doing' }} />
                <Tab.Screen name='Coming' component={ListBidComming} options={{ tabBarLabel: 'Coming' }} />
            </Tab.Navigator>

        )
    }
}