import * as React from "react";
import { View, StyleSheet, RefreshControl, AppRegistry, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeRouter, Route, Link } from "react-router-native";
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
import Loadding from "./src/screens/Loadding";
import Bid from "./src/screens/Bid";
import { config } from "./src/config/Config";
import { ConfigService } from "./src/services/ConfigService";
import InfoBank from "./src/screens/InfoBank";



const MyTransitionSpec = {
  duration: 1000,
  // easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  // timing: Animated.timing,
};

const scenes = Actions.create(
  <Scene key="root" duration={4}>
    <Scene key= "infoBank" component={InfoBank} hideNavBar={true} />
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="home" component={PageHome} hideNavBar={true}/>
    <Scene key="enterPhone" component={EnterYourPhone} hideNavBar={true} />
    <Scene key="confirmOTP" component={ConfirmOTP} hideNavBar={true} />
    <Scene key="password" component={SetPassWord} hideNavBar={true} />
    <Scene key="bid" component={Bid} hideNavBar={true} />
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
    // console.log(`env is ${process.env.EXPO_NODE_ENV}`)
  }
  componentDidMount(){
    ConfigService.getConfig();
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

  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});





// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link
//           to="/about"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>About</Text>
//         </Link>
//         <Link
//           to="/topics"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       {/* <Route exact path="/" component={Home} />
//       <Route path="/about" component={PageHome} />
//       <Route path="/topics" component={Login} /> */}
//     </View>
//   </NativeRouter>
// );

// const styles = StyleSheet.create({

// });

// AppRegistry.registerComponent("lendinng-app", () => App);