import React from "react";
import { StyleSheet, Image, View, Text, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DoneIcon from "@material-ui/icons/Done";
import * as color from "../Color";

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
const slides: Slide[] = [
  {
    key: 1,
    title: "",
    text: "",
    image: require("../icons/guide_01.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 2,
    title: "",
    text: "",
    image: require("../icons/guide_02.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 3,
    title: "",
    text: "",
    image: require("../icons/guide_03.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 4,
    title: "",
    text: "",
    image: require("../icons/guide_04.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 5,
    title: "",
    text: "",
    image: require("../icons/guide_05.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 6,
    title: "",
    text: "",
    image: require("../icons/guide_06.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: 7,
    title: "",
    text: "",
    image: require("../icons/guide_07.jpg"),
    backgroundColor: "#fff",
  },
];
export default function AppTutorial(props: Props) {
  const _renderNextButton = () => {
    return (
      <View style={[styles.buttonCircle, { backgroundColor: "#0162CB" }]}>
        <ArrowForwardIcon style={{ color: "#fff" }}></ArrowForwardIcon>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={[styles.buttonCircle, { backgroundColor: color.success }]}>
        <DoneIcon style={{ color: "#fff" }} />
      </View>
    );
  };
  return (
    <AppIntroSlider
      renderItem={({ item }: any) => {
        return (
          <View style={{}}>
            <Text>{item.title}</Text>
            <Image style={{ height: "100vh" }} source={item.image} />
            <Text>{item.text}</Text>
          </View>
        );
      }}
      data={slides}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      onDone={() => {
        AsyncStorage.setItem("isShowIntro", "true", () => {});
        props.onDone();
      }}
    />
  );
}

type Props = {
  onDone(): void;
};

type Slide = {
  key: number;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
};
