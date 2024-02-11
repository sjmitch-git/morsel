import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 15,
  },
});

export default Layout;
