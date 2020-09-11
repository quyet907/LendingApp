import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Lending from '../../screens/Lending'


const LendingStack = createStackNavigator();

export default class LendingScreen extends React.Component {
  render () {
    return (
      <LendingStack.Navigator>
        <LendingStack.Screen name='Lending' component={Lending} />
      </LendingStack.Navigator>
    )
  }
}
