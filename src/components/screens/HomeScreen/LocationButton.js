import React from "react";
import { getUserLocation, userLocationMessage } from "@/services/userLocation.service";
import { Button } from "@/ui";

const LocationButton = () => {
  const handlePress = async () => {
    try {
      const coordinates = await getUserLocation();
      const message = userLocationMessage(coordinates.latitude, coordinates.longitude);
      alert(message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <Button onPress={handlePress} label="Send my Location" state="primary" />;
};

export default LocationButton;
