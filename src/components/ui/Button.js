import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { globalStyles, colors } from "@/themes";

const Button = ({ onPress, label, state }) => {
  const [isPressed, setIsPressed] = useState(false);
  const getButtonStyle = () => {
    switch (state) {
      case "primary":
        return [globalStyles.button, styles.primaryButton];
      case "secondary":
        return [globalStyles.button, styles.secondaryButton];
      default:
        return [globalStyles.button, styles.primaryButton];
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        ...getButtonStyle(),
        pressed || isPressed ? styles.pressedButton : null,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  pressedButton: {
    opacity: 0.8, // Change the opacity when pressed
  },
  label: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;
