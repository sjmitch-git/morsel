import { Platform } from "react-native";

import { lighten, darken } from "polished";

import ExpoConstants from "expo-constants";

import Colors from "./Colors";
import Fonts from "./Fonts";

const theme = ExpoConstants.expoConfig.theme;
const opacityModifier = Platform.OS === "web" ? 0.2 : 0.2;

const Constants = {
  // Typography
  baseFontSize: 18,
  baseLineHeight: 24,
  baseTextAlign: "auto",

  // Colors
  darkColor: Colors.black,
  lightColor: Colors.lightestGrey,
  midColor: Colors.midGrey,

  primaryColor: Colors[theme.primary],
  primaryColorLight: lighten(opacityModifier, Colors[theme.primary]),
  primaryColorDark: darken(opacityModifier, Colors[theme.primary]),

  secondaryColor: Colors[theme.secondary],
  infoColorLight: lighten(opacityModifier, Colors[theme.secondary]),
  infoColorDark: darken(opacityModifier, Colors[theme.secondary]),

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
  shimDarkColor: Colors.opaqueDark,

  disabledColor: Colors.midGrey,
  disabledLightColor: Colors.lighterGrey,
  disabledDarkColor: Colors.darkerGrey,
  accentColor: theme.accent,
  focusColor: Colors.cyan,

  activeColor: Colors[theme.active],
  inactiveColor: Colors[theme.inactive],

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
  shadowOpacity: opacityModifier,
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
  buttonFontFamily: Fonts.mono,

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
  headingOpacity: opacityModifier,
  headingFontWeight: 700,
  headingTextTransform: "uppercase",

  // icons
  iconSize: 30,
  iconSizeSmall: 24,
  iconSizeLarge: 36,
  iconSizeXLarge: 42,
};

export default Constants;
