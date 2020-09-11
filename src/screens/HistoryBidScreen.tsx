import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WinBid from '../components/bid-statistic/WinBid';
import LoseBid from '../components/bid-statistic/LoseBid';
import * as color from '../Color'
import { title } from 'process';
const Tab = createMaterialTopTabNavigator();

export default class HistoryBidScreen extends React.Component {
    render () {
      return (
        <Tab.Navigator  
        tabBarOptions={{
          activeTintColor: '#fff',
          style: { backgroundColor: color.background }
        }}>
          <Tab.Screen name='WinBid' component={WinBid}  options={{ tabBarLabel: 'Win bid' }}/>
          <Tab.Screen name='LoseBid' component={LoseBid}  options={{ tabBarLabel: 'Lose bid' }}/>
        </Tab.Navigator>
      )
    }
  }