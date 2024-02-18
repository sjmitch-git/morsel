import React from "react";
import { Button } from "@/ui";

const SendPreset = ({ label, state, setNewMessage, size = "md" }) => {
  const handlePress = () => {
    setNewMessage(label);
  };

  return <Button onPress={handlePress} label={label} state={state} size={size} />;
};

export default SendPreset;
