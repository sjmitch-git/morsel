import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ButtonStyles, Constants } from "@/styles";

const Button = ({ onPress, label, state, disabled }) => {
  const [isPressed, setIsPressed] = useState(false);
  const labelColor = state ? ButtonStyles.labelLight.color : ButtonStyles.labelDark.color;

  const getButtonStyle = () => {
    const baseStyle = [ButtonStyles.button];

    if (disabled) {
      return [ButtonStyles.button, ButtonStyles.disabledButton];
    }
    switch (state) {
      case "primary":
        return [...baseStyle, ButtonStyles.primaryButton];
      case "secondary":
        return [...baseStyle, ButtonStyles.secondaryButton];
      case "info":
        return [...baseStyle, ButtonStyles.infoButton];
      case "warning":
        return [...baseStyle, ButtonStyles.warningButton];
      case "success":
        return [...baseStyle, ButtonStyles.successButton];
      case "danger":
        return [...baseStyle, ButtonStyles.dangerButton];
      default:
        return [...baseStyle, ButtonStyles.defaultButton];
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
        ...getButtonStyle(),
        pressed || isPressed ? ButtonStyles.pressedButton : null,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      role="button"
    >
      <Text style={[ButtonStyles.label, { color: labelColor }]}>{label}</Text>
    </Pressable>
  );
};

export { Button };
