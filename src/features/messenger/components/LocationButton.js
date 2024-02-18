import React from "react";
import {
  getUserLocation,
  userLocationMessage,
  storeUserLocation,
} from "@/services/userLocation.service";
import { Button } from "@/ui";

const LocationButton = ({ setNewMessage, label = "Get my Location", state, size }) => {
  const handlePress = async () => {
    try {
      const coordinates = await getUserLocation();
      const message = userLocationMessage(coordinates.latitude, coordinates.longitude);
      setNewMessage(message);
      storeUserLocation(coordinates.latitude, coordinates.longitude);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <Button onPress={handlePress} label={label} state={state} size={size} />;
};

export default LocationButton;
