import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LendingSrceen from './src/screens/LendingScreen';
import ReferralScreen from './src/screens/ReferralScreen';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: '#F0B90B',
  INACTIVE: '#616161',
  ICONSIZE: 25,
  BackgroundColor: '#000'
}


export default class App extends React.Component<Props, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={
            {
              activeTintColor: tabProps.ACTIVE,
              inactiveTintColor: tabProps.INACTIVE,
              style: {
                backgroundColor: tabProps.BackgroundColor
              }
            }
          }
          

        >
          <Tab.Screen
            name="Dashboard"
            component={Login}
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
            name="login"
            component={Home}
            options={
              {

                tabBarLabel: 'login',
                tabBarIcon: ({ focused }) => <Icon name="home"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE} />
              }

            }

          />
          <Tab.Screen
            name="Lending"
            component={LendingSrceen}
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
            component={ReferralScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ focused }) => <Icon name="user"
                size={tabProps.ICONSIZE}
                color={focused ? tabProps.ACTIVE : tabProps.INACTIVE}/>
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
