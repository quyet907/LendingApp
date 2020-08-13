import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Referral from '../components/RefComponent/Referral'



const LendingStack = createStackNavigator();

export default class ReferralScreen extends React.Component {
  render () {
    return (
      <LendingStack.Navigator>
        <LendingStack.Screen name='Referral' component={Referral} />
      </LendingStack.Navigator>
    )
  }
}
