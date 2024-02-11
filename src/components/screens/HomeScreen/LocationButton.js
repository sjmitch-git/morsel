import React from "react";
import {
  getUserLocation,
  userLocationMessage,
  storeUserLocation,
} from "@/services/userLocation.service";
import { getMessages, saveMessages, formatMessage } from "@/services/messenger.service";
import { Button } from "@/ui";

const LocationButton = () => {
  const handlePress = async () => {
    try {
      const coordinates = await getUserLocation();
      const message = userLocationMessage(coordinates.latitude, coordinates.longitude);
      storeUserLocation(coordinates.latitude, coordinates.longitude);
      const existingMessages = await getMessages();
      const updatedMessages = [...existingMessages, formatMessage(message)];
      saveMessages(updatedMessages);
      const allMessages = await getMessages();
    } catch (error) {
      console.error(error.message);
    }
  };

  return <Button onPress={handlePress} label="Send my Location" state="primary" />;
};

export default LocationButton;
