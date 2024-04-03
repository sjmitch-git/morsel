import React from "react";
import { View, StyleSheet, Keyboard, Pressable, Platform } from "react-native";
import { H1 } from "@/ui";
import Compose from "@/features/messenger/components/Compose";

const handleBlur = () => {
  if (Platform.OS === "web") return;
  Keyboard.dismiss();
};

const DismissKeyboard = ({ children }) => (
  <Pressable onPress={() => handleBlur()}>{children}</Pressable>
);

const ComposeScreen = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <H1>Send Message</H1>
        <Compose />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    position: "static",
  },
});

export default ComposeScreen;
