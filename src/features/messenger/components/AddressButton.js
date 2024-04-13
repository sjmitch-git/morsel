import React, { useState } from "react";
import { getUserLocation, getAddress } from "@/services/userLocation.service";
import { Button } from "@/ui";

const AddressButton = ({ setNewMessage, label = "My Address", state, size }) => {
  const [errorMsg, setErrorMsg] = useState(null);

  const handlePress = async () => {
    try {
      const location = await getUserLocation();
      const montblanc = {
        latitude: 45.833496666,
        longitude: 6.858996564,
      };
      const mock = montblanc;
      console.log(location);
      let { latitude, longitude } = mock;
      try {
        let addressResponse = await getAddress(latitude, longitude);
        console.log(addressResponse);
        setNewMessage(`ADDRESS: ${addressResponse}`);
      } catch (error) {
        setErrorMsg("Error fetching address: " + error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return <Button onPress={handlePress} label={label} state={state} size={size} />;
};

export default AddressButton;
