import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "@/styles";

const size = 120;

const Torch = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [torchOn, setTorchOn] = useState(false);
  const [flashMode, setFlashMode] = useState(0);
  const cameraRef = useRef(null);

  const { isDarkMode } = useDarkMode();
  const iconColor = isDarkMode ? darkTheme.textColor : lightTheme.textColor;

  useEffect(() => {
    if (cameraRef) {
      torchOn
        ? (Camera.defaultProps.flashMode = Camera.Constants.FlashMode.torch)
        : (Camera.defaultProps.flashMode = Camera.Constants.FlashMode.off);
      setFlashMode(Camera.defaultProps.flashMode);
    }
  }, [torchOn]);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.flashMode = flashMode;
    }
  }, [flashMode]);

  useFocusEffect(
    React.useCallback(() => {
      const requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      };
      setTorchOn(false);
      requestCameraPermission();

      return () => {
        Camera.defaultProps.flashMode = Camera.Constants.FlashMode.off;
        setHasPermission(null);
        setTorchOn(false);
      };
    }, [])
  );

  const handleToggleTorch = () => {
    setTorchOn((prevTorchState) => !prevTorchState);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "start", alignItems: "center", height: { size } }}>
      <Pressable onPress={handleToggleTorch} style={styles.button}>
        <MaterialIcons
          name={torchOn ? "flashlight-on" : "flashlight-off"}
          size={size}
          color={iconColor}
        />
      </Pressable>
      <Camera
        style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1 }}
        ref={cameraRef}
      />
    </View>
  );
};

export default Torch;

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    width: size,
  },
});
