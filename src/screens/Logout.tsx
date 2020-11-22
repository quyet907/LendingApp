import React, { Component } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking
} from "react-native";
import myStyle from "../style";
import { UserService } from "../services/UserService";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Color from "../Color";
import { ScreenName } from "./ScreenName";
import I18n from "../i18n/i18n";
import { BaseUserWithJwt } from "@Core/model/user/BaseUser";
import { useIsFocused } from "@react-navigation/native";
import AppTutorialScreen from "./AppTutorialScreen";
import AppTutorial from "./AppTutorial";

const sizeIcon = 20;

class Logout extends Component<Props, State> {
  avtDefault =
    "https://i.picsum.photos/id/199/1000/500.jpg?hmac=FK68A1s1J9x0AXSbNfbsgWwUe80fJDlvGRQ5J0IvMAU";
  constructor(props: any) {
    super(props);
    this.state = {
      thisUser: {},
      avtURL: "",
      isDisplayTutorial: false,
    };
  }

  componentWillReceiveProps(prev: Props) {
    if (prev.isFocused) {
      this.getDataToState();
    }
  }

  componentDidMount() {
    this.getDataToState();
  }

  render() {
    return this.state.isDisplayTutorial ? (
      <AppTutorial
        onDone={() => {
          this.setState({ isDisplayTutorial: false });
        }}
        isFullHeight={false}
      ></AppTutorial>
    ) : (
      <View style={[myStyle.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.contentHeader]}>
            {I18n.t("screens.profile.profileTitle")}
          </Text>
        </View>

        <View style={[myStyle.row, styles.layoutAccout]}>
          <View style={[styles.containerAvt]}>
            <Image
              style={[styles.imgAvt]}
              source={{
                uri:
                  this.state.avtURL ||
                  "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg",
              }}
            />
          </View>
          <View style={{ justifyContent: "space-around", height: "100%" }}>
            <Text style={[styles.contentAccount]}>
              {this.state.thisUser.username}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() =>
              this.props.navigation.navigate(ScreenName.EditProfile, {
                thisUser: this.state.thisUser,
              })
            }
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.profileTabName")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => this.props.navigation.navigate(ScreenName.infoBank)}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.bankInfo")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => this.props.navigation.navigate(ScreenName.ListBid)}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"users"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.bid")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() =>
              this.props.navigation.navigate(ScreenName.BidStatistic)
            }
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"history"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>
            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.bidHistories")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => this.props.navigation.navigate(ScreenName.bidHistory)}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>
              Lịch sử đấu giá
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => this.props.navigation.navigate(ScreenName.Coupon)}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.coupon")}
            </Text>
          </TouchableOpacity>

          


          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => {
              this.setState({ isDisplayTutorial: true });
            }}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>Hướng dẫn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/biddiii');
            }}
          >
            <View style={styles.containerIcon}>
              <FontAwesome5
                name={"gift"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>

            <Text style={[styles.contentFuture]}>Liên hệ</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 12 }}>
          <TouchableOpacity
            style={[myStyle.row, styles.layoutFeature]}
            onPress={() => {
              UserService.setJWT("").then((res) => {
                Actions.home();
              });
            }}
          >
            <View style={styles.containerIcon}>
              <FontAwesome
                name={"sign-out"}
                size={sizeIcon}
                color={Color.primary}
              />
            </View>
            <Text style={[styles.contentFuture]}>
              {I18n.t("screens.profile.logout")}
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={[styles.buttonLogout]}>
            <Text style={[styles.contentButtonLogout]}>Logout</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  getDataToState = () => {
    UserService.getMe().then((res) => {
      if (res != null) {
        if (res.username != null) {
          this.setState({
            thisUser: res,
            avtURL: res.avatar || "",
          });
        }
      }
    });
  };
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 17,
    paddingBottom: 15,
    margin: 2,
    // backgroundColor : Color.background,
  },
  contentHeader: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
  layoutAccout: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    // justifyContent: "center",
    // borderRadius: 5,
    backgroundColor: Color.background,
    borderBottomWidth: 1,
    // borderColor: Color.inactive,
  },
  layoutFeature: {
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    // justifyContent: "center",
    // borderRadius: 5,
    backgroundColor: Color.background,
    borderBottomWidth: 1,
    // borderColor: Color.inactive,
  },
  contentAccount: {
    color: "white",
    paddingLeft: 17,
    fontSize: 16,
    fontWeight: "bold",
  },
  contentFuture: {
    textTransform: "capitalize",
    color: "white",
    // paddingLeft: 17,
    fontSize: 16,
  },
  buttonLogout: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.primary,
    margin: 20,
  },
  contentButtonLogout: {
    fontSize: 16,
    color: Color.primary,
    textTransform: "uppercase",
  },
  containerAvt: {
    borderRadius: 50,
    width: 55,
    height: 55,
    borderWidth: 0,
    borderColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  imgAvt: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  containerIcon: {
    width: 37,
  },
});

type Props = {
  navigation: any;
  isFocused: boolean;
};

type State = {
  thisUser: BaseUserWithJwt;
  avtURL: string;
  isDisplayTutorial: boolean;
};

export default function (props: Props) {
  const isFocused = useIsFocused();

  return <Logout {...props} isFocused={isFocused} />;
}
