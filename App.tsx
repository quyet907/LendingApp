import * as React from 'react';
import { View, StyleSheet, Navigator } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ConfirmOTP from './src/screens/ConfirmOTP';
import EnterYourPhone from './src/screens/EnterYourPhone';
import SetPassWord from './src/screens/SetPassWord';

import Icon from 'react-native-vector-icons/FontAwesome';

import PageHome from './src/screens/PageHome';
import {Actions, Scene, Router} from 'react-native-router-flux';

const MyTransitionSpec = ({
    duration: 1000,
    // easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    // timing: Animated.timing,
});


    



const scenes = Actions.create(
    <Scene    key="root">
      <Scene  key="login" component={Login} hideNavBar={true} />
      <Scene  key="enterPhone" component={EnterYourPhone} hideNavBar={true} />
      <Scene  key="signUp" component={EnterYourPhone} hideNavBar={true} />
      <Scene  key="confirmOtp" component={ConfirmOTP} hideNavBar={true} />
      <Scene  key="password" component={SetPassWord} hideNavBar={true} />
      <Scene  key="home" component={PageHome} hideNavBar={true} />
    </Scene>
  );
{/* <Router scenes={scenes}/> */}


const Tab = createBottomTabNavigator();

const tabProps = {
  ACTIVE: '#F0B90B',
  INACTIVE: '#616161',
  ICONSIZE: 25,
  BackgroundColor: '#000'
}

const nav = <PageHome></PageHome>


export default class App extends React.Component<Props, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
        <Router scenes={scenes}/>
        // nav
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