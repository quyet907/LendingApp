import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LendingScreen from "../components/Lending";
import ReferralScreen from "../components/ref-components/Referral";
import Icon from "react-native-vector-icons/FontAwesome5";
import Logout from "./Logout";
import * as color from "../Color";
import MyBid from "../components/bid-history-components/MyBidWin";
import HistoryBidScreen from "../screens/HistoryBidScreen";
import LogoutScreen from "./LogoutScreen";

const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: color.primary,
  INACTIVE: color.inactive,
  ICONSIZE: 25,
  BackgroundColor: color.dark_primary,
};

export default class PageHome extends React.Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      reload: true,
    }
  }

  render() {
    return (
      <NavigationContainer>

        <Tab.Navigator
         
          tabBarOptions={{

            activeTintColor: tabProps.ACTIVE,
            inactiveTintColor: tabProps.INACTIVE,
            style: {
              backgroundColor: tabProps.BackgroundColor,
            },
          }}
        >

          <Tab.Screen
            name="Dashboard"
            component={HistoryBidScreen}
            options={{
              
              tabBarLabel: "Dashboard",
              tabBarIcon: ({ focused }) => (
                
                <Icon
                  name="home"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Lending"
            component={LendingScreen}
            options={{
              tabBarLabel: "Lending",
              tabBarIcon: ({ focused }) => (
                <Icon
    
                  name="dollar-sign"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE}

                />
              ),
            }}
          />
          <Tab.Screen
            name="Referral"
            component={ReferralScreen}
            options={{
              tabBarLabel: "Referral",
              tabBarIcon: ({ focused }) => (
                <Icon

                  name="users"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={LogoutScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ focused }) => (
                <Icon

                  name="user-alt"
                  size={tabProps.ICONSIZE}
                  color={focused ? tabProps.ACTIVE : tabProps.INACTIVE}
                  solid
                />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

type Props = {};
type state = {
  reload: boolean
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
