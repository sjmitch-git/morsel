import { StyleSheet } from "react-native";
import Constants from "./Constants";

const FormsStyles = StyleSheet.create({
  input: {
    fontSize: Constants.baseFontSize,
    fontFamily: Constants.fontMono,
    width: "100%",
    borderColor: Constants.borderColor,
    borderWidth: Constants.borderWidth,
    borderRadius: Constants.borderRadius,
    padding: 8,
  },
});

export default FormsStyles;
