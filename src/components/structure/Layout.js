import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
    width: "100%",
    maxWidth: 480,
    margin: "auto",
  },
});

export default Layout;
