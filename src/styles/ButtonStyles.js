import { StyleSheet } from "react-native";
import Constants from "./Constants";

const ButtonStyles = StyleSheet.create({
  button: {
    borderRadius: Constants.buttonBorderRadius,
    paddingHorizontal: Constants.buttonPaddingHorizontal,
    height: Constants.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultButton: {
    backgroundColor: Constants.lightColor,
    borderWidth: Constants.borderWidth,
    borderColor: Constants.borderColor,
  },
  primaryButton: {
    backgroundColor: Constants.primaryColor,
  },
  secondaryButton: {
    backgroundColor: Constants.secondaryColor,
  },
  infoButton: {
    backgroundColor: Constants.infoColor,
  },
  warningButton: {
    backgroundColor: Constants.warningColor,
  },
  successButton: {
    backgroundColor: Constants.successColor,
  },
  dangerButton: {
    backgroundColor: Constants.dangerColor,
  },
  pressedButton: {
    opacity: 0.8,
  },
  disabledButton: {
    backgroundColor: Constants.disabledColor,
  },
  label: {
    fontSize: Constants.buttonFontSize,
    fontWeight: Constants.buttonFontWeight,
  },
  labelLight: {
    color: Constants.lightColor,
  },
  labelDark: {
    color: Constants.darkColor,
  },
});

export default ButtonStyles;
