import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LendingScreen from "./Lending";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as color from "../Color";
import LogoutScreen from "./LogoutScreen";
import Referral from "./Referral";
import I18n from "../i18n/i18n";

const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: color.primary,
  INACTIVE: color.inactive,
  ICONSIZE: 20,
  BackgroundColor: color.background_primary,
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
      <NavigationContainer     >
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
            component={Home}
            options={{

              tabBarLabel: I18n.t('dashboardLabel'),
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
              tabBarLabel: I18n.t("lendingLabel"),
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
            component={Referral}
            options={{
              tabBarLabel: I18n.t("refLabel"),
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
              tabBarLabel: I18n.t("profileLabel"),
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
