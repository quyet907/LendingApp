import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  AsyncStorage,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DoneIcon from "@material-ui/icons/Done";
import * as color from "../Color";
import { ListItemText } from "@material-ui/core";
import _ from "lodash";

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
  const [isEndOfSlide, setIsEndOfSlide] = useState(false);
  const { width, height } = Dimensions.get("window");
  let slider = useRef();

  const debounceOnChangePage = useCallback(
    _.debounce((page: number) => {
      console.log(page);
      if (slider) slider.goToSlide(page);
    }, 300),
    []
  );

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
      style={{ height: "100%" }}
      renderItem={({ item }: any) => {
        return (
          <View style={{ backgroundColor: "#1F2837" }}>
            <Text>{item.title}</Text>
            <Image
              resizeMode="contain"
              style={{
                height: props.isFullHeight ? "100vh" : "calc(100vh - 48px)",
              }}
              source={item.image}
            />
            <Text>{item.text}</Text>
          </View>
        );
      }}
      data={slides}
      renderDoneButton={_renderDoneButton}
      renderNextButton={isEndOfSlide ? _renderDoneButton : _renderNextButton}
      onDone={() => {
        AsyncStorage.setItem("isShowIntro", "true", () => {});
        props.onDone();
      }}
      onSlideChange={(a, b) => {
        console.log(`${a} ${b}`);
        // if (index == slides.length - 1) setIsEndOfSlide(true);
      }}
      onScroll={(event) => {
        const { x } = event.nativeEvent.contentOffset;
        const currentWidth = width < 500 ? width : 500;
        const indexOfNextScreen = Math.floor(x / (currentWidth - 50));
        debounceOnChangePage(indexOfNextScreen);
      }}
      ref={(ref) => {
        if (ref) slider = ref;
      }}
    />
  );
}

type Props = {
  onDone(): void;
  isFullHeight?: boolean;
};

type Slide = {
  key: number;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
};
