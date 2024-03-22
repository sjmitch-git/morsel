import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Constants, lightTheme, darkTheme } from "@/styles";
import { useDarkMode } from "@/contexts/DarkModeContext";

const ToggleTheme = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleToggle = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <Pressable style={styles.toggleButton} onPress={handleToggle}>
      <Ionicons
        name={isDarkMode ? "moon" : "sunny-outline"}
        size={Constants.iconSize}
        color={theme.textColor}
      />
    </Pressable>
  );
};

export default ToggleTheme;

const styles = StyleSheet.create({
  toggleButton: {
    padding: Constants.spacingUnit,
    position: "absolute",
    right: 10,
    top: 10,
  },
});
