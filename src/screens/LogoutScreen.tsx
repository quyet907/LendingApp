import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HistoryBidScreen from "./HistoryBidScreen";
import Logout from "./Logout";
import * as color from "../Color";
import PageBid from "./PageBid";
import Referral from "./Referral";
import BidStack from "./BidStack";
import ProductBid from "../components/bid/ProductBid";
import { ScreenName } from "./ScreenName";
import Bid from "./Bid";
import Giftcode from "./Coupon";
import Coupon from "./Coupon";
import Profile from "./Profile";
import InfoBank from "./InfoBank";
import { Route } from "react-router";
import I18n from "../i18n/i18n";
import ListHistoryBid from "./ListHistoryBid";
import QuestionAndAnswerPage from "./QuestionAndAnswerPage";
const Stack = createStackNavigator();

export default class LogoutScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName={ScreenName.Profile}>
        <Stack.Screen
          name={ScreenName.Profile}
          component={Logout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenName.EditProfile}
          component={Profile}
          options={{
            title: I18n.t("screens.profile.profileTabName"),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
        <Stack.Screen
          name={ScreenName.ListBid}
          component={BidStack}
          options={{
            title: I18n.t("screens.profile.bid"),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
        <Stack.Screen
          name={ScreenName.infoBank}
          component={InfoBank}
          options={{
            title: I18n.t("screens.profile.bankInfo"),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
        <Stack.Screen
          name={ScreenName.BidStatistic}
          component={HistoryBidScreen}
          options={{
            title: I18n.t("screens.profile.bidHistories"),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
        <Stack.Screen
          name={ScreenName.BidProduct}
          component={Bid}
          options={({ route }: Props) => ({
            title: route.params.bidProductName,
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          })}
        />
        <Stack.Screen
          name={ScreenName.Coupon}
          component={Coupon}
          options={{
            title: I18n.t("screens.profile.coupon"),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />

        <Stack.Screen
          name={ScreenName.bidHistory}
          component={ListHistoryBid}
          options={{
            title: "Lịch sử đấu giá",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
        <Stack.Screen
          name={ScreenName.QAs}
          component={QuestionAndAnswerPage}
          options={{
            title: "Hỗ trợ",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}
type Props = {
  route: any;
};

type State = {};
