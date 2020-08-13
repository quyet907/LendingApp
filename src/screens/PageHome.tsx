import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import ConfirmOTP from "../screens/ConfirmOTP"
import EnterYourPhone from "../screens/EnterYourPhone"
import LendingScreen from "../screens/LendingScreen"
import Login from "../screens/Login"
import ReferralScreen from "../screens/ReferralScreen"
import setPassWord from "../screens/SetPassWord"
import SignUp from "../screens/SignUp"
import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux';

const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: '#F0B90B',
  INACTIVE: '#616161',
  ICONSIZE: 25,
  BackgroundColor: '#000'
}


export default class PageHome extends React.Component<Props, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    return (

          <NavigationContainer >
        <Tab.Navigator
          tabBarOptions={
            {
              activeTintColor: tabProps.ACTIVE,
              inactiveTintColor: tabProps.INACTIVE,
              style: {
                backgroundColor: tabProps.BackgroundColor,

              }
            }
          }
        >

          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={
              {
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ focused }) => <Icon name="home"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE} />
              }

            }

          />
           

          <Tab.Screen
            name="Lending"
            component={LendingScreen}
            options={{
              tabBarLabel: 'Lending',
              tabBarIcon: ({ focused }) => <Icon name="dollar"
                size={tabProps.ICONSIZE}
                color={focused ? tabProps.ACTIVE : tabProps.INACTIVE} />
            }

            }
          />
          <Tab.Screen
            name="Referral"
            component={ReferralScreen}
            options={{
              tabBarLabel: 'Referral',
              tabBarIcon: ({ focused }) => <Icon name="users"
                size={tabProps.ICONSIZE}
                color={focused ? tabProps.ACTIVE : tabProps.INACTIVE} />
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Login}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ focused }) => <Icon name="user"
                size={tabProps.ICONSIZE}
                color={focused ? tabProps.ACTIVE : tabProps.INACTIVE} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

    );
  }

}

type Props = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});