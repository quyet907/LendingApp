import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import myStyle from "../style";
import LogoLogin from "../components/LogoLogin";
import PopupConfirm from "../components/PopupConfirm";

import { Actions } from "react-native-router-flux";
import { UserService } from "../services/UserService";
import { IncomeService } from "../services/IncomeService";

import { connect } from "react-redux";
import * as action from "../Action/ActionLogin";
import * as actionPopup from "../Action/ActionPopup";

class Login extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get("ref");
    if (ref) {
      this.props.onReferrals(ref);
    }

    UserService.getJWT().then((res) => {
      if (res) {
        Actions.home();
      }
    });
  }

  checkLogin = () => {
    var user = this.state.user;
    var password = this.state.password;
    let getJwtToken = UserService.login(user, password).then((infoLogin) => {
      if (infoLogin.jwt === undefined) {
        actionPopup.showMessage("User or password is incorrect!");
      } else {
        UserService.setJWT(infoLogin.jwt).then((res) => {
          Actions.home();
        });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={[myStyle.container, { alignItems: "center" }]}
      >
        <View style={[myStyle.flex2]}>
          <LogoLogin></LogoLogin>
        </View>

        <View style={[myStyle.flex4, myStyle.login]}>
          <View style={[]}>
            <TextInput
              value={this.state.user}
              style={[myStyle.inputLogin]}
              selectionColor="red"
              placeholder={"Mobile"}
              keyboardType={"number-pad"}
              maxLength={15}
              onChangeText={(text) => {
                this.setState({ user: text });
              }}
            />
          </View>

          <View>
            <TextInput
              value={this.state.password}
              style={[myStyle.inputLogin]}
              placeholder={"Password"}
              secureTextEntry={true}
              keyboardType={"number-pad"}
              maxLength={32}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>

          <View style={[myStyle.frFotgotPassword]}>
            <TouchableOpacity>
              <Text
                style={{ color: "#F8C400" }}
                onPress={(event) => {
                  this.props.onTypeActon("forgotPassword");
                  Actions.enterPhone();
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[myStyle.frbuttonLogin]}>
            <TouchableOpacity
              style={[myStyle.buttonLogin]}
              activeOpacity={0.7}
              onPress={this.checkLogin}
            >
              <Text style={[myStyle.textButton]}>Login</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[myStyle.row, { marginTop: 10, justifyContent: "center" }]}
          >
            <Text style={[{ marginRight: 10, color: "white" }]}>
              You haven't account?
            </Text>
            <TouchableOpacity
              onPress={(event) => {
                this.props.onTypeActon("signUp");
                Actions.enterPhone();
              }}
            >
              <Text style={[{ color: "#F8C400" }]}>Create new account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

type props = {
  onTypeActon(typeAction: string): void;
  onJWT(JWT: string): void;
  onReferrals(referrals: string): void;
};

type state = {
  user: any;
  password: any;
};

function mapDispatchProps(dispatch: any, props: any) {
  return {
    onTypeActon(typeAction: string) {
      dispatch(action.setTypeAction(typeAction));
    },
    onJWT(JWT: string) {
      dispatch(action.setJWT(JWT));
    },
    onReferrals(referrals: string) {
      dispatch(action.setReferal(referrals));
    },
  };
}

export default connect(null, mapDispatchProps)(Login);
