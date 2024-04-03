import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ButtonStyles } from "@/styles";

const Button = ({ onPress, label, state, size = "md", disabled }) => {
  const [isPressed, setIsPressed] = useState(false);
  const labelColor = state ? ButtonStyles.labelLight.color : ButtonStyles.labelDark.color;

  const baseStyle = [
    ButtonStyles.button,
    { paddingHorizontal: ButtonStyles[size].paddingHorizontal },
    { paddingVertical: ButtonStyles[size].paddingVertical },
    { borderRadius: ButtonStyles[size].borderRadius },
  ];

  const getButtonStyle = () => {
    if (disabled) {
      return [...baseStyle, ButtonStyles.disabledButton];
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
      <Text
        style={[
          ButtonStyles.label,
          {
            color: disabled ? ButtonStyles.disabledButton.color : labelColor,
            fontSize: ButtonStyles[size].fontSize,
            fontFamily: ButtonStyles.fontFamily,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { Button };
