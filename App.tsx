import * as React from "react";
import { View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/screens/Login";
import ConfirmOTP from "./src/screens/ConfirmOTP";
import EnterYourPhone from "./src/screens/EnterYourPhone";
import SetPassWord from "./src/screens/SetPassWord";

import PageHome from "./src/screens/PageHome";
import { Actions, Scene, Router } from "react-native-router-flux";

import Home from "./src/screens/Home";
import store from "./src/reducer/store";
import { Provider } from "react-redux";
import PopupShow from "./src/components/PopupShow";
import Loadding from "./src/components/Loadding";

require("dotenv").config();

require('dotenv').config();
console.log(process.env)
// const db = require('db')
// db.connect({
//   host: process.env.REACT_APP_USER_API
// }, () => console.log(db.host))




const MyTransitionSpec = {
  duration: 1000,
  // easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  // timing: Animated.timing,
};

const scenes = Actions.create(
  <Scene key="root" duration={4}>
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="home" component={PageHome} hideNavBar={true} />
    <Scene key="enterPhone" component={EnterYourPhone} hideNavBar={true}/>
    <Scene key="confirmOTP" component={ConfirmOTP} hideNavBar={true} />
    <Scene key="password" component={SetPassWord} hideNavBar={true} />
  </Scene>
);

const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: "#202833",
  INACTIVE: "#616161",
  ICONSIZE: 25,
  BackgroundColor: "#202833",
};

export default class App extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PopupShow></PopupShow>
        <Loadding></Loadding>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202833",
    alignItems: "center",
    justifyContent: "center",
  },
});
