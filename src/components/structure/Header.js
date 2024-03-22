import React from "react";
import { View, StyleSheet, Platform, Keyboard, Pressable } from "react-native";
import { Image } from "expo-image";
import ExpoConstants from "expo-constants";
import ToggleTheme from "@/features/common/ToggleTheme";

const logoImage = require("assets/logo.png");

const DismissKeyboard = ({ children }) => (
  <Pressable onPress={() => Keyboard.dismiss()}>{children}</Pressable>
);

export default function Header() {
  return (
    <DismissKeyboard>
      <View style={[styles.header]} role="banner">
        <Image
          source={logoImage}
          style={{ width: 120, height: 120 }}
          alt={ExpoConstants.expoConfig.name}
        />
        <ToggleTheme />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "start",
    justifyContent: "center",
    padding: 15,
    position: "relative",
    marginTop: Platform.OS === "web" ? 0 : 24,
  },
});
