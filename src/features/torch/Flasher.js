import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Camera } from "expo-camera";

const Flasher = ({ torchOn }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState(0);
  const cameraRef = useRef(null);

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

      requestCameraPermission();

      return () => {
        Camera.defaultProps.flashMode = Camera.Constants.FlashMode.off;
        setHasPermission(null);
      };
    }, [])
  );

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1 }}
      ref={cameraRef}
    />
  );
};

export default Flasher;
