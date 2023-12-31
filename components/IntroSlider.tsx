import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default function IntroSlider() {
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image source={item.image} />
        <Text>{item.text}</Text>
      </View>
    );
  };

  return <AppIntroSlider renderItem={_renderItem} data={slides} />;
}
