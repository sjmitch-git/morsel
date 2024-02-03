import React from "react";
import { View, StyleSheet } from "react-native";
import { H1 } from "@/ui";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <H1>Chat Screen!</H1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
