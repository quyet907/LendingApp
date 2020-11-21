import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import * as color from "../../Color";

export function Button(props: Props) {
  const getStyleButton = () => {
    if (props.variant == null || props.variant == "container") {
      if (props.color == null || props.color == "primary") {
        return [styles.button, styles.buttonPrimary];
      }
      if (props.color == "secondary") {
        return [styles.button, styles.buttonSecondary];
      }
      if (props.color == "alert") {
        return [styles.button, styles.buttonAlert];
      }
      if (props.color == "warning") {
        return [styles.button, styles.buttonWarning];
      }
    } else {
    }
  };

  return (
    <TouchableOpacity
      style={
        props.fullWidth
          ? getStyleButton()
          : [getStyleButton(), styles.fullWidth]
      }
      onPress={props.onPress}
    >
      <Text style={{ textAlign: "center" }}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    textTransform: "none",
    fontSize: 14,
    backgroundColor: color.primary,
    color: color.dark,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    fontFamily: "sans-serif",
    minWidth: 100,
  },
  fullWidth: { width: "100%" },
  buttonPrimary: {
    backgroundColor: color.primary,
    color: color.dark,
  },
  buttonSecondary: {
    backgroundColor: color.secondary,
    color: color.dark,
  },
  buttonWarning: {
    backgroundColor: color.warning,
    color: color.dark,
  },
  buttonAlert: {
    backgroundColor: color.aleart,
    color: color.dark,
  },
});

type Props = {
  children?: any;
  color?: "primary" | "secondary" | "success" | "warning" | "alert";
  variant?: "container" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onPress?(event: GestureResponderEvent): void;
};
