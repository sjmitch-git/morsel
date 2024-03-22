import { lighten, darken } from "polished";

import ExpoConstants from "expo-constants";

import Colors from "./Colors";
import Fonts from "./Fonts";

const theme = ExpoConstants.expoConfig.theme;

const Constants = {
  // Typography
  baseFontSize: 18,
  baseLineHeight: 24,
  baseTextAlign: "auto",

  // Colors
  darkColor: Colors.black,
  lightColor: Colors.lightestGrey,

  primaryColor: Colors[theme.primary],
  primaryColorLight: lighten(0.2, Colors[theme.primary]),
  primaryColorDark: darken(0.2, Colors[theme.primary]),

  secondaryColor: Colors.green,
  infoColorLight: Colors.lightGreen,
  infoColorDark: Colors.deepGreen,

  infoColor: Colors.blue,
  infoColorLight: Colors.lightBlue,
  infoColorDark: Colors.deepBlue,

  successColor: Colors.green,
  successColorLight: Colors.lightGreen,
  successColorDark: Colors.deepGreen,

  warningColor: Colors.orange,
  warningColorLight: Colors.lightOrange,
  warningColorDark: Colors.deepOrange,

  dangerColor: Colors.red,
  dangerColorLight: Colors.lightRed,
  dangerColorDark: Colors.deepRed,

  backdropColor: Colors.opaqueDark,
  shimColor: Colors.opaque,
  shimLightColor: Colors.opaqueLight,

  disabledColor: Colors.midGrey,
  disabledLightColor: Colors.lighterGrey,
  disabledDarkColor: Colors.darkerGrey,
  accentColor: Colors.yellow,
  focusColor: Colors.cyan,

  activeColor: theme.active,
  inactiveColor: theme.inactive,

  // Spacing
  spacingUnit: 8,
  paddingUnit: 16,

  // Border
  borderColor: Colors.midGrey,
  borderWidth: 1,
  borderRadius: 5,

  // Shadows
  shadowColor: Colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,

  // Fonts
  fontSansSerif: Fonts.sans,
  fontSerif: Fonts.serif,
  fontMono: Fonts.mono,

  // Buttons
  buttonBorderRadius: 20,
  buttonPaddingHorizontal: 20,
  buttonPaddingVertical: 10,
  buttonFontSize: 18,
  buttonFontWeight: 600,

  // Forms
  inputHeight: 40,
  inputFontSize: 16,
  inputPaddingHorizontal: 10,
  inputFocusColor: theme.active,

  // Headings
  h1FontSize: 36,
  h2FontSize: 30,
  h3FontSize: 24,
  h4FontSize: 18,
  headingOpacity: 0.2,
  headingFontWeight: 700,
  headingTextTransform: "capitalize",

  // icons
  iconSize: 30,
  iconSizeSmall: 24,
  iconSizeLarge: 36,
};

export default Constants;
