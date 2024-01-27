import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LocationButton from "@/components/screens/HomeScreen/LocationButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen!</Text>
      <LocationButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
