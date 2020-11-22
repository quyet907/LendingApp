import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../GlobalStyle";
import Popup from "./common/Popup";
import { Button } from "../components/common/Button";

const url = "https://m.me/106388164626050?ref=lan_dau_vao_app";
export default function PopupGoToFanpage(props: Props) {
  return (
    <Popup isDisplay={props.isDisplay} onClose={props.onClose}>
      <View>
        <Text
          style={[
            globalStyles.mediumTitle,
            globalStyles.mb1,
            globalStyles.textLight,
          ]}
        >
          Phần thưởng tháng 11
        </Text>
        <Text style={[globalStyles.text, globalStyles.textLight]}>
          Có quà ưu đãi tháng 11 dành cho bạn. Mỗi tài khoản sẽ được nhận một
          lần trong tháng này. Nếu bạn chưa nhận thì nhận ngay đi nhé.
        </Text>
        <View style={[styles.viewButtons, globalStyles.mt2]}>
          <Button
            fullWidth={true}
            onPress={() => {
              // Linking.openURL(url);
              window.open(url, "_blank");
              props.onClose();
            }}
          >
            Nhận ngay
          </Button>
          <Button
            fullWidth={true}
            onPress={() => {
              props.onClose();
            }}
          >
            Đã nhận
          </Button>
        </View>
      </View>
    </Popup>
  );
}

type Props = {
  isDisplay: boolean;
  onClose(): void;
};

const styles = StyleSheet.create({
  viewButtons: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
