import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WinBid from '../components/bid-statistic/WinBid';
import LoseBid from '../components/bid-statistic/LoseBid';
import * as color from '../Color'
import { title } from 'process';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductBid from '../components/bid/ProductBid';
import BidStack from './BidStack';
import Referral from './Referral';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class BidScreen extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='Bid' component={BidStack} />
          <Stack.Screen name='Detail' component={Referral} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}