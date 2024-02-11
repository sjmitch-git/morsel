import { Platform } from "react-native";

const Fonts = {
  sans: Platform.OS === "web" ? "sans-serif" : Platform.OS === "ios" ? "System" : "Roboto",
  serif: Platform.OS === "web" ? "serif" : Platform.OS === "ios" ? "Times New Roman" : "serif",
  mono: Platform.OS === "web" ? "monospace" : Platform.OS === "ios" ? "Courier New" : "monospace",
};

export default Fonts;
