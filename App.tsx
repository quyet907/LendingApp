import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LendingSrceen from './screens/LendingScreen';
import ReferralScreen from './screens/ReferralScreen';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();




export default class App extends React.Component<Props, {}>{
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={
              {
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ focused }) => <Icon name="home"
                  size={30}
                  color={focused ? '#147efb' : '#red'} />
              }

            }

          />
          <Tab.Screen
            name="Lending"
            component={LendingSrceen}
            options={{ tabBarLabel: 'Lending' , 
            tabBarIcon: ({ focused }) => <Icon name="dollar"
            size={30}
            color={focused ? '#147efb' : '#red'} />}
          
          }
          />
          <Tab.Screen
            name="Referral"
            component={ReferralScreen}
            options={{ tabBarLabel: 'Referral' ,
            tabBarIcon: ({ focused }) => <Icon name="users"
            size={30}
            color={focused ? '#147efb' : '#red'} />}}
          />

          <Tab.Screen
            name="Profile"
            component={ReferralScreen}
            options={{ tabBarLabel: 'Profile' ,
            tabBarIcon: ({ focused }) => <Icon name="user"
            size={30}
            color={focused ? '#147efb' : '#red'} />}}
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
