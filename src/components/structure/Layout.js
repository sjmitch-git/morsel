import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "@/structure/Header";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    flex: 1,
    padding: 15,
  },
});

export default Layout;
