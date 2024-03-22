import React from "react";
import { View, StyleSheet } from "react-native";
import { H1 } from "@/ui";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <H1>Home Screen!</H1>
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
