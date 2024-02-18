import Colors from "./Colors";
import Fonts from "./Fonts";

const Constants = {
  // Typography
  baseFontSize: 18,
  baseLineHeight: 24,
  baseTextAlign: "auto",

  // Colors
  darkColor: Colors.darkestGrey,
  lightColor: Colors.lightestGrey,

  primaryColor: Colors.purple,
  primaryColorLight: Colors.lightPurple,
  primaryColorDark: Colors.deepPurple,

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
  accentColor: Colors.yellow,
  focusColor: Colors.cyan,

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

  // Headings
  h1FontSize: 36,
  h2FontSize: 30,
  h3FontSize: 24,
  h4FontSize: 18,
};

export default Constants;
