import React from "react";
import { View, StyleSheet } from "react-native";
import Compose from "@/features/messenger/components/Compose";
import { H1 } from "@/ui";

const ComposeScreen = () => {
  return (
    <View style={styles.container}>
      <H1>Compose Screen!</H1>
      <Compose />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
});

export default ComposeScreen;
