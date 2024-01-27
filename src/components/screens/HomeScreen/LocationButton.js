import React from "react";
import { getUserLocation, userLocationMessage } from "@/services/userLocation.service";
import { morseCodeEncode, morseCodeDecode } from "@/services/morseCode.service";
import { Button } from "@/ui";

const LocationButton = () => {
  const handlePress = async () => {
    try {
      const coordinates = await getUserLocation();
      const message = userLocationMessage(coordinates.latitude, coordinates.longitude);
      console.log(message);
      console.log(morseCodeEncode(message));
      console.log(
        morseCodeDecode(
          "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ..... ...-- .-.-.- ....- ..... ....- ....- ...-- ---.. ....- --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- ..--- .-.-.- --... ..--- -.... ..--- ----. --... -...."
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onPress={handlePress} label="Send my Location" primary="primary" />;
};

export default LocationButton;
