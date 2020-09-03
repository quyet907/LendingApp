import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyBidWin from '../components/bid-history-components/MyBidWin';
import MyBidLost from '../components/bid-history-components/MyBidLost';
import * as color from '../Color'
const Tab = createMaterialTopTabNavigator();

export default class HistoryBidScreen extends React.Component {
    render () {
      return (
        <Tab.Navigator  
        tabBarOptions={{
          activeTintColor: '#fff',
          style: { backgroundColor: color.dark },
          indicatorStyle: {
            backgroundColor: color.primary
          }
        }}>
          <Tab.Screen name='Win bid' component={MyBidWin} />
          <Tab.Screen name='Lost bid' component={MyBidLost} />
        </Tab.Navigator>
      )
    }
  }