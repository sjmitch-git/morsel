import { StyleSheet } from "react-native";
import Constants from "./Constants";

const ButtonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  sm: {
    fontSize: Constants.buttonFontSize * 0.75,
    paddingHorizontal: Constants.buttonPaddingHorizontal * 0.75,
    paddingVertical: Constants.buttonPaddingVertical * 0.75,
    borderRadius: Constants.borderRadius * 0.75,
  },
  md: {
    fontSize: Constants.buttonFontSize,
    paddingHorizontal: Constants.buttonPaddingHorizontal,
    paddingVertical: Constants.buttonPaddingVertical,
    borderRadius: Constants.borderRadius,
  },
  lg: {
    fontSize: Constants.buttonFontSize * 1.25,
    paddingHorizontal: Constants.buttonPaddingHorizontal * 1.25,
    paddingVertical: Constants.buttonPaddingVertical * 1.25,
    borderRadius: Constants.borderRadius * 1.25,
  },
  xl: {
    fontSize: Constants.buttonFontSize * 1.5,
    paddingHorizontal: Constants.buttonPaddingHorizontal * 1.5,
    paddingVertical: Constants.buttonPaddingVertical * 1.5,
    borderRadius: Constants.borderRadius * 1.5,
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
    color: Constants.disabledLightColor,
  },
  label: {
    fontWeight: Constants.buttonFontWeight,
    fontFamily: Constants.buttonFontFamily,
  },
  labelLight: {
    color: Constants.lightColor,
  },
  labelDark: {
    color: Constants.darkColor,
  },
});

export default ButtonStyles;
