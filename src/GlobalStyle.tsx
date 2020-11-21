import { relative } from "path";
import { StyleSheet, ColorPropType } from "react-native";

// const primary = "#f6c400";
// const dark  = "#12151c";
// const success = "";
// const warning = "";
// const aleart = "";

import * as color from "./Color";

export const globalStyles = StyleSheet.create({
  smallTitle: {},
  mediumTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  largeTitle: {},
  bigTitle: {},
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
  button: {
    textTransform: "none",
    fontSize: 14,
    backgroundColor: color.primary,
    color: color.white,
  },
  mb1: {
    marginBottom: 8,
  },
  mb2: {
    marginBottom: 16,
  },
  mt1: {
    marginTop: 8,
  },
  mt2: {
    marginTop: 16,
  },
});
