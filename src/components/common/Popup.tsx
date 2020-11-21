import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function Popup(props: Props) {
  return (
    <View style={props.isDisplay ? styles.popup : styles.hidden}>
      <View style={styles.content}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(155, 155, 155,0.8)",
    position: "absolute",
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  hidden: {
    display: "none",
  },
  content: {
    width: "80%",
    backgroundColor: "#12151C",
    maxHeight: "80%",
    padding: 20,
    borderRadius: 4,
  },
});

type Props = {
  isDisplay: boolean;
  onClose?(): void;
  children?: any;
};
