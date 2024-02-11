import { StyleSheet } from "react-native";
import Constants from "./Constants";

const HeadingStyles = StyleSheet.create({
  h1: {
    fontSize: Constants.h1FontSize,
    fontWeight: "bold",
    marginBottom: Constants.spacingUnit * 2,
    textTransform: "capitalize",
    fontFamily: Constants.fontSansSerif,
  },
  h2: {
    fontSize: Constants.h2FontSize,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: Constants.fontSansSerif,
  },
  h3: {
    fontSize: Constants.h3FontSize,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: Constants.fontSansSerif,
  },
  h4: {
    fontSize: Constants.h4FontSize,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: Constants.fontSansSerif,
  },
});

export default HeadingStyles;
