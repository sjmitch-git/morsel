import { StyleSheet } from "react-native";

const baseFontSize = 18;
const baseLineHeight = 24;
const baseTextAlign = "auto";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  baseText: {
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    textAlign: baseTextAlign,
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
  inputFocused: {
    borderColor: "blue", // Change the color as needed
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default globalStyles;
