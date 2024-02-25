import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

const TorchScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [torchOn, setTorchOn] = useState(false);
  const cameraRef = useRef(null);

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
    if (hasPermission) {
      setTorchOn((prevTorchState) => !prevTorchState);

      torchOn
        ? (Camera.defaultProps.flashMode = Camera.Constants.FlashMode.off)
        : (Camera.defaultProps.flashMode = Camera.Constants.FlashMode.torch);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handleToggleTorch}>
        <MaterialIcons
          name={torchOn ? "flashlight-on" : "flashlight-off"}
          size={120}
          color="black"
        />
      </TouchableOpacity>
      <Camera
        style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1 }}
        ref={cameraRef}
      />
    </View>
  );
};

export default TorchScreen;
