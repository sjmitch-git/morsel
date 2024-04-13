import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Constants } from "@/styles";

const Progress = ({ duration }) => {
  const [progress] = useState(new Animated.Value(0));
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: duration,
      useNativeDriver: false,
    }).start();

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const interpolatedWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const remainingTimeInSeconds = Math.max(0, (duration - currentTime) / 1000);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, { width: interpolatedWidth }]} />
      </View>
      <Text style={styles.progressfeedback}>Sending again in {remainingTimeInSeconds} secs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: "100%",
  },
  barContainer: {
    height: 10,
    backgroundColor: Constants.midColor,
    borderRadius: 5,
  },
  bar: {
    height: 10,
    backgroundColor: Constants.infoColor,
    borderRadius: 5,
  },
  progressfeedback: {
    color: Constants.lightColor,
    fontSize: Constants.h4FontSize,
    paddingTop: Constants.spacingUnit,
    textAlign: "center",
  },
});

export { Progress };
