import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyBidWin from '../components/bid-statistic/WinBid';
import MyBidLost from '../components/bid-statistic/LoseBid';
import * as color from '../Color'
const Tab = createMaterialTopTabNavigator();

export default class HistoryBidScreen extends React.Component {
    render () {
      return (
        <Tab.Navigator  
        tabBarOptions={{
          activeTintColor: '#fff',
          style: { backgroundColor: color.background }
        }}>
          <Tab.Screen name='Win bid' component={MyBidWin} />
          <Tab.Screen name='Lost bid' component={MyBidLost} />
        </Tab.Navigator>
      )
    }
  }