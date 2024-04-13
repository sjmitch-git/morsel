import React from "react";
import { View, StyleSheet } from "react-native";
import { H1, P } from "@/ui";

const title = "Morsel";
const subTitle = "Alpha Version";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <H1 style={styles.text}>{title}</H1>
      <P style={styles.text}>{subTitle}</P>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  text: {
    // justifyContent: "center",
  },
});

export default HomeScreen;
