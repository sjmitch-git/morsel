import { StyleSheet } from "react-native";
import Constants from "./Constants";

const baseStyles = {
  fontWeight: Constants.headingFontWeight,
  marginBottom: Constants.spacingUnit * 2,
  textTransform: Constants.headingTextTransform,
  fontFamily: Constants.fontMono,
};

const HeadingStyles = StyleSheet.create({
  h1: {
    fontSize: Constants.h1FontSize,
    ...baseStyles,
  },
  h2: {
    fontSize: Constants.h2FontSize,
    ...baseStyles,
  },
  h3: {
    fontSize: Constants.h3FontSize,
    ...baseStyles,
  },
  h4: {
    fontSize: Constants.h4FontSize,
    ...baseStyles,
  },
});

export default HeadingStyles;
