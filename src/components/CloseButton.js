import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Constants, lightTheme, darkTheme } from "@/styles";

const CloseButton = ({ onClose, label = "Close", theme = "light" }) => {
  const handlePress = () => {
    onClose();
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text
        style={[
          styles.label,
          { color: theme === "dark" ? lightTheme.textColor : darkTheme.textColor },
        ]}
      >
        {label}
      </Text>
      <Ionicons
        name="close"
        size={Constants.iconSizeXLarge}
        color={theme === "dark" ? lightTheme.textColor : darkTheme.textColor}
      />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    textTransform: "uppercase",
    fontSize: Constants.h4FontSize,
  },
});
