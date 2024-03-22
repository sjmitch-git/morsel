import React from "react";
import { Text, StyleSheet } from "react-native";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { Constants, lightTheme, darkTheme } from "@/styles";
import { lighten, darken } from "polished";

const AppText = ({ style, children, ...rest }) => {
  const { role } = { ...rest };
  const { isDarkMode } = useDarkMode();
  let textColor = isDarkMode ? darkTheme.textColor : lightTheme.textColor;

  if (role === "heading") {
    textColor = isDarkMode
      ? darken(Constants.headingOpacity, textColor)
      : lighten(Constants.headingOpacity, textColor);
  }

  return (
    <Text style={[styles.appText, { color: textColor }, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  appText: {
    fontFamily: Constants.fontSansSerif,
  },
});

export { AppText };
